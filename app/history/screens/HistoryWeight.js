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
  "Mar",
  "May",
  "July",
  "Sept",
  "Nov"
];

function HistoryWeight({ route, navigation }) {
  const data = route.params.data;
  const arr = initDisplayData(data);

  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('past_week');
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
              View your changes in weight over time and get physical health 
              recommendations!
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
            />
          </View>

          {/* pass in itemValue not timePeriod */}
          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, }}>
            <Text style={styles().heading}>TIME PERIOD</Text>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={timePeriod}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => {
                  setTimePeriod(itemValue);
                  getDisplayData(data, itemValue, setDisplayData);
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
            <Text style={styles().textLight}>
              ** Please consult a medical professional before planning to go above 
              (xxxx cal) or below (1200 cal), the minimum/maximum recommended daily calories 
              amounts, for an extended period of time. Recommendations are based on current 
              height, weight, and activity level, and thus may not always be accurate.
            </Text>
          </View>

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Recommended exercises (decide how we're going to add this in?) */}
          <View style={{ marginHorizontal: '5%', }}>
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
    if(arr[i] <= 0) {
      if(i === 0)
        arr[i] = arr[i + 1];

      else
        arr[i] = arr[i - 1];
    }

  return arr;
}

function initDisplayData(data) {
  var arr = [];

  arr = makeWeek(data.weightData);

  arr = cleanUpData(arr);

  return arr;
}

function getDisplayData(data, timePeriod, setDisplayData) {
  var len = data.weightData.length;
  var arr = [];
  var sum = 0;

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    arr = makeWeek(data.weightData);

  //create data points for graph; show data points twice per week
  else if(timePeriod === 'past_month')
    arr = makeMonth(data.weightData);

  else
    arr = makeYear(data.weightData);

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

export default HistoryWeight;

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
});
