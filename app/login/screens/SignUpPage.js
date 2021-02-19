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

function SignUpPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Logo + title */}
        <Image
          style={styles.logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text style={{ fontWeight: 'bold', color: '#816868', fontSize: 36 }}>
          myGrowth
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#816868',
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          Your General Wellness Tracker
        </Text>
        {/* Username, e-mail address, password, confirm password entry boxes + signup button */}
        <View style={styles.buttons}>
          <TextInput
            style={styles.textInput}
            placeholder='Username'
            value={username}
            onChangeText={(username) => {
              setUsername(username);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles.textInput}
            placeholder='E-mail Address'
            value={email}
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles.textInput}
            placeholder='Confirm Password'
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(confirmPassword) => {
              setConfirmPassword(confirmPassword);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='SIGN UP'
            color='#A5DFB2'
            onPress={() =>
              signUp(username, email, password, confirmPassword, navigation)
            }
          />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#816868' }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Log in here.
            </Text>
          </TouchableOpacity>
        </View>
        {/* TOS + privacy policy agreement */}
        <View style={{ marginVertical: 8 }} />
        <View>
          <Text style={{ color: '#816868' }}>
            By continuing, you're accepting our{' '}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text
                style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}
              >
                Terms of Service
              </Text>
            </TouchableOpacity>
            <Text style={{ color: '#816868' }}> and </Text>
            <TouchableOpacity>
              <Text
                style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}
              >
                Privacy Policy.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function signUp(username, email, password, confirmPassword, navigation) {
  try {
    if (password != confirmPassword) {
      throw 'Password and Confirm Password are not the same';
    }
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    // console.log(user);
    navigation.navigate('VerificationCodePage', { username: username });
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

export default SignUpPage;
