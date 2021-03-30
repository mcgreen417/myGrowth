import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
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

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [signupProperties, setSignupProperties] = useState({
    validEmail: false,
    validPassword: false,
    validConfirmPassword: false,
    checkTextInputChange: false,
    validSignUp: false,
  });

  const emailTextInputChange = (val) => {
    // Email syntax validation regex
    // Current issue: if a user double-taps space, a period is automatically entered.
    //  Not sure how to fix - worst-case can leave up to users to properly check.
    const emailRegexPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const whitespaceRegexPattern = /\s/g;

    val = val.replace(whitespaceRegexPattern, '');
    setEmail(val);

    if (val.match(emailRegexPattern)) {
      setSignupProperties({
        ...signupProperties,
        checkTextInputChange: true,
        validEmail: true,
      });
    } else {
      setSignupProperties({
        ...signupProperties,
        checkTextInputChange: false,
        validEmail: false,
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
      });
    }

    setConfirmPassword(val);
  }

  const checkRequiredFields = () => {
    const ableToSignUp = (signupProperties.validEmail
                          && signupProperties.validPassword
                          && signupProperties.validConfirmPassword);

    if (ableToSignUp) {
      setSignupProperties({
        ...signupProperties,
        validSignUp: true,
      });
 
      signUp(email, password, confirmPassword, navigation);
    } else {
      setSignupProperties({
        ...signupProperties,
        validSignUp: false,
      });
    }    

    return signupProperties.validSignUp;
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
        {/* Logo + title */}
        <Image
          style={styles().logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text style={styles().textTitle}>myGrowth</Text>
        <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>

        {/* E-mail address, password, confirm password entry boxes + signup button */}
        <View style={styles().buttons}>
          <TextInput
            style={styles().textInput}
            placeholder='E-mail Address'
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeholderTextColor
            }
            keyboardType='email-address'
            value={email}
            onChangeText={(email) => {
              emailTextInputChange(email);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles().textInput}
            placeholder='Password'
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeholderTextColor
            }
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => {
              handlePasswordChange(password);
            }}
          />

          <Text style={styles().passwordDetailsText}>
            Passwords must be 8 or more characters, with:{'\n'}
            {'   '}-1 lowercase character{'\n'}
            {'   '}-1 capital character{'\n'}
            {'   '}-1 special character (!, @, #, $, %, etc.){'\n'}
            {'   '}-1 number{'\n'}
          </Text>

          <View style={{ marginVertical: 8 }} />
            <TextInput
              style={styles().textInput}
              placeholder='Confirm Password'
              placeholderTextColor={
                global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeholderTextColor
              }
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(confirmPassword) => {
                handleConfirmPasswordChange(confirmPassword);
              }}
            />

          {/* </View> */}
          
          <View style={{ marginVertical: 8 }} />
          <Button
            title='SIGN UP'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => {checkRequiredFields();}}
          />
          <View style={{ marginVertical: 8 }} />
        </View>

        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles().text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles().textLink}>Log in here.</Text>
          </TouchableOpacity>
        </View>

        {/* TOS + privacy policy agreement */}
        <View style={{ marginVertical: 8 }} />
        <View>
          <Text style={styles().text}>
            By continuing, you're accepting our{' '}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={styles().textLink}>Terms of Service </Text>
            </TouchableOpacity>
            <Text style={styles().text}> and </Text>
            <TouchableOpacity>
              <Text style={styles().textLink}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function signUp(email, password, confirmPassword, navigation) {
  const username = email;
  try {
    if (password != confirmPassword) {
      throw 'Password and Confirm Password are not the same';
    }
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        'custom:initialized': '0'
      },
    });
    navigation.navigate('VerificationCode', { username: username });
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
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsBorderColor
      : global.optionButtonsBorderColor,
  },
  logo: {
    height: 100,
    width: 100,
  },
  pageSetup: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordDetailsText: {
    marginTop: 8,
    width: 300,
    color: global.colorblindMode ? global.cb_textColor : global.textColor,
    alignItems: 'center'
  },
  text: {
    color: global.colorblindMode ? global.cb_textColor : global.textColor,
  },
  textInput: {
    width: 290,
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
      ? global.cb_textInputColor
      : global.textInputColor,
    textAlign: 'center',
  },
  textLink: {
    color: global.colorblindMode
      ? global.cb_hyperlinkedTextColor
      : global.hyperlinkedTextColor,
    textDecorationLine: 'underline',
  },
  textSubtitle: {
    color: global.colorblindMode ? global.cb_textColor : global.textColor,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  textTitle: {
    color: global.colorblindMode ? global.cb_textColor : global.textColor,
    fontWeight: 'bold',
    fontSize: 44,
  },
});

export default SignUp;
