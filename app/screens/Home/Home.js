// @flow
import React, { memo, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks';

import routes from 'App/navigator/routes';
import Container from 'App/components/Container';
import useScreenTrack from 'App/hooks/useScreenTrack';
import Options from './Options';
import TorchSwitch from './TorchSwitch';

const StyledOptions = styled(Options)`
  margin-top: 60px;
`;

const StyledCogButton = styled(TouchableOpacity)`
  margin-left: auto;
  margin-top: 20;
  margin-right: 20;
`;

const Home = (): React$Node => {
  useScreenTrack('HOME_SCREEN');

  const { navigate } = useNavigation();
  const changeRoute = useCallback(() => {
    navigate(routes.SETTINGS);
  }, [navigate]);

  return (
    <Container withPadding={false}>
      <StyledCogButton onPress={changeRoute}>
        <Icon name="cog" size={30} color="#dbdbdb" />
      </StyledCogButton>

      <StyledOptions />
      <TorchSwitch />
    </Container>
  );
};

export default memo<{}>(Home);
