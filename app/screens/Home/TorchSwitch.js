// @flow
import React, { useCallback, useEffect, useRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Torch from 'react-native-torch';

import { LIGHT_TYPES } from 'App/constants';
import Morse from 'App/helpers/morse';
import strobe from 'App/helpers/strobe';
import PowerIcon from 'App/assets/icons/power.svg';

import { torchToggle } from 'App/redux/ducks/torch/actions';

const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    height: 50;
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
`;

const StyledPowerIcon = styled(PowerIcon)`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.darkLight};
`;

const s = strobe();
const morse = new Morse({
  turnLightOn: () => Torch.switchState(true),
  turnLightOff: () => Torch.switchState(false),
});

const TorchSwitch = (): React$Node => {
  const dispatch = useDispatch();
  const isTorchActive = useSelector(state => state.torch.isTorchActive);
  const activeOption = useSelector(state => state.torch.activeOption);

  useEffect(() => {
    const fn = () => {
      alert('finished');
    };

    morse.addEventListener('finish', fn);
    return () => {
      morse.removeEventListener('finish', fn);
      morse.stop();
    };
  }, []);

  const turnOn = useCallback(() => {
    console.log('here?', activeOption);
    switch (activeOption) {
      case LIGHT_TYPES.MORSE:
        morse.start('test');
        break;
      case LIGHT_TYPES.SOS:
        morse.start('sos');
        break;
      case LIGHT_TYPES.STROBE:
        s.start(); // TODO: name fix
        break;
      case LIGHT_TYPES.TORCH:
        Torch.switchState(true);
        break;
    }
  }, [activeOption]);

  const turnOff = useCallback(() => {
    switch (activeOption) {
      case LIGHT_TYPES.MORSE:
      case LIGHT_TYPES.SOS:
        morse.stop();
        break;
      case LIGHT_TYPES.STROBE:
        s.stop(); // TODO: name fix
        break;
      case LIGHT_TYPES.TORCH:
        Torch.switchState(false);
        break;
    }
  }, [activeOption]);

  useEffect(() => {
    isTorchActive ? turnOn() : turnOff();
  }, [isTorchActive, turnOff, turnOn]);

  const handlePowerPress = useCallback(() => {
    dispatch(torchToggle());
  }, [dispatch]);

  return (
    <Wrapper>
      <Circle onPress={handlePowerPress}>
        <StyledPowerIcon style={styles.icon} isActive={isTorchActive} />
      </Circle>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -10,
  },
});

export default memo<{}>(TorchSwitch);
