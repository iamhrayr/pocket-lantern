// @flow
import React, { useCallback, useEffect, memo } from 'react';
import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Torch from 'react-native-torch';

import { LIGHT_TYPES } from 'App/constants';
import morse from 'App/helpers/morse';
import strobe from 'App/helpers/strobe';
import PowerIcon from 'App/assets/icons/power.svg';
import useAnalyticsEvent from 'App/hooks/useAnalyticsEvent';

import { torchToggle, torchTurnOff } from 'App/redux/ducks/torch/actions';

const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 140;
    margin-top: auto;
  `}
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

const StyledPowerIcon = styled(PowerIcon)`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.darkLight};
`;

const TorchSwitch = (): React$Node => {
  const dispatch = useDispatch();
  const isTorchActive = useSelector(state => state.torch.isTorchActive);
  const activeOption = useSelector(state => state.torch.activeOption);
  const morseText = useSelector(state => state.torch.morseText);
  const fireEvent = useAnalyticsEvent();

  useEffect(() => {
    const cb = () => dispatch(torchTurnOff());
    morse.addEventListener('finish', cb);

    return () => {
      morse.removeEventListener('finish', cb);
      morse.stop();
    };
  }, [dispatch]);

  const turnOn = useCallback(() => {
    switch (activeOption) {
      case LIGHT_TYPES.MORSE:
        morse.start(morseText);
        fireEvent('MORSE_TURNED_ON');
        break;
      case LIGHT_TYPES.SOS:
        morse.start('sos');
        fireEvent('SOS_TURNED_ON');
        break;
      case LIGHT_TYPES.STROBE:
        strobe.start();
        fireEvent('STROBE_TURNED_ON');
        break;
      case LIGHT_TYPES.TORCH:
        Torch.switchState(true);
        fireEvent('FLASHLIGHT_TURNED_ON');
        break;
    }
  }, [activeOption, fireEvent, morseText]);

  const turnOff = useCallback(() => {
    fireEvent('TURN_OFF_BUTTON_PRESSED');
    strobe.stop();
    morse.stop();
    Torch.switchState(false);
  }, [fireEvent]);

  useEffect(() => {
    isTorchActive ? turnOn() : turnOff();
  }, [isTorchActive, turnOff, turnOn]);

  const handlePowerPress = useCallback(() => {
    fireEvent('TURN_ON_BUTTON_PRESSED');
    dispatch(torchToggle());
  }, [dispatch, fireEvent]);

  return (
    <Wrapper>
      <Circle onPress={handlePowerPress}>
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
