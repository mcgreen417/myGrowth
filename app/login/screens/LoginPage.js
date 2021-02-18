import React, { useState } from 'react';
import 'crypto-js/lib-typedarrays';
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

function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        {/* E-mail address + password entry boxes, login button */}
        <View style={styles.buttons}>
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
            // secureTextEntry={true}
            value={password}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='LOG IN'
            color='#A5DFB2'
            onPress={() => signIn(email, password, navigation)}
          />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#816868' }}>Don't have an account? </Text>
          {/* FOR TESTING ONLY REMEMBER TO CHANGE LATER */}
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Sign up here.
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordPage')}
          >
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Forgot your password?
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

async function signIn(username, pw, navigation) {
  try {
    await signOut(); // This is to clear any tokens saved when debugging
    console.log(username);
    console.log(pw);
    const user = await Auth.signIn(username, pw);
    console.log(user);
    await testQuery(user.username);
    navigation.navigate('UserInitializationPage1');
  } catch (error) {
    console.log('error signing in', error);
  }
}

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

async function testQuery(username) {
  const query = `
  query test($username: ID!) {
    getTodos(userID: $username) {
      toDos {
        Completed
        Timestamp
        Title
      }
    }
  }
  `;
  const res = await API.graphql({
    query,
    variables: { username: username },
    authMode: 'AMAZON_COGNITO_USER_POOLS',
  });
  console.log(res);
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

export default LoginPage;
