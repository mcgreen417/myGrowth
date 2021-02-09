import React from 'react';
import {
  Button,
  Switch,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const UserSettings = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Edit your user settings below. These may be changed later at any time.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>ACCOUNT PROTECTION</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Require PIN when opening app</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#9AD2AF' }}
            thumbColor={usePINProtection ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={togglePINProtection}
            value={usePINProtection}
          />
        </View>
        <Button title='Set User PIN' />
        <Button title='Change Password' />
        <Button title='Change E-mail' />
        <Button title='Link Your Account' />
      </View>
      <View>
        <Text>CUSTOMIZATION</Text>
        <Button title='Personal Profile' />
        <Button title='Change Gardener Avatar' />
      </View>
      <View>
        <Text>HEALTH ENTRY SETTINGS</Text>
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
    </SafeAreaView>
  );
};

export default UserSettings;

const styles = StyleSheet.create({});
