import React from 'react';
import type { ComponentType } from 'react';
import styled, { css } from 'styled-components/native';

type TextSize = 'small' | 'medium' | 'large';
type TextColor = 'primary' | 'secondary' | 'grey' | 'dark' | 'darkLight';
type TextAlign = 'left' | 'center' | 'right';

type Props = {
  size: TextSize,
  color: TextColor,
  children: ComponentType<{}>,
  align: TextAlign,
};

const StyledText: ComponentType = styled.Text`
  ${({ theme, size, color, align }) => css`
    color: ${theme.colors[color] || theme.colors.primary};
    font-size: ${theme.font[size] || theme.font.medium};
    text-align: ${align || 'left'};
  `}
`;

const Text = ({ children, size, color, ...rest }: Props): React$Node => (
  <StyledText size={size} color={color} {...rest}>
    {children}
  </StyledText>
);

export default Text;
