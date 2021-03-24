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
} from 'react-native';
import { Auth, API } from 'aws-amplify';

function ResetPassword({ route, navigation }) {
  const { email, code } = route.params;
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');

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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        {/* Logo + title + page instructions */}
        <Image
          style={styles().logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: global.colorblindMode
              ? global.cb_textColor
              : global.textColor,
            fontSize: 44,
          }}>
          myGrowth
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: global.colorblindMode
              ? global.cb_textColor
              : global.textColor,
            fontSize: 20,
            marginBottom: 16,
          }}>
          Your General Wellness Tracker
        </Text>
        <Text
          style={{
            color: global.colorblindMode
              ? global.cb_textColor
              : global.textColor,
            marginBottom: 12,
            textAlign: 'center',
          }}>
          You may now reset your password.{'\n'}
          Enter your new password below.
        </Text>
        {/* New password + confirm password buttons, submit button */}
        <View style={styles().buttons}>
          <TextInput
            style={styles().textInput}
            placeholder='New Password'
            secureTextEntry={true}
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeholderTextColor
            }
            value={pass}
            onChangeText={(pass) => {
              setPass(pass);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles().textInput}
            placeholder='Confirm New Password'
            secureTextEntry={true}
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeholderTextColor
            }
            value={confPass}
            onChangeText={(confPass) => {
              setConfPass(confPass);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='SUBMIT'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => passReset(email, code, pass, confPass, navigation)}
          />
          <View style={{ marginVertical: 8 }} />
        </View>

        {/* Login page redirect */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: global.colorblindMode
                  ? global.cb_hyperlinkedTextColor
                  : global.hyperlinkedTextColor,
                textDecorationLine: 'underline',
              }}>
              Return to login.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function passReset(email, code, password, confPass, navigation) {
  try {  
    if(password != confPass) {
      throw 'Password and Confirm Password are not the same';
    }

    const res = Auth.forgotPasswordSubmit(email, code, password);
    console.log(res);
    
    navigation.navigate('Login');
  } catch(error) {
    console.log('error resetting password', error);
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
      marginTop: 10,
      marginBottom: 10,
      width: 300,
      borderColor: global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsBorderColor,
    },
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
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
    },
    textLink: {
      color: '#A5DFB2',
      textDecorationLine: 'underline',
    },
    text: {
      color: '#816868',
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

export default ResetPassword;
