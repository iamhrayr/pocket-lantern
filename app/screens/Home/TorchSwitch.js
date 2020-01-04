// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

import PowerIcon from 'App/assets/icons/power.svg';

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

const TorchSwitch = (): React$Node => {
  return (
    <Wrapper>
      <Circle onPress={() => {}}>
        <PowerIcon style={styles.icon} />
      </Circle>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -10,
  },
});

export default TorchSwitch;
