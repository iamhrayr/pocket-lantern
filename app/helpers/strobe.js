import Torch from 'react-native-torch';

import { STROBE_DURATION } from 'App/constants';

const strobe = () => {
  let intervalId;
  let status = true;

  return {
    start() {
      Torch.switchState(status);

      intervalId = setInterval(() => {
        Torch.switchState(!status);
        status = !status;
      }, STROBE_DURATION);
    },

    stop() {
      clearInterval(intervalId);
    },
  };
};

export default strobe;
