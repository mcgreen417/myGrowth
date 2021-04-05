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
              color={global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor}
              style={{ marginRight: 8 }} 
            />
            <TextInput
              placeholder='Exercise name'
              color='#C4BEBD'
              placeholderTextColor='#C4BEBD'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                width: 100,
                width: 150,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
              <Text style={styles().textAltLight}>Sets:</Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> sets</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
              <Text style={styles().textAltLight}>Calories:</Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> cal</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
              <Text style={styles().textAltLight}>Reps:</Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> reps</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
              <Text style={styles().textAltLight}>Weight:</Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> lbs</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, width: '40%' }}>
        <Button 
          title='+ Add Exercise' 
          color={
            global.colorblindMode
            ? global.cb_optionButtonsColor
            : global.optionButtonsColor}
        />
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
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>FITNESS TRACKING</Text>

      <View style={{ marginTop: 10, marginBottom: 20, }}>
        <View style={styles().line}/>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles().text}>Did you exercise today?</Text>
          <View style={styles().switchView}>
            <View style={styles().line2}/>
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={exerciseToday ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => setExerciseToday(!exerciseToday)}
              value={exerciseToday}
              style={{ marginLeft: 8, }}
            />
          </View>
        </View>
        <View style={styles().line}/>
      </View>

      <Text style={styles().text}>How long did you exercise for?</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 50,
          }}
          keyboardType='number-pad'
        />
        <Text style={styles().text}> min</Text>
      </View>

      <Text style={styles().text}>
        If you kept track of your calories, how many calories did you burn?
        (Leave field blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 50,
          }}
          keyboardType='number-pad'
        />
        <Text style={styles().text}> cal</Text>
      </View>

      <Text style={styles().text}>
        If you kept track of your steps, how many steps did you take? (Leave
        field blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 50,
          }}
          keyboardType='number-pad'
        />
        <Text style={styles().text}> steps</Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: -10, }}>
        <Text
          style={styles().heading}
          onPress={() =>
            setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)
          }>
          ADVANCED FITNESS TRACKING
        </Text>
        <Icon
          name={showAdvanceFitnessTracking ? 'arrow-drop-up' : 'arrow-drop-down'}
          onPress={() => setShowAdvanceFitnessTracking(!showAdvanceFitnessTracking)}
          color={global.colorblindMode 
            ? global.cb_textColor 
            : global.textColor}
        />
      </View>
      {showAdvanceFitnessTracking && <AdvanceFitnessTracking />}
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
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
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
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline'
    },
  });
