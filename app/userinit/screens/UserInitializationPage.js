import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';

import { ToggleButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

function UserInitializationPage1({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState('unselected');
  const [bioSex, setBioSex] = useState('unselected');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [useHeightMeasurement, setUseHeightMeasurement] = useState(false);
  const toggleHeightMeasurement = () =>
    setUseHeightMeasurement((previousState) => !previousState);

  const [useWeightMeasurement, setUseWeightMeasurement] = useState(false);
  const toggleWeightMeasurement = () =>
    setUseWeightMeasurement((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
            <Text style={styles.pageDescription}>
              Welcome to myGrowth! Let’s initialize{'\n'}
              your account. First, please answer a{'\n'}
              few questions about yourself.
            </Text>
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          {/* First name user input entry */}
          <Text style={styles.heading}>FIRST NAME</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput} placeholder='First name' />
          </View>

          {/* Date of birth calendar pop-up */}
          <Text style={styles.heading}>DATE OF BIRTH</Text>
          <View>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles.inlineRow}>
                <View style={styles.iconView}>
                  <Image
                    source={require('../../shared/assets/baseline_event_black_18dp.png')}
                  />
                </View>
                <Text>MM/DD/YYYY</Text>
              </View>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
              />
            )}
          </View>

          {/* Gender drop-down */}
          <Text style={styles.heading}>GENDER</Text>
          <View style={{ width: '90%' }}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={gender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
                <Picker.Item label='Non-binary' value='nonbinary' />
                <Picker.Item label='Other' value='other' />
                <Picker.Item label='Prefer not to answer' value='noAnswer' />
              </Picker>
            </View>
          </View>

          {/* Biological sex drop-down */}
          <Text style={styles.heading}>BIOLOGICAL SEX</Text>
          <View style={{ width: '90%' }}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={bioSex}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setBioSex(itemValue)}
              >
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
              </Picker>
            </View>
          </View>

          {/* Height user input entry + cm switch button */}
          <Text style={styles.heading}>HEIGHT</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput2} placeholder='#' />
            <Text>IN</Text>
            <ToggleButton
              icon={
                useHeightMeasurement
                  ? require('../../shared/assets/toggle_on.png')
                  : require('../../shared/assets/toggle_off.png')
              }
              value='heightMeasurement'
              status={useHeightMeasurement ? 'checked' : 'unchecked'}
              onPress={toggleHeightMeasurement}
            />
            <Text>CM</Text>
          </View>

          {/* Weight user input entry + kgs switch button */}
          <Text style={styles.heading}>WEIGHT</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput2} placeholder='#' />
            <Text>LBS</Text>
            <ToggleButton
              icon={
                useWeightMeasurement
                  ? require('../../shared/assets/toggle_on.png')
                  : require('../../shared/assets/toggle_off.png')
              }
              value='weightMeasurement'
              status={useWeightMeasurement ? 'checked' : 'unchecked'}
              onPress={toggleWeightMeasurement}
            />
            <Text>KG</Text>
          </View>

          {/* Next button */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttons}>
              <Button
                title='NEXT'
                color='#A5DFB2'
                onPress={() => navigation.navigate('UserInitializationPage2')}
              />
            </View>
          </View>

          <View style={styles.pageEnd} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const avatars = new Array(48).fill('http://placeimg.com/100/100/any');

const UserInitializationPage2 = ({ navigation }) => {
  const [avatar, setAvatar] = useState(avatars);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 5, flexDirection: 'row' }}>
        <Image
          style={styles.logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
          As our next step, take some time to select and appearance for me! I'll
          be here to guide you through the app.
        </Text>
      </View>
      <View style={{ height: '75%' }}>
        <FlatList
          data={avatar}
          renderItem={({ item, index }) => (
            <Image
              source={{ uri: item, cache: 'reload' }}
              key={index}
              style={{ width: 55, height: 55, margin: 5 }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={6}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title='Back' />
        <View style={{ width: 20 }}></View>
        <Button
          title='Next'
          onPress={() => navigation.navigate('UserInitializationPage3')}
        />
      </View>
    </SafeAreaView>
  );
};

const UserInitializationPage3 = ({ navigation }) => {
  const [useStressLevels, setUseStressLevels] = useState(false);
  const [useDailyActivities, setUseDailyActivities] = useState(false);
  const [useWeightTracking, setUseWeightTracking] = useState(false);
  const [usePeriodTracking, setUsePeriodTracking] = useState(false);
  const [useMedicationTracking, setUseMedicationTracking] = useState(false);
  const [useSleepLog, setUseSleepLog] = useState(false);
  const [useMealTracking, setUseMealTracking] = useState(false);
  const [useFitnessTracking, setUseFitnessTracking] = useState(false);
  const toggleStressLevels = () =>
    setUseStressLevels((previousState) => !previousState);
  const toggleDailyActivities = () =>
    setUseDailyActivities((previousState) => !previousState);
  const toggleWeightTracking = () =>
    setUseWeightTracking((previousState) => !previousState);
  const togglePeriodTracking = () =>
    setUsePeriodTracking((previousState) => !previousState);
  const toggleMedicationTracking = () =>
    setUseMedicationTracking((previousState) => !previousState);
  const toggleSleepLog = () =>
    setUseSleepLog((previousState) => !previousState);
  const toggleMealTracking = () =>
    setUseMealTracking((previousState) => !previousState);
  const toggleFitnessTracking = () =>
    setUseFitnessTracking((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../shared/assets/icon.png')}
        />
        <Text>
          Before we begin, let's tailor your health entries to your personal
          preferences. You can edit this later in Settings.
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Stress Levels</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useStressLevels ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleStressLevels}
            value={useStressLevels}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Daily Activities</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useDailyActivities ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleDailyActivities}
            value={useDailyActivities}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Weight Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useWeightTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleWeightTracking}
            value={useWeightTracking}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Period Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={usePeriodTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={togglePeriodTracking}
            value={usePeriodTracking}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Medication Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useMedicationTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMedicationTracking}
            value={useMedicationTracking}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Sleep Log</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useSleepLog ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSleepLog}
            value={useSleepLog}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Meal Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useMealTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMealTracking}
            value={useMealTracking}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>Fitness Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={useFitnessTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleFitnessTracking}
            value={useFitnessTracking}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title='Back' />
        <View style={{ width: 20 }}></View>
        <Button title='Next' onPress={() => navigation.navigate('HomePage')} />
      </View>
    </SafeAreaView>
  );
};

export {
  UserInitializationPage1,
  UserInitializationPage2,
  UserInitializationPage3,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  infoLogo: {
    width: 20,
    height: 20,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    borderColor: 'black',
  },
  textInput: {
    height: 40,
    borderColor: '#A5DFB2',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    textAlign: 'center',
  },
});
