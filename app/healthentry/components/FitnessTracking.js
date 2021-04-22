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
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

function removeExercise(exercises, setExercises, index) {
  let tempExercises = [...exercises];
  tempExercises.pop(index);
  setExercises(tempExercises);
}

function changeName(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].Name = val.toString();
  setExercises(tempExercises);
}

function changeSets(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].Sets = parseInt(val || 0);
  setExercises(tempExercises);
}

function changeWeight(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].Weight = parseInt(val || 0);
  setExercises(tempExercises);
}

function changeDuration(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].Duration = parseInt(val || 0);
  setExercises(tempExercises);
}

function changeReps(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].Reps = parseInt(val || 0);
  setExercises(tempExercises);
}

function changeCals(exercises, setExercises, index, val) {
  let tempExercises = [...exercises];
  tempExercises[index].CaloriesBurned = parseInt(val || 0);
  setExercises(tempExercises);
}

const AddExercises = ({
  index,
  exercises,
  setExercises,
  name,
  sets,
  reps,
  cals,
  weight,
  duration,
}) => {
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [showExercise, setShowExercise] = useState(true);

  return (
    <View>
      {/* Delete exercise modal */}
      <View style={styles().container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={deleteEntry}
          onRequestClose={() => {
            setDeleteEntry(!deleteEntry);
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setDeleteEntry(!deleteEntry)}>
            <Pressable
              style={styles().modalContainer}
              onPressout={() => setDeleteEntry(true)}>
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                  }}>
                  <Icon
                    name='fitness-center'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Delete Exercise</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <Text style={styles().text}>
                  Are you sure you wish to delete this exercise?
                </Text>
                <Text style={styles().textBoldAlt}>
                  This action cannot be undone.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginVertical: 10,
                  marginHorizontal: '5%',
                }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    setDeleteEntry(!deleteEntry);
                    removeExercise(exercises, setExercises, index);
                  }}>
                  <Text style={styles().textButton}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteEntry(!deleteEntry)}>
                  <Text style={styles().textButton}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      <View style={{ marginTop: 10 }}>
        <View
          style={{
            backgroundColor: '#816868',
            borderRadius: 10,
            paddingLeft: 10,
            paddingTop: 10,
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
                value={name.toString()}
                onChangeText={(val) => {
                  changeName(exercises, setExercises, index, val);
                }}
              />

              <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 12 }}>
                <View style={{ flexDirection: 'row', }}>
                  <Icon
                    name={showExercise
                      ? 'arrow-drop-up'
                      : 'arrow-drop-down'
                    }
                    color={global.colorblindMode
                      ? global.cb_optionButtonsColor
                      : global.optionButtonsColor
                    }
                    onPress={() => setShowExercise(!showExercise)}
                  />
                  <View style={{ marginRight: 8 }}/>
                  <Icon
                    name='close'
                    color={global.colorblindMode
                      ? global.cb_optionButtonsColor
                      : global.optionButtonsColor
                    }
                    onPress={() => setDeleteEntry(!deleteEntry)}
                  />
                </View>
              </View>
            </View>

            {showExercise &&
              <View>
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
                      value={sets.toString()}
                      onChangeText={(val) => {
                        changeSets(exercises, setExercises, index, val);
                      }}
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
                      value={cals.toString()}
                      onChangeText={(val) => {
                        changeCals(exercises, setExercises, index, val);
                      }}
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
                      value={reps.toString()}
                      onChangeText={(val) => {
                        changeReps(exercises, setExercises, index, val);
                      }}
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
                      value={duration.toString()}
                      onChangeText={(val) => {
                        changeDuration(exercises, setExercises, index, val);
                      }}
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
                    value={weight.toString()}
                    onChangeText={(val) => {
                      changeWeight(exercises, setExercises, index, val);
                    }}
                  />
                  <Text style={styles().textAltLight}> lbs</Text>
                </View>
              </View>
            }
          </View>
        </View>
      </View>
    </View>
  );
};

const AdvanceFitnessTracking = ({ exercises, setExercises }) => {
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
            />
          </View>
        );
      })}
      {exercises.length > 0 &&
        <View style={{ marginBottom: 10, }}/>
      }

      <View style={{ marginTop: 10, width: '40%' }}>
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
              Name: ' ',
              Sets: 0,
              Reps: 0,
              Duration: 0,
              Weight: 0,
              CaloriesBurned: 0,
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
              fontsize={16}
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
              fontsize={16}
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
            today in total?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontsize={16}
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
        <Text style={styles().headingSub}>ADVANCED FITNESS TRACKING</Text>
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
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    headingSub: {
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
    modalContainer: {
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      alignItems: 'center',
      width: '80%',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    modalHeaderBar: {
      backgroundColor: global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
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
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textBoldAlt: {
      fontSize: 16,
      color: '#816868',
      fontWeight: 'bold',
      marginTop: 4,
    },
    textButton: {
      fontSize: 16,
      color: '#4CB97A',
      fontWeight: 'bold',
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
