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
  FlatList,
  Switch,
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
        <View style={styles.pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
            <Text style={styles.pageDescription}>
              Welcome to myGrowth! Let’s initialize your account. First, please answer a few questions about yourself.
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
          <View style={styles.datePicker}>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles.inlineRow}>
                <View style={styles.iconView}>
                  <Image source={require('../../shared/assets/baseline_event_black_18dp.png')}/>
                </View>
                <Text>   MM/DD/YYYY</Text>
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
            <Text>     IN</Text>
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
            <Text>     LB</Text>
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
                onPress={() => navigation.navigate('UserInitializationPage2')}/
              >
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
      <View style={styles.pageSetup}>

        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
          <Text style={styles.pageDescription}>
            As our next step, take some time to select and appearance for me! I'll
            be here to guide you through the app. Think of me as your new friend!
          </Text>
        </View>
        {/* Top page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        {/* Gardener avatar select */}
        <View style={styles.avatarSelectView}>
          <FlatList
            data={avatar}
            renderItem={({ item, index }) => (
              <Image
                source={{ uri: item, cache: 'reload' }}
                key={index}
                style={{ width: 55, height: 55, margin: 4 }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={6}
          />
        </View>

        {/* Back & next buttons */}
        <View style={styles.buttonsContainer}>
          <Button 
            title='Back' 
            color='#A5DFB2' 
            onPress={() => navigation.navigate('UserInitializationPage1')}/
          >
          <View style={{ width: '72%' }}></View>
          <Button 
            title='Next' 
            color='#A5DFB2' 
            onPress={() => navigation.navigate('UserInitializationPage3')}/
          >
        </View>
      </View>
    </SafeAreaView>
  );
};

const UserInitializationPage3 = ({ navigation }) => {
  const [useStressLevels, setUseStressLevels] = useState(false);
  const toggleStressLevels = () =>
    setUseStressLevels((previousState) => !previousState);

  const [useDailyActivities, setUseDailyActivities] = useState(false);
  const toggleDailyActivities = () =>
    setUseDailyActivities((previousState) => !previousState);

  const [useWeightTracking, setUseWeightTracking] = useState(false);
  const toggleWeightTracking = () =>
    setUseWeightTracking((previousState) => !previousState);

  const [usePeriodTracking, setUsePeriodTracking] = useState(false);
  const togglePeriodTracking = () =>
    setUsePeriodTracking((previousState) => !previousState);

  const [useMedicationTracking, setUseMedicationTracking] = useState(false);
  const toggleMedicationTracking = () =>
    setUseMedicationTracking((previousState) => !previousState);

  const [useSleepTracking, setUseSleepTracking] = useState(false);
  const toggleSleepTracking = () =>
    setUseSleepTracking((previousState) => !previousState);

  const [useMealTracking, setUseMealTracking] = useState(false);
  const toggleMealTracking = () =>
    setUseMealTracking((previousState) => !previousState);

  const [useFitnessTracking, setUseFitnessTracking] = useState(false);
  const toggleFitnessTracking = () =>
    setUseFitnessTracking((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageSetup}>

        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
          <Text style={styles.pageDescription}>
            Edit your user settings below. These user settings may be changed at any time by returning to this page.
          </Text>
        </View>
        {/* Top page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        {/* Health entry settings */}
          <Text style={styles.heading}>HEALTH ENTRY SETTINGS</Text>
          <View style={styles.line} />

        {/* Stress levels */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Stress Levels</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useStressLevels ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleStressLevels}
              value={useStressLevels}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Daily activities */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Daily Activities</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useDailyActivities ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleDailyActivities}
              value={useDailyActivities}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Weight tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Weight Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useWeightTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleWeightTracking}
              value={useWeightTracking}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Period tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Period Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={usePeriodTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={togglePeriodTracking}
              value={usePeriodTracking}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Medication tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Medication Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useMedicationTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleMedicationTracking}
              value={useMedicationTracking}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Sleep tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Sleep Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useSleepTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSleepTracking}
              value={useSleepTracking}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Meal tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Meal Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useMealTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleMealTracking}
              value={useMealTracking}
            />
          </View>
        </View>
        <View style={styles.line} />

        {/* Fitness tracking */}
        <View style={styles.inlineRow}>
          <Text style={styles.textReg}>Fitness Tracking</Text>
          <View style={styles.switchView}>
            <View style={styles.line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={useFitnessTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleFitnessTracking}
              value={useFitnessTracking}
            />
          </View>
        </View>
        <View style={styles.line} />
        
        {/* Back & next buttons */}
        <View style={{ marginTop: '33%' }}/>
        <View style={styles.buttonsContainer}>
          <Button 
            title='Back' 
            color='#A5DFB2' 
            onPress={() => navigation.navigate('UserInitializationPage2')}/
          >
          <View style={{ width: '70%' }}></View>
          <Button 
            title='Finish' 
            color='#A5DFB2' 
            onPress={() => navigation.navigate('HomePage')}/
          >
        </View>
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
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  buttons: {
    marginBottom: 10,
    width: '20%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '90%',
  },
  datePicker: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
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
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '90%',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  line: {
    width: '90%',
    borderColor: '#816868',
    borderBottomWidth: 1,
    minHeight: 1,
  },
  line2: {
    borderColor: '#816868',
    borderRightWidth: 1,
    minHeight: 28,
    marginTop: 4,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  textReg: {
    color: 'black',
    textAlign: 'left',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  pageEnd: {
    marginBottom: 10,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 32,
    width: '100%',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    backgroundColor: '#f4f3f4',
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f4f3f4',
    color: '#000000',
    width: '70%',
    paddingLeft: 10,
    fontSize: 16,
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput2: {
    height: 36,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f4f3f4',
    color: '#000000',
    width: '12%',
    textAlign: 'center',
    fontSize: 16,
  },
  userPrompt: {
    marginBottom: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
