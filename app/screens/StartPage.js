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
      <StatusBar backgroundColor={global.statusBarColor} barStyle='light-content' />
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {/* Logo + title */}
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text style={{ fontWeight: 'bold', color: global.textColor, fontSize: 44 }}>myGrowth</Text>
        <Text style={{ fontWeight: 'bold', color: global.textColor, fontSize: 20, marginBottom: 40 }}>Your General Wellness Tracker</Text>
        {/* Sign up + login buttons */}
        <View style={styles.buttons}>
          <Button title='SIGN UP' color={global.optionButtonsColor} onPress={() => navigation.navigate('SignUpPage')} />
          <View style={{ marginVertical: 8 }} />
          <Button title='LOG IN' color={global.optionButtonsColor} onPress={() => navigation.navigate('LoginPage')} />
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
