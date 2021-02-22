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

function VerificationCodePage({ route, navigation }) {
  const [verificationCode, setVerificationCode] = useState('');
  const { username } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Logo + title + page instructions */}
        <Image
          style={styles.logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text style={{ fontWeight: 'bold', color: '#816868', fontSize: 44 }}>
          myGrowth
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#816868',
            fontSize: 20,
            marginBottom: 16,
          }}
        >
          Your General Wellness Tracker
        </Text>
        <Text
          style={{ color: '#816868', marginBottom: 12, textAlign: 'center' }}
        >
          A verification code has been sent to your e-mail.{'\n'}
          Enter the verification code you received below.
        </Text>
        {/* verification code text entry + verify button */}
        <View style={styles.buttons}>
          <TextInput
            style={styles.textInput}
            placeholder='Verification Code'
            value={verificationCode}
            onChangeText={(verificationCode) => {
              setVerificationCode(verificationCode);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='VERIFY'
            color='#A5DFB2'
            onPress={() => verify(username, verificationCode, navigation)}
          />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Resend verification code */}
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#816868' }}>
              Didn't receive a verification code?{' '}
            </Text>
            <TouchableOpacity onPress={() => resend(username)}>
              <Text
                style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}
              >
                Resend e-mail.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Login page redirect */}
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Return to login.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function verify(username, code, navigation) {
  try {
    await Auth.confirmSignUp(username, code);
    // console.log('confirm signup successfully');
    navigation.navigate('LoginPage');
  } catch (error) {
    console.log('error signing up', error);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    borderColor: 'black',
  },
  textInput: {
    height: 40,
    borderColor: '#A5DFB2',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    textAlign: 'center',
  },
});

export default VerificationCodePage;
