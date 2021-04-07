import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

function GoalComplete({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
      >
        <View style={{ alignItems: 'center', }}>

          {/* Congratulations banner + filler image */}
          <Image source={require('../../shared/assets/goals-banner.png')}/>
          <View style={{ marginVertical: '-4%' }}/>
          <View style={{ width: '90%', height: '50%', }}>
            <Image
              style={styles.fillerImage}
              source={require('../../shared/assets/goals-trophy.png')}
            />
          </View>
          <View style={{ marginVertical: '-4%' }}/>
          
          <View style={{ marginVertical: '10%', alignItems: 'center' }}>
            <Text style={styles.text}>You have completed a goal!</Text>
            <View style={styles.inlineRow}>
              <Text style={styles.text}>You have gained +30</Text>
              <Icon
                name='star'
                type='MaterialCommunityIcons'
                color='#816868'
                style={{ marginLeft: -2 }}
              />
              <Text style={styles.text}>!</Text>
            </View>
          </View>

          {/* Return to Goals + Return to Home buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='Return to Goals'
                color='#A5DFB2'
                onPress={() => navigation.navigate('Goals')}
              />
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button
                title='Return to Home'
                color='#A5DFB2'
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export { GoalComplete };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fillerImage: {
    flex: 1,
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  iconView: {
    flex: 1,
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
