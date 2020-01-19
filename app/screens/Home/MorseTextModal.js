import React, { useCallback } from 'react';
import { Modal, Text, TouchableHighlight, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import useScreenTrack from 'App/hooks/useScreenTrack';
import { setMorseText } from 'App/redux/ducks/torch/actions';

const SubmitButton = styled(TouchableHighlight)`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 20;
  align-items: center;
  width: 200;
  margin-top: 20;
`;

const ContentWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 22;
  padding: 20px;
`;

const StyledTextInput = styled(TextInput)`
  height: 40;
  border-color: gray;
  border-width: 1;
  width: 100%;
  margin-top: 10;
`;

const MorseTextModal = ({ isVisible, onClose }): React$Node => {
  useScreenTrack('MORSE_TEXT_EDIT_SCREEN');

  const dispatch = useDispatch();
  const value = useSelector(state => state.torch.morseText);

  const handleTextChange = useCallback(
    text => {
      dispatch(setMorseText(text));
    },
    [dispatch],
  );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onClose}>
      <ContentWrapper>
        <Text>Type message to encode into morse</Text>
        <StyledTextInput onChangeText={handleTextChange} value={value} />

        {!value && <Text>Please fill text field!</Text>}

        <SubmitButton onPress={onClose}>
          <Text style={{ color: '#fff' }}>Close</Text>
        </SubmitButton>
      </ContentWrapper>
    </Modal>
  );
};

export default MorseTextModal;
