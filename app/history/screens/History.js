import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';

const CategoryChooser = ({ navigation }) => {
  return (
    <View>
      <View style={{backgroundColor: '#A5DFB2', width: 300, height: 30}}>
      {/* add category chooser modal here */}
        <TouchableOpacity>
          { /* image asset */ }
          <View>
            <Image source={require('../../shared/assets/Path.png')}/>
          </View>
          <View>
            <Text>|</Text>
          </View>
          <View>
            <Text>Select a Category</Text>
          </View>
          { /* X asset */ }
          <View>
            <Image source={require('../../shared/assets/close.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#F6EFED', width: 300, height: 350}}>
        { /* health entries */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* mood */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* stress */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* daily activities */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* period tracking */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* weight */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* gen health */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* medicine */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* sleep */ }
        <View>  
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* meal tracking */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
        { /* fitness */ }
        <View>
          <TouchableOpacity>
            <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const HistoryHealthEntries = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          View an easily digestable summary of your health entry history! View
          your individual health entries below or select a category to get
          started!
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      {/* Top page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('CategoryChooser')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
        
        { /* replace w/ custom component in future */ }
        <Button title='History' />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>
        <Text>
          Did you know? You can also overlay graphs from different categories to
          easily search for correlations between your physical and mental
          health. Click below to get started!
        </Text>
        <TouchableOpacity style={styles.buttonsCorr} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textCorr}>Search for Correlations</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const HistoryMood = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your mood history and easily visualize changes in your mood over
          time, alongside potential causes for these changes.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
      <View>
        <Text>
          Based on our analysis, the following activities may help to increase
          your mood...
        </Text>
        <IncreaseMoodAnalysis />
      </View>
      <View>
        <Text>
          Likewise, if you're felling unhappy, you should avoid the following
          activities if possible...
        </Text>
        <AvoidMoodAnalysis />
      </View>
    </SafeAreaView>
  );
};

const HistoryStress = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your stress level history and easily visualize changes in your
          stress levels over time, alongside potential causes for these changes.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
      <View>
        <Text>
          Based on our analysis, the following activities may help to reduce
          your stress...
        </Text>
        <ReduceStressAnalysis />
      </View>
      <View>
        <Text>
          Likewise, if you're felling stressed, you should avoid the following
          activities if possible...
        </Text>
        <AvoidStressAnalysis />
      </View>
    </SafeAreaView>
  );
};

const HistoryDailyActivities1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your stress level history and easily visualize changes in your
          stress levels over time, alongside potential causes for these changes.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <Button title='Activity View' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const HistoryDailyActivities2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>SELECT ACTIVITY</Text>
        <Picker
          selectedValue={selectactivity}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setActivity(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Played games' value='played_games' />
          <Picker.Item label='Did homework' value='did_homework' />
          <Picker.Item label='Cooked dinner' value='cooked_dinner' />
          <Picker.Item label='Listened to music' value='listen_music' />
          <Picker.Item label='Talked to friends' value='talk_friends' />
          <Picker.Item label='Went to work' value='went_work' />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const HistoryPeriodTracking = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your period history and our predictions for your upcoming period.
          Predictions based on info from your health entries.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <PeriodPrediction />
      </View>
      <View>
        <Text>
          Based on this point in your cycle, some symptoms you may expect to
          encounter today are...
        </Text>
        <PeriodSymptoms />
      </View>
    </SafeAreaView>
  );
};

const HistoryWeight = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View a history of your changes in weight over time and receive calorie
          and exercise recommendations.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
      <View>
        <RecommendedCalories />
      </View>
      <View>
        <Text>
          Exercise is a great way to stay in shape and manage your weight! The
          following exercise regimens are recommended for you.
        </Text>
        <RecommendedExercire />
      </View>
    </SafeAreaView>
  );
};

const HistoryGeneralHealth1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View an easily digestable summary of your physical and mental health
          history!
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <Button title='Intensity' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const HistoryGeneralHealth2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>TIME PERIOD</Text>
        <Picker
          selectedValue={timePeriod}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Past week' value='past_week' />
          <Picker.Item label='Past month' value='past_month' />
          <Picker.Item label='Past year' value='past_year' />
        </Picker>
      </View>
      <View>
        <Text>SELECT SYMPTOM</Text>
        <Picker
          selectedValue={selectsymptom}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSymptom(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='All symptoms' value='all_symptoms' />
          <Picker.Item label='Stomach ache' value='stomach_ache' />
          <Picker.Item label='Wrist soreness' value='wrist_soreness' />
          <Picker.Item label='Back soreness' value='back_soreness' />
          <Picker.Item label='Dizziness' value='dizziness' />
          <Picker.Item label='Fatigue' value='fatigue' />
        </Picker>
      </View>
    </SafeAreaView>
  );
};

