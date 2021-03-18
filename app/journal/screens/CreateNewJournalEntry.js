import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

const CreateNewJournalEntry = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
            style={styles.heading}
            onPress={() => navigation.navigate('JournalEntryCompletion')}
          >
            SAVE
          </Text>
          <Icon name='event' type='material' color='#816868' />
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
      <View style={styles.dividerView}>
        <View style={styles.divider}></View>
      </View>
      <View style={styles.input}>
        <TextInput multiline style={styles.text}/>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewJournalEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
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
    marginTop: 4,
  },
  heading: {
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pageEnd: {
    marginBottom: 100,
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  input: {
    height: '100%',
    marginHorizontal: '5%',
    marginTop: 10,
    borderRadius: 2,
  },
});
