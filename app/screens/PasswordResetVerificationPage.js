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

function PasswordResetVerificationPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={global.statusBarColor} barStyle='light-content' />
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {/* Logo + title + page instructions */}
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text style={{ fontWeight: 'bold', color: global.textColor, fontSize: 44 }}>myGrowth</Text>
        <Text style={{ fontWeight: 'bold', color: global.textColor, fontSize: 20, marginBottom: 16 }}>Your General Wellness Tracker</Text>
        <Text style={{ color: global.textColor, marginBottom: 12, textAlign: 'center' }}>
          A password reset code has been sent to your e-mail.{"\n"}
          Enter the password reset code you received below.
        </Text>
        {/* Reset code text entry + verify button */}
        <View style={styles.buttons}>
          <TextInput style={styles.textInput} placeholder='Reset Code' />
          <View style={{ marginVertical: 8 }} />
          <Button title='VERIFY' color={global.optionButtonsColor} onPress={() => navigation.navigate('ResetPasswordPage')} />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Resend password reset code */}
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: global.textColor }}>Didn't receive a reset code? </Text>
            <TouchableOpacity>
              <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Resend e-mail.</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Login page redirect */}
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={{ color: global.hyperlinkedTextColor, textDecorationLine: 'underline' }}>Return to login.</Text>
          </TouchableOpacity>
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

export default PasswordResetVerificationPage;
