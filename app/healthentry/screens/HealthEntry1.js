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

async function next(
  mood,
  feelings,
  stressSeverity,
  stressors,
  activities,
  navigation
) {
  const moodIn = { Mood: mood, Feelings: feelings };
  const stressIn = { Severity: stressSeverity, Stressors: stressors };
  const activitiesIn = activities;

  navigation.navigate('HealthEntry2', {
    moodIn: moodIn,
    stressIn: stressIn,
    activitiesIn: activitiesIn,
  });
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
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
          <View style={{ width: '90%' }}>
            <Text style={styles().heading}>SELECT DATE & TIME</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Icon
                  name='event'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                  style={{ marginRight: 4 }}
                />
                <Text style={styles().textLink}>{getDate(new Date())}</Text>
                <Icon
                  name='arrow-drop-down'
                  type='material'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '50%',
                }}>
                <Icon
                  name='schedule'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                  style={{ marginRight: 4 }}
                />
                <Text style={styles().textLink}>{getTime(new Date())}</Text>
                <Icon
                  name='arrow-drop-down'
                  type='material'
                  color={
                    global.colorblindMode
                      ? global.cb_contentDividerColor
                      : global.contentDividerColor
                  }
                />
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
                onPress={() =>
                  next(
                    mood,
                    feelings,
                    stressSeverity,
                    stressors,
                    activities,
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
