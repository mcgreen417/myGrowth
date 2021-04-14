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

function HistoryDailyActivities2({ route, navigation }) {
  const data = route.params.data;
  const dates = getTimestamps(data);
  const activities = getPickerLabels(data);
  const comms = initCommits(activities, dates, data);

  const [modalVisible, setModalVisible] = useState(false); 
  const [selectactivity, setActivity] = useState(activities[0]);
  const [commits, setCommits] = useState(comms);
  
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
          <View style={{marginTop: 6}}>
            <TabBarAndContent 
              navigation={navigation}
              data={data} 
              multiPageData={commits}
              page={'dailyActivities'}
              page2Color={true}
            />
          </View>

          {/* Select Activity drop-down selection */}
          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, }}>
            <Text style={styles().heading}>SELECT ACTIVITY</Text>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={selectactivity}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => {
                  setActivity(itemValue);
                  getCommits(itemValue, dates, data, setCommits);
                  //console.log(commits);
                }}
                mode={'dropdown'}
              >
                {activities.map((item, index) => {
                  return (
                      <Picker.Item key={index} label={item} value={item} />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function getCommits(actName, dates, data, setCommits) {
  var length = data.activityData.length;
  var commits = [];
  var j = 364;

    for(var i = length < 365 ? 0 : length - 365; i < length; i++) {
      for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        //check if key is in what we are searching for
        if(key === actName) {
          let obj = new Object();
          obj.date = dates[j];

          obj.count = 1;
          commits.push(obj);
        }

        //it's not
        else {
          let obj = new Object();
          obj.date = dates[j];

          obj.count = 0;
          commits.push(obj);
        }
      }
      j--;
    }

  setCommits(commits);
}

function initCommits(activities, dates, data) {
  var length = data.activityData.length;
  var commits = [];
  var j = 364;

  for(var i = length < 365 ? 0 : length - 365; i < length; i++) {
    for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
      //check if key is in what we are searching for
      if(key === activities[0]) {
        let obj = new Object();
        obj.date = dates[j];

        obj.count = 1;
        commits.push(obj);
      }

      //it's not
      else {
        let obj = new Object();
        obj.date = dates[j];

        obj.count = 0;
        commits.push(obj);
      }
    }
    j--;
  }

  return commits;
}

function getTimestamps(data) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 364; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    dates.push(date.toISOString().substring(0, 10));
  }

  return dates;
}

function getPickerLabels(data) {
  var length = data.activityData.length;
  var arr = [];

  for(var i = length < 365 ? 0 : length - 365; i < length; i++)
    for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
      //check if key is in map
      if(!arr.includes(key)) {
        if(key !== 'null')
          arr.push(key);
      }

      //it exists
      else
        ;
    }

  return arr;
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
