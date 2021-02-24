import React from 'react';
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
  return (
    <SafeAreaView style={styles().container}>
      <StatusBar backgroundColor={(global.colorblindMode ? global.cb_statusBarColor : global.statusBarColor)} barStyle='light-content' />
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {/* Logo + title */}
        <Image style={styles().logo} source={require('../assets/icon.png')} />
        <Text style={{ fontWeight: 'bold', color: (global.colorblindMode ? global.cb_textColor : global.textColor), fontSize: 36 }}>myGrowth</Text>
        <Text style={{ fontWeight: 'bold', color: (global.colorblindMode ? global.cb_textColor : global.textColor), fontSize: 16, marginBottom: 20 }}>Your General Wellness Tracker</Text>
        {/* Username, e-mail address, password, confirm password entry boxes + signup button */}
        <View style={styles().buttons}>
          <TextInput style={styles().textInput} placeholder='Username' placeholderTextColor={(global.colorblindMode ? global.cb_placeHolderTextColor : global.placeholderTextColor)} />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles().textInput} placeholder='E-mail Address' placeholderTextColor={(global.colorblindMode ? global.cb_placeHolderTextColor : global.placeholderTextColor)}/>
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles().textInput} placeholder='Password' placeholderTextColor={(global.colorblindMode ? global.cb_placeHolderTextColor : global.placeholderTextColor)} secureTextEntry={true} />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles().textInput} placeholder='Confirm Password' placeholderTextColor={(global.colorblindMode ? global.cb_placeHolderTextColor : global.placeholderTextColor)} secureTextEntry={true} />
          <View style={{ marginVertical: 8 }} />
          <Button title='SIGN UP' color={(global.colorblindMode ? global.cb_optionButtonsColor : global.optionButtonsColor)} onPress={() => navigation.navigate('UserInitializationPage')} />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: (global.colorblindMode ? global.cb_textColor : global.textColor) }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{ color: (global.colorblindMode ? global.cb_hyperlinkedTextColor : global.hyperlinkedTextColor), textDecorationLine: 'underline' }}>Log in here.</Text>
          </TouchableOpacity>
        </View>
        {/* TOS + privacy policy agreement */}
        <View style={{ marginVertical: 8 }} />
        <View>
          <Text style={{ color: (global.colorblindMode ? global.cb_textColor : global.textColor) }}>By continuing, you're accepting our </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={{ color: (global.colorblindMode ? global.cb_hyperlinkedTextColor : global.hyperlinkedTextColor), textDecorationLine: 'underline' }}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={{ color: (global.colorblindMode ? global.cb_textColor : global.textColor) }}> and </Text>
            <TouchableOpacity>
              <Text style={{ color: (global.colorblindMode ? global.cb_hyperlinkedTextColor : global.hyperlinkedTextColor), textDecorationLine: 'underline' }}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (global.colorblindMode ? global.cb_pageBackgroundColor : global.pageBackgroundColor),
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    borderColor: (global.colorblindMode ? global.cb_optionButtonsBorderColor : global.optionButtonsBorderColor),
  },
  textInput: {
    height: 40,
    borderColor: (global.colorblindMode ? global.cb_textInputBorderColor : global.textInputBorderColor),
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: (global.colorblindMode ? global.cb_textInputFillColor: global.textInputFillColor),
    color: (global.colorblindMode ? global.cb_textInputColor : global.textInputColor),
    textAlign: 'center',
  },
});

export default SignUpPage;
