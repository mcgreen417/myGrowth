import React, { useState, useRef, useEffect } from 'react';
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
import Timestamp from '../components/Timestamp';
import NavBar from '../../shared/components/NavBar';
import Mood from '../components/Mood';
import Stress from '../components/Stress';
import DailyActivities from '../components/DailyActivities';
import PhysicalMentalHealth from '../components/PhysicalMentalHealth';
import Medication from '../components/Medication';
import Sleep from '../components/Sleep';
import MealHistory from '../components/MealHistory';
import FitnessTracking from '../components/FitnessTracking';
import LoadingGetHealthEntry from '../components/LoadingGetHealthEntry';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';

async function submit(
  timestamp,
  mood,
  feelings,
  stressSeverity,
  stressors,
  activities,
  hadPeriod,
  weight,
  symptoms,
  medChecked,
  medications,
  hadSleep,
  sleepTimeStart,
  sleepTimeEnd,
  qualityOfSleep,
  naps,
  eatenToday,
  totalCalories,
  meals,
  totalProteins,
  totalCarbs,
  totalFats,
  exerciseToday,
  exerciseLength,
  caloriesBurn,
  steps,
  exercises,
  navigation
) {
  // Mood, Stress, and Daily Activities
  const moodIn = { Mood: mood, Feelings: feelings };
  const stressIn = { Severity: stressSeverity, Stressors: stressors };
  const activitiesIn = activities;

  // Medication, Physical, and Mental health
  const healthIn = { Period: hadPeriod, Weight: parseInt(weight || 0) };
  const symptomIn = symptoms;

  let medcheckIn = [];

  for (var index = 0; index < medications.length; index++) {
    medcheckIn.push({
      Name: medications[index].name,
      Taken: (medChecked & (1 << index)) != 0,
    });
  }

  // Sleep and Naps
  const sleepIn = {
    Slept: hadSleep,
    Start: new Date(sleepTimeStart).toISOString(),
    End: new Date(sleepTimeEnd).toISOString(),
    Quality: qualityOfSleep,
    Naps: naps,
  };

  // Meals
  const mealsIn = {
    Ate: eatenToday,
    TotalCalories: parseInt(totalCalories || 0),
    MealList: meals,
    TotalProteins: parseInt(totalProteins || 0),
    TotalCarbs: parseInt(totalCarbs || 0),
    TotalFats: parseInt(totalFats || 0),
  };

  // Fitness
  const fitnessIn = {
    Exercised: exerciseToday,
    Duration: parseInt(exerciseLength || 0),
    CaloriesBurned: parseInt(caloriesBurn || 0),
    Steps: parseInt(steps || 0),
    Exercises: exercises,
  };

  console.log('submit timestamp ', timestamp);
  const query = {
    Timestamp: new Date(timestamp).toISOString(),
    Health: healthIn,
    Symptoms: symptomIn,
    Stress: stressIn,
    Mood: moodIn,
    Sleep: sleepIn,
    Meals: mealsIn,
    Fitness: fitnessIn,
    Medcheck: medcheckIn,
    Activities: activitiesIn,
  };

  console.log('Query: ', query);

  const res = await API.graphql({
    query: mutations.updateDailyEntry,
    variables: query,
  });

  console.log('Response: ', res);

  navigation.navigate('EntryCompletion', {
    timestamp: new Date(timestamp).toISOString(),
  });
}

function flipBit(medChecked, index) {
  var mask = 1 << index;

  return medChecked ^ mask;
}

async function getHealthEntry(timestamp, setLoadingVisible) {
  // set spinner
  setLoadingVisible(true);
  console.log('get health entry timestamp', new Date(timestamp).toISOString());
  const res = await API.graphql({
    query: queries.getDailyEntry,
    variables: { Timestamp: new Date(timestamp).toISOString() },
  })
    .then((res) => {
      console.log('Get Health Entry', res);

      return res.data.getDailyEntry;
    })
    .catch((error) => {
      console.log('Empty Health Entry');
    });
  return res;
}

async function getOptions() {
  const res = await API.graphql({
    query: queries.getSetting,
  });

  return res;
}

