import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const variables = CustomCode.useValues();
  // to update or modify the value of a global variable

  if (variables.id_number) {
    // Main is the name of the navigator to show when the user is authenticated.
    // The name of the navigator may vary depending on your app

    props.navigation.navigate('DashboardScreen');
  }
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View style={styles.View_7I} pointerEvents={'auto'}>
        <Text style={[styles.TextI3, { color: theme.colors.strong }]}>
          {'Welcome '}
        </Text>
        <ButtonSolid
          onPress={() => {
            try {
              navigation.navigate('OnboardingScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidWy,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Get Started'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextI3: {
    fontSize: 24,
    marginBottom: '4%',
    textAlign: 'center',
  },
  ButtonSolidWy: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  View_7I: {
    marginTop: '30%',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default withTheme(WelcomeScreen);
