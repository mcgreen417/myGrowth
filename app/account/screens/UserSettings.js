import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
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
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';

import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

//MISSING BACKEND HOOKUP FOR: PIN
function UserSettings({ navigation }) {
  const [useStressLevels, setUseStressLevels] = useState(false);
  const toggleStressLevels = () =>
    setUseStressLevels((previousState) => !previousState);

  const [useDailyActivities, setUseDailyActivities] = useState(false);
  const toggleDailyActivities = () =>
    setUseDailyActivities((previousState) => !previousState);

  const [usePinReq, setUsePinReq] = useState(false);
  const togglePinReq = () => setUsePinReq((previousState) => !previousState);

  const [useWeightTracking, setUseWeightTracking] = useState(false);
  const toggleWeightTracking = () => {
    setUseWeightTracking((previousState) => {
      !previousState;});
  }

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

  useEffect(() => {
    //ADD HANDLING FOR PIN WHEN IMPLEMENTED
    async function setSettings() {
      const user = Auth.currentAuthenticatedUser();

      const res = await API.graphql({
        query: queries.getSetting,
        variables: {UserID: user.username}
      });

      setUseStressLevels(res.data.getSetting.Options.stress);
      setUseDailyActivities(res.data.getSetting.Options.dailyActivities);
      setUseWeightTracking(res.data.getSetting.Options.weight);
      setUsePeriodTracking(res.data.getSetting.Options.period);
      setUseMedicationTracking(res.data.getSetting.Options.medication);
      setUseSleepTracking(res.data.getSetting.Options.sleep);
      setUseMealTracking(res.data.getSetting.Options.meal);
      setUseFitnessTracking(res.data.getSetting.Options.fitness);
    }

    setSettings();
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
            <Text style={styles.pageDescription}>
              Edit your user settings below. You may return to this page at any
              time.
            </Text>
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          {/* Account Protection */}
          <Text style={styles.heading}>ACCOUNT PROTECTION</Text>
          <View style={styles.line} />

          {/* Require pin when opening app */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Require PIN when opening app</Text>
            <View style={styles.switchView}>
              <View style={styles.line2} />
              <Switch
                trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                thumbColor={usePinReq ? '#4CB97A' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={togglePinReq}
                value={usePinReq}
              />
            </View>
          </View>
          <View style={styles.line} />

          {/* Set user pin */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('UserSettings')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Set User PIN</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Change password */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('UserSettings')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Change Password</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Change email */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('UserSettings')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Change Email</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Link your acct */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('LinkAccount')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Link Your Account</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Customization */}
          <View style={{ marginTop: 20 }} />
          <Text style={styles.heading}>CUSTOMIZATION</Text>
          <View style={styles.line} />

          {/* Personal profile */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('Profile')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Personal Profile</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Change gardener avatar */}
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate('AvatarSelect')}>
              <View style={styles.inlineRow}>
                <Text style={styles.text}>Change Gardener Avatar</Text>
                <View style={styles.iconView}>
                  <Icon
                    name='chevron-forward'
                    type='ionicon'
                    color='#816868'
                    style={{ marginRight: -6 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          {/* Health entry settings */}
          <View style={{ marginTop: 20 }} />
          <Text style={styles.heading}>HEALTH ENTRY SETTINGS</Text>
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
                //onValueChange={toggleStressLevels}
                onChange={() => {
                  setUseStressLevels(!useStressLevels);
                  updateUserSetting(
                    useStressLevels, 
                    useDailyActivities, 
                    useWeightTracking, 
                    usePeriodTracking, 
                    useMedicationTracking, 
                    useSleepTracking, 
                    useMealTracking, 
                    useFitnessTracking
                );}}
                value={useStressLevels}
              />
            </View>
          </View>
          <View style={styles.line} />

          {/* Daily activities */}
          <View style={styles.inlineRow}>
            <Text style={styles.text}>Daily Activities</Text>
            <View style={styles.switchView}>
              <View style={styles.line2} />
              <Switch
                trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                thumbColor={useDailyActivities ? '#4CB97A' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleDailyActivities}
                onChange={() => {updateUserSetting(
                  useStressLevels, 
                  useDailyActivities, 
                  useWeightTracking, 
                  usePeriodTracking, 
                  useMedicationTracking, 
                  useSleepTracking, 
                  useMealTracking, 
                  useFitnessTracking
                );}}
                value={useDailyActivities}
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
                onChange={() => {
                  updateUserSetting(
                    useStressLevels, 
                    useDailyActivities, 
                    useWeightTracking, 
                    usePeriodTracking, 
                    useMedicationTracking, 
                    useSleepTracking, 
                    useMealTracking, 
                    useFitnessTracking
                );}}
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
                onChange={() => {
                  togglePeriodTracking();
                  updateUserSetting(
                    useStressLevels, 
                    useDailyActivities, 
                    useWeightTracking, 
                    usePeriodTracking, 
                    useMedicationTracking, 
                    useSleepTracking, 
                    useMealTracking, 
                    useFitnessTracking
                );}}
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
                onChange={() => {updateUserSetting(
                  useStressLevels, 
                  useDailyActivities, 
                  useWeightTracking, 
                  usePeriodTracking, 
                  useMedicationTracking, 
                  useSleepTracking, 
                  useMealTracking, 
                  useFitnessTracking
                );}}
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
                onChange={() => {updateUserSetting(
                  useStressLevels, 
                  useDailyActivities, 
                  useWeightTracking, 
                  usePeriodTracking, 
                  useMedicationTracking, 
                  useSleepTracking, 
                  useMealTracking, 
                  useFitnessTracking
                );}}
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
                onChange={() => {updateUserSetting(
                  useStressLevels, 
                  useDailyActivities, 
                  useWeightTracking, 
                  usePeriodTracking, 
                  useMedicationTracking, 
                  useSleepTracking, 
                  useMealTracking, 
                  useFitnessTracking
                );}}
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
                onChange={() => {updateUserSetting(
                  useStressLevels, 
                  useDailyActivities, 
                  useWeightTracking, 
                  usePeriodTracking, 
                  useMedicationTracking, 
                  useSleepTracking, 
                  useMealTracking, 
                  useFitnessTracking
                );}}
                value={useFitnessTracking}
              />
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.pageEnd} />
        </View>
      </ScrollView>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
}

//ADD HANDLING FOR PIN WHEN IMPLEMENTED
async function updateUserSetting(
  useStressLevels, 
  useDailyActivities, 
  useWeightTracking, 
  usePeriodTracking, 
  useMedicationTracking, 
  useSleepTracking, 
  useMealTracking, 
  useFitnessTracking
) {
  const user = Auth.currentAuthenticatedUser();

  const res1 = await API.graphql({
    query: queries.getSetting,
    variables: {UserID: user.username}
  });

  //query settings to get these values first
  const weight = res1.data.getSetting.Options.userWeight;
  const height = res1.data.getSetting.Options.userHeight;
  const metric = res1.data.getSetting.Options.metric;

  const settingOptions = {
    stress: useStressLevels,
    dailyActivities: useDailyActivities,
    weight: useWeightTracking,
    period: usePeriodTracking,
    medication: useMedicationTracking,
    sleep: useSleepTracking,
    meal: useMealTracking,
    fitness: useFitnessTracking,
    userHeight: height,
    userWeight: weight,
    metric: metric
  }

  const res = await API.graphql({
    query: mutations.updateSetting,
    variables: {UserID: user.username, options: settingOptions}
  });

  console.log(res);
}

export default UserSettings;

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
    width: '90%',
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
  iconView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
