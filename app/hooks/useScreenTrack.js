import { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';

const useScreenTrack = screen => {
  useEffect(() => {
    (async function() {
      await analytics().setCurrentScreen(screen, screen);
    })();
  }, [screen]);
};

export default useScreenTrack;
