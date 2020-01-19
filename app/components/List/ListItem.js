// @flow
import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import hex2rgba from 'App/helpers/hex2rgba';

const Wrapper = styled(View)`
  padding: 12px 0;
  border-bottom-color: ${({ theme }) => hex2rgba(theme.colors.darkLight, 0.2)};
  border-bottom-width: 1px;
`;

type Props = {
  children: React$Node,
};

const ListItem = ({ children }: Props): React$Node => (
  <Wrapper>{children}</Wrapper>
);

export default memo<Props>(ListItem);
