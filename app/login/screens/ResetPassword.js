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
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Auth, API } from 'aws-amplify';

function ResetPassword({ route, navigation }) {
  const { email, code } = route.params;
  const [pass, setPass] = useState('');
  const [confPass, setConfPass] = useState('');
  const [pressedPassword, setPressedPassword] = useState(false);
  const [pressedConfirmPassword, setPressedConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);

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

          {/* Password input box */}
          <View style={{ marginTop: 20, marginBottom: 20, }}>
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
                    value={pass}
                    onChangeText={(pass) => {
                      setPass(pass);
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
                    value={confPass}
                    onChangeText={(confPass) => {
                      setConfPass(confPass);
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
          
          <View style={styles().buttons}>
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

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row', marginTop: 16, }}>
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
    textInputView: {
      height: 48,
      width: Math.round(Dimensions.get('window').width * 3/4),
      position: 'relative',
    },
    textInstructions: {
      color: '#816868',
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
    textPasswordDetails: {
      marginTop: 8,
      width: '100%',
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
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
