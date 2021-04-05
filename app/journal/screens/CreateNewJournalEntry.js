import React, { useState } from 'react';
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
import { Auth, API } from 'aws-amplify';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from 'react-native-gesture-handler';

const CreateNewJournalEntry = ({ navigation }) => {
  const [entry, setEntry] = useState('');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [dateInsert, setDateInsert] = useState(date.toISOString().slice(0, 10));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //console.log(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDateInsert(selectedDate.toISOString().slice(0, 10));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
                  onPress={() => saveEntry(dateInsert, entry, navigation)}
                >
                  SAVE
                </Text>
                <TouchableOpacity onPress={showDatepicker}>  
                  <Icon name='event' type='material' color='#816868' />
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
                <Icon name='schedule' type='material' color='#816868' />
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

async function saveEntry(date, entry, navigation) {
  const res = await API.graphql({
    query: mutations.updateJournalEntry,
    variables: {Timestamp: date, Entry: entry}
  });

  navigation.navigate('JournalEntryCompletion', {date, entry});
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
