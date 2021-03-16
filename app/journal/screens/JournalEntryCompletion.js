import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

const JournalEntryCompletion = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('../../shared/assets/goals-banner.png')}
      />

      <View style={{ marginVertical: '10%', alignItems: 'center' }}>
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
                journal_date: '2021-09-02T09:34:59Z',
                journal_entry:
                  'I think this is enough entries just to show that this screen scrolls appropriately for the month of November, yeah! Just one...',
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
    </SafeAreaView>
  );
};

export default JournalEntryCompletion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    justifyContent: 'center',
    alignItems: 'center',
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
