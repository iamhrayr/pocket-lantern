// @flow
import React, { useCallback, useState } from 'react';
import type { ComponentType } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
// import Torch from 'react-native-torch';

import Option from './Option';
import MorseTextModal from './MorseTextModal';

import { setActiveOption } from 'App/redux/ducks/torch/actions';

import MorseIcon from 'App/assets/icons/morse.svg';
import SosIcon from 'App/assets/icons/sos.svg';
import StrobeIcon from 'App/assets/icons/strobe.svg';
import TorchIcon from 'App/assets/icons/torch.svg';

import { LIGHT_TYPES } from 'App/constants';

// type Props = {
//   data: Array<any>,
// };

const data: Array<any> = [
  {
    type: LIGHT_TYPES.TORCH,
    icon: TorchIcon,
  },
  {
    type: LIGHT_TYPES.SOS,
    icon: SosIcon,
  },
  {
    type: LIGHT_TYPES.STROBE,
    icon: StrobeIcon,
  },
  {
    type: LIGHT_TYPES.MORSE,
    icon: MorseIcon,
  },
];

const OptionsWrapper: ComponentType<{}> = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

const Options = (props: any): React$Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const activeOption = useSelector(state => state.torch.activeOption);

  const handleOptionPress = useCallback(
    option => {
      dispatch(setActiveOption(option));
    },
    [dispatch],
  );

  const renderAddon = useCallback(type => {
    if (type === LIGHT_TYPES.MORSE) {
      return <Icon name="font" size={18} />;
    }
  }, []);

  const handleAddonPress = useCallback(type => {
    setModalVisible(true);
  }, []);

  return (
    <>
      <OptionsWrapper {...props}>
        {data.map(item => (
          <Option
            key={item.type}
            icon={item.icon}
            text={item.type}
            active={item.type === activeOption}
            onPress={() => handleOptionPress(item.type)}
            onAddonPress={handleAddonPress}
            addon={renderAddon(item.type)}
          />
        ))}
      </OptionsWrapper>

      <MorseTextModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Options;
