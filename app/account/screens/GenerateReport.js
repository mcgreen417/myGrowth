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
  ScrollView,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import StatusBariOS from '../../shared/components/StatusBariOS';

function GenerateReport({ navigation }) {
  const [time, setTime] = useState('unselected');
  const [pressed, setPressed] = useState(false);

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
    <SafeAreaView style={styles().container}>
      <StatusBariOS />
      <StatusBar
        backgroundColor={
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
        }
        barStyle='light-content'
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              Generate a report of your health entry history for your personal records!
            </Text>
            <Image
              style={styles().avatarFlipped}
              source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
            />
          </View>
          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Time Period dropdown picker */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Time Period
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressed ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingLeft: 12,
                }}>
                <Picker
                  selectedValue={time}
                  style={styles().picker}
                  dropdownIconColor='#816868'
                  onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                  mode={'dropdown'}>
                  <Picker.Item label='Select one...' value='unselected' color='#816868' />
                  <Picker.Item label='One week' value='oneWeek' color='#816868' />
                  <Picker.Item label='Two weeks' value='twoWeeks' color='#816868' />
                  <Picker.Item label='One month' value='oneMonth' color='#816868' />
                  <Picker.Item label='Three months' value='threeMonths' color='#816868' />
                  <Picker.Item label='Six months' value='sixMonths' color='#816868' />
                  <Picker.Item label='One year' value='oneYear' color='#816868' />
                  <Picker.Item label='Beginning of time' value='beginningOfTime' color='#816868'/>
                </Picker>
              </View>
            </View>
          </View>

          {/* Included information */}
          <Text style={styles().heading}>INCLUDED INFORMATION</Text>
          <View style={styles().line} />

          {/* mood & feels */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Mood & Feelings</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useMoodNFeel
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleMoodNFeel}
                value={useMoodNFeel}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Stress levels */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Stress Levels</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useStressLevels
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleStressLevels}
                value={useStressLevels}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* daily activities */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Daily Activities</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useDailyActivities
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleDailyActivities}
                value={useDailyActivities}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Mental/phys health */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Physical/Mental Health Symptoms</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useMentalPhysical
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleMentalPhysical}
                value={useMentalPhysical}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Weight tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Weight Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useWeightTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleWeightTracking}
                value={useWeightTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Period tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Period Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  usePeriodTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={togglePeriodTracking}
                value={usePeriodTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Medication tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Medication Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useMedicationTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleMedicationTracking}
                value={useMedicationTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Sleep tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Sleep Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useSleepTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleSleepTracking}
                value={useSleepTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Meal tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Meal Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useMealTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleMealTracking}
                value={useMealTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Fitness tracking */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Fitness Tracking</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useFitnessTracking
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleFitnessTracking}
                value={useFitnessTracking}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* Journal entries */}
          <View style={styles().inlineRow}>
            <Text style={styles().text}>Journal Entries</Text>
            <View style={styles().switchView}>
              <View style={styles().line2} />
              <Switch
                trackColor={{ 
                  false: global.colorblindMode 
                    ? global.cb_switchTrackColorFalse
                    : global.switchTrackColorFalse,
                  true: global.colorblindMode
                    ? global.cb_switchTrackColorTrue 
                    : global.switchTrackColorTrue
                }}
                thumbColor={
                  useJournalEntries
                    ? (global.colorblindMode 
                      ? global.cb_switchThumbColorTrue
                      : global.switchThumbColorTrue)
                    : (global.colorblindMode
                      ? global.cb_switchThumbColorFalse
                      : global.switchThumbColorFalse)
                }
                ios_backgroundColor={global.cb_switchIosBackgroundColor}
                onValueChange={toggleJournalEntries}
                value={useJournalEntries}
              />
            </View>
          </View>
          <View style={styles().line} />

          {/* PDF/Google Drive export buttons */}
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ width: '42.5%' }}>
              <Button 
                title='Download as PDF'
                color={
                  global.colorblindMode
                    ? global.cb_optionButtonsColor
                    : global.optionButtonsColor
                }
                onPress={() => onPress()}
              />
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button
                title='Save to Drive'
                color={
                  global.colorblindMode
                    ? global.cb_optionButtonsColor
                    : global.optionButtonsColor
                }
                onPress={() => onPress()}
              />
            </View>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export default GenerateReport;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatarFlipped: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    transform: [
      { scaleX: -1 }
    ]
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
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
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
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
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
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
  },
  line: {
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderBottomWidth: 1,
    minHeight: 1,
    width: '90%',
  },
  line2: {
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
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
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
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
    marginBottom: 4,
    width: '100%',
    color: '#816868',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '60%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 0.6),
    position: 'relative',
  },
});
