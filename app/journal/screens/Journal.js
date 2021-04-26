import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as queries from '../../../src/graphql/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import NavBar from '../../shared/components/NavBar';

const Journal = ({ navigation, route }) => {
  const avatar = route.params.avatar;
  const [searchTerm, setSearchTerm] = useState('');
  const [pressed, setPressed] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              Let's get to writing! Put your feelings on paper and let the stress
              melt away!
            </Text>
            <Image
              style={styles().avatarFlipped}
              source={global.avatars[avatar].imgSource}
            />
          </View>
          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          <Image
            style={styles().fillerImage}
            source={require('../../shared/assets/Journal.png')}
          />

          {/* Write new entry + view past entries buttons */}
          <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: 10, }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='Write New Entry'
                color='#A5DFB2'
                onPress={() => navigation.navigate('CreateNewJournalEntry')}
              />
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button
                title='View Past Entries'
                color='#A5DFB2'
                onPress={() => getEntries(navigation)}
              />
            </View>
          </View>

          {/* Page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Word search bar */}
          <View style={{ width: '90%', marginBottom: 20, }}>
            <Text style={styles().text}>
              Or search through past journal entries by entering a specific world
              or phrase...
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10, }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Search Term
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressed ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 10,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: -8, }}>
                  <TextInput
                    placeholder='Search term'
                    fontSize={16}
                    color='#816868'
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    maxLength={99}
                    onFocus={() => {setPressed(true)}}
                    style={{ 
                      paddingLeft: 16, 
                      flexWrap: 'wrap', 
                      width: Math.round((Dimensions.get('window').width * 7.5/10)), 
                    }}
                  />
                  <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 16, }}>
                    <Icon
                      name='search'
                      color='#816868'
                      onPress={() => getEntries(navigation)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles().pageEnd}/>
        </View>
      </ScrollView>
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

async function getEntries(navigation) {
  const date = new Date();
  const timerange = {start: new Date(date.getFullYear(), date.getMonth(), 1), end: new Date(date.getFullYear(), date.getMonth() + 1, 0)};
  const datePass = date.toISOString();
  const res = await API.graphql({
    query: queries.getJournalEntries,
    variables: {timerange: timerange}
  });

  const arr = res.data.getJournalEntries.journalEntries;

  const cache = new Cache({
    namespace: 'myapp',
    policy: {
      maxEntries: 50000,
    },
    backend: AsyncStorage,
  });

  const avatar = await cache.peek('avatar');

  navigation.navigate('JournalHistory', {arr, datePass, avatar});
}

export default Journal;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatarFlipped: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    transform: [
      { scaleX: -1 }
    ]
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginHorizontal: '5%'
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  fillerImage: {
    width: 340,
    height: 240,
    marginTop: -20,
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
  label: {
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
  },
  line2: {
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#A6A1A0',
    margin: 30,
    borderRadius: 2,
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
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
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 9/10),
    position: 'relative',
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16
  }
});
