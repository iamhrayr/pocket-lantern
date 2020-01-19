// @flow
import React, { memo } from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components/native';

import Text from 'App/components/Text';

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextInput = styled(TextInput)`
  border-radius: 2;
  border-bottom-color: ${({ theme }) => theme.colors.darkLight};
  border-bottom-width: 1;
  width: 80;
  height: 28;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  label: string,
};

const TextField = ({ label, ...props }: Props): React$Node => (
  <Wrapper>
    <Text color="darkLight">{label}</Text>
    <StyledTextInput {...props} />
  </Wrapper>
);

export default memo<Props>(TextField);
