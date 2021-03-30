import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import Mood from '../components/Mood';
import Stress from '../components/Stress';
import DailyActivities from '../components/DailyActivities';
import PhysicalMentalHealth from '../components/PhysicalMentalHealth';
import Medication from '../components/Medication';
import Sleep from '../components/Sleep';
import MealHistory from '../components/MealHistory';
import FitnessTracking from '../components/FitnessTracking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as mutations from '../../../src/graphql/mutations';

const medication = [
  { name: '(Medicine 1)', time: '2021-03-15T09:10:00Z' },
  { name: '(Medicine 2)', time: '2021-03-15T13:35:40Z' },
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDate(d) {
  return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

async function submit(mood, feelings, navigation) {
  const moodIn = { Mood: mood, Feelings: feelings };
  const res = await API.graphql({
    query: mutations.updateDailyEntry,
    variables: { Mood: moodIn },
  });

  console.log(res);

  navigation.navigate('ReviewEntry');
}

const HealthEntry = ({ navigation }) => {
  const [exerciseToday, setExerciseToday] = useState(false);
  const [showAdvanceFitnessTracking, setShowAdvanceFitnessTracking] = useState(
    false
  );
  const [eatenToday, setEatenToday] = useState(true);
  const [showAdvanceMealTracking, setShowAdvanceMealTracking] = useState(false);
  const [med, setMed] = useState(Array(medication.length).fill(false));
  const [hadPeriod, setHadPeriod] = useState(false);
  const [hadSleep, setHadSleep] = useState(true);
  const [qualityOfSleep, setQualityOfSleep] = useState(2);
  const [qualityOfNap, setQualityOfNap] = useState(2);
  const [stress, setStress] = useState(2);
  const [mood, setMood] = useState(0);
  const [feels, setFeels] = useState([]);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
            <Text style={styles().pageDescription}>
              Time for a new health entry! After you save your entry, you may
              edit it at any time.
            </Text>
          </View>

          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Select Data and Time */}
          <View style={{ width: '80%' }}>
            <Text>SELECT DATE & TIME</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name='event' />
                <Text>{getDate(new Date())}</Text>
                <Icon name='arrow-drop-down' type='material' />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name='schedule' />
                <Text>{getTime(new Date())}</Text>
                <Icon name='arrow-drop-down' type='material' />
              </View>
            </View>
          </View>

          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Mood */}
          <Mood
            mood={mood}
            setMood={setMood}
            feels={feels}
            setFeels={setFeels}
          />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Stress */}
          <Stress stress={stress} setStress={setStress} />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Daily Activities */}
          <DailyActivities />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Physical and Mental Health */}
          <PhysicalMentalHealth
            hadPeriod={hadPeriod}
            setHadPeriod={setHadPeriod}
          />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Medication */}
          <Medication med={med} setMed={setMed} />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Sleep */}
          <Sleep
            hadSleep={hadSleep}
            setHadSleep={setHadSleep}
            qualityOfSleep={qualityOfSleep}
            setQualityOfSleep={setQualityOfSleep}
            qualityOfNap={qualityOfNap}
            setQualityOfNap={setQualityOfNap}
          />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Meal History */}
          <MealHistory
            eatenToday={eatenToday}
            setEatenToday={setEatenToday}
            showAdvanceMealTracking={showAdvanceMealTracking}
            setShowAdvanceMealTracking={setShowAdvanceMealTracking}
          />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Fitness Tracking */}
          <FitnessTracking
            exerciseToday={exerciseToday}
            setExerciseToday={setExerciseToday}
            showAdvanceFitnessTracking={showAdvanceFitnessTracking}
            setShowAdvanceFitnessTracking={setShowAdvanceFitnessTracking}
          />
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Save Entry */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 16,
              alignSelf: 'center',
            }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='Save Entry'
                color='#A5DFB2'
                onPress={() => submit(mood, feels, navigation)}
              />
            </View>
          </View>
        </View>
        <View style={styles().pageEnd} />
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HealthEntry;

const styles = () =>
  StyleSheet.create({
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
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    buttons: {
      marginTop: 7,
      marginBottom: 7,
      width: '110%',
    },
    fillerImage: {
      width: 340,
      height: 240,
      marginTop: -20,
    },
    text: {
      color: '#816868',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    pageDescription: {
      color: '#816868',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      fontWeight: 'bold',
      marginRight: 50,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#816868',
      marginLeft: 30,
      marginRight: 30,
    },
    dividerLeft: {
      flex: 1,
      height: 1,
      backgroundColor: '#816868',
      marginLeft: 20,
    },
    dividerRight: {
      flex: 1,
      height: 1,
      backgroundColor: '#816868',
      marginRight: 20,
    },
    dividerView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 16,
    },
    dividerViewLow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      marginBottom: 8,
    },
    inlineRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inlineRow2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    line2: {
      backgroundColor: '#816868',
      marginLeft: 40,
      marginRight: 40,
      height: '100%',
      width: 2,
    },
    pageDescription: {
      color: '#816868',
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 20,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      // justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    plant: {
      width: '60%',
      height: '90%',
    },
    plantButtons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5,
    },
    plantSection: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: '90%',
    },
    plantImage: {
      width: '100%',
      height: 260,
      overflow: 'hidden',
      backgroundColor: '#E5E5E5',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 6,
      borderColor: '#816868',
    },
    plantItem: {
      margin: 10,
    },
    plantItemSelect: {
      marginLeft: 12,
      marginRight: 12,
      marginTop: 8,
      marginBottom: 8,
    },
    plantItemPress: {
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderWidth: 3,
      borderColor: '#816868',
    },
    plantLinks: {
      color: '#4CB97A',
      textDecorationLine: 'underline',
      fontSize: 16,
    },
    plantSelectView: {
      justifyContent: 'center',
      flex: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 5,
    },
    text: {
      fontSize: 16,
      color: '#816868',
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#A6A1A0',
      margin: 30,
      borderRadius: 2,
    },
    textReg: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      textDecorationLine: 'none',
      textAlign: 'left',
    },
  });
