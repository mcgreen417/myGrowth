import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';

const PlantShop = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Select an item and check out how it looks!</Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <StoreItems />
      </View>
      <View>
        <Button title='Clear changes' />
        <Button title='Purchase all shown' />
      </View>
      <View>
        <Text>Need more stars? </Text>
        <Button title='Create a new goal ->' />
      </View>
    </SafeAreaView>
  );
};

export default PlantShop;

const styles = StyleSheet.create({});
