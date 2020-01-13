import EventEmitter from 'eventemitter3';
import Torch from 'react-native-torch';

import { MORSE_DURATIONS, MORSE_CODES_MAP } from 'App/constants';

const events = new EventEmitter();

class Morse {
  constructor({ text, turnLightOn, turnLightOff }) {
    this._started = false;
    this.turnLightOn = turnLightOn.bind(this);
    this.turnLightOff = turnLightOff.bind(this);
  }

  start(txt) {
    this._started = true;
    this.textToCode(txt);
  }

  stop() {
    this._started = false;
  }

  sleep(fn, ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(fn()), ms);
    });
  }

  encode(txt) {
    if (!txt) {
      throw new Error('text is required');
    }

    let encoded = '';
    const cleanText = txt.trim().toLowerCase();

    for (let char of cleanText) {
      const cleanChar = char.trim();
      const code = MORSE_CODES_MAP[cleanChar];

      if (code) {
        encoded = encoded + ' ' + code;
      }
    }

    return encoded;
  }

  async textToCode(txt) {
    const encoded = this.encode(txt);

    for (let code of encoded) {
      if (!this._started) {
        events.emit('finish');
        return;
      }

      if (code === '_') {
        this.turnLightOn();
        await this.sleep(this.turnLightOff, MORSE_DURATIONS.LONG);
      } else if (code === '.') {
        this.turnLightOn();
        await this.sleep(this.turnLightOff, MORSE_DURATIONS.SHORT);
      }

      await this.sleep(this.turnLightOff, MORSE_DURATIONS.PAUSE);
    }

    events.emit('finish');
  }

  addEventListener(event, fn) {
    events.on(event, fn);
  }

  removeEventListener(event, fn) {
    events.removeListener(event, fn);
  }
}

export default new Morse({
  turnLightOn: () => Torch.switchState(true),
  turnLightOff: () => Torch.switchState(false),
});
