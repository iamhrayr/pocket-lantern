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
`;

type Props = {
  transparent: boolean,
  children: React$Node,
};

const Container = ({ transparent, children }: Props): React$Node => {
  return (
    <StyledSafeAreaView>
      <Wrapper transparent={transparent}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {children}
        </ScrollView>
      </Wrapper>
    </StyledSafeAreaView>
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
