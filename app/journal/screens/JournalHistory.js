import React from 'react';
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
          <Pressable>
            <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
              <Icon 
                name='calendar-sharp' 
                type='ionicon' 
                color='#816868' 
                style={{ marginRight: 6 }}
              />
              <Text style={styles.textLink}>{monthNames[d.getMonth()] + ' ' + d.getFullYear()}</Text>
              <Icon 
                name='arrow-drop-down' 
                type='material' 
                color='#816868' 
              />
            </View>
          </Pressable>

          {/* Back/forward arrows (change month) */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
            <Pressable>
              <Icon name='arrow-left' color='#816868' />
            </Pressable>
            <Pressable>
              <Icon name='arrow-right' color='#816868' />
            </Pressable>
          </View>
        </View>

        {/* Journal entry previews */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginHorizontal: '2.5%'}}
        >
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
                {/* Journal entry date */}
                <View style={{ marginRight: 20, alignItems: 'center' }}>
                  <Text style={styles.journalDate}>{monthAbbreviations[new Date(item.date).getMonth()]}</Text>
                  <Text style={styles.journalDate}>{new Date(item.date).getDate()}</Text>
                  <Text style={styles.journalDate}>{new Date(item.date).getFullYear()}</Text>
                </View>
                {/* Journal entry text preview */}
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.journalText}>{item.entry}</Text>
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
    marginHorizontal: '5%',
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
    width: '90%',
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
