import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Pressable,
  Image,
} from 'react-native';

import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

function GoalComplete({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.bannerImage} source={require('../../shared/assets/goals-banner.png')} />

      <View style={{ marginVertical: '10%', alignItems: 'center' }}>
        <Text style={styles.text}>You have completed a goal!</Text>
        <View style={styles.inlineRow}>
          <Text style={styles.text}>+30</Text>
          <Icon 
            name='star' 
            type='MaterialCommunityIcons' 
            color='#816868' 
            style={{ marginLeft: -2 }}
          />
        </View>
      </View>

      {/* Return to Goals + Return to Home buttons */}
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', }}>
        <View style={{ width: '42.5%' }}>
          <Button title='Return to Goals' color='#A5DFB2' onPress={() => navigation.navigate('GoalsPage')}/>
        </View>
        <View style={{ width: '5%' }} />
        <View style={{ width: '42.5%' }}>
          <Button title='Return to Home' color='#A5DFB2' onPress={() => navigation.navigate('HomePage')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { GoalComplete };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  fillerImage: {
    height: 400,
    width: 360,
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#816868',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 20,
  },
});
