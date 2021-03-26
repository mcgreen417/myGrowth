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

const AdvanceFitnessTracking = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          borderRadius: 10,
          padding: 35,
          paddingBottom: 10,
          paddingTop: 15,
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
            />
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
              />
              <Text>lbs</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, width: '50%' }}>
        <Button title='+ Add Exercise' />
      </View>
    </View>
  );
};

const FitnessTracking = ({
  exerciseToday,
  setExerciseToday,
  showAdvanceFitnessTracking,
  setShowAdvanceFitnessTracking,
}) => {
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
      {showAdvanceFitnessTracking && <AdvanceFitnessTracking />}
    </View>
  );
};

export default FitnessTracking;

const styles = StyleSheet.create({});
