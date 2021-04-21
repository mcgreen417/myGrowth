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
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import * as queries from '../../../src/graphql/queries';
import DateTimePicker from '@react-native-community/datetimepicker';
import Sweat from '../../shared/assets/svgs/sweat-emoji.svg'

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

  if(arr.length > 0) {  
    const datePass = route.params.datePass;
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [pressed, setPressed] = useState(false);
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
                style={styles.avatarFlipped}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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

              {/* Search toggle + back/forward arrows (change month) */}
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <Icon
                  name='search'
                  color='#816868'
                  onPress={() => setShowSearch(!showSearch)}
                />
                <View style={{ marginRight: 4, }}/>
                <Icon 
                  name='arrow-left' 
                  color='#816868'
                  onPress={() => {
                    date.setMonth(date.getMonth() - 1);
                    getEntries(date, navigation);
                  }} 
                />
                <Icon 
                  name='arrow-right' 
                  color='#816868'
                  onPress={() => {
                    date.setMonth(date.getMonth() + 1);
                    getEntries(date, navigation);
                  }} 
                />
              </View>
            </View>

            {showSearch &&
              <View style={{ marginTop: 10, marginBottom: 10, }}>
              <View style={styles.textInputView}>
                <View style={styles.labelView}>
                  <Text
                    style={{
                      color: pressed ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Search Term
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressed ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 10,
                }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', top: -8, }}>
                    <TextInput
                      placeholder='Search term'
                      fontSize={16}
                      color='#816868'
                      value={searchTerm}
                      onChangeText={setSearchTerm}
                      maxLength={99}
                      onFocus={() => {setPressed(true)}}
                      style={{ 
                        paddingLeft: 16, 
                        flexWrap: 'wrap', 
                        width: Math.round((Dimensions.get('window').width * 7.5/10)), 
                      }}
                    />
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 16, }}>
                      <Icon
                        name='chevron-right'
                        color='#816868'
                        onPress={() => navigation.navigate('')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            }

            {/* Journal entry previews */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
              <View style={{ width: Math.round(Dimensions.get('window').width * 9/10), alignSelf: 'center', }}>
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

  else
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
              Uh-oh! <Sweat />
            </Text>
            <Image 
              style={{ 
                width: Math.round(Dimensions.get('window').width * 0.5),
                height: Math.round(Dimensions.get('window').width * 0.6), 
                alignSelf: 'center',
              }}
              source={require('../../shared/assets/bee-sprites/sad-bee.png')}/>
            <View style={{ marginVertical: '10%' }}>
              <Text style={{ fontSize: 20, color: '#816868', fontWeight: 'bold', textAlign: 'center', }}>
                It seems like you don't have any journal entries to look back on!
              </Text>
              <Text style={{ fontSize: 20, color: '#816868', fontWeight: 'bold', textAlign: 'center', marginTop: '3%', }}>
                Try writing a journal entry first!
              </Text>
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
                title='Write New Entry'
                color='#A5DFB2'
                onPress={() => navigation.navigate('CreateNewJournalEntry')}
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

async function getEntries(date, navigation) {
  const datePass = date.toISOString();
  const timerange = {start: new Date(date.getFullYear(), date.getMonth(), 1), end: new Date(date.getFullYear(), date.getMonth() + 1, 0)};
  const res = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: timerange}
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
  avatarFlipped: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    transform: [
      { scaleX: -1 }
    ]
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
    marginTop: 20,
    marginBottom: 6,
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
  label: {
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 9/10),
    position: 'relative',
  },
  textLink: {
    fontSize: 16, 
    textDecorationLine: 'underline', 
    color: '#4CB97A',
  },
});