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
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryDailyActivities1({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false); 
  
  if(data !== null) {  
    var activityMap = getMap(data, 'past_week');
    const [timePeriod, setTimePeriod] = useState('past_week');
    const [labels, setLabels] = useState(getLabels(activityMap));
    const [freqs, setFreqs] = useState(getFreqs(activityMap, timePeriod));
    const [pressed, setPressed] = useState(false);
    
    return (
      <SafeAreaView style={styles().container}>

        {/* Modal + each of the navigable history pages */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        {/* Actual screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>

            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
              <Text style={styles().pageDescription}>
                View a summary of your past daily activities and check out 
                when you were the most active!
              </Text>
              <Image
                style={styles().avatarFlipped}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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
                timePeriod={labels} 
                page={'dailyActivities'}
                multiPageData={freqs}
                page2Color={false}
                settings={settings}
              />
            </View>

            {/* Time Period dropdown picker */}
            <View style={{ marginTop: 30, alignSelf: 'flex-start', marginLeft: '5%', }}>
              <View style={styles().textInputView}>
                <View style={styles().labelView}>
                  <Text
                    style={{
                      color: pressed ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Time Period
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressed ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingLeft: 12,
                  }}>
                  <Picker
                    selectedValue={timePeriod}
                    style={styles().picker}
                    dropdownIconColor='#816868'
                    onValueChange={(itemValue, itemIndex) => {
                      setTimePeriod(itemValue);
                      activityMap = getMap(data, itemValue);
                      setLabels(getLabels(activityMap));
                      setFreqs(getFreqs(activityMap, itemValue));
                    }}
                    mode={'dropdown'}>
                    <Picker.Item label='Past week' value='past_week' color='#816868' />
                    <Picker.Item label='Past month' value='past_month' color='#816868' />
                    <Picker.Item label='Past year' value='past_year' color='#816868' />
                  </Picker>
                </View>
              </View>
            </View>
            <View style={styles().pageEnd}/>
          </View>
        </ScrollView>
        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
  }

  else
    return (
      <SafeAreaView style={styles().container}>
        { /* Modal */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        {/* Actual screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>
            
            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
              <Text style={styles().pageDescription}>
                View a summary of your past daily activities and check out 
                when you were the most active!
              </Text>
              <Image
                style={styles().avatarFlipped}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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

            <View style={{alignContent: 'center', margin: 22}}>
              <Text>
                Uh Oh! It seems like you don't have any data to view!
                Try making some health entries first!
              </Text>
            </View>
            
          </View>
        </ScrollView>
        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
};

function getMap(data, timePeriod) {
  var map = new Map();
  var length = data.activityData.length;

  if(timePeriod === 'past_week')
    for(var i = length < 7 ? 0 : length - 7; i < length; i++)
      for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        //check if key is in map
        if(!map.has(key)) {
          if(key !== 'null')
            map.set(key, value);
        }

        //it exists
        else {
          map.set(key, map.get(key) + value);
        }
      }

  else if (timePeriod === 'past_month')
    for(var i = i = length < 30 ? 0 : length - 30; i < length; i++)
      for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        //check if key is in map
        if(!map.has(key)) {
          if(key !== 'null')
            map.set(key, value);
        }

        //it exists
        else {
          map.set(key, map.get(key) + value);
        }
      }

  else
    for(var i = length < 365 ? 0 : length - 365; i < length; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        //check if key is in map
        if(!map.has(key)) {
          if(key !== 'null')
            map.set(key, value);
        }

        //it exists
        else {
          map.set(key, map.get(key) + value);
        }
      }

  return map;
}

function getLabels(activityMap) {
  const obj = [];

  activityMap.forEach(function(value, key) {
    obj.push(key);
  })

  return obj;
}

function getFreqs(activityMap, timePeriod) {
  const obj = [];

  activityMap.forEach(function(value, key) {
    obj.push(value);
  })

  return obj;
}

export default HistoryDailyActivities1;

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
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 0.425),
    position: 'relative',
  },
});
