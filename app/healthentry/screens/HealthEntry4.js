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
import MealHistory from '../components/MealHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as mutations from '../../../src/graphql/mutations';

async function back(navigation) {
  navigation.navigate('HealthEntry3');
}

async function next(
  eatenToday,
  totalCalories,
  meals,
  totalProteins,
  totalCarbs,
  totalFats,
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
  } = route.params;

  const mealsIn = {
    Ate: eatenToday,
    TotalCalories: totalCalories,
    MealList: meals,
    TotalProteins: totalProteins,
    TotalCarbs: totalCarbs,
    TotalFats: totalFats,
  };

  navigation.navigate('HealthEntry5', {
    moodIn: moodIn,
    stressIn: stressIn,
    activitiesIn: activitiesIn,
    healthIn: healthIn,
    symptomIn: symptomIn,
    medcheckIn: medcheckIn,
    sleepIn: sleepIn,
    mealsIn: mealsIn,
  });
}

const HealthEntry4 = ({ route, navigation }) => {
  const [eatenToday, setEatenToday] = useState(true);
  const [meals, setMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState(-1);
  const [totalProteins, setTotalProteins] = useState(-1);
  const [totalCarbs, setTotalCarbs] = useState(-1);
  const [totalFats, setTotalFats] = useState(-1);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
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
                title='Next >'
                color='#A5DFB2'
                onPress={() =>
                  next(
                    eatenToday,
                    totalCalories,
                    meals,
                    totalProteins,
                    totalCarbs,
                    totalFats,
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

export default HealthEntry4;

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