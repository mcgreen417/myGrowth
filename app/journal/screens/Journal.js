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
    <SafeAreaView style={styles().container}>
      <View>
        <Text style={styles().textReg}>
          Let's get to writing! Put your feelings on paper and let the stress
          melt away.
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles().avatar}
        />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles().avatar}
        />
      </View>
      <View>
        <Button
          title='Write new entry'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }      
        />
        <Button
          title='View past entries'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Text style={styles().textReg}>
          Or search through past journal entries by entering a specific word or
          phrase...
        </Text>
        <InputSearchBar />
      </View>
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const CreateNewJournalEntry = () => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='<-'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Save'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Calendar'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Clock'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Bold'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Italic'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Underline'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Number List'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Bullet List'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
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
        <Text style={styles().textReg}>You have completed a journal entry!</Text>
      </View>
      <View>
        <Button
          title='View Entry'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Return to Home'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const JournalHistory = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles().textReg}>
          Select ajournal entry to view below. Change the month by using the
          arrows.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button
          title='Date'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='<'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button 
          title='>'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='Entry 1'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Entry 2'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const ViewJournalEntry = () => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='<-'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Word Cloud View'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='<'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Text style={styles().textReg}>Date</Text>
        <Button
          title='>'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }  
        />
      </View>
      <View>
        <Text style={styles().textReg}>Entry Created</Text>
        <Text style={styles().textReg}>Last Edited</Text>
        <Text style={styles().textReg}>Journal entry</Text>
      </View>
      <View>
        <Button
          title='Edit Entry'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Delete Entry'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const WordCloudDisplay = () => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='<-'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Journal Entry View'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='<'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Text style={styles().textReg}>Date</Text>
        <Button
          title='>'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
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

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16
  }
});
