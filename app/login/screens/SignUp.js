import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import { Icon } from 'react-native-elements';
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
  ScrollView,
  Dimensions,
  Keyboard,
} from 'react-native';

function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [confirmAge, setConfirmAge] = useState(false);
  const [pressedEmail, setPressedEmail] = useState(false);
  const [pressedPassword, setPressedPassword] = useState(false);
  const [pressedConfirmPassword, setPressedConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



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

  const checkRequiredFields = (email, password, navigation) => {
    const ableToSignUp = (signupProperties.validEmail
                          && signupProperties.validPassword
                          && signupProperties.validConfirmPassword
                          && confirmAge);
    const validEmail = signupProperties.validEmail;
    const validPassword = signupProperties.validPassword;
    const validConfirmPassword = signupProperties.validConfirmPassword;


    if (ableToSignUp) {
      setSignupProperties({
        ...signupProperties,
        validSignUp: true,
      });

      signUp(email, password, navigation);

    } else {
      setSignupProperties({
        ...signupProperties,
        validSignUp: false,
      });

      // Check to make sure if caught all cases and probably convert to a switch statement.
      if (!validEmail && !validPassword && !validConfirmPassword) {
        createAlert("Oh no!", "Please double-check your entered information in all fields and try again.");
      } else if (!validEmail) {
        createAlert("Oh no!", "Your e-mail was typed incorrectly! Please re-enter your e-mail and try again.");
      } else if (password !== confirmPassword) {
        createAlert("Oh no!", "The passwords you entered don't match. Please re-enter your password and try again.");
      } else if (!validPassword && !validConfirmPassword) {
        createAlert("Oh no!", "Your password is missing some important characters. Please check the requirements and try again.");
      } else if (!confirmAge) {
        createAlert("Oh no!", "You haven't confirmed your age. Please check the box below and try again.");
      } else {
        createAlert("Error", "Please check all fields and try again.");
      }
    }    

    // return signupProperties.validSignUp;
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
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps='handled' 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View style={styles().pageSetup}>
          {/* Logo + title */}
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text style={styles().textTitle}>myGrowth</Text>
          <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>

          {/* E-mail text input */}
          <View style={{ marginTop: 16, marginBottom: 20 }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressedEmail ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  E-mail Address
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedEmail ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingHorizontal: 16,
                }}>
                <TextInput
                  placeholder='E-mail address'
                  fontSize={16}
                  color='#816868'
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  value={email}
                  onChangeText={(email) => {
                    emailTextInputChange(email);
                  }}
                  maxLength={320}
                  onFocus={() => setPressedEmail(true)}
                  onBlur={() => setPressedEmail(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          {/* Password input box */}
          <View style={{ marginBottom: 20, }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressedPassword ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Password
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedPassword ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: -8, }}>
                  <TextInput
                    placeholder='Password'
                    fontSize={16}
                    color='#816868'
                    placeholderTextColor={
                      global.colorblindMode
                        ? global.cb_placeHolderTextColor
                        : global.placeHolderTextColor
                    }
                    secureTextEntry={showPassword 
                      ? false
                      : true
                    }
                    value={password}
                    onChangeText={(password) => {
                      handlePasswordChange(password);
                    }}
                    maxLength={99}
                    onFocus={() => {
                      setPressedPassword(true);
                      setShowPasswordRequirements(true);
                    }}
                    onBlur={() => {
                      setPressedPassword(false);
                      setShowPasswordRequirements(false);
                    }}
                    style={{ 
                      paddingLeft: 16, 
                      flexWrap: 'wrap', 
                      width: Math.round((Dimensions.get('window').width * 6/10)), 
                    }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 16, }}>
                    <Icon
                      name={showPassword 
                        ? 'eye-off'
                        : 'eye'
                      }
                      type='ionicon'
                      color={pressedPassword
                        ? '#4CB97A'
                        : '#816868'
                      }
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {showPasswordRequirements &&
            <View style={styles().buttons}>
              <View style={{ marginTop: -20, marginBottom: 20, }}>
                <Text style={styles().textPasswordDetails}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Passwords must be 8 or more characters, with:{'\n'}
                  </Text>
                  {'      '}- 1 lowercase character{'\n'}
                  {'      '}- 1 uppercase character{'\n'}
                  {'      '}- 1 special character (!, @, #, $, %, etc.){'\n'}
                  {'      '}- 1 number
                </Text>
              </View>
            </View>
          }

          {/* Confirm Password input box */}
          <View style={{ marginBottom: 10, }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressedConfirmPassword ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Confirm Password
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedConfirmPassword ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: -8, }}>
                  <TextInput
                    placeholder='Confirm password'
                    fontSize={16}
                    color='#816868'
                    placeholderTextColor={
                      global.colorblindMode
                        ? global.cb_placeHolderTextColor
                        : global.placeHolderTextColor
                    }
                    secureTextEntry={showConfirmPassword 
                      ? false
                      : true
                    }
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => {
                      handleConfirmPasswordChange(confirmPassword);
                    }}
                    maxLength={99}
                    onFocus={() => setPressedConfirmPassword(true)}
                    onBlur={() => setPressedConfirmPassword(false)}
                    style={{ 
                      paddingLeft: 16, 
                      flexWrap: 'wrap', 
                      width: Math.round((Dimensions.get('window').width * 6/10)), 
                    }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 16, }}>
                    <Icon
                      name={showConfirmPassword 
                        ? 'eye-off'
                        : 'eye'
                      }
                      type='ionicon'
                      color={pressedConfirmPassword
                        ? '#4CB97A'
                        : '#816868'
                      }
                      onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Signup button */}
          <View style={styles().buttons}>            
            <Button
              title='SIGN UP'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              onPress={() => {
                checkRequiredFields(email, password, navigation);
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, }}>
            <Icon
              name={
                confirmAge
                ? 'check-box'
                : 'check-box-outline-blank'}
              type='MaterialIcons'
              color={
                confirmAge
                ? '#4CB97A'
                : '#816868'
              }
              onPress={() => {
                Keyboard.dismiss();
                setConfirmAge(!confirmAge);
              }}
            />
            <View style={{ marginRight: 8 }}/>
            <Text style={styles().text}>I confirm I am 13 years of age or older.</Text>
          </View>

          {/* TOS + privacy policy agreement */}
          <View style={{ marginTop: 8, marginBottom: 16, }}>
            <Text style={styles().text}>
              By creating an account, you agree to our
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text style={styles().textLink}>Terms of Service </Text>
              </TouchableOpacity>
              <Text style={styles().text}>{' '}and{' '}</Text>
              <TouchableOpacity>
                <Text style={styles().textLink}>Privacy Policy</Text>
              </TouchableOpacity>
              <Text>.</Text>
            </View>
          </View>

          {/* Login/signup page switch */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles().text}>Already have an account?{' '}</Text>
            <TouchableOpacity 
              onPress={() => {
                setShowPasswordRequirements(false);
                navigation.navigate('Login');
              }}>
              <Text style={styles().textLink}>Log in here.</Text>
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

async function signUp(email, password, navigation) {
  const username = email;

  try {
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
    // console.log(error);
    
    if (error.code === "UsernameExistsException") {
      createAlert('Oh no!', 'An account under this email already exists.  Please either reset your password or use a new email.');
    } else {
      createAlert('Error', 'Error signing up.  Please try again.');
    }
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
    marginVertical: 10,
    width: Math.round(Dimensions.get('window').width * 3/4),
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsBorderColor
      : global.optionButtonsBorderColor,
  },
  logo: {
    height: Math.round(Dimensions.get('window').width * 1/4),
    width: Math.round(Dimensions.get('window').width * 1/4),
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
  textLink: {
    color: global.colorblindMode
      ? global.cb_hyperlinkedTextColor
      : global.hyperlinkedTextColor,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  textPasswordDetails: {
    marginTop: 8,
    width: '100%',
    color: global.colorblindMode 
      ? global.cb_textColor 
      : global.textColor,
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

export default SignUp;
