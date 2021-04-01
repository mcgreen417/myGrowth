import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Alert,
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

function VerificationCode({ route, navigation }) {
  const [verificationCode, setVerificationCode] = useState('');
  const [validLengthVerificationCode, setValidLengthVerificationCode] = useState(false);
  const { username } = route.params;

  const handleVerificationCode = (verificationCode) => {
    const verificationCodeRegexPattern = /^(?=.*[0-9]).{6,6}$/;
    const charsNotAllowedRegex = /[^0-9]+$/;

    verificationCode = verificationCode.replace(charsNotAllowedRegex, '');
    setVerificationCode(verificationCode);

    if (verificationCode.match(verificationCodeRegexPattern)) {
      setValidLengthVerificationCode(true);
    } else {
      setValidLengthVerificationCode(false);
    }
  }

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
      <View style={styles().pageSetup}>

        {/* Logo + title + page instructions */}
        <Image style={styles().logo} source={require('../../shared/assets/icon.png')}/>
        <Text style={styles().textTitle}>myGrowth</Text>
        <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>
        <Text style={styles().textInstructions}>
          A verification code has been sent to your e-mail.{'\n'}
          Enter the verification code you received below.
        </Text>

        {/* verification code text entry + verify button */}
        <View style={styles().buttons}>
          <TextInput
            style={styles().textInput}
            placeholder='Verification Code'
            placeholderTextColor={global.colorblindMode
              ? global.cb_placeHolderTextColor
              : global.placeHolderTextColor
            }
            keyboardType='number-pad'
            value={verificationCode}
            maxLength={6}
            onChangeText={(verificationCode) => {
              handleVerificationCode(verificationCode);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button 
            title='VERIFY'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => verify(username, verificationCode, validLengthVerificationCode, navigation)}
          />
          <View style={{ marginVertical: 8 }} />
        </View>

        {/* Resend verification code */}
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles().text}>Didn't receive a verification code?{' '}</Text>
            <TouchableOpacity onPress={() => resend(username)}>
              <Text style={styles().textLink}>Resend e-mail.</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login page redirect */}
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles().textLink}>Return to login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const createAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", }
    ]
  );
}

// Future: Store all possible error messages in an array and just pass in the index to keep this small.
async function verify(username, code, validLengthVerificationCode, navigation) {
  if (!validLengthVerificationCode) {
    createAlert("Invalid Length", "Verification codes must be 6 digits long.");
  } else {
    try {
      await Auth.confirmSignUp(username, code);
      // console.log('confirm signup successfully');
      navigation.navigate('Login');
    } catch (error) {
      createAlert("Invalid Verification Code", "Invalid verification code entered.")
    }
  }
}

async function resend(username) {
  try {
    await Auth.resendSignUp(username);
    // console.log('code resent successfully');
  } catch (error) {
    console.log('error signing up', error);
  }
}

const styles = () => StyleSheet.create({
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
    width: '70%',
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsBorderColor
      : global.optionButtonsBorderColor,
  },
  pageSetup:{
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
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
    textAlign: 'center',
  },
  textInstructions: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor, 
    marginBottom: 12, 
    textAlign: 'center'
  },
  textLink: {
    color: global.colorblindMode
      ? global.cb_hyperlinkedTextColor
      : global.hyperlinkedTextColor,
    textDecorationLine: 'underline',
  },
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
  textSubtitle: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  textTitle: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontWeight: 'bold',
    fontSize: 44,
  },
});

export default VerificationCode;
