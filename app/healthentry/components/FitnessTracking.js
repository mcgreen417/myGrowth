import React, { useState } from 'react';
import { TouchableOpacityComponent } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  Pressable,
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
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          backgroundColor: '#816868',
          borderRadius: 10,
          paddingLeft: 12,
          paddingTop: 12,
          paddingBottom: 20,
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
            <Icon
              name='fitness-center'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              style={{ marginRight: 8 }}
            />
            <TextInput
              placeholder='Exercise name'
              color='#E5E5E5'
              placeholderTextColor='#C4BEBD'
              fontSize={16}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                width: 100,
                width: 150,
              }}
              value={name}
              onChangeText={(val) => {
                editable ? setName(val) : null;
              }}
              editable={editable}
            />

            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 12 }}>
              {index != null && (
                <Icon
                  name='close'
                  color={
                    global.colorblindMode
                      ? global.cb_optionButtonsColor
                      : global.optionButtonsColor
                  }
                  onPress={() => removeExercise(exercises, setExercises, index)}
                />
              )}
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '46%',
              }}>
              <Text style={styles().textAltLight}>Sets: </Text>
              <TextInput
                placeholder='#'
                color='#E5E5E5'
                placeholderTextColor='#C4BEBD'
                fontSize={16}
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                }}
                keyboardType='number-pad'
                value={sets}
                onChangeText={(val) => {
                  editable ? setSets(val) : null;
                }}
                editable={editable}
              />
              <Text style={styles().textAltLight}> sets</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '40%',
              }}>
              <Text style={styles().textAltLight}>Calories: </Text>
              <TextInput
                placeholder='#'
                color='#E5E5E5'
                placeholderTextColor='#C4BEBD'
                fontSize={16}
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                }}
                keyboardType='number-pad'
                value={cals}
                onChangeText={(val) => {
                  editable ? setCals(val) : null;
                }}
                editable={editable}
              />
              <Text style={styles().textAltLight}> cal</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '46%',
              }}>
              <Text style={styles().textAltLight}>Reps: </Text>
              <TextInput
                placeholder='#'
                color='#E5E5E5'
                placeholderTextColor='#C4BEBD'
                fontSize={16}
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                }}
                keyboardType='number-pad'
                value={reps}
                onChangeText={(val) => {
                  editable ? setReps(val) : null;
                }}
                editable={editable}
              />
              <Text style={styles().textAltLight}> reps</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '40%',
              }}>
              <Text style={styles().textAltLight}>Duration: </Text>
              <TextInput
                placeholder='#'
                color='#E5E5E5'
                placeholderTextColor='#C4BEBD'
                fontSize={16}
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                }}
                keyboardType='number-pad'
                value={duration}
                onChangeText={(val) => {
                  editable ? setDuration(val) : null;
                }}
                editable={editable}
              />
              <Text style={styles().textAltLight}> mins</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 4,
            }}>
            <Text style={styles().textAltLight}>Weight: </Text>
            <TextInput
              placeholder='#'
              color='#E5E5E5'
              placeholderTextColor='#C4BEBD'
              fontSize={16}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 50,
              }}
              keyboardType='number-pad'
              value={weight}
              onChangeText={(val) => {
                editable ? setWeight(val) : null;
              }}
              editable={editable}
            />
            <Text style={styles().textAltLight}> lbs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const AdvanceFitnessTracking = ({ exercises, setExercises }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseCalories, setExerciseCalories] = useState(0);
  const [exerciseWeight, setExerciseWeigh] = useState(0);
  const [exerciseDuration, setExerciseDuration] = useState(0);

  return (
    <View style={{ marginTop: 10 }}>
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
      {exercises.length != 0 &&
        exercises.map((item, index) => {
          console.log(item);
          return (
            item.Name != null && (
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
            )
          );
        })}

      <View style={{ marginTop: 20, width: '40%' }}>
        <Button
          title='+ Add Exercise'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
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
  stepsTracked,
  setStepsTracked,
  steps,
  setSteps,
  exercises,
  setExercises,
}) => {
  const [showAdvanceFitnessTracking, setShowAdvanceFitnessTracking] = useState(
    false
  );
  return (
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>FITNESS TRACKING</Text>

      <View style={{ marginTop: 10 }}>
        <View style={styles().line} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles().text}>Did you exercise today?</Text>
          <View style={styles().switchView}>
            <View style={styles().line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={exerciseToday ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => setExerciseToday(!exerciseToday)}
              value={exerciseToday}
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
        <View style={styles().line} />
      </View>

      {exerciseToday && (
        <View style={{ marginVertical: 10 }}>
          <Text style={styles().text}>How long did you spend exercising?</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontSize={18}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 50,
              }}
              value={exerciseLength.toString()}
              onChangeText={(val) => setExerciseLength(val)}
              keyboardType='number-pad'
            />
            <Text style={styles().text}> min</Text>
          </View>
        </View>
      )}

      {!exerciseToday && <View style={{ marginTop: -1 }} />}

      <View style={styles().line} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles().text}>
          Did you track your number of steps today?
        </Text>
        <View style={styles().switchView}>
          <View style={styles().line2} />
          <Switch
            trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
            thumbColor={stepsTracked ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => setStepsTracked(!stepsTracked)}
            value={stepsTracked}
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>
      <View style={styles().line} />

      {stepsTracked && (
        <View style={{ marginTop: 10 }}>
          <Text style={styles().text}>How many steps did you take?</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontSize={18}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 50,
              }}
              value={steps.toString()}
              onChangeText={(val) => setSteps(val)}
              keyboardType='number-pad'
            />
            <Text style={styles().text}> steps</Text>
          </View>
        </View>
      )}

      {(exerciseToday || stepsTracked) && (
        <View>
          {!stepsTracked && <View style={{ marginTop: 10 }} />}
          <Text style={styles().text}>
            If you kept track of your calories, how many calories did you burn
            today in total? (Leave field blank if you are unsure.)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontSize={18}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 50,
              }}
              value={caloriesBurn.toString()}
              onChangeText={(val) => setCaloriesBurn(val)}
              keyboardType='number-pad'
            />
            <Text style={styles().text}> cal</Text>
          </View>
        </View>
      )}

      <Pressable
        style={{ flexDirection: 'row', marginTop: 20, marginBottom: -10 }}
        onPress={() =>
          setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)
        }>
        <Text style={styles().heading}>ADVANCED FITNESS TRACKING</Text>
        <Icon
          name={
            showAdvanceFitnessTracking ? 'arrow-drop-up' : 'arrow-drop-down'
          }
          color={global.colorblindMode ? global.cb_textColor : global.textColor}
          onPress={() =>
            setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)
          }
        />
      </Pressable>
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

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    headingAlt: {
      color: '#E5E5E5',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    line: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
    },
    line2: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderRightWidth: 1,
      minHeight: 28,
      marginTop: 4,
      marginBottom: 4,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    modalView: {
      margin: 20,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
      paddingBottom: -10,
      paddingTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