const HistoryMedication = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your medication history and our predictions for potential effects
          stemming from your medication.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Text>SELECT MEDICATION</Text>
        <Picker
          selectedValue={selectmedication}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='(Medicine 1)' value='medicine_1' />
          <Picker.Item label='(Medicine 2)' value='medicine_2' />
          <Picker.Item label='(Medicine 3)' value='medicine_3' />
          <Picker.Item label='(Medicine 4)' value='medicine_4' />
          <Picker.Item label='(Medicine 5)' value='medicine_5' />
          <Picker.Item label='(Medicine 6)' value='medicine_6' />
        </Picker>
      </View>
      <View>
        <Text>
          Based on our analysis, on days when you don't take your prescribed
          medication, you often report experiencing the following...
        </Text>
        <NotTakeMedicationAnalysis />
      </View>
      <View>
        <Text>
          Based on our analysis, on days when you take your prescribed
          medication late, you often report experiencing the following...
        </Text>
        <TakeLateMedicationAnalysis />
      </View>
    </SafeAreaView>
  );
};

const HistorySleep1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your sleep history and our analysis of activities that may have a
          measurable effect on your duration or quality of sleep.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <Button title='Quality' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <View>
          <Text>TIME PERIOD</Text>
          <Picker
            selectedValue={timePeriod}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Past week' value='past_week' />
            <Picker.Item label='Past month' value='past_month' />
            <Picker.Item label='Past year' value='past_year' />
          </Picker>
        </View>
        <View>
          <Text>SELECT DISPLAY</Text>
          <Picker
            selectedValue={selectDisplay}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setDisplay(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Sleep Only' value='sleep_only' />
            <Picker.Item label='Naps Only' value='naps_only' />
          </Picker>
        </View>
      </View>
      <View>
        <Text>Display recommended sleep amount</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={useStressLevels ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleStressLevels}
          value={useStressLevels}
        />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you reported sleeping for a proper
          amount of time, you also reported...
        </Text>
        <ProperSleepAnalysis />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you didn't sleep enough, you also
          reported...
        </Text>
        <NotEnoughSleepAnalysis />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you overslept, you also
          reported...
        </Text>
        <OversleptSleepAnalysis />
      </View>
    </SafeAreaView>
  );
};

const HistorySleep2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>{/* add sleep quality page */}</Text>
    </SafeAreaView>
  );
};

const HistoryMealTracking = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          View your meal history and our analysis of the potential effects of
          your eating havits. Check how much you've been eating recently!
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='History' />
        <Button title='Correlations' />
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <View>
          <Text>TIME PERIOD</Text>
          <Picker
            selectedValue={timePeriod}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Past week' value='past_week' />
            <Picker.Item label='Past month' value='past_month' />
            <Picker.Item label='Past year' value='past_year' />
          </Picker>
        </View>
        <View>
          <Text>SELECT NUTRIENT</Text>
          <Picker
            selectedValue={selectNutrients}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setNutrients(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Calories' value='calories' />
            <Picker.Item label='Total fat' value='total_fat' />
            <Picker.Item label='Cholesterol' value='cholesterol' />
            <Picker.Item label='Sodium' value='sodium' />
            <Picker.Item label='Total carbs' value='total_carbs' />
            <Picker.Item label='Sugar' value='sugar' />
          </Picker>
        </View>
      </View>
      <View>
        <Text>Display recommended nutritional values</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={useStressLevels ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleStressLevels}
          value={useStressLevels}
        />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you met your nutritional
          requirements, you often reported...
        </Text>
        <MetNutritionAnalysis />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you didn't meet your nutritional
          requirements, you often reported...
        </Text>
        <NotMetNutritionAnalysis />
      </View>
    </SafeAreaView>
  );
};

const HistoryFitness1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text></Text>
    </SafeAreaView>
  );
};

const HistoryFitness2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text></Text>
    </SafeAreaView>
  );
};

const HistoryCorrelations = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>{/* add correlations page here */}</Text>
    </SafeAreaView>
  );
};

export {
  HistoryHealthEntries,
  HistoryMood,
  HistoryStress,
  HistoryDailyActivities1,
  HistoryDailyActivities2,
  HistoryPeriodTracking,
  HistoryWeight,
  HistoryGeneralHealth1,
  HistoryGeneralHealth2,
  HistoryMedication,
  HistorySleep1,
  HistorySleep2,
  HistoryMealTracking,
  HistoryCorrelations,
  HistoryFitness1,
  HistoryFitness2,
};

export default CategoryChooser;

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
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 80,
    height: 25,
    backgroundColor: '#4CB97A',
  },
  buttonsCorr: {
    marginTop: 10,
    marginBottom: 10,
    width: 190,
    height: 40,
    backgroundColor: '#E5E5E5',
    shadowColor: 'gray',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 20,
  },
  chooserImg: {
    borderWidth: 1,
    borderColor: '#4CB97A',
    width: 40,
    height: 40,
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
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  textCorr: {
    color: 'black',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
  textReg: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 12,
  },
});
