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

function HistoryGeneralHealth2({ route, navigation }) {
  const data = route.params.data;
  const symptoms = getPickerLabels(data);
  const arr = initDisplayData(symptoms, data, 'unselected');

  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectsymptom, setSymptom] = useState('unselected');
  const [timestamps, setTimestamps] = useState(dayLabels);
  const [displayData, setDisplayData] = useState(arr);

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
              View a summary of your physical and mental health history and changes
              in symtpom frequency and intensity over time.
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
              timePeriod={timestamps} 
              page={'generalHealth'}
              multiPageData={displayData}
              page2Color={true}
            />
          </View>

          {/* Time Period and Select Symptom drop-down selection */}
          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, flexDirection: 'row', }}>
            <View style={{ width: '50%' }}>
              <Text style={styles().heading}>TIME PERIOD</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={timePeriod}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setTimePeriod(itemValue);
                    getTimestamps(data, timestamps, setTimestamps, itemValue);
                    getDisplayData(selectsymptom === 'unselected' ? symptoms[0] : selectsymptom, data, itemValue, setDisplayData);
                    console.log(displayData);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select one...' value='unselected' />
                  <Picker.Item label='Past week' value='past_week' />
                  <Picker.Item label='Past month' value='past_month' />
                  <Picker.Item label='Past year' value='past_year' />
                </Picker>
              </View>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles().heading}>SELECT SYMPTOM</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={selectsymptom}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSymptom(itemValue);
                    getDisplayData(itemValue === 'unselected' ? symptoms[0] : itemValue, data, timePeriod, setDisplayData);
                    getTimestamps(data, timestamps, setTimestamps, timePeriod);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select One...' value='unselected'/>
                  {symptoms.map((item, index) => {
                    return (
                        <Picker.Item key={index} label={item} value={item} />
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
              (fill health symptom)...
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
              (fill health symptom)...
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
};

function getDisplayData(symptomName, data, timePeriod, setDisplayData) {
  var arr = [];
  var len = data.symptomData.length;
  console.log(timePeriod);

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    for(var i = len < 7 ? 0 : len - 7; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptomName)
          arr.push(value);
        
        else
          arr.push(0);
      }

  else if(timePeriod === 'past_month')
    for(var i = len < 30 ? 0 : len - 30; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptomName)
          arr.push(value);
        
        else
          arr.push(0);
      }

  else
    for(var i = len < 365 ? 0 : len - 365; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptomName)
          arr.push(value);
        
        else
          arr.push(0);
      }

  setDisplayData(arr);
}

function initDisplayData(symptoms, data, timePeriod) {
  var arr = [];
  var len = data.symptomData.length;

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    for(var i = len < 7 ? 0 : len - 7; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptoms[0])
          arr.push(value);
        
        else
          arr.push(0);
      }

  else if(timePeriod === 'past_month')
    for(var i = len < 30 ? 0 : len - 30; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptoms[0])
          arr.push(value);
        
        else
          arr.push(0);
      }

  else
    for(var i = len < 365 ? 0 : len - 365; i < len; i++)
      for(let [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        if(key == symptoms[0])
          arr.push(value);
        
        else
          arr.push(0);
      }

  return arr;
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
  textLightSmall: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
