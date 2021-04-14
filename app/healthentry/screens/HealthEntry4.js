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
