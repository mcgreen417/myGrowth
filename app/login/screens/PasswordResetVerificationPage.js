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
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style={styles.pageSetup}>

        {/* Logo + title + page instructions */}
        <Image style={styles.logo} source={require('../../shared/assets/icon.png')}/>
        <Text style={styles.textTitle}>myGrowth</Text>
        <Text style={styles.textSubtitle}>Your General Wellness Tracker</Text>
        <Text style={styles.textInstructions}>
          A password reset code has been sent to your e-mail.{'\n'}
          Enter the password reset code you received below.
        </Text>

        {/* Reset code text entry + verify button */}
        <View style={styles.buttons}>
          <TextInput style={styles.textInput} placeholder='Reset Code' />
          <View style={{ marginVertical: 8 }} />
          <Button title='VERIFY' color='#A5DFB2' onPress={() => navigation.navigate('ResetPasswordPage')}/>
          <View style={{ marginVertical: 8 }} />
        </View>

        {/* Resend password reset code */}
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textReg}>Didn't receive a reset code?{' '}</Text>
            <TouchableOpacity>
              <Text style={styles.textLink}>Resend e-mail.</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login page redirect */}
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.textLink}>Return to login.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  logo: {
    height: 100,
    width: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    borderColor: 'black',
  },
  pageSetup:{
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: '#A5DFB2',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#f4f3f4',
    textAlign: 'center',
  },
  textInstructions: {
    color: '#816868', 
    marginBottom: 12, 
    textAlign: 'center'
  },
  textLink: {
    color: '#A5DFB2', 
    textDecorationLine: 'underline',
  },
  textReg: {
    color: '#816868',
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

export default PasswordResetVerificationPage;
