import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const EntryCompletion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
      >
        <View style={{ alignItems: 'center', }}>

          {/* Congratulations banner + filler image */}
          <Image source={require('../../shared/assets/health-entry-banner-edited.png')}/>
          <View style={{ marginTop: '-4%' }}/>
            <View style={{ width: '90%', height: '60%', }}>
              <Image
                style={styles.fillerImage}
                source={require('../../shared/assets/health-entry-watering-plant.png')}
              />
            </View>
          
          <View style={{ marginTop: '-4%', marginBottom: '10%', alignItems: 'center' }}>
            <Text style={styles.text}>You've watered your plant today!</Text>
            <Text style={styles.text}>You have gained +5 Growth Points!</Text>
          </View>

          {/* View Entry + Return to Home buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='View Health Entry'
                color='#A5DFB2'
                onPress={() => navigation.navigate('')}
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
};

export default EntryCompletion;

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
    width: '100%',
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
    fontSize: 22,
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
