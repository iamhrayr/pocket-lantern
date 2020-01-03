// @flow
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.colors.grey};
`;

type Props = {
  transparent: boolean,
  children: React$Node,
};

const Container = ({ transparent, children }: Props): React$Node => {
  return <Wrapper transparent={transparent}>{children}</Wrapper>;
};

Container.defaultProps = {
  transparent: false,
};

export default Container;
