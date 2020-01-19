import { useCallback } from 'react';
import analytics from '@react-native-firebase/analytics';

const useAnalyticsEvent = () => {
  const fn = useCallback((name, params) => {
    (async function() {
      await analytics().logEvent(name, params);
    })();
  }, []);

  return fn;
};

export default useAnalyticsEvent;
