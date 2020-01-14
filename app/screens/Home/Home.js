// @flow
import React from 'react';
import styled from 'styled-components/native';

import Container from 'App/components/Container';
import Options from './Options';
import TorchSwitch from './TorchSwitch';

const StyledOptions = styled(Options)`
  margin-top: 60px;
`;

const Home = (): React$Node => (
  <Container>
    <StyledOptions />
    <TorchSwitch />
  </Container>
);

export default Home;
