import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Switch,
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

const dayLabels = [
  "Mon",
  "Tues",
  "Weds",
  "Thurs",
  "Fri",
  "Sat",
  "Sun"
];

const monthLabels = [
  "Jan",
  "Mar",
  "May",
  "July",
  "Sept",
  "Nov"
];

function HistorySleep1({ route, navigation }) {
  const data = route.params.data;
  const obj = initDisplayData(data);

  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('past_week');
  const [sleepView, setSleepView] = useState('sleep_nap');
  const [displayData, setDisplay] = useState(obj);
  const [timestamps, setTimestamps] = useState(dayLabels);
  const [useReccSleep, setUseReccSleep] = useState(false);
  
  const toggleReccSleep = () =>
    setUseReccSleep((previousState) => !previousState);

  return (
    <SafeAreaView style={styles().container}>

      {/* Modal + each of the navigable history pages */}
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
              View your changes in sleep over time and some improvments we think you can make!
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
          <View style={{marginTop: 5}}>
            <TabBarAndContent 
              navigation={navigation}
              data={data} 
              multiPageData={displayData}
              timePeriod={timestamps} 
              page={'sleep'}
              page2Color={false}
            />
          </View>

          {/* Time Period and Select Display drop-down selection */}
          <View 
            style={{ 
              width: '90%', 
              justifyContent: 'flex-start', 
              marginVertical: 20, 
              flexDirection: 'row',
            }}>
            <View style={{ width: '50%', }}>
              <Text style={styles().heading}>TIME PERIOD</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={timePeriod}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setTimePeriod(itemValue);
                    getDisplayData(data, itemValue, setDisplay, sleepView);
                    getTimestamps(data, timestamps, setTimestamps, itemValue);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Past week' value='past_week' />
                  <Picker.Item label='Past month' value='past_month' />
                  <Picker.Item label='Past year' value='past_year' />
                </Picker>
              </View>
            </View>
            <View style={{ width: '50%', }}>
              <Text style={styles().heading}>SELECT DISPLAY</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={sleepView}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSleepView(itemValue);
                    getDisplayData(data, timePeriod, setDisplay, itemValue);
                    getTimestamps(data, timestamps, setTimestamps, timePeriod);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Sleep and Naps' value='sleep_nap' />
                  <Picker.Item label='Sleep Only' value='sleep_only' />
                  <Picker.Item label='Naps Only' value='naps_only' />
                </Picker>
              </View>
            </View>
          </View>

          {/* Display recommended sleep amount switch */}
          <View style={styles().line}/>
          <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
            <Text style={styles().textLight}>Display recommended sleep amount</Text>
            <View style={styles().switchView}>
              <View style={styles().line2}/>
                <Switch
                  trackColor={{ 
                    false: global.colorblindMode 
                      ? global.cb_switchTrackColorFalse
                      : global.switchTrackColorFalse,
                    true: global.colorblindMode
                      ? global.cb_switchTrackColorTrue 
                      : global.switchTrackColorTrue
                  }}
                  thumbColor={
                    useReccSleep
                      ? (global.colorblindMode 
                        ? global.cb_switchThumbColorTrue
                        : global.switchThumbColorTrue)
                      : (global.colorblindMode
                        ? global.cb_switchThumbColorFalse
                        : global.switchThumbColorFalse)
                  }
                  ios_backgroundColor={global.cb_switchIosBackgroundColor}
                  onValueChange={toggleReccSleep}
                  value={useReccSleep}
                />
            </View>
          </View>
          <View style={styles().line}/>

          {/* App suggestions */}
          <View style={{ marginHorizontal: '5%', marginTop: 20,  }}>
            {/* Proper sleep analysis */}
            <Text style={styles().text}>
              Based on our analysis, on days that you slept for the traditionally recommended
              amount of time, you often reported...
            </Text>
            <View style={styles().suggestionView}>
               <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #1)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #3)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #2)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #4)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Underslept analysis */}
            <Text style={styles().text}>
              Likewise, on days that you slept for a shorter amount of time than recommended,
              you often reported...
            </Text>
            <View style={styles().suggestionView}>
               <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #1)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #3)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #2)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #4)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Overslept analysis */}
            <Text style={styles().text}>
              Likewise, on days that you slept for a longer amount of time than recommended,
              you often reported...
            </Text>
            <View style={styles().suggestionView}>
               <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #1)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #3)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #2)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #4)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Medical disclaimer */}
            <Text style={styles().textLightSmall}>
              ** Please consult a medical professional before altering your sleeping habits 
              as a result of these analyses. As a reminder, these analyses indicate correlation, 
              not causation, and thus may not indicate direct effects of your sleeping habits. 
            </Text>
          </View>

          <View style={styles().pageEnd}/>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function cleanUpData(arr) {
  const len = arr.length;

  for(var i = 0; i < len; i++)
    if(arr[i] == -1)
      arr[i] = 0;

  return arr;
}

function initDisplayData(data) {
  var len1 = data.nightSleepData.length;
  var len2 = data.napSleepData.length;
  var obj = new Object();
  obj.sleep = [];
  obj.nap = [];

  for(var i = len1 < 7 ? 0 : len1 - 7; i < len1; i++) {
    obj.sleep.push(data.nightSleepData[i]);
    obj.nap.push(data.napSleepData[i]);
  }

  if(obj.sleep.length < 7) {
    let diff = 7 - obj.sleep.length;
    var zeros = new Array(diff);
    zeros.fill(0);

    obj.sleep = zeros.concat(obj.sleep);
  }

  if(obj.nap.length < 7) {
    let diff = 7 - obj.nap.length;
    var zeros = new Array(diff);
    zeros.fill(0);

    obj.nap = zeros.concat(obj.nap);
  }

  obj.sleep = cleanUpData(obj.sleep);
  obj.nap = cleanUpData(obj.nap);

  return obj;
}

function getDisplayData(data, timePeriod, setDisplay, sleepView) {
  var [sum1, sum2] = [0, 0];
  var obj = new Object();
  obj.sleep = [];
  obj.nap = [];

  //both
  if(sleepView === 'sleep_nap') {
    var len1 = data.nightSleepData.length;
    var len2 = data.napSleepData.length;

    if(timePeriod === 'past_week') {
      for(var i = len1 < 7 ? 0 : len1 - 7; i < len1; i++) {
        obj.sleep.push(data.nightSleepData[i]);
        obj.nap.push(data.napSleepData[i]);
      }

      if(obj.sleep.length < 7) {
        let diff = 7 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }
    
      if(obj.nap.length < 7) {
        let diff = 7 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.sleep = cleanUpData(obj.sleep);
      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }

    else if(timePeriod === 'past_month') {
      for(var i = len1 < 30 ? 0: len1 - 30; i < len1; i++) {
        if(i === len1 - 1 && len1 < 30) {
          let fullHalfWeeks = Math.floor(len / 4);
          let spareHalves = len1 - (fullHalfWeeks * 4);
  
          sum1 = sum1 / spareHalves;
          sum2 = sum2 / spareHalves;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else if(i === len1 - 1) {
          sum1 = sum1 / 2;
          sum2 = sum2 / 2;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else if(i % 4 === 0 && i > 0) {
          sum1 = sum1 / 4;
          sum2 = sum2 / 4;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else {
          sum1 += data.nightSleepData[i] === -1 ? 0 : data.nightSleepData[i];
          sum2 += data.napSleepData[i] === -1 ? 0 : data.napSleepData[i];
        }
      }

      if(obj.sleep.length < 8) {
        let diff = 8 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }
    
      if(obj.nap.length < 8) {
        let diff = 8 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.sleep = cleanUpData(obj.sleep);
      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }

    else {
      for(var i = len1 < 365 ? 0: len1 - 365; i < len1; i++) {
        if(i === len1 - 1 && len1 < 365) {
          let fullMonths = Math.floor(len / 30);
          let spareDays = len1 - (fullMonths * 30);
  
          sum1 = sum1 / spareDays;
          sum2 = sum2 / spareDays;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else if(i === len1 - 1) {
          sum1 = sum1 / 35;
          sum2 = sum2 / 35;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else if(i % 30 === 0 && i > 0) {
          sum1 = sum1 / 30;
          sum2 = sum2 / 30;

          obj.sleep.push(sum1);
          obj.nap.push(sum2);
  
          sum1 = 0;
          sum2 = 0;
        }

        else {
          sum1 += data.nightSleepData[i] === -1 ? 0 : data.nightSleepData[i];
          sum2 += data.napSleepData[i] === -1 ? 0 : data.napSleepData[i];
        }
      }

      if(obj.sleep.length < 12) {
        let diff = 12 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }
    
      if(obj.nap.length < 12) {
        let diff = 12 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.sleep = cleanUpData(obj.sleep);
      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }
  }
  
  //sleep only
  else if(sleepView === 'sleep_only') {
    var len = data.nightSleepData.length;

    if(timePeriod === 'past_week') {
      for(var i = len < 7 ? 0 : len - 7; i < len; i++)
        obj.sleep.push(data.nightSleepData[i]);

      if(obj.sleep.length < 7) {
        let diff = 7 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }

      obj.sleep = cleanUpData(obj.sleep);

      setDisplay(obj);
    }

    else if(timePeriod === 'past_month') {
      for(var i = len < 30 ? 0: len - 30; i < len; i++) {
        if(i === len - 1 && len < 30) {
          let fullHalfWeeks = Math.floor(len / 4);
          let spareHalves = len - (fullHalfWeeks * 4);
  
          sum1 = sum1 / spareHalves;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else if(i === len - 1) {
          sum1 = sum1 / 2;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else if(i % 4 === 0 && i > 0) {
          sum1 = sum1 / 4;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else
          sum1 += data.nightSleepData[i] === -1 ? 0 : data.nightSleepData[i];
      }

      if(obj.sleep.length < 8) {
        let diff = 8 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }

      obj.sleep = cleanUpData(obj.sleep);

      setDisplay(obj);
    }

    else {
      for(var i = len < 365 ? 0: len - 365; i < len; i++) {
        if(i === len - 1 && len < 365) {
          let fullMonths = Math.floor(len / 30);
          let spareDays = len - (fullMonths * 30);
  
          sum1 = sum1 / spareDays;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else if(i === len - 1) {
          sum1 = sum1 / 35;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else if(i % 30 === 0 && i > 0) {
          sum1 = sum1 / 30;

          obj.sleep.push(sum1);
  
          sum1 = 0;
        }

        else
          sum1 += data.nightSleepData[i] === -1 ? 0 : data.nightSleepData[i];
      }

      if(obj.sleep.length < 12) {
        let diff = 12 - obj.sleep.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.sleep = zeros.concat(obj.sleep);
      }

      obj.sleep = cleanUpData(obj.sleep);

      setDisplay(obj);
    }
  }

  //nap only
  else {
    var len = data.napSleepData.length;

    if(timePeriod === 'past_week') {
      for(var i = len < 7 ? 0 : len - 7; i < len; i++)
        obj.nap.push(data.napSleepData[i]);

      if(obj.nap.length < 7) {
        let diff = 7 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }

    else if(timePeriod === 'past_month') {
      for(var i = len < 30 ? 0: len - 30; i < len; i++) {
        if(i === len - 1 && len < 30) {
          let fullHalfWeeks = Math.floor(len / 4);
          let spareHalves = len - (fullHalfWeeks * 4);
  
          sum1 = sum1 / spareHalves;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else if(i === len - 1) {
          sum1 = sum1 / 2;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else if(i % 4 === 0 && i > 0) {
          sum1 = sum1 / 4;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else
          sum1 += data.napSleepData[i] === -1 ? 0 : data.napSleepData[i];
      }

      if(obj.nap.length < 8) {
        let diff = 8 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }

    else {
      for(var i = len < 365 ? 0: len - 365; i < len; i++) {
        if(i === len - 1 && len < 365) {
          let fullMonths = Math.floor(len / 30);
          let spareDays = len - (fullMonths * 30);
  
          sum1 = sum1 / spareDays;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else if(i === len - 1) {
          sum1 = sum1 / 35;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else if(i % 30 === 0 && i > 0) {
          sum1 = sum1 / 30;

          obj.nap.push(sum1);
  
          sum1 = 0;
        }

        else
          sum1 += data.napSleepData[i] === -1 ? 0 : data.napSleepData[i];
      }

      if(obj.nap.length < 12) {
        let diff = 12 - obj.nap.length;
        var zeros = new Array(diff);
        zeros.fill(0);
    
        obj.nap = zeros.concat(obj.nap);
      }

      obj.nap = cleanUpData(obj.nap);

      setDisplay(obj);
    }
  }
}

function getTimestamps(data, timestamps, setTimestamps, timePeriod) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 29; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    if(i % 4 == 0)
      dates.push(date.toISOString().substring(5, 10));
  }

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    setTimestamps(dayLabels);

  else if(timePeriod === 'past_month')
    setTimestamps(dates); 

  else if(timePeriod === 'past_year')
    setTimestamps(monthLabels);
}

export default HistorySleep1;

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
  heading: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    width: '90%',
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderBottomWidth: 1,
    minHeight: 1,
  },
  line2: {
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
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
    width: '80%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionView: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#816868',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
  textLight: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    textAlign: 'center',
  },
  textLightSmall: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
