import { useCallback } from 'react';
import analytics from '@react-native-firebase/analytics';

const useAnalyticsEvent = () => {
  const fn = useCallback((...args) => {
    (async function() {
      await analytics().logEvent(...args);
    })();
  }, []);

  return fn;
};

export default useAnalyticsEvent;
