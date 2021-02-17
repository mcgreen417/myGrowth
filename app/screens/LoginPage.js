import React from 'react';
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={global.statusBarColor} barStyle='light-content' />
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {/* Logo + title */}
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text style={{fontWeight: 'bold', color: global.textColor, fontSize: 36}}>myGrowth</Text>
        <Text style={{fontWeight: 'bold', color: global.textColor, fontSize: 16, marginBottom: 20}}>Your General Wellness Tracker</Text>
        {/* E-mail address + password entry boxes, login button */}
        <View style={styles.buttons}>
          <TextInput style={styles.textInput} placeholder='E-mail Address' />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
          <View style={{ marginVertical: 8 }} />
          <Button title='LOG IN' color={global.optionButtonsColor} onPress={ () => signIn() } />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: global.textColor }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Sign up here.</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordPage')}>
            <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        {/* TOS + privacy policy agreement */}
        <View style={{ marginVertical: 8 }} />
        <View>
          <Text style={{ color: global.textColor }}>By continuing, you're accepting our </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={{ color: global.textColor }}> and </Text>
            <TouchableOpacity>
              <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function signIn() {
  try {
      await signOut(); // This is to clear any tokens saved when debugging
      // const user = await Auth.signIn(username, pw)
      console.log(user);
      await testQuery(user.username);
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
  `
  const res = await API.graphql({query, variables:{username: username}, authMode: 'AMAZON_COGNITO_USER_POOLS'})
  console.log(res);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.pageBackgroundColor,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    borderColor: global.optionButtonsBorderColor,
  },
  textInput: {
    height: 40,
    borderColor: global.textInputBorderColor,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: global.textInputFillColor,
    color: global.textInputColor,
    textAlign: 'center',
  },
});

export default LoginPage;
