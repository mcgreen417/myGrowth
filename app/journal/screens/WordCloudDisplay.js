import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import { Auth, API } from 'aws-amplify';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WordCloudDisplay = ({ route, navigation }) => {

  const { journal_date, journal_entry } = route.params;
  const d = new Date(journal_date);

  const date =
    monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

  const time =
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am');

  const strp_entry = journal_entry.replace(/[\W_]+/g, ' ');
  const split_entry = strp_entry.split(' ');

  const counts = Object.create(null);
  split_entry.forEach((entry) => {
    counts[entry] = counts[entry] ? counts[entry] + 1 : 1;
  });

  delete counts[''];

  // console.log(counts);

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: '5%', marginTop: '2.5%' }}>
        {/* Back, edit entry, & delete entry buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '24%' }}>
          <Icon 
            name='arrow-back' 
            color='#816868' 
            onPress={() => getEntries(navigation, journal_date)}
          />
        </View>
        {/* Word cloud view button */}
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }} 
          onPress={() =>
            navigation.navigate('ViewJournalEntry', {
              journal_date: journal_date,
              journal_entry: journal_entry,
            })
          }
        >
          <Text style={{ color: '#816868', fontSize: 16, marginRight: 10 }}>Journal Entry View</Text>
          <Icon name='bookmark' color='#816868' />
        </TouchableOpacity>
      </View>

      {/* Month select */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginTop: '4%' }}>
        <Icon name='arrow-left' color='#816868' />
        <Text style={styles.heading}>{date}</Text>
        <Icon name='arrow-right' color='#816868' />
      </View>
      {/* Heading divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>

      <ScrollView>
        <View style={{ marginHorizontal: '5%' }}>
          {Object.keys(counts).map(function (key, index) {
            return (
              <View key={key} style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{'"' + key + '": '}</Text>
                <Text style={styles.text}>{counts[key]}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

async function getEntries(navigation, journal_date) {
  const date = new Date(journal_date);
  const timerange = {start: new Date(date.getFullYear(), date.getMonth(), 1), end: new Date(date.getFullYear(), date.getMonth() + 1, 0)};
  const datePass = date.toISOString();
  const res = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: timerange}
  });

  const arr = res.data.getJournalEntries.journalEntries;

  navigation.navigate('JournalHistory', {arr, datePass})
}

export default WordCloudDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginHorizontal: '5%'
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    color: '#816868',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
});
