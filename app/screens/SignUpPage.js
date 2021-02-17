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
import '../../global.js';

function SignUpPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={global.statusBarColor} barStyle='light-content' />
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {/* Logo + title */}
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text style={{ fontWeight: 'bold', color: global.headingColor, fontSize: 36 }}>myGrowth</Text>
        <Text style={{ fontWeight: 'bold', color: global.headingColor, fontSize: 16, marginBottom: 20 }}>Your General Wellness Tracker</Text>
        {/* Username, e-mail address, password, confirm password entry boxes + signup button */}
        <View style={styles.buttons}>
          <TextInput style={styles.textInput} placeholder='Username' />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles.textInput} placeholder='E-mail Address' />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true} />
          <View style={{ marginVertical: 8 }} />
          <TextInput style={styles.textInput} placeholder='Confirm Password' secureTextEntry={true} />
          <View style={{ marginVertical: 8 }} />
          <Button title='SIGN UP' color={global.optionButtonsColor} onPress={() => navigation.navigate('UserInitializationPage')} />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login/signup page switch */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: global.textColor }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Log in here.</Text>
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

export default SignUpPage;
