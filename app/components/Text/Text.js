import React from 'react';
import type { ComponentType } from 'react';
import styled, { css } from 'styled-components/native';

type TextSize = 'small' | 'medium' | 'large';
type TextColor = 'primary' | 'secondary' | 'grey' | 'dark' | 'darkLight';

type Props = {
  size: TextSize,
  color: TextColor,
  children: ComponentType<{}>,
};

const StyledText: ComponentType = styled.Text`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color] || theme.colors.primary};
    font-size: ${theme.font[size] || theme.font.medium};
  `}
`;

const Text = ({ children, size, color, ...rest }: Props): React$Node => (
  <StyledText size={size} color={color} {...rest}>
    {children}
  </StyledText>
);

export default Text;
