import Torch from 'react-native-torch';

import { STROBE_DURATION } from 'App/constants';

class Strobe {
  constructor() {
    this._intervalId;
    this._status = true;
  }

  start() {
    Torch.switchState(this._status);

    this._intervalId = setInterval(() => {
      Torch.switchState(!this._status);
      this._status = !this._status;
    }, STROBE_DURATION);
  }

  stop() {
    clearInterval(this._intervalId);
  }
}

export default new Strobe();
