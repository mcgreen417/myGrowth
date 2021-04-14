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

            <View style={{ marginTop: 16 }}>
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
            </View>

            <View style={{ marginVertical: 16 }}>
              <Button
                title='SUBMIT'
                color={
                  global.colorblindMode
                    ? global.cb_optionButtonsColor
                    : global.optionButtonsColor
                }
                onPress={() => passReset(email, code, pass, confPass, navigation)}
              />
            </View>
          </View>

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles().textLink}>Return to login.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

async function passReset(email, code, password, confPass, navigation) {
  try {  
    if(password != confPass) {
      throw 'Password and Confirm Password are not the same';
    }

    await Auth.forgotPasswordSubmit(email.email, code, password);
    
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
      textDecorationLine: 'underline',
      fontWeight: 'bold',
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

export default ResetPassword;
