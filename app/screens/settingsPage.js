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

function settingsPage({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        {/* page info and icon*/}

        {/* acct protection */}
        {/* require pin when opening app */}
        {/* set user pin */}
        {/* change pass */}
        {/* change email */}
        {/* link your acct */}

        {/* customization */}
        {/* personal profile */}
        {/* change gardener avatar */}

        {/* health entry settings */}
        {/* stress levels */}
        {/* daily activities */}

        {/* nav bar */}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: 300,
  },
  line: {
    width: 320,
    borderColor: '#938F8E',
    borderBottomWidth: 1,
    minHeight: 1,
  },
  line2: {
    width: 320,
    borderColor: '#938F8E',
    borderBottomWidth: 1,
    minHeight: 1.5,
  },
  text: {
    color: 'black',
    textDecorationLine: 'none',
  },
  info: {
    color: 'black',
    fontSize: 18,
  },
  heading: {

  }
});

export default settingsPage;