const HealthEntry = ({ route, navigation }) => {
  // Spinner
  const [loadingVisible, setLoadingVisible] = useState(false);

  // Options
  const [options, setOptions] = useState({});

  useEffect(() => {
    getOptions().then((ops) => {
      console.log(ops);
      setOptions(ops.data.getSetting.Options);
    });
  }, []);

  let tempTime = new Date(
    route.params != undefined
      ? new Date(route.params.reviewTimestamp).setHours(0, 0, 0, 0)
      : new Date()
  );
  // Timestamp variables
  const [timestamp, setTimestamp] = useState(tempTime);

  console.log('passed calendar', timestamp);

  // console.log(route.params);

  // Stress variables
  const [stressSeverity, setStressSeverity] = useState(0);
  const [stressors, setStressors] = useState([]);

  // Mood variables
  const [mood, setMood] = useState(0);
  const [feelings, setFeelings] = useState([]);

  // Daily Activities variables
  const [activities, setActivities] = useState([]);

  // Medication variables
  const [medChecked, setMedChecked] = useState(0);
  const [medications, setMedications] = useState([]);

  // Physical and Mental Health variables
  const [hadPeriod, setHadPeriod] = useState(false);
  const [weight, setWeight] = useState('');
  const [symptoms, setSymptoms] = useState([]);

  // Sleep and Naps variables
  const [hadSleep, setHadSleep] = useState(true);
  const [qualityOfSleep, setQualityOfSleep] = useState(0);
  const [sleepTimeStart, setSleepTimeStart] = useState(new Date());
  const [sleepTimeEnd, setSleepTimeEnd] = useState(new Date());
  const [hadNap, setHadNap] = useState(false);
  const [naps, setNaps] = useState([]);

  // Meals variables
  const [eatenToday, setEatenToday] = useState(true);
  const [meals, setMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState('');
  const [totalProteins, setTotalProteins] = useState('');
  const [totalCarbs, setTotalCarbs] = useState('');
  const [totalFats, setTotalFats] = useState('');

  // Fitness variables
  const [exerciseToday, setExerciseToday] = useState(false);
  const [exerciseLength, setExerciseLength] = useState('');
  const [caloriesBurn, setCaloriesBurn] = useState('');
  const [stepsTracked, setStepsTracked] = useState(false);
  const [steps, setSteps] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getHealthEntry(
      new Date(timestamp).setHours(0, 0, 0, 0),
      setLoadingVisible
    ).then((entry) => {
      // var t0 = performance.now();
      let health =
        entry != null ? entry.Health : { Period: null, Weight: null };
      setHadPeriod(health.Period || false);
      setWeight(health.Weight || 0);

      // var t1 = performance.now();
      // console.log('Setting health took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let symptoms = entry != null ? entry.Symptoms : null;
      setSymptoms(symptoms || []);

      // var t1 = performance.now();
      // console.log('Setting symptoms took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let stress =
        entry != null ? entry.Stress : { Severity: null, Stressors: null };
      setStressSeverity(stress.Severity || 0);
      setStressors(stress.Stressors || []);

      // var t1 = performance.now();
      // console.log('Setting stress took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let mood = entry != null ? entry.Mood : { Mood: null, Feelings: null };
      setMood(mood.Mood || 0);
      setFeelings(mood.Feelings || []);

      // var t1 = performance.now();
      // console.log('Setting mood took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let sleep =
        entry != null
          ? entry.Sleep
          : { Slept: null, Start: null, End: null, Quality: null, Naps: null };
      setHadSleep(sleep.Slept || true);
      setSleepTimeStart(new Date(sleep.Start) || new Date());
      setSleepTimeEnd(new Date(sleep.End) || new Date());
      setQualityOfSleep(sleep.Quality || 0);
      if (sleep.Naps != undefined && sleep.Naps != []) {
        setHadNap(true);
      } else {
        setHadNap(false);
      }
      setNaps(sleep.Naps || []);

      // var t1 = performance.now();
      // console.log('Setting sleep took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let meals =
        entry != null
          ? entry.Meals
          : {
              Ate: null,
              TotalCalories: null,
              TotalProteins: null,
              TotalCarbs: null,
              TotalFats: null,
              mealList: null,
            };
      setEatenToday(meals.Ate || true);
      setTotalCalories(meals.TotalCalories || 0);
      setTotalProteins(meals.TotalProteins || 0);
      setTotalCarbs(meals.TotalCarbs || 0);
      setTotalFats(meals.TotalFats || 0);
      setMeals(meals.MealList || []);

      // var t1 = performance.now();
      // console.log('Setting meals took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let fitness =
        entry != null
          ? entry.Fitness
          : {
              Exercised: null,
              Duration: null,
              CaloriesBurned: null,
              Steps: null,
              Exercises: null,
            };
      setExerciseToday(fitness.Exercised || false);
      setExerciseLength(fitness.Duration || 0);
      setCaloriesBurn(fitness.CaloriesBurned || 0);
      setSteps(fitness.Steps || 0);
      setExercises(fitness.Exercises || []);

      // var t1 = performance.now();
      // console.log('Setting fitness took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let medcheck = entry != null ? entry.Medcheck : null;
      let tempMedCheck = 0;

      if (medcheck != null) {
        // console.log('check medcheck');
        for (var index = 0; index < medcheck.length; index++) {
          let tempMed = medcheck[index];
          tempMedCheck = tempMed.Taken
            ? flipBit(tempMedCheck, index)
            : tempMedCheck;
        }
        // console.log(tempMedCheck);
      }

      setMedChecked(tempMedCheck);

      // var t1 = performance.now();
      // console.log('Setting med took ' + (t1 - t0) + ' milliseconds.');

      // var t0 = performance.now();
      let activities = entry != null ? entry.Activities : { Activities: null };
      setActivities(activities.Activities || []);

      // var t1 = performance.now();
      // console.log('Setting activities took ' + (t1 - t0) + ' milliseconds.');
      //remove spinner
      setLoadingVisible(false);
    });
  }, [timestamp]);

  return (
    <SafeAreaView style={styles().container}>
      <LoadingGetHealthEntry
        loadingVisible={loadingVisible}
        setLoadingVisible={setLoadingVisible}
      />
      {!loadingVisible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'>
          <View style={styles().pageSetup}>
            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
              <Text style={styles().pageDescription}>
                Time for a new health entry! Fill out only the fields you'd like
                to and come back here to edit your entry later.
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
            <Timestamp timestamp={timestamp} setTimestamp={setTimestamp} />

            {/* Section divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* Add Mood */}
            <Mood
              mood={mood}
              setMood={setMood}
              feelings={feelings}
              setFeelings={setFeelings}
            />
            {/* Section divider */}
            <View style={{ marginTop: -10 }} />
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* Add Stress */}
            {options.stress && (
              <Stress
                stress={stressSeverity}
                setStress={setStressSeverity}
                stressors={stressors}
                setStressors={setStressors}
              />
            )}

            {/* Section divider */}
            {options.stress && <View style={{ marginTop: -10 }} />}
            {options.stress && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

            {/* Add Daily Activities */}
            {options.dailyActivities && (
              <DailyActivities
                activities={activities}
                setActivities={setActivities}
              />
            )}

            {/* Section divider */}
            {options.dailyActivities && <View style={{ marginTop: -10 }} />}
            {options.dailyActivities && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

            {/* Add Physical and Mental Health */}
            <PhysicalMentalHealth
              hadPeriod={hadPeriod}
              setHadPeriod={setHadPeriod}
              weight={weight}
              setWeight={setWeight}
              symptoms={symptoms}
              setSymptoms={setSymptoms}
              options={options}
            />
            {/* Section divider */}
            <View style={{ marginTop: -10 }} />
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* Add Medication */}
            {options.medication && (
              <Medication
                medChecked={medChecked}
                setMedChecked={setMedChecked}
                medications={medications}
                setMedications={setMedications}
              />
            )}

            {/* Section divider */}
            {options.medication && <View style={{ marginTop: -10 }} />}
            {options.medication && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

            {/* Add Sleep */}
            {options.sleep && (
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
            )}

            {/* Section divider */}
            {options.sleep && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

            {/* Add Meal History */}
            {options.meal && (
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
            )}

            {/* Section divider */}
            {options.meal && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

            {/* Add Fitness Tracking */}
            {options.fitness && (
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
            )}

            {/* Section divider */}
            {options.fitness && (
              <View style={styles().dividerView}>
                <View style={styles().divider} />
              </View>
            )}

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
                      new Date(timestamp).setHours(0, 0, 0, 0),
                      mood,
                      feelings,
                      stressSeverity,
                      stressors,
                      activities,
                      hadPeriod,
                      weight,
                      symptoms,
                      medChecked,
                      medications,
                      hadSleep,
                      sleepTimeStart,
                      sleepTimeEnd,
                      qualityOfSleep,
                      naps,
                      eatenToday,
                      totalCalories,
                      meals,
                      totalProteins,
                      totalCarbs,
                      totalFats,
                      exerciseToday,
                      exerciseLength,
                      caloriesBurn,
                      steps,
                      exercises,
                      navigation
                    )
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles().pageEnd} />
        </ScrollView>
      )}

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
      width: Math.round((Dimensions.get('window').width * 1) / 4),
      height: Math.round((Dimensions.get('window').width * 1) / 4),
      transform: [{ scaleX: -1 }],
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
