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

function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

        {/* E-mail address + password entry boxes, login button */}
        <View style={styles().buttons}>
          <TextInput
            style={styles().textInput}
            placeholder='E-mail Address'
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeholderTextColor
            }
            value={email}
            onChangeText={(email) => {
              setEmail(email);
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
              setPassword(password);
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='LOG IN'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => signIn(email, password, navigation)}
          />
          <View style={{ marginVertical: 8 }} />
        </View>

        {/* Login/signup page switch + forgot password button */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles().text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles().textLink}>Sign up here.</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordPage')}>
            <Text style={styles().textLink}>Forgot your password?</Text>
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
              <Text style={styles().textLink}>Terms of Service</Text>
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

async function signIn(username, pw, navigation) {
  try {
    await signOut(); // This is to clear any tokens saved when debugging
    // console.log(username);
    // console.log(pw);
    const user = await Auth.signIn(username, pw);
    // console.log(user);
    // await testQuery(user.username);
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

const styles = () =>
  StyleSheet.create({
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
      width: 300,
      borderColor: global.colorblindMode
        ? global.cb_optionButtonsBorderColor
        : global.optionButtonsBorderColor,
    },
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
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
      color: global.colorblindMode
        ? global.cb_textInputColor
        : global.textInputColor,
      textAlign: 'center',
    },
    textInstructions: {
      color: '#816868',
      marginBottom: 12,
      textAlign: 'center',
    },
    textLink: {
      color: global.colorblindMode
        ? global.cb_hyperlinkedTextColor
        : global.hyperlinkedTextColor,
      textDecorationLine: 'underline',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
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

export default LoginPage;
