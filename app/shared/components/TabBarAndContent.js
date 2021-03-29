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
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* History */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              setHistoryButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryHealthEntries');
            }}
            style={
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: historyButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }
            }>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  /* Gen comp version: mood, stress, period, meal, weight */
  if (historyGenComp)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* History */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              getTimestamps(data, timestamps, setTimestamps, timePeriod);
              getGenData(data, timePeriod, timestamps, setTimestamps, page, displayData, setDisplayData);
            }}
            style={
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: historyButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }
            }>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
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
      </View>
    );

  /* daily activities <- nav */
  if (dailyActivities)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* history - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryDailyActivities1');
            }}
            style={{
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: historyButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* activity view - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.activityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setActivityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryDailyActivities2');
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: activityButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Activity View</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryDailyActivities1');
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {/* render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  /* general health <- nav */
  if (generalHealth)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* history - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryGeneralHealth1');
            }}
            style={{
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: historyButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* intensity - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.intensityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setIntensityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistoryGeneralHealth2');
            }}
            style={{
                width: 65,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: intensityButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Intensity</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryGeneralHealth1');
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  /* medication */
  if (medication)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* prescription */}
          <Pressable
            onPress={() => {
              setImageSource(images.prescriptionImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setScriptButtonColor(buttonColors.darkGreen);
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: scriptButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Prescription</Text>
          </Pressable>

          {/* correlation */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setScriptButtonColor(buttonColors.lightGreen);
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  /* sleep <- nav */
  if (sleep)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* time asleep - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.timeSleepImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setSleepButtonColor(buttonColors.darkGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistorySleep1');
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: sleepButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Time Asleep</Text>
          </Pressable>

          {/* quality - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.qualityImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setSleepButtonColor(buttonColors.lightGreen);
              setQualityButtonColor(buttonColors.darkGreen);
              navigation.navigate('HistorySleep2');
            }}
            style={{
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: qualityButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Quality</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setSleepButtonColor(buttonColors.lightGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistorySleep1');
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
        <Image style={styles.images} source={imgSource} />
      </View>
    );

  /* fitness <- nav */
  if (fitness)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* history - 1 */}
          <Pressable
            onPress={() => {
              navigation.navigate('HistoryFitness1');
              setImageSource(images.historyImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setExerciseButtonColor(buttonColors.lightGreen);
            }}
            style={{
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: historyButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* exercises - 2 */}
          <Pressable
            onPress={() => {
              navigation.navigate('HistoryFitness2');
              setImageSource(images.exerciseImg);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setExerciseButtonColor(buttonColors.darkGreen);
            }}
            style={{
                width: 72,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: exerciseButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Exercises</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              navigation.navigate('HistoryFitness1');
              setImageSource(images.correlationImg);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setExerciseButtonColor(buttonColors.lightGreen);
            }}
            style={{
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: corrButtonColor,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
            {/* text */}
            <Text style={styles.tabText}>Correlations</Text>
          </Pressable>
        </View>
        {/* colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
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

    if(timePeriod === 'past_week' || timePeriod === 'unselected')
        setDisplayData(data.periodData.slice(len - 7, len));

    else if(timePeriod === 'past_month')
      setDisplayData(data.periodData.slice(len - 30, len));

    else
      setDisplayData(data.periodData.slice(len - 365, len));
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
    width: 350,
    height: 220,
  },
  tabText: {
    color: 'white',
    fontSize: 14,
    paddingTop: 3,
  },
});
