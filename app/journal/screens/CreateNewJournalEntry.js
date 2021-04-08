import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';
import { Auth, API } from 'aws-amplify';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const CreateNewJournalEntry = ({ navigation, route }) => {
  var datePassed = new Date();
  var entryPassed = '';
  const updateDate = new Date();

  if(route.params != null) {
    datePassed = route.params.date;
    entryPassed = route.params.entry;
  }

  const [entry, setEntry] = useState(entryPassed);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(datePassed);
  const [mode, setMode] = useState('date');

  getPastEntry(date, navigation);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    setEntry(getPastEntry(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  }

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView stickyHeaderIndices={[0]} keyboardShouldPersistTaps='handled'>
        <View style={{ backgroundColor: '#F6EFED' }}>
          <View style={{ marginBottom: 10, }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
                marginTop: 12,
                marginBottom: 6,
              }}>
              {/* Text format buttons */}
              <View 
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  width: '40%',
                }}>
                <Icon
                  name='arrow-back-outline'
                  type='ionicon'
                  color='#816868'
                  onPress={() => navigation.navigate('Journal')}
                />
                <Text 
                  style={styles().heading}
                  onPress={() => saveEntry(date, entry, navigation, updateDate)}
                >
                  SAVE
                </Text>
                <TouchableOpacity onPress={showDatepicker}>  
                  <Icon name='event' type='material' color='#816868' />
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker}>
                  <Icon name='schedule' type='material' color='#816868' />
                </TouchableOpacity>
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
              </View>

              {/* Text format buttons */}
              <View style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                width: '44%',
              }}>
                <Icon name='format-bold' type='material' color='#816868' />
                <Icon name='format-italic' type='material' color='#816868' />
                <Icon name='format-underline' type='material' color='#816868' />
                <Icon name='format-list-numbered' type='material' color='#816868' />
                <Icon name='format-list-bulleted' type='material' color='#816868' />
              </View>
            </View>
            <View style={styles().dividerView}>
              <View style={styles().divider}></View>
            </View>
          </View>
        </View>

        <View style={styles().input}>
          <TextInput 
            multiline style={styles.text}
            value={entry}
            onChangeText={(entry) => setEntry(entry)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

async function getPastEntry(date) {
  const res = await API.graphql({
    query: queries.getJournalEntry,
    variables: {Timestamp: date}
  });

  if(res.data.getJournalEntry != null)
    return res.data.getJournalEntry.Entry;

  else
    return '';
}

async function saveEntry(datePass, entry, navigation, updateDatePass) {
  const date = datePass.toISOString();
  const updateDate = updateDatePass.toISOString();
  
  const res = await API.graphql({
    query: mutations.updateJournalEntry,
    variables: {Timestamp: date, Entry: entry, LastUpdated: updateDate}
  });

  console.log(res);

  navigation.navigate('JournalEntryCompletion', {date, entry, updateDate});
}

export default CreateNewJournalEntry;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginHorizontal: '5%',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  heading: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  pageEnd: {
    marginBottom: 100,
  },
  text: {
    fontSize: 16,
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
  input: {
    height: '100%',
    marginHorizontal: '5%',
    borderRadius: 2,
  },
});
