import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';

function removeExercise(exercises, setExercises, index) {
  console.log(exercises);
  let tempExercises = [...exercises];
  tempExercises.pop(index);
  setExercises(tempExercises);
}

const AddExercises = ({
  index,
  exercises,
  setExercises,
  name,
  setName,
  sets,
  setSets,
  reps,
  setReps,
  cals,
  setCals,
  weight,
  setWeight,
  duration,
  setDuration,
  editable,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        padding: 35,
        paddingBottom: 10,
        paddingTop: 15,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 7,
      }}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='fitness-center' />
          <TextInput
            placeholder='Exercise name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 100,
            }}
            value={name}
            onChangeText={(val) => {
              editable ? setName(val) : null;
            }}
            editable={editable}
          />

          {index != null && (
            <Icon
              name='close'
              onPress={() => removeExercise(exercises, setExercises, index)}
            />
          )}
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Sets:</Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
              value={sets}
              onChangeText={(val) => {
                editable ? setSets(val) : null;
              }}
              editable={editable}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Calories:</Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
              value={cals}
              onChangeText={(val) => {
                editable ? setCals(val) : null;
              }}
              editable={editable}
            />
            <Text>cal</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Reps:</Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
              value={reps}
              onChangeText={(val) => {
                editable ? setReps(val) : null;
              }}
              editable={editable}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Weight:</Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
              value={weight}
              onChangeText={(val) => {
                editable ? setWeight(val) : null;
              }}
              editable={editable}
            />
            <Text>lbs</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Duration</Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
              value={duration}
              onChangeText={(val) => {
                editable ? setDuration(val) : null;
              }}
              editable={editable}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const AdvanceFitnessTracking = ({ exercises, setExercises }) => {
  const [exerciseName, setExerciseName] = useState();
  const [exerciseSets, setExerciseSets] = useState();
  const [exerciseReps, setExerciseReps] = useState();
  const [exerciseCalories, setExerciseCalories] = useState();
  const [exerciseWeight, setExerciseWeigh] = useState();
  const [exerciseDuration, setExerciseDuration] = useState();

  return (
    <View style={{ marginTop: 10 }}>
      {exercises.map((item, index) => {
        console.log(item);
        return (
          <View key={index}>
            <AddExercises
              index={index}
              exercises={exercises}
              setExercises={setExercises}
              name={item.Name.toString()}
              sets={item.Sets.toString()}
              reps={item.Reps.toString()}
              cals={item.CaloriesBurned.toString()}
              weight={item.Weight.toString()}
              duration={item.Duration.toString()}
              editable={false}
            />
          </View>
        );
      })}
      <AddExercises
        exercises={exercises}
        setExercises={setExercises}
        name={exerciseName}
        setName={setExerciseName}
        sets={exerciseSets}
        setSets={setExerciseSets}
        reps={exerciseReps}
        setReps={setExerciseReps}
        cals={exerciseCalories}
        setCals={setExerciseCalories}
        weight={exerciseWeight}
        setWeight={setExerciseWeigh}
        duration={exerciseDuration}
        setDuration={setExerciseDuration}
        editable={true}
      />
      <View style={{ marginTop: 20, width: '50%' }}>
        <Button
          title='+ Add Exercise'
          onPress={() => {
            let tempExercises = [...exercises];
            tempExercises.push({
              Name: exerciseName,
              Sets: parseInt(exerciseSets),
              Reps: parseInt(exerciseReps),
              Duration: parseInt(exerciseDuration),
              Weight: parseInt(exerciseWeight),
              CaloriesBurned: parseInt(exerciseCalories),
            });
            setExercises(tempExercises);
          }}
        />
      </View>
    </View>
  );
};

const FitnessTracking = ({
  exerciseToday,
  setExerciseToday,
  exerciseLength,
  setExerciseLength,
  caloriesBurn,
  setCaloriesBurn,
  steps,
  setSteps,
  exercises,
  setExercises,
}) => {
  const [showAdvanceFitnessTracking, setShowAdvanceFitnessTracking] = useState(
    false
  );
  return (
    <View style={{ width: '80%' }}>
      <Text>Fitness Tracking</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Did you exercise today?</Text>
        <Switch
          trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
          thumbColor={exerciseToday ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setExerciseToday(!exerciseToday)}
          value={exerciseToday}
        />
      </View>
      <Text>How long did you exercise for?</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
          }}
          value={exerciseLength}
          onChangeText={(val) => setExerciseLength(val)}
          keyboardType='number-pad'
        />
        <Text>min</Text>
      </View>
      <Text>
        If you kept track of your calories, how many calories did you burn?
        (Leave field blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
          }}
          value={caloriesBurn}
          onChangeText={(val) => setCaloriesBurn(val)}
          keyboardType='number-pad'
        />
        <Text>cal</Text>
      </View>
      <Text>
        If you kept track of your steps, how many steps did you take? (Leave
        field blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
          }}
          value={steps}
          onChangeText={(val) => setSteps(val)}
          keyboardType='number-pad'
        />
        <Text>steps</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={() =>
            setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)
          }>
          ADVANCED FITNESS TRACKING
        </Text>
        <Icon
          name={
            showAdvanceFitnessTracking ? 'arrow-drop-up' : 'arrow-drop-down'
          }
          onPress={() =>
            setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)
          }
        />
      </View>
      {showAdvanceFitnessTracking && (
        <AdvanceFitnessTracking
          exercises={exercises}
          setExercises={setExercises}
        />
      )}
    </View>
  );
};

export default FitnessTracking;

const styles = StyleSheet.create({});
