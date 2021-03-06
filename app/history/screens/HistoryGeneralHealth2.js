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
  "Feb",
  "Mar",
  "May",
  "July",
  "Sept",
  "Nov"
];

function HistoryGeneralHealth2({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false);

  if(data !== null) {
    const symptoms = getPickerLabels(data);
    const arr = initDisplayData(symptoms, data, 'past_week');
    const [timePeriod, setTimePeriod] = useState('past_week');
    const [selectSymptom, setSymptom] = useState(symptoms[0]);
    const [timestamps, setTimestamps] = useState(dayLabels);
    const [displayData, setDisplayData] = useState(arr);
    const [pressedTime, setPressedTime] = useState(false);
    const [pressedSymptom, setPressedSymptom] = useState(false);

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
                View changes your in physical and mental health symptom frequency and 
                intensity over time!
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
                timePeriod={timestamps} 
                page={'generalHealth'}
                multiPageData={displayData}
                page2Color={true}
                settings={settings}
              />
            </View>

            <View style={{ marginHorizontal: '5%', flexDirection: 'row', marginTop: 30, }}>
              {/* Time Period dropdown picker */}
              <View style={styles().textInputView}>
                <View style={styles().labelView}>
                  <Text
                    style={{
                      color: pressedTime ? '#4CB97A' : '#816868',
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
                    borderColor: pressedTime ? '#4CB97A' : '#816868',
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
                      getTimestamps(data, timestamps, setTimestamps, itemValue);
                      getDisplayData(selectSymptom, data, itemValue, setDisplayData);
                    }}
                    mode={'dropdown'}>
                    <Picker.Item label='Past week' value='past_week' color='#816868' />
                    <Picker.Item label='Past month' value='past_month' color='#816868' />
                    <Picker.Item label='Past year' value='past_year' color='#816868' />
                  </Picker>
                </View>
              </View>
              <View style={{ marginHorizontal: '2.5%' }}/>
              {/* Select Symptom dropdown picker */}
              <View style={styles().textInputView}>
                <View style={styles().labelView}>
                  <Text
                    style={{
                      color: pressedSymptom ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Select Symptom
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressedSymptom ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingLeft: 12,
                  }}>
                  <Picker
                    selectedValue={selectSymptom}
                    style={styles().picker}
                    dropdownIconColor='#816868'
                    onValueChange={(itemValue, itemIndex) => {
                      setSymptom(itemValue);
                      getDisplayData(itemValue, data, timePeriod, setDisplayData);
                      getTimestamps(data, timestamps, setTimestamps, timePeriod);
                    }}
                    mode={'dropdown'}>
                    {symptoms.map((item, index) => {
                      return (
                          <Picker.Item key={index} label={item} value={item} color='#816868' />
                      );
                    })}
                  </Picker>
                </View>
              </View>
            </View>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* App suggestions */}
            <View style={{ marginHorizontal: '5%', }}>
              {/* Decrease symptom intensity analysis */}
              <Text style={styles().text}>
                Based on our analysis, the following activities may help decrease the intensity of
                this symptom...
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

              {/* Increase symptom intensity analysis */}
              <Text style={styles().text}>
                Likewise, the following activities may lead to an increase in the intensity of
                this symptom...
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
                ** As a reminder, these analyses indicate correlation, not causation, and thus 
                may not indicate direct effects of your daily habits. You may wish to speak to 
                a medical professional if pre-existing physical or mental health symptoms suddenly 
                change or worsen.
              </Text>
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
                View changes your in physical and mental health symptom frequency and 
                intensity over time!
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

function makeYear(dataArr) {
  var arr = [];
  var [sum, len] = [0, dataArr.length];

  for(var i = len < 365 ? 0: len - 365; i < len; i++) {
      if(i === len - 1 && len < 365) {
          let fullHalfWeeks = Math.floor(len / 30);
          let spareHalves = len - (fullHalfWeeks * 30);
  
          sum = sum / spareHalves;

          arr.push(sum);
  
          sum = 0;
      }

      else if(i === len - 1) {
          sum = sum / 35;

          arr.push(sum);
  
          sum = 0;
      }

      else if(i % 30 === 0 && i > 0) {
          sum = sum / 30;

          arr.push(sum);
  
          sum = 0;
      }

      else
          sum += dataArr[i] === -1 ? 0 : dataArr[i];
  }

  if(arr.length < 12) {
      let diff = 12 - arr.length;
      var zeros = new Array(diff);
      zeros.fill(0);

      arr = zeros.concat(arr);
  }

  return arr;
}

function makeMonth(dataArr) {
  var [sum, len] = [0, dataArr.length];
  var arr = [];

  for(var i = len < 30 ? 0: len - 30; i < len; i++) {
      if(i === len - 1 && len < 30) {
        let fullHalfWeeks = Math.floor(len / 4);
        let spareHalves = len - (fullHalfWeeks * 4);

        sum = sum / spareHalves;

        arr.push(sum);

        sum = 0;
      }

      else if(i === len - 1) {
        sum = sum / 2;

        arr.push(sum);

        sum = 0;
      }

      else if(i % 4 === 0 && i > 0) {
        sum = sum / 4;

        arr.push(sum);

        sum = 0;
      }

      else
        sum += dataArr[i] === -1 ? 0 : dataArr[i];
    }

    if(arr.length < 8) {
      let diff = 8 - arr.length;
      var zeros = new Array(diff);
      zeros.fill(0);
  
      arr = zeros.concat(arr);
    }

  return arr;
}

function makeWeek(dataArr) {
  var len = dataArr.length;
  var arr = [];

  for(var i = len < 7 ? 0 : len - 7; i < len; i++)
      arr.push(dataArr[i]);
        
  if(arr.length < 7) {
      let diff = 7 - arr.length;
      var zeros = new Array(diff);
      zeros.fill(0);
  
      arr = zeros.concat(arr);
  }

  return arr;
}

function makeArr(objArr, target) {
  const length = objArr.length;
  var arr = [];

  for(var i = 0; i < length; i++)
      for(var [key, value] of Object.entries(JSON.parse(objArr[i]))) {
          if(key === target) {
              arr.push(value);
          }

          else
              arr.push(0);
      }

  return arr;
}

function cleanUpData(arr) {
  const len = arr.length;

  for(var i = 0; i < len; i++)
    if(arr[i] == -1)
      arr[i] = 0;

  return arr;
}

function getDisplayData(symptomName, data, timePeriod, setDisplayData) {
  var arr = [];

  var objArr = makeArr(data.symptomData, symptomName);

  if(timePeriod === 'past_week')
    arr = makeWeek(objArr);

  else if(timePeriod === 'past_month') 
    arr = makeMonth(objArr);

  else 
    arr = makeYear(objArr);

  arr = cleanUpData(arr);

  setDisplayData(arr);
}

function initDisplayData(symptoms, data, timePeriod) {
  var arr = [];
  var objArr = makeArr(data.symptomData, symptoms[0]);

  if(timePeriod === 'past_week')
    arr = makeWeek(objArr);

  else if(timePeriod === 'past_month') 
    arr = makeMonth(objArr);

  else 
    arr = makeYear(objArr);

  arr = cleanUpData(arr);

  return arr;
}

function rotateCalLabels(data) {
  var labels = monthLabels;
  labels = labels.concat(labels.splice(0, new Date(data.latestDate).getMonth() % 6 - 1));

  return labels;
}

function getTimestamps(data, timestamps, setTimestamps, timePeriod) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 29; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    if(i % 4 == 0)
      dates.push(date.toISOString().substring(5, 10));
  }

  if(timePeriod === 'past_week')
    setTimestamps(dayLabels);

  else if(timePeriod === 'past_month')
    setTimestamps(dates); 

  else if(timePeriod === 'past_year')
    setTimestamps(rotateCalLabels(data));
}

function getPickerLabels(data) {
  var length = data.symptomData.length;
  var arr = [];

  for(var i = i = length < 90 ? 0 : length - 90; i < length; i++)
    for(var [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
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

export default HistoryGeneralHealth2;

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
    width: '80%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
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
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 0.425),
    position: 'relative',
  },
  textLightSmall: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
