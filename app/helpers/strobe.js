import Torch from 'react-native-torch';

import { STROBE_DURATION } from 'App/constants';

class Strobe {
  constructor({ duration = STROBE_DURATION }) {
    this._intervalId;
    this._status = true;
    this._duration = duration;
  }

  start() {
    Torch.switchState(this._status);

    this._intervalId = setInterval(() => {
      Torch.switchState(!this._status);
      this._status = !this._status;
    }, this._duration);
  }

  stop() {
    clearInterval(this._intervalId);
  }

  changeDuration(newDuration) {
    this.stop();
    this._duration = newDuration;
    this.start();
  }
}

export default Strobe;
