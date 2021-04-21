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
import { set } from 'react-native-reanimated';

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

function HistoryMealTracking({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false);

  if(data !== null) {
    const arr = initDisplayData(data);
    const [timePeriod, setTimePeriod] = useState('past_week');
    const [selectNutrients, setNutrients] = useState('calories');
    const [timestamps, setTimestamps] = useState(dayLabels);
    const [displayData, setDisplayData] = useState(arr);

    //switch state
    const [useReccNutrition, setUseReccNutrition] = useState(false);
    
    const toggleReccNutrition = () =>
      setUseReccNutrition((previousState) => !previousState);

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
                View your meal history and what effects we think your diet may be having
                on your health!
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
                multiPageData={displayData}
                timePeriod={timestamps} 
                page={'historyGenComp'}
                page2Color={false} 
                settings={settings}
              />
            </View>

            {/* Time Period and Select Nutrient drop-down selection */}
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
                      getDisplayData(data, itemValue, setDisplayData, selectNutrients);
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
                <Text style={styles().heading}>SELECT NUTRIENT</Text>
                <View style={styles().pickerView}>
                  <Picker
                    selectedValue={selectNutrients}
                    style={styles().picker}
                    onValueChange={(itemValue, itemIndex) => {
                      setNutrients(itemValue);
                      getDisplayData(data, timePeriod, setDisplayData, itemValue);
                      getTimestamps(data, timestamps, setTimestamps, timePeriod);
                    }}
                    mode={'dropdown'}
                  >
                    <Picker.Item label='Calories' value='calories' />
                    <Picker.Item label='Total fat' value='total_fat' />
                    <Picker.Item label='Total Protein' value='total_protein' />
                    <Picker.Item label='Total carbs' value='total_carbs' />
                  </Picker>
                </View>
              </View>
            </View>

            {/* Display recommended nutritional values switch */}
            <View style={styles().line}/>
            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
              <Text style={styles().textLight}>Display recommended nutritional values</Text>
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
                      useReccNutrition
                        ? (global.colorblindMode 
                          ? global.cb_switchThumbColorTrue
                          : global.switchThumbColorTrue)
                        : (global.colorblindMode
                          ? global.cb_switchThumbColorFalse
                          : global.switchThumbColorFalse)
                    }
                    ios_backgroundColor={global.cb_switchIosBackgroundColor}
                    onValueChange={toggleReccNutrition}
                    value={useReccNutrition}
                  />
              </View>
            </View>
            <View style={styles().line}/>

            {/* App suggestions */}
            <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
              {/* Nutritional values met analysis */}
              <Text style={styles().text}>
                Based on our analysis, on days that you met or came close to meeting the daily
                recommended nutritional requirements, you often reported...
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

              {/* Nutritional values not met analysis */}
              <Text style={styles().text}>
                Based on our analysis, on days that you did not meet or fell significnatly 
                short of the daily recommended nutritional requirements, you often reported...
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
                ** Please consult a medical professional before altering your diet as a result 
                of these analyses. As a reminder, these analyses indicate correlation, not 
                causation, and thus may not indicate direct effects of your diet. 
              </Text>
            </View>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* Recommended calories */}
            <View style={{ marginHorizontal: '5%', }}>
              <Text style={styles().text}>
                Based on your biological information, we can provide you the following
                recommendations on your calorie consumption thresholds...
              </Text>
              <View style={{ borderRadius: 10, marginVertical: 10, }}>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                  <View style={{ width: '50%', backgroundColor: '#43A56C', borderTopLeftRadius: 10, }}>
                    <Text style={styles().textAltWhite}>Weight gain</Text>
                  </View>
                  <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderTopRightRadius: 10, }}>
                    <Text style={styles().textAltBrown}>xxxx cal</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                  <View style={{ width: '50%', backgroundColor: '#4CB97A', borderLeftRadius: 10, }}>
                    <Text style={styles().textAltWhite}>Mild weight gain</Text>
                  </View>
                  <View style={{ width: '50%', backgroundColor: 'white', borderRightRadius: 10, }}>
                    <Text style={styles().textAltBrown}>xxxx cal</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                  <View style={{ width: '50%', backgroundColor: '#A5DFB2', borderLeftRadius: 10, }}>
                    <Text style={styles().textAltWhite}>Maintan weight</Text>
                  </View>
                  <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderRightRadius: 10, }}>
                    <Text style={styles().textAltBrown}>xxxx cal</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                  <View style={{ width: '50%', backgroundColor: '#C5E8CF', borderLeftRadius: 10, }}>
                    <Text style={styles().textAltWhite}>Mild weight loss</Text>
                  </View>
                  <View style={{ width: '50%', backgroundColor: 'white', borderRightRadius: 10, }}>
                    <Text style={styles().textAltBrown}>xxxx cal</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                  <View style={{ width: '50%', backgroundColor: '#D8EFDE', borderBottomLeftRadius: 10, }}>
                    <Text style={styles().textAltWhite}>Weight loss</Text>
                  </View>
                  <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderBottomRightRadius: 10, }}>
                    <Text style={styles().textAltBrown}>xxxx cal</Text>
                  </View>
                </View>
              </View>
              <Text style={styles().textLightSmall}>
                ** Please consult a medical professional before planning to go above 
                (xxxx cal) or below (1200 cal), the minimum/maximum recommended daily calories 
                amounts, for an extended period of time. Recommendations are based on current 
                height, weight, and activity level, and thus may not always be accurate.
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
                View your meal history and what effects we think your diet may be having
                on your health!
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

function cleanUpData(arr) {
  const len = arr.length;

  for(var i = 0; i < len; i++)
    if(arr[i] == -1)
      arr[i] = 0;

  return arr;
}

function initDisplayData(data) {
  var arr = [];

  arr = makeWeek(data.mealData.calories);

  arr = cleanUpData(arr);

  return arr;
}

function getDisplayData(data, timePeriod, setDisplayData, selectNutrients) {
  var arr = [];
  var sum = 0;

  //calories || unselected
  if(selectNutrients === 'calories') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.mealData.calories);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.mealData.calories);

    else 
      arr = makeYear(data.mealData.calories);
  }

  //fat
  if(selectNutrients === 'total_fat') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.mealData.fats);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.mealData.fats);

    else 
      arr = makeYear(data.mealData.fats);
  }

  //protein
  if(selectNutrients === 'total_protein') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.mealData.proteins);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.mealData.proteins);

    else 
      arr = makeYear(data.mealData.proteins);
  }

  //carbs
  if(selectNutrients === 'total_carbs') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.mealData.carbs);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.mealData.carbs);

    else 
      arr = makeYear(data.mealData.carbs);
  }

  arr = cleanUpData(arr);

  setDisplayData(arr);
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

export default HistoryMealTracking;

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
  textAltBrown: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  textAltWhite: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  textLight: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
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
