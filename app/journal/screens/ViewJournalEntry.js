import React from 'react';
import { Pressable } from 'react-native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

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

const ViewJournalEntry = ({ route, navigation }) => {

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

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: '5%', marginTop: '2.5%' }}>
        {/* Back, edit entry, & delete entry buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '24%' }}>
          <Icon 
            name='arrow-back' 
            color='#816868' 
            onPress={() => navigation.navigate('JournalHistory')}
          />
          <Icon 
            name='pencil' 
            type='material-community' 
            color='#816868' 
            onPress={() => navigation.navigate('CreateNewJournalEntry')}
          />
          <Icon 
            name='close' 
            type='ionicon' 
            color='#816868' 
          />
        </View>
        {/* Word cloud view button */}
        <Pressable 
          style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }} 
          onPress={() =>
            navigation.navigate('WordCloudDisplay', {
              journal_date: journal_date,
              journal_entry: journal_entry,
            })
        }>
          <Text style={{ color: '#816868', fontSize: 16, marginRight: 10 }}>Word Cloud View</Text>
          <Icon name='cloud' color='#816868' />
        </Pressable>
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

      {/* Journal entry body */}
      <View style={{ marginHorizontal: '5%' }}>
        {/* Entry creation time (date reflected in date selector) */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textBold}>Entry created at </Text>
          <Text style={styles.textDateTime}>{time}</Text>
        </View>
        {/* Date/time of last entry edit */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textBold}>Last edited on </Text>
          <Text style={styles.textDateTime}>{date}</Text>
          <Text style={styles.textBold}> at </Text>
          <Text style={styles.textDateTime}>{time}</Text>
        </View>
        {/* Entry text */}
        <View style={{ marginVertical: 8 }} >
          <Text style={styles.text}>{journal_entry}</Text>
        </View>
      </View>
      
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default ViewJournalEntry;

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
  textBold: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
  },
  textDateTime: {
    fontSize: 16,
    color: '#4CB97A',
    fontWeight: 'bold',
  }
});
