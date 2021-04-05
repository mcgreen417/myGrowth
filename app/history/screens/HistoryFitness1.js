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

function HistoryFitness1({ route, navigation }) {
  const data = route.params.data;
  const arr = initDisplayData(data);

  const [modalVisible, setModalVisible] = useState(false); 
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectDisplay, setDisplay] = useState('unselected');
  const [timestamps, setTimestamps] = useState(dayLabels);
  const [displayData, setDisplayData] = useState(arr);  

  const [useReccActivity, setUseReccActivity] = useState(false);

  const toggleReccActivity = () =>
    setUseReccActivity((previousState) => !previousState);
  
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
              View your fitness history and our analysis of health effects that 
              may be attributed to your current exercise routine.
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
          <TabBarAndContent 
            navigation={navigation} 
            data={data} 
            timePeriod={timestamps}
            multiPageData={displayData} 
            page={'fitness'}
            page2Color={false} 
          />

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
                    getDisplayData(data, itemValue, setDisplayData, selectDisplay);
                    getTimestamps(data, timestamps, setTimestamps, itemValue);
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
            <View style={{ width: '50%', }}>
              <Text style={styles().heading}>SELECT DISPLAY</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={selectDisplay}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setDisplay(itemValue);
                    getDisplayData(data, timePeriod, setDisplayData, itemValue);
                    getTimestamps(data, timestamps, setTimestamps, timePeriod);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select one...' value='unselected' />
                  <Picker.Item label='Time spent exercising' value='exercise_time' />
                  <Picker.Item label='Calories burned' value='cals_burned' />
                  <Picker.Item label='Steps taken' value='steps_taken' />
                </Picker>
              </View>
            </View>
          </View>

          {/* Display recommended activity level switch */}
          <View style={styles().line}/>
          <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
            <Text style={styles().textLight}>Display recommended activity level</Text>
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
                    useReccActivity
                      ? (global.colorblindMode 
                        ? global.cb_switchThumbColorTrue
                        : global.switchThumbColorTrue)
                      : (global.colorblindMode
                        ? global.cb_switchThumbColorFalse
                        : global.switchThumbColorFalse)
                  }
                  ios_backgroundColor={global.cb_switchIosBackgroundColor}
                  onValueChange={toggleReccActivity}
                  value={useReccActivity}
                />
            </View>
          </View>
          <View style={styles().line}/>

          {/* App suggestions */}
          <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
            {/* Exercised analysis */}
            <Text style={styles().text}>
              Based on our analysis, on days that you exercised, you often reported...
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

            {/* Did not exercise analysis */}
            <Text style={styles().text}>
              Based on our analysis, on days that you did not exercise, you often reported...
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
              ** Please consult a medical professional before altering your exercise routine 
              as a result of these analyses. As a reminder, these analyses indicate correlation, 
              not causation, and thus may not indicate direct effects of your exercise routine. 
            </Text>
          </View>

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Recommended exercises (decide how we're going to add this in?) */}
          <View style={{ marginHorizontal: '5%', marginBottom: 20, }}>
            <Text style={styles().text}>
              Exercise is a great way to stay in shape and manage your weight! The
              following exercise regimens are recommended for you.
            </Text>
          </View>

          <View style={styles().pageEnd}/>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function initDisplayData(data) {
  var len = data.fitnessData.burned.length;
  var arr = [];

  arr = data.fitnessData.burned.slice(len - 7, len);

  return arr;
}

function getDisplayData(data, timePeriod, setDisplayData, selectExercise) {
  //burned || unselected
  if(selectExercise === 'cals_burned' || selectExercise === 'unselected') {
    var len = data.fitnessData.burned.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
      setDisplayData(data.fitnessData.burned.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.fitnessData.burned.slice(len - 30, len));

    else
      setDisplayData(data.fitnessData.burned.slice(len - 365, len));
  }

  //dur
  if(selectExercise === 'exercise_time') {
    var len = data.fitnessData.dur.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
      setDisplayData(data.fitnessData.dur.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.fitnessData.dur.slice(len - 30, len));

    else
      setDisplayData(data.fitnessData.dur.slice(len - 365, len));
  }

  //steps
  if(selectExercise === 'steps_taken') {
    var len = data.fitnessData.steps.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
      setDisplayData(data.fitnessData.steps.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.fitnessData.steps.slice(len - 30, len));

    else
      setDisplayData(data.fitnessData.steps.slice(len - 365, len));
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

export default HistoryFitness1;

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
    marginHorizontal: 4,
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
