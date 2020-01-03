// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Container from 'App/components/Container';

const Home = (): React$Node => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigate('Settings');
        }}>
        <Text>nav</Text>
      </TouchableOpacity>

      <Text>Home page</Text>
    </Container>
  );
};

export default Home;
