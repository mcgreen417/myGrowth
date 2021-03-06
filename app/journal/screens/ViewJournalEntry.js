import React, { useState } from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
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

const ViewJournalEntry = ({ route, navigation }) => {
  const journal_date  = route.params.date;
  const journal_updateDate = route.params.updateDate;
  const journal_entry = route.params.entry;
  var displayEdit = true;

  if(journal_date === journal_updateDate) {}
    displayEdit = false;
  
  const d = new Date(journal_date);
  const updateD = new Date(journal_updateDate);
  const [modalVisible, setModalVisible] = useState(false);

  const date =
    monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

  const updateDate = 
    monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

  const updateTime = 
    (updateD.getHours() % 12 == 0 ? 12 : updateD.getHours() % 12) +
    ':' +
    (updateD.getMinutes() < 10 ? '0' + updateD.getMinutes() : updateD.getMinutes()) +
    (updateD.getHours() > 12 ? 'pm' : 'am');

  const time =
    (d.getHours() % 12 == 0 ? 12 : d.getHours() % 12) +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am');

  return (
    <SafeAreaView style={styles.container}>
      {/* Delete goal modal */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setModalVisible(!modalVisible)}
          >
            <Pressable 
              style={styles.modalContainer}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='pencil'
                    type='material-community'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.textAlt}>Delete Entry</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <Text style={styles.text}>
                  Are you sure you wish to delete this journal entry?
                </Text>
                <Text style={styles.textBoldAlt}>This action cannot be undone.</Text>
              </View>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginVertical: 10, marginHorizontal: '5%', }}>
                <TouchableOpacity 
                  style={{ marginRight: 20, }}
                  onPress={() => {
                    deleteEntry(journal_entry, journal_date, navigation);
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textDateTime}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textDateTime}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: '5%', marginTop: '2.5%' }}>
        {/* Back, edit entry, & delete entry buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '24%' }}>
          <Icon 
            name='arrow-back' 
            color='#816868' 
            onPress={() => getEntries(navigation, journal_date)}
          />
          <Icon 
            name='pencil' 
            type='material-community' 
            color='#816868' 
            onPress={() => goToEdit(navigation, journal_entry, journal_date)}
          />
          <Icon 
            name='close' 
            type='ionicon' 
            color='#816868'
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
        {/* Word cloud view button */}
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }} 
          onPress={() =>
            navigation.navigate('WordCloudDisplay', {
              journal_date: journal_date,
              journal_entry: journal_entry,
            })
        }>
          <Text style={{ color: '#816868', fontSize: 16, marginRight: 10 }}>Word Cloud View</Text>
          <Icon name='cloud' color='#816868' />
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
        {/* Journal entry body */}
        <View style={{ marginHorizontal: '5%' }}>
          {/* Entry creation time (date reflected in date selector) */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textBold}>Entry created at </Text>
            <Text style={styles.textDateTime}>{time}</Text>
          </View>

          {/* Date/time of last entry edit */}
          {displayEdit && <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textBold}>Last edited on </Text>
            <Text style={styles.textDateTime}>{updateDate}</Text>
            <Text style={styles.textBold}> at </Text>
            <Text style={styles.textDateTime}>{updateTime}</Text>
          </View>}
          {/* Entry text */}
          <View style={{ marginVertical: 8 }} >
            <Text style={styles.text}>{journal_entry}</Text>
          </View>
        </View>
      </ScrollView>
      
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function goToEdit(navigation, entry, date) {
  navigation.navigate('CreateNewJournalEntry', {entry, date});
}

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

async function deleteEntry(entry, date, navigation) {
  const dateRet = new Date(date);
  const timerange = {start: new Date(dateRet.getFullYear(), dateRet.getMonth(), 1), end: new Date(dateRet.getFullYear(), dateRet.getMonth() + 1, 0)};
  const datePass = dateRet.toISOString();

  const res = await API.graphql({
    query: mutations.removeJournalEntry,
    variables: {Timestamp: dateRet.toISOString(), Entry: entry}
  });

  const forRet = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: timerange}
  });

  const arr = forRet.data.getJournalEntries.journalEntries;

  navigation.push('JournalHistory', {arr, datePass});
}

export default ViewJournalEntry;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
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
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    alignItems: 'center',
    width: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  modalHeaderBar: {
    backgroundColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  textAlt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBold: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
  },
  textBoldAlt: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    marginTop: 4,
  },
  textDateTime: {
    fontSize: 16,
    color: '#4CB97A',
    fontWeight: 'bold',
  },
  textModal: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});
