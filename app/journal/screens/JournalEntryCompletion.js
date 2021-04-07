import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const JournalEntryCompletion = ({ route, navigation }) => {
  const {date, entry} = route.params;
  console.log(date);
  console.log(entry);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
      >
        <View style={{ alignItems: 'center' }}>
          {/* Congratulations banner + filler image */}
          <Image 
            style={styles.bannerImage}
            source={require('../../shared/assets/journal-banner.png')}
          />
          <View style={{ marginVertical: '-4%' }}/>
          <View style={{ width: '90%', height: '60%', }}>
            <Image
              style={styles.fillerImage}
              source={require('../../shared/assets/SettingsGirlReading2.png')}
            />
          </View>
          <View style={{ marginVertical: '-2%' }}/>

          {/* Success text */}
          <View style={{ marginBottom: '10%', marginHorizontal: '5%', alignItems: 'center' }}>
            <Text style={styles.text}>You have completed a journal entry!</Text>
          </View>

          {/* View Journal Entry + Return to Home buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='View Entry'
                color='#A5DFB2'
                onPress={() =>
                  navigation.navigate('ViewJournalEntry', {
                    date,
                    entry
                  })
                }
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

export default JournalEntryCompletion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  fillerImage: {
    flex: 1,
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
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
});
