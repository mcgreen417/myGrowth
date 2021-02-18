import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const AccountPanel = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Here you can edit your account settings. Please select from one of the
          options below.
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Button title='User Settings' />
        <Button title='Generate Report' />
        <Button title='Link Your Account' />
        <Button title='Report a Problem' />
        <Button title='Leave a Review' />
        <Button title='About' />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default AccountPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
});
