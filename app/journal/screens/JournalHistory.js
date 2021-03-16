import React from 'react';
import { Pressable } from 'react-native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
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

let d = new Date();

const journalEntries = new Array(
  {
    date: '2021-03-02T12:00:00Z',
    entry:
      'I think this is enough entries just to show that this screen scrolls appropriately for the month of November, yeah! Just one...',
  },
  {
    date: '2021-03-04T12:00:00Z',
    entry:
      'I just want to be done writing these fake journal entries because I haven’t had a friend named Lauren since high school....',
  },
  {
    date: '2021-03-05T12:00:00Z',
    entry:
      'Okay I’m just gonna write a few more because I’m running out of ideas to babble about for the rest of these LOL...',
  },
  {
    date: '2021-03-10T12:00:00Z',
    entry:
      'Weeeellllllllll it went well I guess, okay at best, I don’t want to see my grade to be honest, but maybe it was good enough?...',
  },
  {
    date: '2021-03-14T12:00:00Z',
    entry:
      'Just one more day until my math exam!! T_T I’ve been studying all day today and I just want to quit, but my grade is really...',
  },
  {
    date: '2021-03-15T12:00:00Z',
    entry:
      'Today was pretty alright. I went out to the movies with Lauren, but I had to sit through math homework for the rest of...',
  }
);

const JournalHistory = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageSetup}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Select a journal entry to view below. Change the month by using the
            arrows.
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
        <View
          style={{
            width: '90%',
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 16, textDecorationLine: 'underline' }}>
              {monthNames[d.getMonth()] + ' ' + d.getFullYear()}
            </Text>
            <Icon name='arrow-drop-down' type='material' />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Icon name='arrow-left' />
            <Icon name='arrow-right' />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 60,
            marginLeft: 20,
            marginRight: 20,
          }}>
          {journalEntries.map((item, index) => (
            <Pressable
              key={index}
              onPress={() =>
                navigation.navigate('ViewJournalEntry', {
                  journal_date: item.date,
                  journal_entry: item.entry,
                })
              }>
              <View style={styles.journalItemSelect}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginRight: 20,
                  }}>
                  <Text>{monthNames[new Date(item.date).getMonth()]}</Text>
                  <Text>{new Date(item.date).getDate()}</Text>
                  <Text>{new Date(item.date).getFullYear()}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    flexShrink: 1,
                    alignContent: 'center',
                  }}>
                  <Text style={{ flex: 1 }}>{item.entry}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <NavBar navigation={navigation} journal={true} />
    </SafeAreaView>
  );
};

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
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line2: {
    backgroundColor: '#816868',
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
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
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  plant: {
    width: '60%',
    height: '90%',
  },
  plantButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  plantImage: {
    width: '100%',
    height: 260,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 6,
    borderColor: '#816868',
  },
  plantItem: {
    margin: 10,
  },
  journalItemSelect: {
    // marginLeft: 12,
    // marginRight: 12,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: '90%',
    // justifyContent: 'center',
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
  },
  plantItemPress: {
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
  },
  plantLinks: {
    color: '#4CB97A',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  plantSelectView: {
    justifyContent: 'center',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 5,
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#A6A1A0',
    margin: 30,
    borderRadius: 2,
  },
});
