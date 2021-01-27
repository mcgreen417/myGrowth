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
        <Text style={{fontWeight: 'bold', color: '#816868', fontSize: 36}}>myGrowth</Text>
        <Text style={{fontWeight: 'bold', color: '#816868', fontSize: 16, marginBottom: 20}}>Your General Wellness Tracker</Text>
      </View>
      <View style={styles.buttons}>
        <TextInput style={styles.textInput} placeholder='Username' />
        <View style={{ marginVertical: 8 }} />
        <TextInput style={styles.textInput} placeholder='E-mail Address' />
        <View style={{ marginVertical: 8 }} />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
        />
        <View style={{ marginVertical: 8 }} />
        <TextInput
          style={styles.textInput}
          placeholder='Confirm Password'
          secureTextEntry={true}
        />
        <View style={{ marginVertical: 8 }} />
        <Button title='SIGN UP' color='#A5DFB2' />
        <View style={{ marginVertical: 8 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
            Log in here.
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 8 }} />
      <View>
        <Text style={{}}>By continuing, you're accepting our </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity>
            <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>
              Privacy Policy.
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

export default SignUpPage;
