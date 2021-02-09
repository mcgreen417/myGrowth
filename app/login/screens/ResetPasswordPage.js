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
          height: '40%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text>myGrowth</Text>
        <Text>Your General Wellness Tracker</Text>
        <Text>You may now reset your password.</Text>
        <Text>Enter your new password below.</Text>
      </View>
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
        <Button title='SUBMIT' color='#A5DFB2' />
        <View style={{ marginVertical: 8 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
            Return to login.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
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
