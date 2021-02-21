import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Switch,
  TouchableOpacity,
} from 'react-native';

function SettingsPage({ navigation }) {
    const [useStressLevels, setUseStressLevels] = useState(false);
    const toggleStressLevels = () =>
      setUseStressLevels((previousState) => !previousState);

    const [useDailyActivities, setUseDailyActivities] = useState(false);
    const toggleDailyActivities = () =>
      setUseDailyActivities((previousState) => !previousState);

    const [usePinReq, setUsePinReq] = useState(false);
    const togglePinReq = () =>
      setUsePinReq((previousState) => !previousState);
    
    const [useWeightTracking, setWeightTracking] = useState(false);
    const toggleWeightTracking = () =>
      setUseWeightTracking((previousState) => !previousState);
    
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

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          {/* page info and icon*/}

          <View style={styles.line}/>
          {/* acct protection */}
          <Text style={styles.heading}>ACCOUNT PROTECTION</Text>
          <View style={styles.line}/>
          {/* require pin when opening app */}
          {/* has switch component */}
          <View style={{ flexDirection: 'row' }}>
            <Text>Require PIN when opening app</Text>
            <View style={styles.line2}/>
            <Switch
              trackColor={{ false: '#767577', true: '#9AD2AF' }}
              thumbColor={usePinReq ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={togglePinReq}
              value={usePinReq}
            />
          </View>
          <View style={styles.line}/>
          {/* set user pin */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Set User PIN</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>
          {/* change pass */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Change Password</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>
          {/* change email */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Change Email</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>
          {/* link your acct */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Link Your Account</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>
          {/* customization */}
          <Text style={styles.heading}>CUSTOMIZATION</Text>
          <View style={styles.line}/>
          {/* personal profile */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Personal Profile</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>
          {/* change gardener avatar */}
          <TouchableOpacity 
            style={styles.buttons} 
            onPress= { () => navigation.navigate('settingsPage')}>
            <Text style={styles.text}>Change Gardener Avatar</Text>
            <Image source={require('../assets/chevron.png')} />
          </TouchableOpacity>
          <View style={styles.line}/>

          {/* health entry settings */}
          <Text style={styles.heading}>HEALTH ENTRY SETTINGS</Text>
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
          {/* weight tracking */}
          {/* has switch component */}
          <View style={{ flexDirection: 'row' }}>
            <Text>Weight Tracking</Text>
            <View style={styles.line2}/>
            <Switch
              trackColor={{ false: '#767577', true: '#9AD2AF' }}
              thumbColor={useWeightTracking ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleWeightTracking}
              value={useWeightTracking}
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

export default SettingsPage;