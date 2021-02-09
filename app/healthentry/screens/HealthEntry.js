import React from 'react';
import {
  Button,
  Modal,
  SafeView,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Mood = (type) => {
  return (
    <View>
      <Image />
      <Text>{type}</Text>
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

const HealthEntry1 = () => {
  return (
    <SafeView>
      <Modal>
        <Text>Add Feelings</Text>
      </Modal>
      <Modal>
        <Text>Add Stressors</Text>
      </Modal>
      <Modal>
        <Text>Add Activities</Text>
      </Modal>
      <View>
        <Image source={require('../../assets/icon.png')} />
        <View>
          <Text>Time for a new health entry!</Text>
          <Text>After you save your entry, you may edit it at any time.</Text>
        </View>
      </View>
      <View>
        <Text>SELECT DATE & TIME</Text>
        <View>
          <Text>Add date here</Text>
          <Text>Add time here</Text>
        </View>
      </View>
      <View>
        <Text>MOOD</Text>
        <View>
          <Mood type='awful' />
          <Mood type='bad' />
          <Mood type='Okay' />
          <Mood type='Good' />
          <Mood type='Great' />
        </View>
        <Button title='+ Add Feelings' />
      </View>
      <View>
        <Text>STRESS</Text>
        <Stress level={stress_level} />
        <Button title='+ Add Stressors' />
      </View>
      <View>
        <Text>DAILY ACTIVITIES</Text>
        <Text>What activities did you participate in today?</Text>
        <Button title='+ Add Activities' />
      </View>
      <View>
        <Button title='Next >' />
      </View>
    </SafeView>
  );
};

const HealthEntry2 = () => {
  return (
    <SafeView>
      <View>
        <Text>PHYSICAL/MENTAL HEALTH</Text>
        <View>
          <Text>Did you have your period today? </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={setPeriodToday ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={togglePeriodToday}
            value={setPeriodToday}
          />
        </View>
        <Text>
          If you have weighed yourself today, how much do you weigh? (Leave
          field blank if you are unsure.)
        </Text>
        <View>
          <TextInput placeholder='#' />
          <Text>lbs</Text>
        </View>
        <Text>
          Have you experienced any unusual physical or mental health symptoms
          today?
        </Text>
        <Button title='+ Add Symptoms' />
      </View>
      <View>
        <Text>MEDICATION</Text>
        <Text>Have you taken the following medication today?</Text>
        <Medicine title='Medicine 1' time='7:30PM' interval='daily' />
        <Medicine title='Medicine 2' time='7:30PM' interval='daily' />
        <Button title='+ Add Medicine' />
      </View>
      <View>
        <Button title='< Back' />
        <Button title='Next >' />
      </View>
    </SafeView>
  );
};

const HealthEntry3 = () => {
  return (
    <SafeView>
      <Text>SLEEP</Text>
      <View>
        <Text>Did you sleep today?</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={setSleepToday ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSleepToday}
          value={setSleepToday}
        />
      </View>
      <Text>When did you sleep last night?</Text>
      <View>
        <Text>Time1</Text>
        <Text>to</Text>
        <Text>Time2</Text>
      </View>
      <Text>How would you rate your quality of sleep last night?</Text>
      <View>
        <SleepQuality type='alright' />
      </View>
      <Text>When did you nap today?</Text>
      <View>
        <Text>Time1</Text>
        <Text>to</Text>
        <Text>Time2</Text>
      </View>
      <Text>How would you rate your quality of sleep during your nap?</Text>
      <View>
        <SleepQuality type='alright' />
      </View>
      <View>
        <Button title='+ Add Nap' />
      </View>
      <View>
        <Button title='< Back' />
        <Button title='Next >' />
      </View>
    </SafeView>
  );
};

const HealthEntry4 = () => {
  return (
    <SafeView>
      <View>
        <Text>Have you eaten today? </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={setEatenToday ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleEatenToday}
          value={setEatenToday}
        />
      </View>
      <Text>
        If you kept track of your calories, how many calories did you consume?
        (Leave field blank if you are unsure.)
      </Text>
      <View>
        <TextInput placeholder='#' />
        <Text>cal</Text>
      </View>
      <View>
        <Text>ADVANCE MEAL TRACKING</Text>
        <AddMeal />
        <Button title='+ Add Meal' />
      </View>
      <View>
        <Button title='< Back' />
        <Button title='Next >' />
      </View>
    </SafeView>
  );
};

const HealthEntry5 = () => {
  return (
    <SafeView>
      <Text>FITNESS TRACKING</Text>
      <View>
        <Text>Did you exercise today? </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={setExerciseToday ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleExerciseToday}
          value={setExerciseToday}
        />
      </View>
      <Text>How long did you exercise for?</Text>
      <View>
        <TextInput placeholder='#' />
        <Text>min</Text>
      </View>
      <Text>
        If you kept track of your calories, how many calories did you burn?
        (Leave field blank if you are unsure.)
      </Text>
      <View>
        <TextInput placeholder='#' />
        <Text>cal</Text>
      </View>
      <Text>
        If you kept track of your steps, how many steps did you take? (Leave
        field blank if you are unsure.)
      </Text>
      <View>
        <TextInput placeholder='#' />
        <Text>steps</Text>
      </View>
      <Text>ADVANCED FITNESS TRACKING</Text>
      <AddExercise />
      <Button title='+ Add Exercise' />
    </SafeView>
  );
};

const ReviewEntry = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const EntryCompletion = () => {
  return (
    <SafeView>
      <View>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../assets/icon.png')} />
        <Text>You have watered (plant name) today!</Text>
        <Text>+5 growth points</Text>
      </View>
      <View>
        <Button title='View Entry' />
        <Button title='Return to Home' />
      </View>
    </SafeView>
  );
};

const ViewEntry = () => {
  return (
    <View>
      <Text></Text>
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

const styles = StyleSheet.create({});
