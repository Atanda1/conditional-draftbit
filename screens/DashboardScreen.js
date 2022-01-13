import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const DashboardScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const variables = CustomCode.useValues();

  if (variables.id_number) {
    // Main is the name of the navigator to show when the user is authenticated.
    // The name of the navigator may vary depending on your app

    props.navigation.navigate('DashboardScreen');
  }
  const { theme } = props;

  return (
    <ScreenContainer>
      <View pointerEvents={'auto'}>
        <Text style={[styles.Textgu, { color: theme.colors.strong }]}>
          {'Welcome to the dashboard.'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textgu: {
    fontSize: 34,
  },
});

export default withTheme(DashboardScreen);
