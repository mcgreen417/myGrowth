import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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
            Let's get to writing! Put your feelings on paper and let the stress melt away!
          </Text>
          <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
        </View>
        {/* Top page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        <Image style={styles.fillerImage} source={require('../../shared/assets/Journal.png')} />

        {/* Write new entry + view past entries buttons */}
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <View style={{ width: '42.5%' }}>
            <Button title='Write New Entry' color='#A5DFB2' onPress={() => onPress()}/>
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ width: '42.5%' }}>
            <Button title='View Past Entries' color='#A5DFB2' onPress={() => onPress()}/>
          </View>
        </View>

        {/* Page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        {/* Word search bar */}
        <View style={{ width: '90%' }}>
          <Text style={styles.text}>
            Or search through past journal entries by entering a specific world or
            phrase...
          </Text>
          <InputSearchBar />
        </View>
      </View>
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
        <TextInput />
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
    width: '90%'
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  fillerImage: {
    width: 340,
    height: 240,
    marginTop: -20,
  },
  heading: {
    color: '#4CB97A',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '90%',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  line: {
    borderColor: '#816868',
    borderBottomWidth: 1,
    minHeight: 1,
    width: '90%',
  },
  line2: {
    borderColor: '#816868',
    borderRightWidth: 1,
    minHeight: 28,
    marginTop: 4,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  text: {
    color: '#816868',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 50,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 32,
    width: '100%',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '60%',
    backgroundColor: '#f4f3f4',
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
