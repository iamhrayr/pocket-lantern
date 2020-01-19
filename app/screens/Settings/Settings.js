// @flow
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';

import {
  changeSettings,
  resetSettings,
} from 'App/redux/ducks/settings/actions';
import Text from 'App/components/Text';
import Container from 'App/components/Container';
import SwitchRow from 'App/components/SwitchRow';
import TextField from 'App/components/TextField';
import List from 'App/components/List';
import Button from 'App/components/Button';

const Title = styled(Text)`
  font-size: 30;
  margin: 30px 0;
`;

const ButtonGroup = styled.View`
  margin-top: 30px;
`;

const Settings = (): React$Node => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);
  const { goBack } = useNavigation();

  const handleChange = useCallback(
    (val, name: string) => {
      dispatch(changeSettings({ [name]: val }));
    },
    [dispatch],
  );

  const restoreDefault = useCallback(() => {
    dispatch(resetSettings());
  }, [dispatch]);

  const backHandler = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Title size="large" align="center">
        Settings
      </Title>

      <List>
        <List.Item>
          <SwitchRow
            label="Turn the light on when app starts"
            onValueChange={val => handleChange(val, 'turnOnWhenStarts')}
            value={settings.turnOnWhenStarts}
          />
        </List.Item>
        <List.Item>
          <SwitchRow
            label="Turn the light off when app closes"
            onValueChange={val => handleChange(val, 'turnOffWhenCloses')}
            value={settings.turnOffWhenCloses}
          />
        </List.Item>
        <List.Item>
          <SwitchRow
            label="Save the last choosen option"
            onValueChange={val => handleChange(val, 'saveLastChoosenOption')}
            value={settings.saveLastChoosenOption}
          />
        </List.Item>
        <List.Item>
          <TextField
            label="Strobe Interval"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={val => handleChange(+val, 'strobeDuration')}
            value={String(settings.strobeDuration)}
          />
        </List.Item>
        <List.Item>
          <TextField
            label="Morse long signal duration"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={val => handleChange(+val, 'morseLongDuration')}
            value={String(settings.morseLongDuration)}
          />
        </List.Item>
        <List.Item>
          <TextField
            label="Morse short signal duration"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={val => handleChange(+val, 'morseShortDuration')}
            value={String(settings.morseShortDuration)}
          />
        </List.Item>
        <List.Item>
          <TextField
            label="Morse pause duration"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={val => handleChange(+val, 'morsePauseDuration')}
            value={String(settings.morsePauseDuration)}
          />
        </List.Item>
      </List>

      <ButtonGroup>
        <Button color="dark" onPress={backHandler}>
          Back
        </Button>
        <Button color="ghost" onPress={restoreDefault}>
          Restore default
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Settings;
