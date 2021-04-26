import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonAndroidiOS from '../../shared/components/ButtonAndroidiOS';
import StatusBariOS from '../../shared/components/StatusBariOS';

function VerificationCode({ route, navigation }) {
  const [verificationCode, setVerificationCode] = useState('');
  const [validLengthVerificationCode, setValidLengthVerificationCode] = useState(false);
  const [pressed, setPressed] = useState(false);
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

  const verifyWrapper = () => {
    verify(username, verificationCode, validLengthVerificationCode, navigation);
  }

  return (
    <SafeAreaView style={styles().container}>
      <StatusBariOS />
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
          <Image style={styles().logo} source={require('../../shared/assets/icon.png')}/>
          <Text style={styles().textTitle}>myGrowth</Text>
          <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>
          <Text style={styles().textInstructions}>
            A verification code has been sent to your e-mail.{'\n'}
            Enter the verification code you received below.
          </Text>

          {/* Verification code text input */}
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Verification Code
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressed ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingHorizontal: 16,
                }}>
                <TextInput
                  placeholder='Verification code'
                  fontSize={16}
                  color='#816868'
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  keyboardType='number-pad'
                  value={verificationCode}
                  onChangeText={(verificationCode) => {
                    handleVerificationCode(verificationCode);
                  }}
                  maxLength={6}
                  onFocus={() => setPressed(true)}
                  onBlur={() => setPressed(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          {/* Verify button */}
          <View style={styles().buttons}>
            <ButtonAndroidiOS 
              buttonText='VERIFY'
              callFunction={verifyWrapper}
            />
          </View>

          {/* Resend verification code */}
          <View style={{ flexDirection: 'row', marginTop: 16, }}>
            <Text style={styles().text}>Didn't receive a verification code?{' '}</Text>
            <TouchableOpacity onPress={() => resend(username)}>
              <Text style={styles().textLink}>Resend e-mail.</Text>
            </TouchableOpacity>
          </View>

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles().textLink}>Return to login.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', }
    ]
  );
}

// Future: Store all possible error messages in an array and just pass in the index to keep this small.
async function verify(username, code, validLengthVerificationCode, navigation) {
  if (!validLengthVerificationCode) {
    createAlert('Invalid Length', 'Verification codes must be 6 digits long.');
  } else {
    try {
      await Auth.confirmSignUp(username, code);
      // console.log('confirm signup successfully');
      navigation.navigate('Login');
    } catch (error) {
      createAlert('Invalid Verification Code', 'Invalid verification code entered.')
    }
  }
}

async function resend(username) {
  try {
    await Auth.resendSignUp(username);
    // console.log('code resent successfully');
  } catch (error) {
    createAlert('Error', 'Error resending verification code.  Please try again.')
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
    height: Math.round(Dimensions.get('window').width * 1/4),
    width: Math.round(Dimensions.get('window').width * 1/4),
  },
  buttons: {
    marginVertical: 10,
    width: Math.round(Dimensions.get('window').width * 3/4),
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsBorderColor
      : global.optionButtonsBorderColor,
  },
  label: {
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
  },
  pageSetup:{
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
  },
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 3/4),
    position: 'relative',
  },
  textInstructions: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor, 
    marginBottom: 10, 
    textAlign: 'center',
    fontSize: 16,
  },
  textLink: {
    color: global.colorblindMode
      ? global.cb_hyperlinkedTextColor
      : global.hyperlinkedTextColor,
    textDecorationLine: 'underline',
    fontSize: 14,
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
