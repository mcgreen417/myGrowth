import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Switch,
  Button,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

function GenerateReport({ navigation }) {
  const [time, setTime] = useState('unselected');

  const [useMoodNFeel, setUseMoodNFeel] = useState(false);
  const toggleMoodNFeel = () =>
    setUseMoodNFeel((previousState) => !previousState);

  const [useStressLevels, setUseStressLevels] = useState(false);
  const toggleStressLevels = () =>
    setUseStressLevels((previousState) => !previousState);

  const [useDailyActivities, setUseDailyActivities] = useState(false);
  const toggleDailyActivities = () =>
    setUseDailyActivities((previousState) => !previousState);

  const [useMentalPhysical, setUseMentalPhysical] = useState(false);
  const toggleMentalPhysical = () =>
    setUseMentalPhysical((previousState) => !previousState);

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

  const [useJournalEntries, setUseJournalEntries] = useState(false);
  const toggleJournalEntries = () =>
    setUseJournalEntries((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
            <Text style={styles.pageDescription}>
              Generate a report of your health entry history for your personal records. 
            </Text>
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          {/* Time period */}
          <Text style={styles.heading}>TIME PERIOD</Text>
          <View style={{ width: '90%' }}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={time}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
              >
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='One week' value='oneWeek' />
                <Picker.Item label='Two weeks' value='twoWeeks' />
                <Picker.Item label='One month' value='oneMonth' />
                <Picker.Item label='Three months' value='threeMonths' />
                <Picker.Item label='Six months' value='sixMonths' />
                <Picker.Item label='One year' value='oneYear' />
                <Picker.Item
                  label='Beginning of time'
                  value='beginningOfTime'
                />
              </Picker>
            </View>
          </View>

          {/* Included information */}
          <Text style={styles.heading}>INCLUDED INFORMATION</Text>
          <View style={styles.line} />

          {/* mood & feels */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Mood & Feelings</Text>
            <View style={styles.switchView}>
              <View style={styles.line2} />
              <Switch
                trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                thumbColor={useMoodNFeel ? '#4CB97A' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleMoodNFeel}
                value={useMoodNFeel}
              />
            </View>
          </View>
          <View style={styles.line} />

          {/* Stress levels */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Stress Levels</Text>
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

          {/* daily activities */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Daily Activities</Text>
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

          {/* Mental/phys health */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Physical/Mental Health Symptoms</Text>
            <View style={styles.switchView}>
              <View style={styles.line2} />
              <Switch
                trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                thumbColor={useMentalPhysical ? '#4CB97A' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleMentalPhysical}
                value={useMentalPhysical}
              />
            </View>
          </View>
          <View style={styles.line} />

          {/* Weight tracking */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Weight Tracking</Text>
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
            <Text style={styles.text}>Period Tracking</Text>
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
            <Text style={styles.text}>Medication Tracking</Text>
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
            <Text style={styles.text}>Sleep Tracking</Text>
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
            <Text style={styles.text}>Meal Tracking</Text>
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
            <Text style={styles.text}>Fitness Tracking</Text>
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

          {/* Journal entries */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Journal Entries</Text>
            <View style={styles.switchView}>
              <View style={styles.line2} />
              <Switch
                trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                thumbColor={useJournalEntries ? '#4CB97A' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleJournalEntries}
                value={useJournalEntries}
              />
            </View>
          </View>
          <View style={styles.line} />

          {/* PDF/Google Drive export buttons */}
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ width: '42.5%' }}>
              <Button title='Download as PDF' color='#A5DFB2' onPress={() => onPress()}/>
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button title='Save to Google Drive' color='#A5DFB2' onPress={() => onPress()}/>
            </View>
          </View>

          <View style={styles.pageEnd} />
        </View>
      </ScrollView>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default GenerateReport;

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
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
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
    color: '#4CB97A',
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
    borderColor: '#816868',
    borderBottomWidth: 1,
    minHeight: 1,
    width: '90%',
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
  text: {
    color: '#816868',
    fontSize: 16,
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  picker: {
    height: 32,
    width: '100%',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '60%',
    backgroundColor: '#f4f3f4',
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
