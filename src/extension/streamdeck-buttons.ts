import { Configschema } from 'configschema';
import SpeedcontrolUtil from 'speedcontrol-util';
import { speak } from './text-to-speech';
import { markDonationAsRead } from './tracker-donations';
import { padTimeNumber } from './util/helpers';
import { get as nodecg } from './util/nodecg';
import obs from './util/obs';
import { donationsToRead, streamDeckData } from './util/replicants';
import sd from './util/streamdeck';

const config = (nodecg().bundleConfig as Configschema);
const sc = new SpeedcontrolUtil(nodecg());
const defaultCommercialText = 'STEP 1\nTWITCH AD';
const defaultTimerText = 'Start\nTimer';

function init(): void {
  // com.esamarathon.streamdeck.timer
  // Controls the text on the buttons.
  sc.timer.on('change', (val) => {
    const buttons = sd.findButtonsWithAction('com.esamarathon.streamdeck.timer');
    buttons.forEach((button) => {
      switch (val.state) {
        case 'stopped':
        default:
          sd.updateButtonText(button.context, defaultTimerText);
          break;
        case 'running':
          sd.updateButtonText(button.context, 'Stop\nTimer');
          break;
        case 'paused':
          sd.updateButtonText(button.context, 'Resume\nTimer');
          break;
        case 'finished':
          sd.updateButtonText(button.context, 'Reset\nTimer');
          break;
      }
    });
  });

  // com.esamarathon.streamdeck.twitchads
  // Set text on commercial timer button depending on state.
  sc.twitchCommercialTimer.on('change', (val) => {
    if (val.secondsRemaining > 0) {
      const minutes = Math.floor(val.secondsRemaining / 60);
      const seconds = Math.floor(val.secondsRemaining - minutes * 60);
      sd.setTextOnAllButtonsWithAction(
        'com.esamarathon.streamdeck.twitchads',
        `Twitch Ad\nPlaying:\n${minutes}:${padTimeNumber(seconds)}`,
      );
    } else {
      sd.setTextOnAllButtonsWithAction(
        'com.esamarathon.streamdeck.twitchads',
        defaultCommercialText,
      );
    }
  });

  sd.on('keyUp', async (data) => {
    // com.esamarathon.streamdeck.timer
    // Controls the nodecg-speedcontrol timer when the button is pressed.
    // Currently the "Stop Timer" state only works if there's only 1 team.
    if (data.action === 'com.esamarathon.streamdeck.timer') {
      switch (sc.timer.value.state) {
        case 'stopped':
        case 'paused':
          sc.startTimer();
          break;
        case 'running':
          sc.stopTimer();
          break;
        case 'finished':
          sc.resetTimer();
          break;
        default:
          // Don't do anything
          break;
      }
    }

    // com.esamarathon.streamdeck.twitchads
    if (data.action === 'com.esamarathon.streamdeck.twitchads'
      && sc.twitchCommercialTimer.value.secondsRemaining <= 0) {
      try {
        await obs.changeScene(config.obs.names.scenes.commercials);
      } catch (err) {
        nodecg().log.warn('[Stream Deck Buttons] Could not run Twitch commercials');
        nodecg().log.debug('[Stream Deck Buttons] Could not run Twitch commercials:', err);
      }
    }

    // com.esamarathon.streamdeck.ttsdonations
    if (data.action === 'com.esamarathon.streamdeck.ttsdonations') {
      const donationIndex = (
        data.payload.settings && data.payload.settings.slot
      ) ? data.payload.settings.slot : 0;
      const donation = donationsToRead.value[donationIndex];
      if (donation) {
        speak(donation);
        markDonationAsRead(donation.id);
      }
    }

    // com.esamarathon.streamdeck.donationread
    if (data.action === 'com.esamarathon.streamdeck.donationread') {
      const donationIndex = (
        data.payload.settings && data.payload.settings.slot
      ) ? data.payload.settings.slot : 0;
      const donation = donationsToRead.value[donationIndex];
      if (donation) {
        markDonationAsRead(donation.id);
      }
    }

    // com.esamarathon.streamdeck.playerhudtrigger-message
    if (data.action.startsWith('com.esamarathon.streamdeck.playerhudtrigger')) {
      const msgBtns = sd
        .findButtonsWithAction('com.esamarathon.streamdeck.playerhudtrigger-message');
      msgBtns.forEach((btn) => {
        sd.updateButtonText(btn.context, 'Message\nTo Read');
      });
      if (streamDeckData.value.playerHUDTriggerType
        && data.action.includes(streamDeckData.value.playerHUDTriggerType)) {
        delete streamDeckData.value.playerHUDTriggerType;
      } else if (data.action.includes('message')) {
        sd.updateButtonText(data.context, '(ACTIVE)\nMessage\nTo Read');
        streamDeckData.value.playerHUDTriggerType = 'message';
      }
    }
  });
}

let initTriggered = false;
sd.on('init', () => {
  // Set default text on buttons.
  sd.setTextOnAllButtonsWithAction('com.esamarathon.streamdeck.timer', defaultTimerText);
  sd.setTextOnAllButtonsWithAction('com.esamarathon.streamdeck.twitchads', defaultCommercialText);

  // Clearing this on initial connection for now for simplicity.
  delete streamDeckData.value.playerHUDTriggerType;

  // Only run this code once every fresh start.
  if (!initTriggered) {
    init();
    initTriggered = true;
  }
});
