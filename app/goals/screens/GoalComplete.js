import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Party from '../../shared/assets/svgs/party-emoji.svg'

function GoalComplete({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
      >
        <View style={{alignContent: 'center', marginHorizontal: '10%', marginTop: '-5%' }}>
          <Text style={{ 
            fontSize: 44, 
            color: '#816868', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '10%',
          }}>
            Congrats! <Party height={44} width={44} />
          </Text>
          <Image 
            style={{ 
              width: Math.round(Dimensions.get('window').width * 0.5),
              height: Math.round(Dimensions.get('window').width * 0.6), 
              alignSelf: 'center',
            }}
            source={require('../../shared/assets/bee-sprites/jumping-bee.png')}
          />
          <View style={{ marginVertical: '10%' }}>
            <Text style={{ fontSize: 20, color: '#816868', fontWeight: 'bold', textAlign: 'center', }}>
              You have completed a goal!
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ fontSize: 20, color: '#816868', fontWeight: 'bold', textAlign: 'center', }}>
                You have gained +30 
              </Text>
              <Icon
                name='star'
                type='MaterialCommunityIcons'
                color='#816868'
              />
            </View>
          </View>
        </View>

        {/* New Health Entry + Return to Home buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{ minWidth: '37.5%' }}>
            <Button
              title='Return to Goals'
              color='#A5DFB2'
              onPress={() => navigation.navigate('Goals')}
            />
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ minWidth: '37.5%' }}>
            <Button
              title='Return to Home'
              color='#A5DFB2'
              onPress={() => navigation.navigate('Home')}
            />
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
