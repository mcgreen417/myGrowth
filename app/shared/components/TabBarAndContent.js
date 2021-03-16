import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
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

const TabBarAndContent = ({
  history = false,
  historyGenComp = false,
  dailyActivities = false,
  generalHealth = false,
  medication = false,
  sleep = false,
  fitness = false,
  navigation,
}) => {
  const [imgSource, setImageSource] = useState(images.historyImg);

  /* History Comp version */
  if (history)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* History */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              navigation.navigate('HistoryHealthEntries');
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* Correlation */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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

  /* daily activities <- nav */
  if (dailyActivities)
    return (
      <View style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: 10 }}>
        <View style={{ height: 30, width: 220, flexDirection: 'row' }}>
          {/* history - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.historyImg);
              navigation.navigate('HistoryDailyActivities1');
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* activity view - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.activityImg);
              navigation.navigate('HistoryDailyActivities2');
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Activity View</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              navigation.navigate('HistoryDailyActivities1');
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
              setImageSourceS(images.historyImg);
              navigation.navigate('HistoryGeneralHealth1');
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* intensity - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.intensityImg);
              navigation.navigate('HistoryGeneralHealth2');
            }}
            style={({ pressed }) => [
              {
                width: 65,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Intensity</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              navigation.navigate('HistoryGeneralHealth1');
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Prescription</Text>
          </Pressable>

          {/* correlation */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
              navigation.navigate('HistorySleep1');
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Time Asleep</Text>
          </Pressable>

          {/* quality - 2 */}
          <Pressable
            onPress={() => {
              setImageSource(images.qualityImg);
              navigation.navigate('HistorySleep2');
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Quality</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              setImageSource(images.correlationImg);
              navigation.navigate('HistorySleep1');
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
            }}
            style={({ pressed }) => [
              {
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>History</Text>
          </Pressable>

          {/* exercises - 2 */}
          <Pressable
            onPress={() => {
              navigation.navigate('HistoryFitness2');
              setImageSource(images.exerciseImg);
            }}
            style={({ pressed }) => [
              {
                width: 72,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
            {/* text */}
            <Text style={styles.tabText}>Exercises</Text>
          </Pressable>

          {/* correlation - 1 */}
          <Pressable
            onPress={() => {
              navigation.navigate('HistoryFitness1');
              setImageSource(images.correlationImg);
            }}
            style={({ pressed }) => [
              {
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 2,
                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
              },
            ]}>
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
