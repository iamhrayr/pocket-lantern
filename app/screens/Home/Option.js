// @flow
import React, { useState, useCallback } from 'react';
import type { ComponentType } from 'react';
import styled from 'styled-components/native';

import Text from 'App/components/Text';

const OptionWrapper: ComponentType<{}> = styled.TouchableOpacity`
  width: 50%;
  padding: 16px;
  margin-bottom: 15;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || 'auto'};
`;

const IconWrapper: ComponentType<{}> = styled.View`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.gray2};
  border-radius: 100;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledText: ComponentType<{}> = styled(Text)`
  position: absolute;
  bottom: -5;
`;

type Props = {
  onPress?: Function,
  icon: ComponentType<{}>,
  text: string,
  active?: boolean,
};

const Option = ({ onPress, icon: Icon, text, active }: Props): React$Node => {
  const [height, setHeight] = useState(null);

  const handleOnLayout = useCallback(event => {
    setHeight(event.nativeEvent.layout.width);
  }, []);

  return (
    <OptionWrapper height={height} onLayout={handleOnLayout} onPress={onPress}>
      <IconWrapper active={active}>
        <Icon width="55%" height="55%" />
      </IconWrapper>
      <StyledText color="darkLight">{text}</StyledText>
    </OptionWrapper>
  );
};

export default Option;
