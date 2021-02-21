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

import { Picker } from '@react-native-picker/picker';

function GenReportPage({ navigation }) {
    const [gender, setGender] = useState('unselected');
    
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
    
    const [usePeriodTracking, setUsePeriodTracking] = useState(false);
    const togglePeriodTracking = () =>
      setUsePeriodTracking((previousState) => !previousState);

    const [useMedicationTracking, setUseMedicationTracking] = useState(false);
    const toggleMedicationTracking = () =>
      setUseMedicationTracking((previousState) => !previousState);

    const [useSleepLog, setUseSleepLog] = useState(false);
    const toggleSleepLog = () =>
      setUseSleepLog((previousState) => !previousState);

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
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <View style={styles.line}/>
                    {/* time period */}
                    <Text style={styles.heading}>TIME PERIOD</Text>
                    <View>
                        <Text>TIME PERIOD</Text>
                        <Picker
                            selectedValue={gender}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label='Select one...' value='unselected' />
                            <Picker.Item label='One week' value='oneWeek' />
                            <Picker.Item label='Two weeks' value='twoWeeks' />
                            <Picker.Item label='One month' value='oneMonth' />
                            <Picker.Item label='Three months' value='threeMonths' />
                            <Picker.Item label='Six months' value='sixMonths' />
                            <Picker.Item label='One year' value='oneYear' />
                            <Picker.Item label='Beginning of time' value='beginningOfTime' />
                        </Picker>
                    </View>
                    {/* included information */}
                    <Text style={styles.heading}>INCLUDED INFORMATION</Text>
                    <View style={styles.line}/>
                    {/* mood & feels */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Mood & Feels</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useMoodNFeel ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleMoodNFeel}
                            value={useMoodNFeel}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* stress levels */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Stress Levels</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useStressLevels ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleStressLevels}
                            value={useStressLevels}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* daily activities */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Daily Activities</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useDailyActivities ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleDailyActivities}
                            value={useDailyActivities}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* mental/phys health */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Mental/Physical Health</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useMentalPhysical ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleMentalPhysical}
                            value={useMentalPhysical}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* period tracking */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Period Tracking</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={usePeriodTracking ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={togglePeriodTracking}
                            value={usePeriodTracking}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* medication tracking */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Medication Tracking</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useMedicationTracking ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleMedicationTracking}
                            value={useMedicationTracking}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* sleep log */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Sleep Log</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useSleepLog ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleSleepLog}
                            value={useSleepLog}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* meal tracking */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Meal Tracking</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useMealTracking ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleMealTracking}
                            value={useMealTracking}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* fitness tracking */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Fitness Tracking</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useFitnessTracking ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleFitnessTracking}
                            value={useFitnessTracking}
                        />
                    </View>
                    <View style={styles.line}/>
                    {/* journal entries */}
                    {/* has switch component */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Journal Entries</Text>
                        <View style={styles.line2}/>
                        <Switch
                            trackColor={{ false: '#767577', true: '#9AD2AF' }}
                            thumbColor={useJournalEntries ? '#4CB97A' : '#f4f3f4'}
                            ios_backgroundColor='#3e3e3e'
                            onValueChange={toggleJournalEntries}
                            value={useJournalEntries}
                        />
                    </View>
                    <View style={styles.line}/>
                    <Button title='Download as PDF' color='#A5DFB2' onPress={ () => onPress() } />
                    <Button title='Save to Google Drive' color='#A5DFB2' onPress={ () => onPress() } />
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6EFED',
    },
    buttons: {
      marginTop: 7,
      marginBottom: 7,
      width: 300,
    },
    line: {
      width: 320,
      borderColor: '#938F8E',
      borderBottomWidth: 1,
      minHeight: 1,
    },
    line2 : {
      borderColor: '#938F8E',
      borderRightWidth: 1,
      minHeight: 18,
    },
    text: {
      color: 'black',
      textDecorationLine: 'none',
    },
    info: {
      color: 'black',
      fontSize: 18,
    },
    heading: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      marginTop: 24,
      marginBottom: 14,
    }
  });
  
  export default GenReportPage;