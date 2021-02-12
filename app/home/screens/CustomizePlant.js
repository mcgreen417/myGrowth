import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const CustomizePlant = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Select and item to change your palnt's appearance!</Text>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Button title='item1' />
        <Button title='item2' />
        <Button title='item3' />
        <Button title='item4' />
      </View>
      <View>
        <Button title='Clear changes' />
        <Button title='Confirm changes' />
      </View>
      <View>
        <Text>Want more options? </Text>
        <Button title='Visit the plant shop ->' />
      </View>
    </SafeAreaView>
  );
};

export default CustomizePlant;

const styles = StyleSheet.create({});
