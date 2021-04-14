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
import FitnessTracking from '../components/FitnessTracking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as mutations from '../../../src/graphql/mutations';

async function back(navigation) {
  navigation.navigate('HealthEntry4');
}

async function next(
  exercisedToday,
  exerciseDuration,
  caloriesBurned,
  steps,
  exercises,
  route,
  navigation
) {
  const {
    moodIn,
    stressIn,
    activitiesIn,
    healthIn,
    symptomIn,
    medcheckIn,
    sleepIn,
    mealsIn,
  } = route.params;

  const fitnessIn = {
    Exercised: exercisedToday,
    Duration: exerciseDuration,
    CaloriesBurned: caloriesBurned,
    Steps: steps,
    Exercises: exercises,
  };

  const query = {
    Timestamp: new Date().toISOString(),
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

  console.log(query);

  const res = await API.graphql({
    query: mutations.updateDailyEntry,
    variables: query,
  });

  console.log('res', res);

  navigation.navigate('ReviewEntry');
}

const HealthEntry5 = ({ route, navigation }) => {
  const [exerciseToday, setExerciseToday] = useState(false);
  const [exerciseLength, setExerciseLength] = useState(-1);
  const [caloriesBurn, setCaloriesBurn] = useState(-1);
  const [steps, setSteps] = useState(-1);
  const [exercises, setExercises] = useState([]);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          {/* Add Fitness Tracking */}
          <FitnessTracking
            exerciseToday={exerciseToday}
            setExerciseToday={setExerciseToday}
            exerciseLength={exerciseLength}
            setExerciseLength={setExerciseLength}
            caloriesBurn={caloriesBurn}
            setCaloriesBurn={setCaloriesBurn}
            steps={steps}
            setSteps={setSteps}
            exercises={exercises}
            setExercises={setExercises}
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
                title='< Back'
                color='#A5DFB2'
                onPress={() => back(navigation)}
              />
            </View>
            <View style={{ width: '42.5%' }}>
              <Button
                title='Finish >'
                color='#A5DFB2'
                onPress={() =>
                  next(
                    exerciseToday,
                    exerciseLength,
                    caloriesBurn,
                    steps,
                    exercises,
                    route,
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

export default HealthEntry5;

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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
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
