// @flow
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme, transparent }) =>
    transparent ? 'transparent' : theme.colors.grey};
  padding: ${({ withPadding }) => (withPadding ? '10px' : 0)};
`;

type Props = {
  transparent: boolean,
  children: React$Node,
  withPadding: boolean,
};

const Container = ({
  transparent,
  withPadding = true,
  children,
}: Props): React$Node => {
  return (
    <Wrapper transparent={transparent} withPadding={withPadding}>
      <StyledSafeAreaView>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {children}
        </ScrollView>
      </StyledSafeAreaView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

Container.defaultProps = {
  transparent: false,
};

export default Container;
