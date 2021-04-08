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
  const date = route.params.date;
  console.log('hello ', date);
  const entry = route.params.entry;
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
            source={require('../../shared/assets/journal-banner.png')}/>
          <Image
            style={styles.fillerImage}
            source={require('../../shared/assets/SettingsGirlReading2.png')}
          />

          {/* Success text */}
          <View style={{ marginVertical: '10%', marginHorizontal: '5%', alignItems: 'center' }}>
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
  bannerImage: {
    marginTop: '-6%',
  },
  fillerImage: {
    flex: 1,
    maxHeight: '50%',
    maxWidth: '90%',
    marginTop: '-4%',
    marginBottom: '-12%',
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
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
