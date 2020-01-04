// @flow
import React, { useCallback } from 'react';
import type { ComponentType } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import Torch from 'react-native-torch';

import Option from './Option';

import { torchActions } from 'App/redux/ducks/torch';

import MorseIcon from 'App/assets/icons/morse.svg';
import SosIcon from 'App/assets/icons/sos.svg';
import StrobeIcon from 'App/assets/icons/strobe.svg';
import TorchIcon from 'App/assets/icons/torch.svg';

import { LIGHT_TYPES } from 'App/constants';

const { setActiveOption } = torchActions;

// type Props = {
//   data: Array<any>,
// };

const data: Array<any> = [
  {
    text: LIGHT_TYPES.TORCH,
    icon: TorchIcon,
  },
  {
    text: LIGHT_TYPES.SOS,
    icon: SosIcon,
  },
  {
    text: LIGHT_TYPES.STROBE,
    icon: StrobeIcon,
  },
  {
    text: LIGHT_TYPES.MORSE,
    icon: MorseIcon,
  },
];

const OptionsWrapper: ComponentType<{}> = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

const Options = (props: any): React$Node => {
  const dispatch = useDispatch();

  const handleOptionPress = useCallback(
    option => {
      dispatch(setActiveOption(option));
    },
    [dispatch],
  );

  const activeOption = useSelector(state => state.torch.activeOption);

  console.log('activeOption', activeOption);

  return (
    <OptionsWrapper {...props}>
      {data.map(item => (
        <Option
          key={item.text}
          icon={item.icon}
          text={item.text}
          active={item.text === activeOption}
          onPress={() => handleOptionPress(item.text)}
        />
      ))}
    </OptionsWrapper>
  );
};

export default Options;
