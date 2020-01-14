// @flow
import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import Container from 'App/components/Container';
import useScreenTrack from 'App/hooks/useScreenTrack';
import Options from './Options';
import TorchSwitch from './TorchSwitch';

const StyledOptions = styled(Options)`
  margin-top: 60px;
`;

const Home = (): React$Node => {
  useScreenTrack('HOME_SCREEN');

  return (
    <Container>
      <StyledOptions />
      <TorchSwitch />
    </Container>
  );
};

export default Home;
