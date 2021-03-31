import { button } from '@aws-amplify/ui';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const images = {
  historyImg: require('../../shared/assets/Rectangle.png'),
  correlationImg: require('../../shared/assets/close.png'),
  activityImg: require('../../shared/assets/gardener-avatar.png'),
  intensityImg: require('../../shared/assets/SettingsGirlReading.png'),
  prescriptionImg: require('../../shared/assets/splash.png'),
  timeSleepImg: require('../../shared/assets/Rectangle.png'),
  qualityImg: require('../../shared/assets/splash.png'),
  exerciseImg: require('../../shared/assets/splash.png'),
};

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

const buttonColors = {
  lightGreen: '#A5DFB2',
  darkGreen: '#4CB97A',
};

const TabBarAndContent = ({
  history = false,
  historyGenComp = false,
  dailyActivities = false,
  generalHealth = false,
  medication = false,
  sleep = false,
  fitness = false,
  navigation,
  data,
  timePeriod, 
  page
}) => {
  const [imgSource, setImageSource] = useState(images.historyImg);
  const [historyButtonColor, setHistoryButtonColor] = useState(buttonColors.darkGreen);
  const [corrButtonColor, setCorrButtonColor] = useState(buttonColors.lightGreen);
  const [activityButtonColor, setActivityButtonColor] = useState(buttonColors.lightGreen);
  const [intensityButtonColor, setIntensityButtonColor] = useState(buttonColors.lightGreen);
  const [scriptButtonColor, setScriptButtonColor] = useState(buttonColors.darkGreen);
  const [sleepButtonColor, setSleepButtonColor] = useState(buttonColors.darkGreen);
  const [qualityButtonColor, setQualityButtonColor] = useState(buttonColors.lightGreen);
  const [exerciseButtonColor, setExerciseButtonColor] = useState(buttonColors.lightGreen);

  const [timestamps, setTimestamps] = useState([]);
  const [displayData, setDisplayData] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  /* History Comp version */
  if (history)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.historyImg);
              setHistoryButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryHealthEntries');
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  {/* Mood, Stress, Period, Meal, Weight */}
  if (historyGenComp)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              getTimestamps(data, timestamps, setTimestamps, timePeriod);
              getGenData(data, timePeriod, timestamps, setTimestamps, page, displayData, setDisplayData);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Correlations */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {/* render image */}
        { imgSource === images.correlationImg &&
          <Image style={styles.images} source={imgSource} />}
        {imgSource === images.historyImg && <LineChart 
          data = {{
            labels: timestamps,
            datasets: [
              {
                data: displayData
              }
            ]
          }}
          width={349} // from react-native
          height={250}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#A5DFB2",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#4CB97A"
            }
          }}
          bezier
          style={{
          }}
        />}

        {/* Render image */}
        {/*<Image style={styles.images} source={imgSource} />*/}

      </View>
    );

  {/* Daily Activities */}
  if (dailyActivities)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryDailyActivities1');
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Activities */}
          <Pressable
            style={{
              backgroundColor: activityButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.activityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setActivityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryDailyActivities2');
            }}
          >
            <Text style={styles.text}>Activity</Text>
          </Pressable>

          {/* Correlations */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryDailyActivities1');
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Eender image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  {/* General Health */}
  if (generalHealth)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryGeneralHealth1');
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Intensity */}
          <Pressable
            style={{
              backgroundColor: intensityButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.intensityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setIntensityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryGeneralHealth2');
            }}
          >
            <Text style={styles.text}>Intensity</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryGeneralHealth1');
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  {/* Medication */}
  if (medication)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* Prescription */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.prescriptionImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setScriptButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setScriptButtonColor(buttonColors.lightGreen);
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  {/* Sleep */}
  if (sleep)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* Time asleep */}
          <Pressable
            style={{
              backgroundColor: sleepButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.timeSleepImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setSleepButtonColor(buttonColors.darkGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistorySleep1');
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Quality */}
          <Pressable
            style={{
              backgroundColor: qualityButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.qualityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setSleepButtonColor(buttonColors.lightGreen);
              setQualityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistorySleep2');
            }}
          >
            <Text style={styles.text}>Quality</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setSleepButtonColor(buttonColors.lightGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistorySleep1');
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  {/* Fitness */}
  if (fitness)
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('HistoryFitness1');
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setExerciseButtonColor(buttonColors.lightGreen);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Exercises */}
          <Pressable
            style={{
              backgroundColor: exerciseButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('HistoryFitness2');
              setImageSource(images.exerciseImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setExerciseButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>Exercises</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('HistoryFitness1');
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setExerciseButtonColor(buttonColors.lightGreen);
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  return null;
};

function getGenData(data, timePeriod, timestamps, setTimestamps, page, displayData, setDisplayData) {
  var len = 0;
  
  //data.moodData
  if(page === 'mood') {
    len = data.moodData.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
        setDisplayData(data.moodData.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.moodData.slice(len - 30, len));

    else
      setDisplayData(data.moodData.slice(len - 365, len));
  }
  // diff func ideally
  //data.napSleepData
  //data.nightSleepData
  //else if(page === 'sleep') {
    
  //}
  
  //data.periodData
  else if(page === 'period') {
    len = data.periodData.length;

    setDisplayData(data.periodData.slice(len - 30, len));
  }

  //data.stressData
  else if(page === 'stress') {
    len = data.stressData.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
        setDisplayData(data.stressData.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.stressData.slice(len - 30, len));

    else
      setDisplayData(data.stressData.slice(len - 365, len));
  }
  //data.weightData
  else {
    len = data.weightData.length;

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
        setDisplayData(data.weightData.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.weightData.slice(len - 30, len));

    else
      setDisplayData(data.weightData.slice(len - 365, len));
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

export default TabBarAndContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 345,
    height: 230,
  },
  coloredBar: {
    flex: 1,
    height: 3,
    width: 350,
    backgroundColor: '#4CB97A',
  },
  coloredBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -1,
  },
  images: {
    flex: 1,
    width: 370,
  },
  subTab: {
    backgroundColor: buttonColors.lightGreen,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tab: {
    backgroundColor: buttonColors.darkGreen,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
