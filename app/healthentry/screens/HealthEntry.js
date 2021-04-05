import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
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

async function submit(
  mood,
  feelings,
  stress,
  stressors,
  activities,
  symptoms,
  period,
  weight,
  slept,
  sleepTime,
  sleepQuality,
  naps,
  navigation
) {
  console.log(symptoms);
  console.log(period);
  console.log(weight);
  const activitiesIn = activities;
  const stressIn = { Severity: stress, Stressors: stressors };
  const moodIn = { Mood: mood, Feelings: feelings };
  const healthIn = { Period: period, Weight: weight };
  const symptomIn = symptoms;

  const query = {
    Mood: moodIn,
    Stress: stressIn,
    Activities: activitiesIn,
    Health: healthIn,
    Symptoms: symptomIn,
  };
  console.log(query);
  const res = await API.graphql({
    query: mutations.updateDailyEntry,
    variables: query,
  });

  console.log(res);

  navigation.navigate('EntryCompletion');
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
  const [weight, setWeight] = useState(0);
  const [symptoms, setSymptoms] = useState([]);
  const [hadSleep, setHadSleep] = useState(true);
  const [qualityOfSleep, setQualityOfSleep] = useState(-1);
  const [sleepTime, setSleepTime] = useState([]);
  const [qualityOfNap, setQualityOfNap] = useState(-1);
  const [naps, setNaps] = useState([]);
  const [stress, setStress] = useState(-1);
  const [stressors, setStressors] = useState([]);
  const [mood, setMood] = useState(0);
  const [feels, setFeels] = useState([]);
  const [activities, setActivities] = useState([]);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={styles().pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              Time for a new health entry! After you save your entry, you may
              edit it at any time.
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

          {/* Select Data and Time */}
          <View style={{ width: '90%' }}>
            <Text style={styles().heading}>SELECT DATE & TIME</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
                <Icon 
                  name='event' 
                  color={global.colorblindMode
                    ? global.cb_contentDividerColor
                    : global.contentDividerColor}
                  style={{ marginRight: 4, }} 
                />
                <Text style={styles().textLink}>{getDate(new Date())}</Text>
                <Icon 
                  name='arrow-drop-down' 
                  type='material'
                  color={global.colorblindMode
                    ? global.cb_contentDividerColor
                    : global.contentDividerColor} 
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
                <Icon 
                  name='schedule'
                  color={global.colorblindMode
                    ? global.cb_contentDividerColor
                    : global.contentDividerColor} 
                  style={{ marginRight: 4, }} 
                />
                <Text style={styles().textLink}>{getTime(new Date())}</Text>
                <Icon 
                  name='arrow-drop-down'
                  type='material'
                  color={global.colorblindMode
                    ? global.cb_contentDividerColor
                    : global.contentDividerColor}
                 />
              </View>
            </View>
          </View>
          {/* Section divider */}
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
          {/* Section divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Stress */}
          <Stress
            stress={stress}
            setStress={setStress}
            stressors={stressors}
            setStressors={setStressors}
          />
          {/* Section divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Daily Activities */}
          <DailyActivities
            activities={activities}
            setActivities={setActivities}
          />
          {/* Section divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Physical and Mental Health */}
          <PhysicalMentalHealth
            hadPeriod={hadPeriod}
            setHadPeriod={setHadPeriod}
            weight={weight}
            setWeight={setWeight}
            symptoms={symptoms}
            setSymptoms={setSymptoms}
          />
          {/* Section divider */}
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
            naps={naps}
            setNaps={setNaps}
            sleepTime={sleepTime}
            setSleepTime={setSleepTime}
          />
          {/* Section divider */}
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
          {/* Section divider */}
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
          {/* Section divider */}
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
                onPress={() =>
                  submit(
                    mood,
                    feels,
                    stress,
                    stressors,
                    activities,
                    symptoms,
                    hadPeriod,
                    weight,
                    hadSleep,
                    sleepTime,
                    qualityOfSleep,
                    naps,
                    navigation
                  )
                }
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
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
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
    line2: {
      backgroundColor: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      marginLeft: 40,
      marginRight: 40,
      height: '100%',
      width: 2,
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
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline'
    },
  });
