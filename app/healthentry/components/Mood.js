import React from 'react';
import { Dimensions } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Mood = () => {
  return (
    <View style={{ width: '80%' }}>
      <View>
        <Text>Mood</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <Icon
            type='fontisto'
            name='mad'
            size={(Dimensions.get('window').width * 0.8) / 5 - 10}
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>Awful</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            type='fontisto'
            name='frowning'
            size={(Dimensions.get('window').width * 0.8) / 5 - 10}
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>Bad</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            type='fontisto'
            name='neutral'
            size={(Dimensions.get('window').width * 0.8) / 5 - 10}
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>Okay</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            type='fontisto'
            name='smiling'
            size={(Dimensions.get('window').width * 0.8) / 5 - 10}
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>Good</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Icon
            type='fontisto'
            name='smiley'
            size={(Dimensions.get('window').width * 0.8) / 5 - 10}
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>Great</Text>
        </View>
      </View>
      <View style={{ width: '50%' }}>
        <Button title='+ Add Feelings' />
      </View>
    </View>
  );
};

export default Mood;

const styles = StyleSheet.create({});
