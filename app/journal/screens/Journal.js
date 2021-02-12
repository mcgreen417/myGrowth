import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Journal = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Let's get to writing! Put your feelings on paper and let the stress
          melt away.
        </Text>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Button title='Write new entry' />
        <Button title='View past entries' />
      </View>
      <View>
        <Text>
          Or search through past hournal entries by entering a specific world or
          phrase...
        </Text>
        <InpuSearchBar />
      </View>
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
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../assets/icon.png')} />
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
        <Image source={require('../../assets/icon.png')} />
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
        <Image source={require('../../assets/icon.png')} />
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

const styles = StyleSheet.create({});
