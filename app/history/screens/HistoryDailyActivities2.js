import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * 
 *  TODO: Dynamically genertate picker names based on hashmap of activities
 *    - labels: work 
 *    - freqs: parse through data and look for target act name and populate freqs array (of size 365)
 * 
 */

function HistoryDailyActivities2({ route, navigation }) {
  const data = route.params.data;

  const [modalVisible, setModalVisible] = useState(false); 
  const [selectactivity, setActivity] = useState('unselected');
  const [actName, setActName] = useState(new Map());
  const [labels, setLabels] = useState(getLabels(data));
  const [freqs, setFreqs] = useState(getFreqs(data, 'unselected'));
  
  return (
    <SafeAreaView style={styles().container}>
      
      { /* Modal + each of the navigable history pages */}
      <HistorySelectACategory
        setModalView={setModalVisible}
        showModalView={modalVisible}
        navigation={navigation}
        data={data}
      />

      {/* Actual screen */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              View a summary of your past daily activities and check out 
              the periods where you were the most active!
            </Text>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
          </View>
          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Categories button */}
          <TouchableOpacity 
            style={styles().categoriesView} 
            onPress={() => setModalVisible(true)}
          >
            <View 
              style={styles().categories}>
              <Text style={styles().textAlt}>Categories</Text>
              <View>
                <Icon
                  name='arrow-top-right'
                  type='material-community'
                  color='white'
                />
              </View>
            </View>
          </TouchableOpacity>
            
          {/* Custom history component */}
          <TabBarAndContent dailyActivities={true} navigation={navigation} />

          {/* Select Activity drop-down selection */}
          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, }}>
            <Text style={styles().heading}>SELECT ACTIVITY</Text>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={selectactivity}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => setActivity(itemValue)}
                mode={'dropdown'}
              >
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Played games' value='played_games' />
                <Picker.Item label='Did homework' value='did_homework' />
                <Picker.Item label='Cooked dinner' value='cooked_dinner' />
                <Picker.Item label='Listened to music' value='listen_music' />
                <Picker.Item label='Talked to friends' value='talk_friends' />
                <Picker.Item label='Went to work' value='went_work' />
              </Picker>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function getLabels(data) {
  const latest = new Date(data.latestDate);
  const months = []

  for(var i = 11; i >= 0; i++) {
    months.push(monthNames[(latest.getMonth() + i) % 12]);
  }

  return months;
}

function getFreqs(data, activityName) {
  const obj = [];

  for(var i = length < 365 ? 0 : length - 365; i < length; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        
      }


  return obj;
}

export default HistoryDailyActivities2;

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
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  categories: {
    flexDirection: 'row', 
    alignSelf: 'center', 
    alignItems: 'center', 
    marginVertical: 2, 
    marginHorizontal: 8,
  },
  categoriesView: {
    alignSelf: 'flex-end',
    marginBottom: -16,
    borderRadius: 8,
    marginRight: '5%',
    backgroundColor: global.colorblindMode
      ? global.cb_navBarCurrentIconColor
      : global.navBarCurrentIconColor,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
  },
  pageSetup: {
    alignItems: 'center',
    height: '100%',
  },
  picker: {
    flex: 1,
    height: 32,
  },
  pickerView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '40%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textAlt: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
});
