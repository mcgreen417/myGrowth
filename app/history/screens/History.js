import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryHealthEntries({ route, navigation }) {
  const data = route.params.data;
  const arr = initDisplayData(data);
  const labels = getTimestamps(data);
  const commits = genCommits(arr, labels);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
      
      { /* Modal */}
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
              View a summary of your health entry history! Select a category below to
              get started.
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
              data={commits} 
              page={'history'}
              page2Color={false} 
            />
          </View>

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Search for correlations blurb */}
          <View style={{ width: '90%' }}>
            <Text style={styles().text}>
              You can overlay graphs from different categories to search 
              for correlations between your physical and mental health. 
              Click below to get started!
            </Text>
          </View>

          {/* Search for correlations button */}
          <View style={{ width: '60%', marginTop: 20, marginBottom: 4, }}>
            <Button 
              title='SEARCH FOR CORRELATIONS'
              color={
                global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
              }
              onPress={() => navigation.navigate('HistoryCorrelations', {data})}>
            </Button>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
}

function isEmpty(obj) {
  for(var i in obj)
    return false;

  return true;
}

//moodData, stressData, nightSleepData, napSleepData, weightData, fitnessData, activityData, mealData, symptomData, medicineData
function initDisplayData(data) {
  var len = data.stressData.length;
  var arr = [];

  for(var i = len < 90 ? 0 : len - 90; i < len;  i++) {
    let sum = 0;

    //mood
    if(data.moodData[i] >= 0)
      sum++;

    //stress
    if(data.stressData[i] >= 0)
      sum++;

    //nightSleepData
    if(data.nightSleepData[i] >= 0)
      sum++;

    //napSleepData
    if(data.nightSleepData[i] >= 0)
      sum++;

    //weightData
    if(data.weightData[i] >= 0)
      sum++;

    //fitnessData
    if(!isEmpty(data.fitnessData)) {
      //burned
      if(data.fitnessData.burned[i] >= 0)
        sum++;

      //dur
      else if(data.fitnessData.dur[i] >= 0)
        sum++;

      //steps
      else if(data.fitnessData.steps[i] >= 0)
        sum++;

      //exercises
      else
        if(!isEmpty(data.fitnessData.exercises[i]))
          for(let [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i])))
            if(key !== 'null') {
              sum++;
              break;
            }
    }

    //activityData
    if(data.activityData[i] >= 0)
      sum++;

    //mealData
    if(!isEmpty(data.mealData)) {
      //calories
      if(data.mealData.calories[i])
        sum++;

      //carbs
      if(data.mealData.carbs[i])
        sum++;

      //fats
      if(data.mealData.fats[i])
        sum++;

      //proteins
      if(data.mealData.proteins[i])
        sum++;
    }

    //symptomData
    if(data.symptomData[i] >= 0)
      sum++;

    //medicineData
    if(!isEmpty(data.medicineData)) {
      //all Taken
      if(data.medicineData.allTaken[i] >= 0)
        sum++;
    }

    arr.push(sum);
  }

  return arr;
}

function getTimestamps(data) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 89; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    dates.push(date.toISOString().substring(0, 10));
  }

  return dates;
}

function genCommits(arr, labels) {
  var commitsArr = [];

  for(var i = 0; i < 90; i++) {
    let obj = new Object();
    obj.date = labels[i];
    obj.count = arr[i];
    commitsArr.push(obj);
  }

  return commitsArr;
}

export default HistoryHealthEntries;

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
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textAlt: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
});
