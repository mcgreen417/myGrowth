import React, { useState } from 'react';
import { Pressable } from 'react-native';
import {
  Button,
  StyleSheet,
  Modal,
  Text,
  View,
  SafeAreaView,
  ScrollView,
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
  const journal_entry = route.params.entry;
  const d = new Date(journal_date);
  const [modalVisible, setModalVisible] = useState(false);

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
      {/* delete entry modal */}
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={{backgroundColor: 'white', width: '75%', height: '20%'}}>
              <Text style={styles.textModal}>Are you sure you want to delete this entry?</Text>

              <View style={styles.inlineRow}>
                <Button 
                  title='Yes'
                  onPress={() => {
                    deleteEntry(date, navigation);
                    setModalVisible(!modalVisible);
                  }}
                />
                <Button 
                  title='No'
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: '5%', marginTop: '2.5%' }}>
        {/* Back, edit entry, & delete entry buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '24%' }}>
          <Icon 
            name='arrow-back' 
            color='#816868' 
            onPress={() => getEntries(navigation)}
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
            onPress={() => setModalVisible(!modalVisible)}
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

      <ScrollView>
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
      </ScrollView>
      
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

async function getEntries(navigation) {
  const date = new Date();
  const datePass = date.toISOString();
  const res = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: date.toISOString().slice(0, 7)}
  });

  const arr = res.data.getJournalEntries.journalEntries;

  navigation.navigate('JournalHistory', {arr, datePass})
}

async function deleteEntry(date, navigation) {
  const datePass = new Date(date);
  const dateRet = datePass.toISOString();

  const res = await API.graphql({
    query: mutations.removeJournalEntry,
    variables: {Timestamp: datePass.toISOString().slice(0, 10)}
  });

  console.log(res);

  const forRet = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: datePass.toISOString().slice(0, 7)}
  });

  const arr = forRet.data.getJournalEntries.journalEntries;
  navigation.navigate('JournalHistory', {arr, dateRet});
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
  },
  textModal: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});
