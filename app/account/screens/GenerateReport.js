import React from 'react';
import {
  Button,
  Switch,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GenerateReport = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Generate a report of your health entry history for your personal
          records. Select the time period and what you'd like to include.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={time_period}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='One week' value='one_week' />
          <Picker.Item label='Two weeks' value='two_weeks' />
          <Picker.Item label='One month' value='one_month' />
          <Picker.Item label='Three months' value='three_months' />
          <Picker.Item label='Six months' value='six_months' />
          <Picker.Item label='One year' value='one_year' />
          <Picker.Item label='Beginning of time' value='all' />
        </Picker>
      </View>
      <View>
        <Text>INCLUDED INFORMATION</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Mood & Feelings</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeMoodFeelings ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMoodFeelings}
            value={includeMoodFeelings}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Stress Levels</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeStressLevels ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleStressLevels}
            value={includeStressLevels}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Daily Activities</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeDailyActivities ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleDailyActivities}
            value={includeDailyActivities}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Mental/Physical Health</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeMentalPhysical ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMentalPhysical}
            value={includeMentalPhysical}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Period Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includePeriodTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={togglePeriodTracking}
            value={includePeriodTracking}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Medication Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeMedicationTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMedicationTracking}
            value={includeMedicationTracking}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Sleep Log</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeSleepLog ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSleepLog}
            value={includeSleepLog}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Meal Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeMealTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleMealTracking}
            value={includeMealTracking}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Fitness Tracking</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeFitnessTracking ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleFitnessTracking}
            value={includeFitnessTracking}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Journal Entries</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={includeJournalEntries ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleJournalEntries}
            value={includeJournalEntries}
          />
        </View>
      </View>
      <View>
        <Button title='Download as PDF' />
        <Button title='Save to Google Drive' />
      </View>
    </SafeAreaView>
  );
};

export default GenerateReport;

const styles = StyleSheet.create({});
