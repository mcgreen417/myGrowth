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
      <Text>myGrowth</Text>
      <Text>Your General Wellness Tracker</Text>
      <View style={styles.buttons}>
        <Button
          title='SIGN UP'
          color='#A5DFB2'
          onPress={() => navigation.navigate('SignUpPage')}
        />
        <View style={{ marginVertical: 8 }} />
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
    width: 100,
    height: 100,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
});

export default StartPage;
