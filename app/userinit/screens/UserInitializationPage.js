import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  FlatList,
  Switch,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const UserInitializationPage1 = ({ navigation }) => {
  const [gender, setGender] = useState('unselected');
  const [sex, setSex] = useState('unselected');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <Text>
          Welcome to myGrowth! Let's initialize your account. First, please
          answer a few questions about yourself.
        </Text>
      </View>
      <View>
        <Text>FIRST NAME</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
      </View>
      <View>
        <Text>DATE OF BIRTH</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
      </View>
      <View>
        <Text>GENDER</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Man' value='man' />
          <Picker.Item label='Woman' value='woman' />
          <Picker.Item label='Nonbinary' value='nonbinary' />
        </Picker>
      </View>
      <View>
        <Text>BIOLOGICAL SEX</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
        <Picker
          selectedValue={sex}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Male' value='male' />
          <Picker.Item label='Female' value='female' />
          <Picker.Item label='Intersex' value='intersex' />
        </Picker>
      </View>
      <View>
        <Text>HEIGHT</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
        <TextInput>ft</TextInput>
        <TextInput>in</TextInput>
        <Button title='Switch to cm' />
      </View>
      <View>
        <Text>WEIGHT</Text>
        <Image style={styles.infoLogo} source={require('../assets/icon.png')} />
        <TextInput>lbs</TextInput>
        <Button title='Switch to kgs' />
      </View>
      <View>
        <Button
          title='Next'
          onPress={() => navigation.navigate('UserInitializationPage2')}
        />
      </View>
    </SafeAreaView>
  );
};

const avatars = new Array(48).fill('http://placeimg.com/100/100/any');

const UserInitializationPage2 = ({ navigation }) => {
  const [avatar, setAvatar] = useState(avatars);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 5, flexDirection: 'row' }}>
        <Image style={styles.logo} source={require('../assets/icon.png')} />
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
        <Button title='Next' onPress={() => navigation.navigate('Home')} />
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
