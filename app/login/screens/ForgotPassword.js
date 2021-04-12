import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Auth, API } from 'aws-amplify';

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles().container}>
      <StatusBar
        backgroundColor={
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
        }
        barStyle='light-content'
      />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps='handled' 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View style={styles().pageSetup}>
          {/* Logo + title + page instructions */}
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text style={styles().textTitle}>myGrowth</Text>
          <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>
          <Text style={styles().textInstructions}>
            To reset your password, please enter the e-mail{'\n'}
            address associated with your account.
          </Text>

          {/* Username + e-mail address entry boxes, submit button */}
          <View style={styles().buttons}>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles().textInput}
                placeholder='E-mail Address'
                placeholderTextColor={
                  global.colorblindMode
                    ? global.cb_placeHolderTextColor
                    : global.placeholderTextColor
                }
                value={email}
                onChangeText={(email) => {
                  setEmail(email);
                }}
              />
            </View>

            <View style={{ marginVertical: 16 }}>
              <Button
                title='SUBMIT'
                color={
                  global.colorblindMode
                    ? global.cb_optionButtonsColor
                    : global.optionButtonsColor
                }
                onPress={() => resetPassword(email, navigation)}
              />
            </View>
          </View>

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles().textLink}>
                Return to login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

async function resetPassword(email, navigation) {
  try {
    await Auth.forgotPassword(email);
    navigation.navigate('PasswordResetVerification', {email});
  } catch(error) {
    console.log('error resetting pasword: ', error);
  }
}

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
    },
    logo: {
      height: 100,
      width: 100,
    },
    buttons: {
      marginVertical: 10,
      width: '75%',
      borderColor: global.colorblindMode
      ? global.cb_optionButtonsBorderColor
      : global.optionButtonsBorderColor,
    },
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: '100%',
      height: 40,
      borderColor: global.colorblindMode
        ? global.cb_textInputBorderColor
        : global.textInputBorderColor,
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: global.colorblindMode
        ? global.cb_textInputFillColor
        : global.textInputFillColor,
      color: global.colorblindMode
        ? global.cb_textInputcolor
        : global.textInputColor,
      textAlign: 'center',
    },
    textInstructions: {
      color: '#816868',
      marginBottom: 12,
      textAlign: 'center',
      fontSize: 16,
    },
    textLink: {
      color: '#A5DFB2',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize: 14,
    },
    text: {
      color: '#816868',
      fontSize: 14,
    },
    textSubtitle: {
      color: '#816868',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
    },
    textTitle: {
      color: '#816868',
      fontWeight: 'bold',
      fontSize: 44,
    },
  });

export default ForgotPassword;
