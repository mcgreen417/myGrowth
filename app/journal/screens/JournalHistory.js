import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import * as queries from '../../../src/graphql/queries';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const monthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function JournalHistory({ route, navigation }) {
  const arr = route.params.arr;
  const datePass = route.params.datePass;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(datePass));
  const [mode, setMode] = useState('date');
  const [journalEntries, setJournalEntries] = useState(arr);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //console.log(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    getEntries(currentDate, navigation);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Text style={styles.pageDescription}>
              Select a past journal entry to view. Use the arrows below to select a month.
            </Text>
            <Image
              style={styles.avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          {/* Date display/selector */}
          <View style={{ width: '90%', margin: 10, flexDirection: 'row' }}>
            <Pressable onPress={showDatepicker}>
              <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Icon 
                  name='calendar-sharp' 
                  type='ionicon' 
                  color='#816868' 
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.textLink}>{monthNames[date.getMonth()] + ' ' + date.getFullYear()}</Text>
                <Icon 
                  name='arrow-drop-down' 
                  type='material' 
                  color='#816868' 
                />
              </View>
            </Pressable>
            {show && (
                <DateTimePicker
                  testID='dateTimePicker'
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display='default'
                  onChange={onChange}
                />
              )}

            {/* Back/forward arrows (change month) */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
              <Pressable
                onPress={() => {
                  date.setMonth(date.getMonth() - 1);
                  getEntries(date, navigation);
                }}
              >
                <Icon name='arrow-left' color='#816868' />
              </Pressable>
              <Pressable
                onPress={() => {
                  date.setMonth(date.getMonth() + 1);
                  getEntries(date, navigation);
                }}
              >
                <Icon name='arrow-right' color='#816868' />
              </Pressable>
            </View>
          </View>

          {/* Journal entry previews */}
          <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
            <View style={{ marginLeft: '2.5%', marginRight: '4%' }}>
              {journalEntries.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate('ViewJournalEntry', {
                      date: item.Timestamp,
                      entry: item.Entry,
                      updateDate: item.LastUpdated
                    })
                  }}>
                  <View style={styles.journalItemSelect}>
                    {/* Journal entry date */}
                    <View style={{ marginRight: 20, alignItems: 'center' }}>
                      <Text style={styles.journalDate}>{monthAbbreviations[new Date(item.Timestamp).getMonth()]}</Text>
                      <Text style={styles.journalDate}>{new Date(item.Timestamp).getDate()}</Text>
                      <Text style={styles.journalDate}>{new Date(item.Timestamp).getFullYear()}</Text>
                    </View>
                    {/* Journal entry text preview */}
                    <Text numberOfLines={3} style={styles.journalText}>{item.Entry}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
            <View style={styles.pageEnd}/>
          </ScrollView>
        </View>
      <NavBar navigation={navigation} journal={true} />
    </SafeAreaView>
  );
}

async function getEntries(date, navigation) {
  const datePass = date.toISOString();
  const res = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: date.toISOString().slice(0, 7)}
  });

  const arr = res.data.getJournalEntries.journalEntries;

  navigation.push('JournalHistory', {arr, datePass});
}

export default JournalHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginHorizontal: ' 5%',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    alignItems: 'center',
    height: '100%',
  },
  journalDate: {
    color: '#A5DFB2',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -4,
  },
  journalItemSelect: {
    marginVertical: 8,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderWidth: 3,
    borderColor: '#816868',
    backgroundColor: '#816868',
    
  },
  journalText: {
    fontSize: 16,
    color: '#E5E5E5',
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  textLink: {
    fontSize: 16, 
    textDecorationLine: 'underline', 
    color: '#4CB97A',
  },
});