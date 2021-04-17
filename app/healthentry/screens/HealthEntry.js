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
  Dimensions,
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
  //console.log(symptoms);
  //console.log(period);
  //console.log(weight);
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
  // Stress variables
  const [stressSeverity, setStressSeverity] = useState(0);
  const [stressors, setStressors] = useState([]);

  // Mood variables
  const [mood, setMood] = useState(0);
  const [feelings, setFeelings] = useState([]);

  // Daily Activities variables
  const [activities, setActivities] = useState([]);

  const [medChecked, setMedChecked] = useState(0);
  const [medications, setMedications] = useState([]);
  const [hadPeriod, setHadPeriod] = useState(false);
  const [weight, setWeight] = useState('');
  const [symptoms, setSymptoms] = useState([]);

  const [hadSleep, setHadSleep] = useState(true);
  const [qualityOfSleep, setQualityOfSleep] = useState(0);
  const [sleepTimeStart, setSleepTimeStart] = useState(new Date());
  const [sleepTimeEnd, setSleepTimeEnd] = useState(new Date());
  const [hadNap, setHadNap] = useState(false);
  const [naps, setNaps] = useState([]);

  const [eatenToday, setEatenToday] = useState(true);
  const [meals, setMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState('');
  const [totalProteins, setTotalProteins] = useState('');
  const [totalCarbs, setTotalCarbs] = useState('');
  const [totalFats, setTotalFats] = useState('');

  const [exerciseToday, setExerciseToday] = useState(false);
  const [exerciseLength, setExerciseLength] = useState('');
  const [caloriesBurn, setCaloriesBurn] = useState('');
  const [stepsTracked, setStepsTracked] = useState(false);
  const [steps, setSteps] = useState('');
  const [exercises, setExercises] = useState([]);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              Time for a new health entry! Fill out only the fields you'd like to and come 
              back here to edit your entry later.
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

          {/* Select Data and Time */}
          <View style={{ width: '90%' }}>
            <Text style={styles().heading}>SELECT DATE & TIME</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Icon
                  name='event'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                  style={{ marginRight: 4 }}
                />
                <Text style={styles().textLink}>{getDate(new Date())}</Text>
                <Icon
                  name='arrow-drop-down'
                  type='material'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Icon
                  name='schedule'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                  style={{ marginRight: 4 }}
                />
                <Text style={styles().textLink}>{getTime(new Date())}</Text>
                <Icon
                  name='arrow-drop-down'
                  type='material'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
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
            feels={feelings}
            setFeels={setFeelings}
          />
          {/* Section divider */}
          <View style={{ marginTop: -10, }}/>
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Stress */}
          <Stress
            stress={stressSeverity}
            setStress={setStressSeverity}
            stressors={stressors}
            setStressors={setStressors}
          />
          {/* Section divider */}
          <View style={{ marginTop: -10, }}/>
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Daily Activities */}
          <DailyActivities
            activities={activities}
            setActivities={setActivities}
          />
          {/* Section divider */}
          <View style={{ marginTop: -10, }}/>
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
          <View style={{ marginTop: -10, }}/>
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Medication */}
          <Medication
            medChecked={medChecked}
            setMedChecked={setMedChecked}
            medications={medications}
            setMedications={setMedications}
          />
          {/* Section divider */}
          <View style={{ marginTop: -10, }}/>
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Sleep */}
          <Sleep
            hadSleep={hadSleep}
            setHadSleep={setHadSleep}
            qualityOfSleep={qualityOfSleep}
            setQualityOfSleep={setQualityOfSleep}
            hadNap={hadNap}
            setHadNap={setHadNap}
            naps={naps}
            setNaps={setNaps}
            sleepTimeStart={sleepTimeStart}
            setSleepTimeStart={setSleepTimeStart}
            sleepTimeEnd={sleepTimeEnd}
            setSleepTimeEnd={setSleepTimeEnd}
          />
          {/* Section divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Meal History */}
          <MealHistory
            eatenToday={eatenToday}
            setEatenToday={setEatenToday}
            totalCalories={totalCalories}
            setTotalCalories={setTotalCalories}
            totalProteins={totalProteins}
            setTotalProteins={setTotalProteins}
            totalCarbs={totalCarbs}
            setTotalCarbs={setTotalCarbs}
            totalFats={totalFats}
            setTotalFats={setTotalFats}
            meals={meals}
            setMeals={setMeals}
          />
          {/* Section divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Fitness Tracking */}
          <FitnessTracking
            exerciseToday={exerciseToday}
            setExerciseToday={setExerciseToday}
            exerciseLength={exerciseLength}
            setExerciseLength={setExerciseLength}
            caloriesBurn={caloriesBurn}
            setCaloriesBurn={setCaloriesBurn}
            stepsTracked={stepsTracked}
            setStepsTracked={setStepsTracked}
            steps={steps}
            setSteps={setSteps}
            exercises={exercises}
            setExercises={setExercises}
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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1,
      flexWrap: 'wrap',
      marginRight: 10,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      alignItems: 'center',
      height: '100%',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
