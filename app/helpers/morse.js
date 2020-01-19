import EventEmitter from 'eventemitter3';

import { MORSE_DURATIONS, MORSE_CODES_MAP } from 'App/constants';

const events = new EventEmitter();

class Morse {
  constructor({
    text,
    turnLightOn,
    turnLightOff,
    longDuration = MORSE_DURATIONS.LONG,
    shortDuration = MORSE_DURATIONS.SHORT,
    pauseDuration = MORSE_DURATIONS.PAUSE,
  }) {
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

  getLongDuration() {
    return this.longDuration;
  }

  getShortDuration() {
    return this.shortDuration;
  }

  getPauseDuration() {
    return this.pauseDuration;
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
        await this.sleep(this.turnLightOff, this.getLongDuration());
      } else if (code === '.') {
        this.turnLightOn();
        await this.sleep(this.turnLightOff, this.getShortDuration());
      }

      await this.sleep(this.turnLightOff, this.getPauseDuration());
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

export default Morse;
