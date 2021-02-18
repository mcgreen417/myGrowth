import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Good Morning, Firstname!</Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Button title='<- Customize plant' />
        <Button title='Enter plant shop ->' />
      </View>
      <View>
        <Button title='Write a new entry! You wrote your last entry on (date) at (time)' />
        <Button title='View past entries ->' />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
        <View>
          <Text>Why don't you try doing one of these?</Text>
          <Button title='Write a journal entry' />
          <Button title='Create a new goal' />
          <Button title='Complete a goal' />
          <Button title='View your history' />
        </View>
      </View>
      <NavBar home={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomePage;

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
