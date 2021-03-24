import React from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

const Mood = ({ type }) => {
  return (
    <View>
      <Image />
      <Text style={styles().textReg}>{type}</Text>
    </View>
  );
};

const Medicine = (title, time, interval) => {
  return <View>{/* draw medication selection*/}</View>;
};

const Stress = (level) => {
  return <View>{/* draw the stress level */}</View>;
};

const SleepQuality = (level) => {
  return <View>{/* draw sleep quality */}</View>;
};

const AddMeal = () => {
  return <View>{/* add meals */}</View>;
};

const AddExercise = () => {
  return <View>{/* add exercise */}</View>;
};

const HealthEntry1 = ({ navigation }) => {
  var stress_level = 0;
  return (
    <SafeAreaView style={styles().container}>
      {/* <Modal>
        <Text style={styles().textReg}>Add Feelings</Text>
      </Modal>
      <Modal>
        <Text style={styles().textReg}>Add Stressors</Text>
      </Modal>
      <Modal>
        <Text style={styles().textReg}>Add Activities</Text>
      </Modal> */}
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles().avatar}
        />
        <View>
          <Text style={styles().textReg}>Time for a new health entry!</Text>
          <Text style={styles().textReg}>After you save your entry, you may edit it at any time.</Text>
        </View>
      </View>
      <View>
        <Text style={styles().textReg}>SELECT DATE & TIME</Text>
        <View>
          <Text style={styles().textReg}>Add date here</Text>
          <Text style={styles().textReg}>Add time here</Text>
        </View>
      </View>
      <View>
        <Text style={styles().textReg}>MOOD</Text>
        <View>
          <Mood type='awful' />
          <Mood type='bad' />
          <Mood type='Okay' />
          <Mood type='Good' />
          <Mood type='Great' />
        </View>
        <Button
          title='+ Add Feelings'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Text style={styles().textReg}>STRESS</Text>
        <Stress level={stress_level} />
        <Button
          title='+ Add Stressors'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Text style={styles().textReg}>DAILY ACTIVITIES</Text>
        <Text style={styles().textReg}>What activities did you participate in today?</Text>
        <Button
          title='+ Add Activities'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='Next >'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

const HealthEntry2 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles().textReg}>PHYSICAL/MENTAL HEALTH</Text>
        <View>
          <Text style={styles().textReg}>Did you have your period today? </Text>
          <Switch
            trackColor={{ 
              false: global.colorblindMode 
                ? global.cb_switchTrackColorFalse
                : global.switchTrackColorFalse,
              true: global.colorblindMode
                ? global.cb_switchTrackColorTrue 
                : global.switchTrackColorTrue
            }}
            thumbColor={
              setPeriodToday
                ? (global.colorblindMode 
                  ? global.cb_switchThumbColorTrue
                  : global.switchThumbColorTrue)
                : (global.colorblindMode
                  ? global.cb_switchThumbColorFalse
                  : global.switchThumbColorFalse)
            }
            ios_backgroundColor={global.cb_switchIosBackgroundColor}
            onValueChange={togglePeriodToday}
            value={setPeriodToday}
          />
        </View>
        <Text style={styles().textReg}>
          If you have weighed yourself today, how much do you weigh? (Leave
          field blank if you are unsure.)
        </Text>
        <View>
          <TextInput
            placeholder='#'
            placeholderTextColor={
              global.colorblindMode
                ? global.cb_placeHolderTextColor
                : global.placeHolderTextColor
            }
          />
          <Text style={styles().textReg}>lbs</Text>
        </View>
        <Text style={styles().textReg}>
          Have you experienced any unusual physical or mental health symptoms
          today?
        </Text>
        <Button
          title='+ Add Symptoms'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Text style={styles().textReg}>MEDICATION</Text>
        <Text style={styles().textReg}>Have you taken the following medication today?</Text>
        <Medicine title='Medicine 1' time='7:30PM' interval='daily' />
        <Medicine title='Medicine 2' time='7:30PM' interval='daily' />
        <Button
          title='+ Add Medicine'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='< Back'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Next >'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const HealthEntry3 = () => {
  return (
    <SafeAreaView>
      <Text style={styles().textReg}>SLEEP</Text>
      <View>
        <Text style={styles().textReg}>Did you sleep today?</Text>
        <Switch
          trackColor={{ 
            false: global.colorblindMode 
              ? global.cb_switchTrackColorFalse
              : global.switchTrackColorFalse,
            true: global.colorblindMode
              ? global.cb_switchTrackColorTrue 
              : global.switchTrackColorTrue
          }}
          thumbColor={
            setSleepToday
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleSleepToday}
          value={setSleepToday}
        />
      </View>
      <Text style={styles().textReg}>When did you sleep last night?</Text>
      <View>
        <Text style={styles().textReg}>Time1</Text>
        <Text style={styles().textReg}>to</Text>
        <Text style={styles().textReg}>Time2</Text>
      </View>
      <Text style={styles().textReg}>How would you rate your quality of sleep last night?</Text>
      <View>
        <SleepQuality type='alright' />
      </View>
      <Text style={styles().textReg}>When did you nap today?</Text>
      <View>
        <Text style={styles().textReg}>Time1</Text>
        <Text style={styles().textReg}>to</Text>
        <Text style={styles().textReg}>Time2</Text>
      </View>
      <Text style={styles().textReg}>How would you rate your quality of sleep during your nap?</Text>
      <View>
        <SleepQuality type='alright' />
      </View>
      <View>
        <Button
          title='+ Add Nap'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='< Back'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Next >'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const HealthEntry4 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles().textReg}>Have you eaten today? </Text>
        <Switch
          trackColor={{ 
            false: global.colorblindMode 
              ? global.cb_switchTrackColorFalse
              : global.switchTrackColorFalse,
            true: global.colorblindMode
              ? global.cb_switchTrackColorTrue 
              : global.switchTrackColorTrue
          }}
          thumbColor={
            setEatenToday
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleEatenToday}
          value={setEatenToday}
        />
      </View>
      <Text style={styles().textReg}>
        If you kept track of your calories, how many calories did you consume?
        (Leave field blank if you are unsure.)
      </Text>
      <View>
        <TextInput
          placeholder='#'
          placeholderTextColor={
            global.colorblindMode
              ? global.cb_placeHolderTextColor
              : global.placeHolderTextColor
          }
        />
        <Text style={styles().textReg}>cal</Text>
      </View>
      <View>
        <Text style={styles().textReg}>ADVANCE MEAL TRACKING</Text>
        <AddMeal />
        <Button
          title='+ Add Meal'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
      <View>
        <Button
          title='< Back'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Next >'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const HealthEntry5 = () => {
  return (
    <SafeAreaView>
      <Text style={styles().textReg}>FITNESS TRACKING</Text>
      <View>
        <Text style={styles().textReg}>Did you exercise today? </Text>
        <Switch
          trackColor={{ 
            false: global.colorblindMode 
              ? global.cb_switchTrackColorFalse
              : global.switchTrackColorFalse,
            true: global.colorblindMode
              ? global.cb_switchTrackColorTrue 
              : global.switchTrackColorTrue
          }}
          thumbColor={
            setExerciseToday
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleExerciseToday}
          value={setExerciseToday}
        />
      </View>
      <Text style={styles().textReg}>How long did you exercise for?</Text>
      <View>
        <TextInput
          placeholder='#'
          placeholderTextColor={
            global.colorblindMode
              ? global.cb_placeHolderTextColor
              : global.placeHolderTextColor
          }
        />
        <Text style={styles().textReg}>min</Text>
      </View>
      <Text style={styles().textReg}>
        If you kept track of your calories, how many calories did you burn?
        (Leave field blank if you are unsure.)
      </Text>
      <View>
        <TextInput
          placeholder='#'
          placeholderTextColor={
            global.colorblindMode
              ? global.cb_placeHolderTextColor
              : global.placeHolderTextColor
          }
        />
        <Text style={styles().textReg}>cal</Text>
      </View>
      <Text style={styles().textReg}>
        If you kept track of your steps, how many steps did you take? (Leave
        field blank if you are unsure.)
      </Text>
      <View>
        <TextInput
          placeholder='#'
          placeholderTextColor={
            global.colorblindMode
              ? global.cb_placeHolderTextColor
              : global.placeHolderTextColor
          }
        />
        <Text style={styles().textReg}>steps</Text>
      </View>
      <Text style={styles().textReg}>ADVANCED FITNESS TRACKING</Text>
      <AddExercise />
      <Button
        title='+ Add Exercise'
        color={
          global.colorblindMode
            ? global.cb_optionButtonsColor
            : global.optionButtonsColor
        }
      />
    </SafeAreaView>
  );
};

const ReviewEntry = () => {
  return (
    <View>
      <Text style={styles().textReg}></Text>
    </View>
  );
};

const EntryCompletion = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
        <Text style={styles().textReg}>You have watered (plant name) today!</Text>
        <Text style={styles().textReg}>+5 growth points</Text>
      </View>
      <View>
        <Button
          title='View Entry'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Return to Home'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
      </View>
    </SafeAreaView>
  );
};

const ViewEntry = () => {
  return (
    <View>
      <Text style={styles().textReg}></Text>
    </View>
  );
};

export {
  HealthEntry1,
  HealthEntry2,
  HealthEntry3,
  HealthEntry4,
  HealthEntry5,
  ReviewEntry,
  EntryCompletion,
  ViewEntry,
};

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    textDecorationLine: 'none',
    textAlign: 'left',
  }
});
