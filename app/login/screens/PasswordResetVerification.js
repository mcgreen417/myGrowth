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

function PasswordResetVerification({ route, navigation }) {
  const email = route.params.email;
  const [code, setCode] = useState('');
  const [pressed, setPressed] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [signupProperties, setSignupProperties] = useState({
    validConfirmationCode: false,
    validPassword: false,
    validConfirmPassword: false,
    checkTextInputChange: false,
    validSignUp: false,
  });

  const handleCode = (code) => {
    const codeRegexPattern = /^(?=.*[0-9]).{6,6}$/;
    const charsNotAllowedRegex = /[^0-9]+$/;

    code = code.replace(charsNotAllowedRegex, '');
    setCode(code);

    if (code.match(codeRegexPattern)) {
      setSignupProperties({
        ...signupProperties,
        validConfirmationCode: true,
      });
    } else {
      setSignupProperties({
        ...signupProperties,
        validConfirmationCode: false,
        validSignUp: false,
      });
    }
  }

  const handlePasswordChange = (val) => {
    // Handles: at least 1 number, 1 lowercase character, 1 capital character,
    //   1 special character (any character that isn't a number/character, including whitespace).
    // Last argument checks length of the password - this requires 8 characters min with no max size.
    const passwordRegexPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    if (val.match(passwordRegexPattern)) {
      setSignupProperties({
        ...signupProperties,
        validPassword: true,
      });
    } else {
      setSignupProperties({
        ...signupProperties,
        validPassword: false,
        validSignUp: false,
      });
    }

    setPassword(val);
  }

  const handleConfirmPasswordChange = (val) => {
    if ((signupProperties.validPassword === true) && (val === password)) {
      setSignupProperties({
        ...signupProperties,
        validConfirmPassword: true,
      });
    } else {
      setSignupProperties({
        ...signupProperties,
        validConfirmPassword: false,
        validSignUp: false,
      });
    }

    setConfirmPassword(val);
  }

  const checkValidSignup = () => {
    const validConfirmationCode = signupProperties.validConfirmationCode;
    const validPassword = signupProperties.validPassword;
    const validConfirmPassword = signupProperties.validConfirmPassword;
    const ableToSignUp = (validConfirmationCode && validPassword && validConfirmPassword);

    if (ableToSignUp) {
      setSignupProperties({
        ...signupProperties,
        validSignUp: true,
      });

      passwordReset(email, code, password, navigation);

    } else {
      if (!validConfirmationCode && !validPassword && !validConfirmPassword) {
        createAlert('Oh no!', 'Please double-check all fields and make sure they were properly filled.');
      } else if (!validPassword) {
        createAlert('Oh no!', 'Your password is missing some important characters - please check the requirements and try again.');
      } else if (!validConfirmPassword) {
        createAlert('Oh no!', 'Your password was entered differently in both boxes.  Please try again.');
      } else if (!validConfirmationCode) {
        createAlert('Oh no!', 'Please check that you entered the verification code correctly.');
      } else {
        createAlert('Error', 'Please try again.');
        console.log(validConfirmationCode, validPassword, validConfirmPassword);
      }
    }
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
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text style={styles().textTitle}>myGrowth</Text>
          <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>
          <Text style={styles().textInstructions}>
            A password reset code has been sent to your e-mail. Enter the password reset code 
            you received below.
          </Text>

          {/* Reset code text input */}
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Reset Code
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
                  placeholder='Reset code'
                  fontSize={16}
                  color='#816868'
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  keyboardType='number-pad'
                  value={code}
                  onChangeText={(code) => {
                    handleCode(code);
                  }}
                  maxLength={6}
                  onFocus={() => setPressed(true)}
                  onBlur={() => setPressed(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          <View style={styles().buttons}>
          <Text
            style={{
              color: global.colorblindMode
                ? global.cb_textColor
                : global.textColor,
              marginTop: 18,
              textAlign: 'center',
            }}>
            You may now reset your password.{'\n'}
            Enter your new password below.
          </Text>
          
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
              value={password}
              onChangeText={(password) => {
                handlePasswordChange(password);
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
                value={confirmPassword}
                onChangeText={(confirmPassword) => {
                  handleConfirmPasswordChange(confirmPassword);
                }}
              />
            </View>

            <View style={{ marginVertical: 8 }} />
            <ButtonAndroidiOS
              buttonText='VERIFY'
              callFunction={checkValidSignup}
            />
          </View>

          {/* Resend password reset code */}
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles().text}>Didn't receive a password reset code?{' '}</Text>
              <TouchableOpacity onPress={() => resend(email)}>
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

async function passwordReset(email, code, newPassword, navigation) {
  try {  
    await Auth.forgotPasswordSubmit(email, code, newPassword);
    navigation.navigate('Login');
  } catch(error) {
    createAlert('Oh no!', 'Please double-check that your confirmation code was entered correctly.');
    console.log('error resetting password', error);
  }
}

async function resend(email) {
  try {
    await Auth.forgotPassword(email);
    // console.log('code resent successfully');
  } catch (error) {
    createAlert('Error', 'Error resending password reset verification code.  Please try again.')
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
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#816868',
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
      width: Math.round(Dimensions.get('window').width * 3/4),
    },
    textLink: {
      color: global.colorblindMode
        ? global.cb_hyperlinkedTextColor
        : global.hyperlinkedTextColor,
      textDecorationLine: 'underline',
      fontSize: 14,
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

export default PasswordResetVerification;