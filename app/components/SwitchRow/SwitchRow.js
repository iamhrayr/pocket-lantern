// @flow
import * as React from 'react';
import { memo } from 'react';
import { View, Switch } from 'react-native';
import styled from 'styled-components/native';

import Text from 'App/components/Text';

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  label: string,
};

const SwitchRow = ({ label, ...props }: Props): React$Node => {
  return (
    <Wrapper>
      <Text color="darkLight">{label}</Text>
      {/* $FlowFixMe */}
      <Switch {...props} />
    </Wrapper>
  );
};

export default memo<Props>(SwitchRow);
