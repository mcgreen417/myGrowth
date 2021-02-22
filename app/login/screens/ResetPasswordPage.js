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

function ResetPasswordPage({ navigation }) {
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
          You may now reset your password.{'\n'}
          Enter your new password below.
        </Text>
        {/* New password + confirm password buttons, submit button */}
        <View style={styles.buttons}>
          <TextInput
            style={styles.textInput}
            placeholder='New Password'
            secureTextEntry={true}
          />
          <View style={{ marginVertical: 8 }} />
          <TextInput
            style={styles.textInput}
            placeholder='Confirm New Password'
            secureTextEntry={true}
          />
          <View style={{ marginVertical: 8 }} />
          <Button
            title='SUBMIT'
            color='#A5DFB2'
            onPress={() => navigation.navigate('LoginPage')}
          />
          <View style={{ marginVertical: 8 }} />
        </View>
        {/* Login page redirect */}
        <View style={{ flexDirection: 'row' }}>
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

export default ResetPasswordPage;
