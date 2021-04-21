import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
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
} from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from "react-native-cache";
import * as queries from '../../../src/graphql/queries';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressedEmail, setPressedEmail] = useState(false);
  const [pressedPassword, setPressedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
                    setEmail(email);
                  }}
                  maxLength={320}
                  onFocus={() => setPressedEmail(true)}
                  onBlur={() => setPressedEmail(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 10, }}>
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
                      setPassword(password);
                    }}
                    maxLength={99}
                    onFocus={() => setPressedPassword(true)}
                    onBlur={() => setPressedPassword(false)}
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

          {/* Login button */}
          <View style={styles().buttons}>
            <Button
              title='LOG IN'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              onPress={() => signIn(email, password, navigation)}
            />
          </View>

          {/* Login/signup page switch + forgot password button */}
          <View style={{ flexDirection: 'row', marginTop: 16, }}>
            <Text style={styles().text}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles().textLink}>Sign up here.</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles().textLink}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          {/* TOS + privacy policy agreement */}
          <View style={{ marginTop: 16, }}>
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

async function signIn(username, pw, navigation) {
  if (!username || !pw) {
    createAlert('Oh no!', 'The email and/or password fields cannot be empty, please try again.');
  } else {
    try {
      //await signOut(); // This is to clear any tokens saved when debugging
      
      //instantiate new cache
      const cache = new Cache({
        namespace: "myapp",
        policy: {
          maxEntries: 50000
        },
        backend: AsyncStorage
      });

      const user = await Auth.signIn(username, pw);
      
      //empty settings in db
      if(user.attributes['custom:initialized'] == 0)
        navigation.navigate('UserInitialization1');

      //non-empty settings in db
      if(user.attributes['custom:initialized'] == 1) {
        const res = await API.graphql({
          query: queries.getSetting,
          variables: {UserID: user.username}
        });

        //store settings from db
        await cache.set("settings", res.data.getSetting.Options);
        //store data from db
        const res2 = await API.graphql({
          query: queries.getChartData,
          variables: {UserID: user.username}
        });

        await cache.set("data", res2.data.getChartData);

        navigation.navigate('Home');
      }
    } catch (error) {
      // console.log(error);

      // Error code handling
      // Update with other different errors (incorrect pass, not a user, etc.)
      switch(error.code) {
        case 'UserNotConfirmedException':
          navigation.navigate('VerificationCode', { username: username });
          break;
        case 'NotAuthorizedException':
          createAlert('Oh no!', 'Email and password combination not found, please check your information and try again.');
        default:
          createAlert('Error', 'Please try signing in again.');
      }
    }
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

const styles = () => StyleSheet.create({
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

export default Login;
