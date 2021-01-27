import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Button,
} from 'react-native';

function StartPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <Text style={{fontWeight: 'bold', color: '#816868', fontSize: 44}}>myGrowth</Text>
      <Text style={{fontWeight: 'bold', color: '#816868', fontSize: 20, marginBottom: 40}}>Your General Wellness Tracker</Text>
      <View style={styles.buttons}>
        <Button
          title='SIGN UP'
          color='#A5DFB2'
          onPress={() => navigation.navigate('SignUpPage')}
        />
        <View style={{marginVertical: 8}} />
        <Button
          title='LOG IN'
          color='#A5DFB2'
          onPress={() => navigation.navigate('LoginPage')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: -100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 50,
  },
});

export default StartPage;
