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
import { Auth, API } from 'aws-amplify';

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [pressed, setPressed] = useState(false);

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

          {/* E-mail address text input */}
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
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
                  borderColor: pressed ? '#4CB97A' : '#816868',
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
                    setEmail(email);
                  }}
                  maxLength={320}
                  onFocus={() => setPressed(true)}
                  onBlur={() => setPressed(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          {/* Submit button */}
          <View style={styles().buttons}>
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

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row', marginTop: 16, }}>
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
      color: '#816868',
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
