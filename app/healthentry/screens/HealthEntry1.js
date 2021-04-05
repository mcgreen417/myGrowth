import React, { useState } from 'react';
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
import Mood from '../components/Mood';
import Stress from '../components/Stress';
import DailyActivities from '../components/DailyActivities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';

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

async function next(navigation) {
  // const moodIn = { Mood: mood, Feelings: feelings };
  // const stressIn = { Severity: stressSeverity, Stressors: stressors };
  // const activitiesIn = activities;

  navigation.navigate('HealthEntry2');
}

const HealthEntry1 = ({ navigation }) => {
  // Stress variables
  const [stressSeverity, setStressSeverity] = useState(-1);
  const [stressors, setStressors] = useState([]);

  // Mood variables
  const [mood, setMood] = useState(-1);
  const [feelings, setFeelings] = useState([]);

  // Daily Activities variables
  const [activities, setActivities] = useState([]);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
            <Text style={styles().pageDescription}>
              Time for a new health entry! After you save your entry, you may
              edit it at any time.
            </Text>
          </View>

          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Select Data and Time */}
          <View style={{ width: '80%' }}>
            <Text>SELECT DATE & TIME</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name='event' />
                <Text>{getDate(new Date())}</Text>
                <Icon name='arrow-drop-down' type='material' />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name='schedule' />
                <Text>{getTime(new Date())}</Text>
                <Icon name='arrow-drop-down' type='material' />
              </View>
            </View>
          </View>

          {/* Second Divider */}
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
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Add Daily Activities */}
          <DailyActivities
            activities={activities}
            setActivities={setActivities}
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
                title='Next >'
                color='#A5DFB2'
                onPress={() => next(navigation)}
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

export default HealthEntry1;

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
