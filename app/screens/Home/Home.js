// @flow
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity } from 'react-native';
// import { useNavigation } from 'react-navigation-hooks';

import Container from 'App/components/Container';
import Options from './Options';
import TorchSwitch from './TorchSwitch';
import MorseTextModal from './MorseTextModal';

const StyledOptions = styled(Options)`
  margin-top: 60px;
`;

const Home = (): React$Node => {
  // const { navigate } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      {/* <TouchableOpacity
        onPress={() => {
          navigate('Settings');
        }}>
        <Text>nav</Text>
      </TouchableOpacity>
      <Text>Home page</Text> */}

      <StyledOptions />
      <TorchSwitch />
      <MorseTextModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Pres</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
