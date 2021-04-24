import { button } from '@aws-amplify/ui';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Pressable, 
  Dimensions,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import HistoryCorrelations from '../../history/screens/HistoryCorrelations';

const buttonColors = {
  lightGreen: '#A5DFB2',
  darkGreen: '#4CB97A',
};

const TabBarAndContent = ({
  navigation,
  data,
  timePeriod, 
  page,
  multiPageData,
  page2Color, 
  settings
}) => {
  //page 2 buttons: activity, intensity, quality, exercise
  const [historyButtonColor, setHistoryButtonColor] = useState(page2Color == false ? buttonColors.darkGreen : buttonColors.lightGreen);
  const [corrButtonColor, setCorrButtonColor] = useState(buttonColors.lightGreen);
  const [activityButtonColor, setActivityButtonColor] = useState(page2Color == false ? buttonColors.lightGreen : buttonColors.darkGreen);
  const [intensityButtonColor, setIntensityButtonColor] = useState(page2Color == false ? buttonColors.lightGreen : buttonColors.darkGreen);
  const [scriptButtonColor, setScriptButtonColor] = useState(page2Color == false ? buttonColors.darkGreen : buttonColors.lightGreen);
  const [sleepButtonColor, setSleepButtonColor] = useState(page2Color == false ? buttonColors.darkGreen : buttonColors.lightGreen);
  const [qualityButtonColor, setQualityButtonColor] = useState(page2Color == false ? buttonColors.lightGreen : buttonColors.darkGreen);
  const [exerciseButtonColor, setExerciseButtonColor] = useState(page2Color == false ? buttonColors.lightGreen : buttonColors.darkGreen);

  const [showTable, setShowTable] = useState(true);

  /* History Comp version */
  if (page === 'history')
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
              setHistoryButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {showTable && <ContributionGraph
          values={data}
          endDate={new Date()}
          numDays={90}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            fillShadowGradientOpacity: 3,
            decimalPlaces: 1, // optional, defaults to 2dp
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
        />}
      </View>
    );

  {/* Mood, Stress, Meal, Weight */}
  if (page === 'historyGenComp')
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
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Correlations */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {/* render image */}
        {/* !showTable &&
          <Image style={styles.images} source={imgSource} />*/}
        {showTable && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
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
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}

        {/* Render image */}
        {/*<Image style={styles.images} source={imgSource} />*/}

      </View>
    );
  
    {/* period */}
  if (page === 'period')
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
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>History</Text>
          </Pressable>

          {/* Correlations */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {showTable && <ContributionGraph
          values={multiPageData}
          endDate={new Date()}
          numDays={90}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            fillShadowGradientOpacity: 3,
            decimalPlaces: 1, // optional, defaults to 2dp
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
        />}

      </View>
    );

  {/* Daily Activities */}
  if (page === 'dailyActivities')
    return (
      <View style={{ width: '90%', marginTop: 6}}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryDailyActivities1', {data, settings});
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
              setShowTable(true);
              navigation.navigate('HistoryDailyActivities2', {data, settings});
            }}
          >
            <Text style={styles.text}>Activity</Text>
          </Pressable>

          {/* Correlations */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setActivityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>

        {/* Render heat map */}
        {showTable && page2Color &&  
          <ContributionGraph
            values={multiPageData}
            endDate={new Date()}
            numDays={90}
            width={Math.round(Dimensions.get('window').width * 0.9)}
            height={Math.round(Dimensions.get('window').width * 0.6)}
            chartConfig={{
              backgroundColor: "#4CB97A",
              backgroundGradientFrom: "#4CB97A",
              backgroundGradientTo: "#4CB97A",
              fillShadowGradientOpacity: 3,
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
          />
        }

        {/* Render bar graph */}
        {showTable && !page2Color && <BarChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            fillShadowGradientOpacity: 3,
          }}
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}
      </View>
    );

  {/* General Health */}
  if (page === 'generalHealth')
    return (
      <View style={{ width: '90%', marginTop: 13 }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setHistoryButtonColor(buttonColors.darkGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryGeneralHealth1', {data, settings});
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
              setShowTable(true);
              navigation.navigate('HistoryGeneralHealth2', {data, settings});
            }}
          >
            <Text style={styles.text}>Intensity</Text>
          </Pressable>

          {/* Correlation */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setIntensityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/} 
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        {/*<Image style={styles.images} source={imgSource} />*/}

        {showTable && page2Color && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
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
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}

        {showTable && !page2Color && <BarChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            fillShadowGradientOpacity: 3,
          }}
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}
      </View>
    );

  {/* Medication */}
  if (page === 'medication')
    return (
      <View style={{ width: '90%', }}>
        <View style={{ flexDirection: 'row', }}>
          {/* Prescription */}
          <Pressable
            style={{
              backgroundColor: scriptButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setScriptButtonColor(buttonColors.darkGreen);
            }}
          >
            <Text style={styles.text}>Prescription</Text>
          </Pressable>

          {/* Correlation */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setScriptButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* render image */}
        {/* !showTable &&
          <Image style={styles.images} source={imgSource} />*/}
        {showTable && <ContributionGraph
          values={multiPageData}
          endDate={new Date()}
          numDays={90}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            fillShadowGradientOpacity: 3,
            decimalPlaces: 1, // optional, defaults to 2dp
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
        />}
      </View>
    );

  {/* Sleep */}
  if (page === 'sleep')
    return (
      <View style={{ width: '90%', marginTop: 6 }}>
        <View style={{ flexDirection: 'row', }}>
          {/* Time asleep */}
          <Pressable
            style={{
              backgroundColor: sleepButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(true);
              setCorrButtonColor(buttonColors.lightGreen);
              setSleepButtonColor(buttonColors.darkGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistorySleep1', {data});
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
              setShowTable(true);
              navigation.navigate('HistorySleep2', {data, settings});
            }}
          >
            <Text style={styles.text}>Quality</Text>
          </Pressable>

          {/* Correlation */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setSleepButtonColor(buttonColors.lightGreen);
              setQualityButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        {/* !showTable &&
          <Image style={styles.images} source={imgSource} />*/}

        {showTable && typeof(multiPageData.sleep) != 'undefined' && !page2Color && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
                { data: multiPageData.sleep,
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                },
                {
                  data: multiPageData.nap,
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(129, 104, 104, ${opacity})`,
                }
            ],
            legend: ['Sleep', 'Naps'],
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#A5DFB2"
            }
          }}
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}

        {showTable && typeof(multiPageData.sleep) == 'undefined' && !page2Color && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
                {data: multiPageData}
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
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
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}

        {showTable && page2Color && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
                {data: multiPageData}
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
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
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}
      </View>
    );

  {/* Fitness */}
  if (page === 'fitness')
    return (
      <View style={{ width: '90%', marginTop: 13 }}>
        <View style={{ flexDirection: 'row', }}>
          {/* History */}
          <Pressable
            style={{
              backgroundColor: historyButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('HistoryFitness1', {data, settings});
              setShowTable(true);
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
              navigation.navigate('HistoryFitness2', {data, settings});
              setShowTable(true);
            }}
          >
            <Text style={styles.text}>Exercises</Text>
          </Pressable>

          {/* Correlation */}
          {/*<Pressable
            style={{
              backgroundColor: corrButtonColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onPress={() => {
              setShowTable(false);
              setCorrButtonColor(buttonColors.darkGreen);
              setHistoryButtonColor(buttonColors.lightGreen);
              setExerciseButtonColor(buttonColors.lightGreen);
              navigation.navigate('HistoryCorrelations', {data, settings});
            }}
          >
            <Text style={styles.text}>Correlations</Text>
          </Pressable>*/}
        </View>

        {/* Colored bar */}
        <View style={styles.coloredBarView}>
          <View style={styles.coloredBar} />
        </View>
        {/* Render image */}
        {/*<Image style={styles.images} source={imgSource} />*/}

        {showTable && !page2Color && <LineChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
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
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}

        {showTable && page2Color && <BarChart 
          data = {{
            labels: timePeriod,
            datasets: [
              {
                data: multiPageData
              }
            ]
          }}
          width={Math.round(Dimensions.get('window').width * 0.9)}
          height={Math.round(Dimensions.get('window').width * 0.6)}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#4CB97A",
            backgroundGradientFrom: "#4CB97A",
            backgroundGradientTo: "#4CB97A",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            fillShadowGradientOpacity: 3,
          }}
          fromZero={true}
          bezier
          style={{
            borderRadius: 16
          }}
        />}
      </View>
    );

  return null;
};

export default TabBarAndContent;

const styles = StyleSheet.create({
  coloredBar: {
    flex: 1,
    height: 20,
    width: Math.round(Dimensions.get('window').width * 0.9),
    backgroundColor: '#4CB97A',
  },
  coloredBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -1,
    marginBottom: -16
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