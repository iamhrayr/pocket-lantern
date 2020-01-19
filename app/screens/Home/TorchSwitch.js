// @flow
import React, { useCallback, useEffect, useRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Torch from 'react-native-torch';

import { LIGHT_TYPES } from 'App/constants';
import Morse from 'App/helpers/morse';
import Strobe from 'App/helpers/strobe';
import PowerIcon from 'App/assets/icons/power.svg';
import useAnalyticsEvent from 'App/hooks/useAnalyticsEvent';

import { torchToggle, torchTurnOff } from 'App/redux/ducks/torch/actions';

const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 140;
    margin-top: auto;
  `}
`;

const StyledPowerIcon = styled(PowerIcon)`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.darkLight};
`;

const Circle = styled.TouchableOpacity`
  width: 140;
  height: 140;
  border-radius: 100;
  background: ${({ theme }) => theme.colors.dark};
  position: absolute;
  bottom: -25;
  left: 50%;
  margin-left: -70;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const BottomLine = styled.View`
  height: 50;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const TorchSwitch = (): React$Node => {
  const dispatch = useDispatch();
  const isTorchActive = useSelector(state => state.torch.isTorchActive);
  const activeOption = useSelector(state => state.torch.activeOption);
  const morseText = useSelector(state => state.torch.morseText);
  const strobeDuration = useSelector(state => state.settings.strobeDuration);
  const fireEvent = useAnalyticsEvent();
  const morseLongDuration = useSelector(
    state => state.settings.morseLongDuration,
  );
  const morseShortDuration = useSelector(
    state => state.settings.morseShortDuration,
  );
  const morsePauseDuration = useSelector(
    state => state.settings.morsePauseDuration,
  );

  const morseRef = useRef(
    new Morse({
      turnLightOn: () => Torch.switchState(true),
      turnLightOff: () => Torch.switchState(false),
      longDuration: morseLongDuration,
      shortDuration: morseShortDuration,
      pauseDuration: morsePauseDuration,
    }),
  );

  const strobeRef = useRef(
    new Strobe({
      duration: strobeDuration,
    }),
  );

  useEffect(() => {
    morseRef.current.longDuration = morseLongDuration;
    morseRef.current.shortDuration = morseShortDuration;
    morseRef.current.pauseDuration = morsePauseDuration;
  }, [morseLongDuration, morsePauseDuration, morseShortDuration]);

  useEffect(() => {
    strobeRef.current.changeDuration(strobeDuration);
  }, [strobeDuration]);

  useEffect(() => {
    const cb = () => dispatch(torchTurnOff());
    const m = morseRef.current;
    m.addEventListener('finish', cb);

    return () => {
      m.removeEventListener('finish', cb);
      m.stop();
    };
  }, [dispatch]);

  const turnOn = useCallback(() => {
    switch (activeOption) {
      case LIGHT_TYPES.MORSE:
        morseRef.current.start(morseText);
        fireEvent('MORSE_TURNED_ON');
        break;
      case LIGHT_TYPES.SOS:
        morseRef.current.start('sos');
        fireEvent('SOS_TURNED_ON');
        break;
      case LIGHT_TYPES.STROBE:
        strobeRef.current.start();
        fireEvent('STROBE_TURNED_ON');
        break;
      case LIGHT_TYPES.TORCH:
        Torch.switchState(true);
        fireEvent('FLASHLIGHT_TURNED_ON');
        break;
    }
  }, [activeOption, fireEvent, morseText]);

  const turnOff = useCallback(() => {
    strobeRef.current.stop();
    morseRef.current.stop();
    Torch.switchState(false);
  }, []);

  useEffect(() => {
    isTorchActive ? turnOn() : turnOff();
  }, [isTorchActive, turnOff, turnOn]);

  const handlePowerPress = useCallback(() => {
    fireEvent('TOGGLE_BUTTON_PRESSED', { status: isTorchActive });
    dispatch(torchToggle());
  }, [dispatch, fireEvent, isTorchActive]);

  return (
    <Wrapper>
      <Circle
        onPress={handlePowerPress}
        disabled={activeOption === LIGHT_TYPES.MORSE && !morseText}>
        <StyledPowerIcon style={styles.icon} isActive={isTorchActive} />
      </Circle>
      <BottomLine />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -10,
  },
});

export default memo<{}>(TorchSwitch);
