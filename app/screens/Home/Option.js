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

const AddonWrapper: ComponentType<{}> = styled.TouchableOpacity`
  width: 40;
  height: 40;
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  border-radius: 50;
  bottom: 15;
  right: 15;
  align-items: center;
  justify-content: center;
`;

type Props = {
  icon: ComponentType<{}>,
  text: string,
  active?: boolean,
  addon?: React$Node,
  onAddonPress?: Function,
};

const Option = ({
  icon: Icon,
  text,
  active,
  addon,
  onAddonPress,
  ...props
}: Props): React$Node => {
  const [height, setHeight] = useState(null);

  const handleOnLayout = useCallback(event => {
    setHeight(event.nativeEvent.layout.width);
  }, []);

  return (
    <OptionWrapper height={height} onLayout={handleOnLayout} {...props}>
      <IconWrapper active={active}>
        <Icon width="55%" height="55%" />
      </IconWrapper>
      <StyledText color="darkLight">{text}</StyledText>

      {addon && active && (
        <AddonWrapper onPress={onAddonPress}>{addon}</AddonWrapper>
      )}
    </OptionWrapper>
  );
};

export default Option;
