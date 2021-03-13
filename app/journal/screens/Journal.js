import React from 'react';
import { TextInputComponent } from 'react-native';
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

const InputSearchBar = () => {
  return <View></View>;
};

const Journal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageSetup}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Select an item from your inventory to change your plant's
            appearance!
          </Text>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>

        <View>
          <Image
            source={require('../../shared/assets/icon.png')}
            style={styles.avatar}
          />
        </View>

        {/* Clear changes & purchase all shown buttons */}
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 16 }}>
          <View style={{ width: '42.5%' }}>
            <Button
              title='Write new entry'
              color='#A5DFB2'
              onPress={() => onPress()}
            />
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ width: '42.5%' }}>
            <Button
              title='View past entries'
              color='#A5DFB2'
              onPress={() => onPress()}
            />
          </View>
        </View>
        <View style={styles.dividerView}>
          <View style={styles.divider}></View>
        </View>
        <View
          style={{
            margin: 28,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>
            Or search through past hournal entries by entering a specific world
            or phrase...
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderColor: '#A6A1A0',
            }}>
            <TextInput
              style={{
                height: 20,
                margin: 10,
                justifyContent: 'flex-start',
                flex: 1,
              }}
            />
            <Icon
              style={{ height: 20, margin: 10 }}
              name='search-outline'
              type='ionicon'
              color='#A6A1A0'
            />
          </View>
        </View>
      </View>
      <View style={styles.pageEnd} />
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const CreateNewJournalEntry = () => {
  return (
    <SafeAreaView>
      <View>
        <Button title='<-' />
        <Button title='Save' />
        <Button title='Calendar' />
        <Button title='Clock' />
        <Button title='Bold' />
        <Button title='Italic' />
        <Button title='Underline' />
        <Button title='Number List' />
        <Button title='Bullet List' />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
  );
};

const JournalEntryCompletion = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
        <Text>You have completed a journal entry!</Text>
      </View>
      <View>
        <Button title='View Entry' />
        <Button title='Return to Home' />
      </View>
    </SafeAreaView>
  );
};

const JournalHistory = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Select ajournal entry to view below. Change the month by using the
          arrows.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='Date' />
        <Button title='<' />
        <Button title='>' />
      </View>
      <View>
        <Button title='Entry 1' />
        <Button title='Entry 2' />
      </View>
    </SafeAreaView>
  );
};

const ViewJournalEntry = () => {
  return (
    <SafeAreaView>
      <View>
        <Button title='<-' />
        <Button title='Word Cloud View' />
      </View>
      <View>
        <Button title='<' />
        <Text>Date</Text>
        <Button title='>' />
      </View>
      <View>
        <Text>Entry Created</Text>
        <Text>Last Edited</Text>
        <Text>Journal entry</Text>
      </View>
      <View>
        <Button title='Edit Entry' />
        <Button title='Delete Entry' />
      </View>
    </SafeAreaView>
  );
};

const WordCloudDisplay = () => {
  return (
    <SafeAreaView>
      <View>
        <Button title='<-' />
        <Button title='Journal Entry View' />
      </View>
      <View>
        <Button title='<' />
        <Text>Date</Text>
        <Button title='>' />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
    </SafeAreaView>
  );
};

export {
  Journal,
  CreateNewJournalEntry,
  JournalEntryCompletion,
  JournalHistory,
  ViewJournalEntry,
  WordCloudDisplay,
};

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
