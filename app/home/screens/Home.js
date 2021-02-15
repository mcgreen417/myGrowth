import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Good Morning, Firstname!</Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
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
        <Image source={require('../../shared/assets/icon.png')} />
        <View>
          <Text>Why don't you try doing one of these?</Text>
          <Button title='Write a journal entry' />
          <Button title='Create a new goal' />
          <Button title='Complete a goal' />
          <Button title='View your history' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
