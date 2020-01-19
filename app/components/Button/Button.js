// @flow
import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.grey};
  border-radius: 20;
  align-items: center;
  margin-top: 5;
  flex-grow: 0;
`;

const StyledText = styled(Text)`
  color: ${({ theme, color }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.medium};
`;

type Color = 'primary' | 'secondary' | 'grey' | 'dark' | 'darkLight' | 'ghost';

type Props = {
  color: Color,
  children: React$Node,
  text: React$Node,
};

const Button = ({ children, ...props }: Props): React$Node => (
  <StyledButton {...props}>
    {typeof children === 'string' ? (
      <StyledText>{children}</StyledText>
    ) : (
      children
    )}
  </StyledButton>
);

export default memo<Props>(Button);
