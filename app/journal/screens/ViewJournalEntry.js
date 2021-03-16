import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
        }}>
        <Icon name='arrow-left' />
        <Text>Word Cloud View</Text>
        <Icon
          name='cloud'
          onPress={() =>
            navigation.navigate('WordCloudDisplay', {
              journal_date: journal_date,
              journal_entry: journal_entry,
            })
          }
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Icon name='arrow-left' />
        <Text>{date}</Text>
        <Icon name='arrow-right' />
      </View>
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View style={{ marginRight: 20, marginLeft: 20 }}>
        <Text>{'Entry Created ' + time}</Text>
        <Text>{'Last Edited ' + date + ' at ' + time}</Text>
        <Text style={{ marginBottom: 8, marginTop: 8 }}>{journal_entry}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 16,
          alignSelf: 'center',
        }}>
        <View style={{ width: '42.5%' }}>
          <Button
            title='Edit Entry'
            color='#A5DFB2'
            onPress={() => navigation.navigate('CreateNewJournalEntry')}
          />
        </View>
        <View style={{ width: '5%' }} />
        <View style={{ width: '42.5%' }}>
          <Button
            title='Delete Entry'
            color='#A5DFB2'
            onPress={() => onPress()}
          />
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
    marginTop: 4,
    marginBottom: 16,
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
  plantItemSelect: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
    marginBottom: 8,
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
