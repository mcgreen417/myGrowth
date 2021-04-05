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

function HistoryFitness2({ route, navigation }) {
  const data = route.params.data;
  var fitMap = getMap(data, 'unselected');
  const exercises = getLabels(getMap(data, 'past_year'));
  
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectExercise, setExercise] = useState('unselected');
  //const [labels, setLabels] = useState(getLabels(fitMap));
  const [freqs, setFreqs] = useState(getFreqs(fitMap, timePeriod));

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
          <View style={{marginTop: 6}}>
            <TabBarAndContent 
              navigation={navigation} 
              data={data} 
              timePeriod={['Duration']} 
              page={'fitness'}
              multiPageData={freqs}
              page2Color={true}
            />
          </View>

          {/* Time Period and Select Exercise drop-down selection */}
          <View 
            style={{ 
              width: '90%', 
              justifyContent: 'flex-start', 
              marginTop: 20, 
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
                    fitMap = getMap(data, itemValue);
                    setFreqs(getFreqs(fitMap, selectExercise === 'unselected' ? exercises[0] : selectExercise));
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
              <Text style={styles().heading}>SELECT EXERCISE</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={selectExercise}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setExercise(itemValue);
                    setFreqs(getFreqs(fitMap, itemValue === 'unselected' ? exercises[0] : itemValue));
                    console.log(itemValue);
                  }}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select one...' value='unselected' />
                  {exercises.map((item, index) => {
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

          {/* Recommended exercises (decide how we're going to add this in?) */}
          <View style={{ marginHorizontal: '5%', marginBottom: 20, }}>
            <Text style={styles().text}>
              Exercise is a great way to stay in shape and manage your weight! The
              following exercise regimens are recommended for you.
            </Text>
          </View>

          <View style={styles.pageEnd}/>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

function getMap(data, timePeriod) {
  var map = new Map();
  var length = data.fitnessData.exercises.length;

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    for(var i = length < 7 ? 0 : length - 7; i < length; i++)
      for(var [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i]))) {
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
      for(var [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i]))) {
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
      for(let [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i]))) {
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

function getLabels(fitMap) {
  const obj = [];

  fitMap.forEach(function(value, key) {
    obj.push(key);
  })

  return obj;
}

function getFreqs(fitMap, selectExercise) {
  const obj = [];

  fitMap.forEach(function(value, key) {
    if(key === selectExercise)
      obj.push(value);
  })

  return obj;
}

export default HistoryFitness2;

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
