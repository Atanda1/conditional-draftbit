import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const OnboardingScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules.
  const variables = CustomCode.useValues();
  /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  if (variables.id_number) {
    // Main is the name of the navigator to show when the user is authenticated.
    // The name of the navigator may vary depending on your app

    props.navigation.navigate('DashboardScreen');
  }
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.mediumInverse }}>
      <View style={styles.Viewhj} pointerEvents={'auto'}>
        <Text style={[styles.TextCJ, { color: theme.colors.strong }]}>
          {'Input your ID Number\n'}
        </Text>
        <TextInput
          onChangeText={textInputValue => {
            try {
              setTextInputValue(textInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.TextInputOV, { borderColor: theme.colors.divider }]}
          value={textInputValue}
          placeholder={'Enter the number..'}
        />
        <ButtonSolid
          onPress={() => {
            try {
              console.log(textInputValue);
              setGlobalVariableValue({
                key: 'id_number',
                value: true,
              });
              navigation.navigate('RootNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolidMX,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Get Started'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextCJ: {
    marginBottom: '5%',
  },
  TextInputOV: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  ButtonSolidMX: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
  },
  Viewhj: {
    marginTop: '20%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

export default withTheme(OnboardingScreen);
