// @flow
import React from 'react';
import styled from 'styled-components/native';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { useNavigation } from 'react-navigation-hooks';
import Torch from 'react-native-torch';

import Container from 'App/components/Container';
import Options from './Options';
import TorchSwitch from './TorchSwitch';

const StyledOptions = styled(Options)`
  margin-top: 60px;
`;

const Home = (): React$Node => {
  // const { navigate } = useNavigation();

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
    </Container>
  );
};

export default Home;
