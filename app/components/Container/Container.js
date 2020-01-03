// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Container = (): React$Node => {
  return (
    <Wrapper>
      <Text>Container Component</Text>
    </Wrapper>
  );
};

export default Container;
