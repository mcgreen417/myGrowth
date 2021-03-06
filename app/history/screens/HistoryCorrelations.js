import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

const dayLabels = [
  "Mon",
  "Tues",
  "Weds",
  "Thurs",
  "Fri",
  "Sat",
  "Sun"
];
  
const monthLabels = [
  "Jan",
  "Mar",
  "May",
  "July",
  "Sept",
  "Nov"
];

const Graph = ({labels, data1, data2, legend}) => {
  return(
    <View style={{margin:24}}>
      <LineChart 
        data={{
          labels: labels,
          datasets: [
            {   
              data: data1,
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            },
            {
              data: data2,
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(129, 104, 104, ${opacity})`,
            }
          ],
          legend: legend,
        }}
        width={Math.round(Dimensions.get('window').width * 0.9)}
        height={Math.round(Dimensions.get('window').width * 0.6)}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#4CB97A",
          backgroundGradientFrom: "#4CB97A",
          backgroundGradientTo: "#4CB97A",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
          borderRadius: 16
          },
          propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#A5DFB2"
          }
        }}
        fromZero={true}
        bezier
        style={{
          borderRadius: 16
        }}
      />
    </View>
  );
};

const DataChoosers = ({ 
  showSleep,
  showNap, 
  showFitness,
  showActivities,
  showMeal,
  showSymptom,
  showMedicine,
  page1,
  page2,
  category1,
  setCategory1,
  category2,
  setCategory2,
  isFirst,
  timePeriod,
  dataRecs,
  setData,
  setLegend
}) => {
  const activities = getPickerLabels('activity', dataRecs);
  const exercises = getPickerLabels('fitness', dataRecs);
  const medications = getPickerLabels('medications', dataRecs);
  const symptoms = getPickerLabels('symptoms', dataRecs);

  const [pressedSleep, setPressedSleep] = useState(false);
  const [pressedNap, setPressedNap] = useState(false);
  const [pressedFitness, setPressedFitness] = useState(false);
  const [pressedActivities, setPressedActivities] = useState(false);
  const [pressedNutrition, setPressedNutrition] = useState(false);
  const [pressedSymptom, setPressedSymptom] = useState(false);
  const [pressedMedicine, setPressedMedicine] = useState(false);

  return (
    <View>
      {/* SLEEP */}
      { showSleep &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedSleep ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Display
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedSleep ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
                  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'duration' : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                <Picker.Item label='Duration' value='duration' color='#816868' />
                <Picker.Item label='Quality' value='quality' color='#816868' />
              </Picker>
            </View>
          </View>
        </View>
      }

      {/* NAP */}
      { showNap &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedNap ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Display
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedNap ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'duration' : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                <Picker.Item label='Duration' value='duration' color='#816868' />
                <Picker.Item label='Quality' value='quality' color='#816868' />
              </Picker>
            </View>
          </View>
        </View>

      }

      {/* FITNESS */}
      { showFitness &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedFitness ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Display
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedFitness ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'burned' : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                <Picker.Item label='Calories Burned' value='burned' color='#816868' />
                <Picker.Item label='Workout Duration' value='dur' color='#816868' />
                <Picker.Item label='Total Steps' value='steps' color='#816868' />
                {exercises.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item} value={item} color='#816868' />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>

      }

      {/* ACTIVITIES */}
      { showActivities &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedActivities ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Activity
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedActivities ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? activities[0] : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                {activities.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item} value={item} color='#816868' />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      }

      {/* MEAL */}
      { showMeal &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedNutrition ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Nutrient
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedNutrition ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'cals' : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                <Picker.Item label='Calories' value='cals' color='#816868' />
                <Picker.Item label='Carbohydrates' value='carbs' color='#816868' />
                <Picker.Item label='Fats' value='fats' color='#816868' />
                <Picker.Item label='Proteins' value='proteins' color='#816868' />
              </Picker>
            </View>
          </View>
        </View>
      }

      {/* SYMPTOM */}
      { showSymptom &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedSymptom ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Symptom
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedSymptom ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? symptoms[0] : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                {symptoms.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item} value={item} color='#816868' />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      }

      {/* MEDICINE */}
      { showMedicine &&
        <View>
          <View style={styles().textInputView}>
            <View style={styles().labelView}>
              <Text
                style={{
                  color: pressedMedicine ? '#4CB97A' : '#816868',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Select Medicine
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: pressedMedicine ? '#4CB97A' : '#816868',
                justifyContent: 'flex-end',
                borderRadius: 6,
                paddingLeft: 12,
              }}>
              <Picker
                selectedValue={isFirst ? category1 : category2}
                style={styles().picker}
                dropdownIconColor='#816868'
                onValueChange={(itemValue, itemIndex) => {
                  if(isFirst)
                    setCategory1(itemValue);
                  else
                    setCategory2(itemValue);
  
                  makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? medications[0] : itemValue, timePeriod);
                  setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                }}
                mode={'dropdown'}>
                {medications.map((item, index) => {
                  return (
                    <Picker.Item key={index} label={item} value={item} color='#816868' />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      }
    </View>
  );
};

function HistoryCorrelations({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false);

  if(data !== null) {
    const arr1 = initData('mood', data);
    const arr2 = initData('stress', data);
    const legendInit = makeLegend('mood', 'stress', 'unselected', 'unselected');
    const pickerOpts = makeFirstPickers(settings);

    const [picker1, setPicker1] = useState('mood');
    const [picker2, setPicker2] = useState('stress');
    const [data1, setData1] = useState(arr1);
    const [data2, setData2] = useState(arr2);
    const [labels, setLabels] = useState(dayLabels);
    const [category1, setCategory1] = useState('unselected');
    const [category2, setCategory2] = useState('unselected');
    const [timePeriod, setTimePeriod] = useState('past_week');
    const [legend, setLegend] = useState(legendInit);

    const [showCategory1, setShowCategory1] = useState(true);
    const [showCategory2, setShowCategory2] = useState(true);

    const [pressedTime, setPressedTime] = useState(false);
    const [pressedCategory1, setPressedCategory1] = useState(false);
    const [pressedCategory2, setPressedCategory2] = useState(false);

    return (
      <SafeAreaView style={styles().container}>
        {/* Modal + each of the navigable history pages */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>

            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              View an overlay of your health entry graphs below to search for potential
              health correlations!
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

            {/* Categories button + graph */}
            <View style={{ marginTop: 10, }}/>
            <TouchableOpacity 
              style={styles().categoriesView} 
              onPress={() => setModalVisible(true)}
            >
              <View style={styles().categories}>
                <Text style={styles().textAlt}>Categories</Text>
                <View>
                  <Icon
                  name='arrow-top-right'
                  type='material-community'
                  color='white'
                  />
                </View>
              </View>
            </TouchableOpacity>

            <Graph 
              labels={labels}
              data1={data1}
              data2={data2}
              legend={legend}
            />

            <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
              <View style={styles().textInputView}>
                <View style={styles().labelView}>
                  <Text
                    style={{
                      color: pressedTime ? '#4CB97A' : '#816868',
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
                    borderColor: pressedTime ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingLeft: 12,
                  }}>
                  <Picker
                    selectedValue={timePeriod}
                    style={styles().picker}
                    dropdownIconColor='#816868'
                    onValueChange={(itemValue, itemIndex) => {
                      setTimePeriod(itemValue);

                      //make data per category selected
                      makeData(data, setData1, picker1, category1, itemValue);
                      makeData(data, setData2, picker2, category2, itemValue);

                      //new graph labels
                      makeLabels(itemValue, setLabels, data);
                    }}
                    mode={'dropdown'}>
                    <Picker.Item label='Past Week' value='past_week' color='#816868' />
                    <Picker.Item label='Past Month' value='past_month' color='#816868' />
                    <Picker.Item label='Past Year' value='past_year' color='#816868' />
                  </Picker>
                </View>
              </View>
            </View>

            {/* Category 1 Selection heading */}
            <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
              <Text style={styles().heading}>Category #1 Selection</Text>
              <View style={styles().iconView}>
                <Icon 
                  name={showCategory1 ? 'arrow-drop-up' : 'arrow-drop-down'}
                  color='#816868' 
                  onPress={() => setShowCategory1(!showCategory1)}
                />
              </View>
            </View>
            <Text style={styles().heading2}>Currently selected: {convertUpperCase(picker1)}</Text>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {showCategory1 &&
              <View style={{ marginHorizontal: '5%', flexDirection: 'row', marginTop: 16, marginBottom: 30, alignSelf: 'flex-start',}}>
                {/* Category 1 dropdown picker */}
                <View style={styles().textInputView}>
                  <View style={styles().labelView}>
                    <Text
                      style={{
                        color: pressedCategory1 ? '#4CB97A' : '#816868',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Category 1
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: pressedCategory1 ? '#4CB97A' : '#816868',
                      justifyContent: 'flex-end',
                      borderRadius: 6,
                      paddingLeft: 12,
                    }}>
                    <Picker
                      selectedValue={picker1}
                      style={styles().picker}
                      dropdownIconColor='#816868'
                      onValueChange={(itemValue, itemIndex) => {
                        setPicker1(itemValue);

                        if(itemValue === 'mood' || 'stress' || 'weight' || 'period') {
                          makeData(data, setData1, itemValue, 'unselected', timePeriod);
                          setLegend(makeLegend(itemValue, picker2, 'unselected', 'unselected'));
                        }
                      }}
                      mode={'dropdown'}>
                      {pickerOpts.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.value} color='#816868' />
                      ))}
                    </Picker>
                  </View>
                </View>
                <View style={{ marginHorizontal: '2.5%' }}/>
                {/* Category 1 Display dropdown picker */}
                <DataChoosers 
                  showSleep={picker1 === 'sleep' ? true : false}
                  showNap={picker1 === 'nap' ? true : false}
                  showFitness={picker1 === 'fitness' ? true : false}
                  showActivities={picker1 === 'activity' ? true : false}
                  showMeal={picker1 === 'meals' ? true : false}
                  showSymptom={picker1 === 'symptoms' ? true : false}
                  showMedicine={picker1 === 'medications' ? true : false}
                  dataRecs={data}
                  category1={category1}
                  setCategory1={setCategory1}
                  category2={category2}
                  setCategory2={setCategory2}
                  isFirst={true}
                  page1={picker1}
                  page2={picker2}
                  timePeriod={timePeriod}
                  setLegend={setLegend}
                  setData={setData1}
                />
              </View>
            }

            {/* Category 2 Selection heading */}
            <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
              <Text style={styles().heading}>Category #2 Selection</Text>
              <View style={styles().iconView}>
                <Icon 
                  name={showCategory2 ? 'arrow-drop-up' : 'arrow-drop-down'}
                  color='#816868' 
                  onPress={() => setShowCategory2(!showCategory2)}
                />
              </View>
            </View>
            <Text style={styles().heading2}>Currently selected: {convertUpperCase(picker2)}</Text>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {showCategory2 &&
              <View style={{ marginHorizontal: '5%', flexDirection: 'row', marginTop: 16, marginBottom: 10, alignSelf: 'flex-start', }}>
                {/* Category 2 dropdown picker */}
                <View style={styles().textInputView}>
                  <View style={styles().labelView}>
                    <Text
                      style={{
                        color: pressedCategory2 ? '#4CB97A' : '#816868',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Category 2
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: pressedCategory2? '#4CB97A' : '#816868',
                      justifyContent: 'flex-end',
                      borderRadius: 6,
                      paddingLeft: 12,
                    }}>
                    <Picker
                      selectedValue={picker2}
                      style={styles().picker}
                      dropdownIconColor='#816868'
                      onValueChange={(itemValue, itemIndex) => {
                        setPicker2(itemValue);

                        if(itemValue === 'mood' || 'stress' || 'weight' || 'period') {
                          makeData(data, setData2, itemValue, 'unselected', timePeriod);
                          setLegend(makeLegend(picker1, itemValue, 'unselected', 'unselected'));
                        }
                      }} 
                      mode={'dropdown'}>
                      {pickerOpts.map((item, index) => (
                        <Picker.Item key={index} label={item.name} value={item.value} color='#816868' />
                      ))}
                    </Picker>
                  </View>
                </View>
                <View style={{ marginHorizontal: '2.5%' }}/>
                {/* Category 2 Display dropdown picker */}
                <DataChoosers 
                  showSleep={picker2 === 'sleep' ? true : false}
                  showNap={picker2 === 'nap' ? true : false}
                  showFitness={picker2 === 'fitness' ? true : false}
                  showActivities={picker2 === 'activity' ? true : false}
                  showMeal={picker2 === 'meals' ? true : false}
                  showSymptom={picker2 === 'symptoms' ? true : false}
                  showMedicine={picker2 === 'medications' ? true : false}
                  dataRecs={data}
                  category1={category1}
                  setCategory1={setCategory1}
                  category2={category2}
                  setCategory2={setCategory2}
                  isFirst={false}
                  page1={picker1}
                  page2={picker2}
                  timePeriod={timePeriod}
                  setLegend={setLegend}
                  setData={setData2}
                />
              </View>
            }

            <View style={styles().pageEnd} />
          </View>
        </ScrollView>

        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
  }

  else
    return (
      <SafeAreaView style={styles().container}>
        { /* Modal */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        {/* Actual screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>
            {/* Categories button */}
            <TouchableOpacity 
              style={styles().categoriesView} 
              onPress={() => setModalVisible(true)}
            >
              <View 
                style={styles().categories}>
                <Text style={styles().textAlt}>Categories</Text>
                <View>
                  <Icon
                    name='arrow-top-right'
                    type='material-community'
                    color='white'
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{alignContent: 'center', margin: 22}}>
              <Text>
                Uh Oh! It seems like you don't have any data to view!
                Try making some health entries first!
              </Text>
            </View>
              
          </View>
        </ScrollView>
        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
  );
}

function makeFirstPickers(settings) {
  var pickerLabels = [];

  //gen health, mood
  let throwaway1 = new Object();
  throwaway1.name = 'Symptoms';
  throwaway1.value = 'symptoms';

  let throwaway2 = new Object();
  throwaway2.name = 'Mood';
  throwaway2.value = 'mood';

  pickerLabels.push(throwaway1);
  pickerLabels.push(throwaway2);

  // stress
  if(settings.stress) {
    let newObj = new Object();
    newObj.name = 'Stress';
    newObj.value = 'stress';

    pickerLabels.push(newObj);
  }

  // dailyActivities
  if(settings.dailyActivits) {
    let newObj = new Object();
    newObj.name = 'Activities';
    newObj.value = 'activity';

    pickerLabels.push(newObj);
  }

  // weight
  if(settings.weight) {
    let newObj = new Object();
    newObj.name = 'Weight';
    newObj.value = 'weight';

    pickerLabels.push(newObj);
  }

  // period
  if(settings.period) {
    let newObj = new Object();
    newObj.name = 'Period';
    newObj.value = 'period';

    pickerLabels.push(newObj);
  }

  // medication
  if(settings.medication) {
    let newObj = new Object();
    newObj.name = 'Medications';
    newObj.value = 'medications';

    pickerLabels.push(newObj);
  }

  // sleep
  if(settings.sleep) {
    let newObj = new Object();
    newObj.name = 'Sleep';
    newObj.value = 'sleep';

    pickerLabels.push(newObj);

    let newObj1 = new Object();
    newObj1.name = 'Nap';
    newObj1.value = 'nap';

    pickerLabels.push(newObj1);
  }

  // meal
  if(settings.meal) {
    let newObj = new Object();
    newObj.name = 'Meals';
    newObj.value = 'meals';

    pickerLabels.push(newObj);
  }

  // fitness
  if(settings.fitness) {
    let newObj = new Object();
    newObj.name = 'Fitness';
    newObj.value = 'fitness';

    pickerLabels.push(newObj);
  }

  return(pickerLabels);
}

function getPickerLabels(page, data) {
  var arr = [];

  if(page === 'fitness') {
    let length = data.fitnessData.exercises.length;

    for(var i = 0; i < length; i++) {
      for(var [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i]))) {
        //check if key is in map
        if(!arr.includes(key)) {
          if(key !== 'null')
          arr.push(key);
        }

        //it exists
        else;
      }
    }
  }

  else if(page === 'activity') {
    let length = data.activityData.length;

    for(var i = 0; i < length; i++) {
      for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
        //check if key is in map
        if(!arr.includes(key)) {
          if(key !== 'null')
          arr.push(key);
        }

        //it exists
        else;
      }
    }
  }

  else if(page === 'medications') {
    let length = data.medicineData.meds.length;

    for(var i = 0; i < length; i++) {
      for(var [key, value] of Object.entries(JSON.parse(data.medicineData.meds[i]))) {
        //check if key is in map
        if(!arr.includes(key)) {
            if(key !== 'null')
            arr.push(key);
        }

        //it exists
        else;
      }
    }
  }

  //symptoms
  else {
    let length = data.symptomData.length;

    for(var i = 0; i < length; i++) {
      for(var [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
        //check if key is in map
        if(!arr.includes(key)) {
          if(key !== 'null')
          arr.push(key);
        }

        //it exists
        else;
      }
    }
  }

  return arr;
}

function makeYear(dataArr) {
  var arr = [];
  var [sum, len] = [0, dataArr.length];

  for(var i = len < 365 ? 0: len - 365; i < len; i++) {
    if(i === len - 1 && len < 365) {
      let fullHalfWeeks = Math.floor(len / 30);
      let spareHalves = len - (fullHalfWeeks * 30);

      sum = sum / spareHalves;

      arr.push(sum);

      sum = 0;
    }

    else if(i === len - 1) {
      sum = sum / 35;

      arr.push(sum);

      sum = 0;
    }

    else if(i % 30 === 0 && i > 0) {
      sum = sum / 30;

      arr.push(sum);

      sum = 0;
    }

    else
      sum += dataArr[i] === -1 ? 0 : dataArr[i];
  }

  if(arr.length < 12) {
    let diff = 12 - arr.length;
    var zeros = new Array(diff);
    zeros.fill(0);

    arr = zeros.concat(arr);
  }

  return arr;
}

function makeMonth(dataArr) {
  var [sum, len] = [0, dataArr.length];
  var arr = [];

  for(var i = len < 30 ? 0: len - 30; i < len; i++) {
    if(i === len - 1 && len < 30) {
      let fullHalfWeeks = Math.floor(len / 4);
      let spareHalves = len - (fullHalfWeeks * 4);

      sum = sum / spareHalves;

      arr.push(sum);

      sum = 0;
    }

    else if(i === len - 1) {
      sum = sum / 2;

      arr.push(sum);

      sum = 0;
    }

    else if(i % 4 === 0 && i > 0) {
      sum = sum / 4;

      arr.push(sum);

      sum = 0;
    }

    else
      sum += dataArr[i] === -1 ? 0 : dataArr[i];
  }

  if(arr.length < 8) {
    let diff = 8 - arr.length;
    var zeros = new Array(diff);
    zeros.fill(0);

    arr = zeros.concat(arr);
  }

  return arr;
}

function makeWeek(dataArr) {
  var len = dataArr.length;
  var arr = [];

  for(var i = len < 7 ? 0 : len - 7; i < len; i++)
    arr.push(dataArr[i]);
        
  if(arr.length < 7) {
    let diff = 7 - arr.length;
    var zeros = new Array(diff);
    zeros.fill(0);

    arr = zeros.concat(arr);
  }

  return arr;
}

function makeLegend(page1, page2, cat1, cat2) {
  var arr = [];

  //PAGE 1
  if(page1 === 'mood')
    arr.push('Mood');

  else if(page1 === 'stress')
    arr.push('Stress');

  else if(page1 === 'sleep')
    arr.push('Sleep');

  else if(page1 === 'nap')
    arr.push('Nap');
  
  else if(page1 === 'fitness') {
    if(cat1 === 'burned')
      arr.push('Calories Burned');

    else if(cat1 === 'dur')
      arr.push('Time Spent Exercising');

    else if(cat1 === 'steps')
      arr.push('Total Steps');

    else
      arr.push(cat1);
  }

  else if(page1 === 'meal') {
    //cals, carbs, fats, proteins
    if(cat1 === 'cals')
      arr.push('Calories Eaten');
    
    else if(cat1 === 'carbs')
      arr.push('Total Carbs Eaten');
    
    else if(cat1 === 'fats')
      arr.push('Total Fats Eaten');
    
    else
      arr.push('Total Proteins Eaten');
  }

  else if(page1 === 'period')
    arr.push('Period');

  else if(page1 === 'weight')
    arr.push('Weight');

  else if(page1 === 'activity')
    arr.push(cat1);

  else if(page1 === 'symptom')
    arr.push(cat1);

  //medication
  else
    arr.push(cat1);

  //PAGE 2
  if(page2 === 'mood')
    arr.push('Mood');

  else if(page2 === 'stress')
    arr.push('Stress');

  else if(page2 === 'sleep')
    arr.push('Sleep');

  else if(page2 === 'nap')
    arr.push('Nap');
  
  else if(page2 === 'fitness') {
    if(cat2 === 'burned')
      arr.push('Calories Burned');

    else if(cat2 === 'dur')
      arr.push('Time Spent Exercising');

    else if(cat2 === 'steps')
      arr.push('Total Steps');

    else
      arr.push(cat2);
  }

  else if(page2 === 'meal') {
    //cals, carbs, fats, proteins
    if(cat2 === 'cals')
      arr.push('Calories Eaten');
    
    else if(cat2 === 'carbs')
      arr.push('Total Carbs Eaten');
    
    else if(cat2 === 'fats')
      arr.push('Total Fats Eaten');
    
    else
      arr.push('Total Proteins Eaten');
  }

  else if(page2 === 'period')
    arr.push('Period');

  else if(page2 === 'weight')
    arr.push('Weight');

  else if(page2 === 'activity')
    arr.push(cat2);

  else if(page2 === 'symptom')
    arr.push(cat2);

  //medication
  else
    arr.push(cat2);

  return arr;
}

function rotateCalLabels(data) {
  var labels = monthLabels;
  labels = labels.concat(labels.splice(0, new Date(data.latestDate).getMonth() % 6 - 1));

  return labels;
}

function makeLabels(timePeriod, setLabels, data) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 29; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    if(i % 4 == 0)
    dates.push(date.toISOString().substring(5, 10));
  }

  if(timePeriod === 'past_week' || timePeriod === 'unselected')
    setLabels(dayLabels);

  else if(timePeriod === 'past_month')
    setLabels(dates); 

  else if(timePeriod === 'past_year')
    setLabels(rotateCalLabels(data));
}

function cleanUpData(arr) {
  const len = arr.length;

  for(var i = 0; i < len; i++)
    if(arr[i] == -1)
      arr[i] = 0;

  return arr;
}  

function makeArr(objArr, target) {
  const length = objArr.length;
  var arr = [];

  for(var i = 0; i < length; i++) {
    for(var [key, value] of Object.entries(JSON.parse(objArr[i]))) {
      if(key === target) {
        arr.push(value);
      }

      else
        arr.push(0);
    }
  }

  return arr;
}

function initData(page, data) {
    var arr = [];

    if(page === 'mood')
      arr = makeWeek(data.moodData);

    else if(page === 'stress')
      arr = makeWeek(data.stressData);

    else if(page === 'symptoms') {
      arrFromObj = makeArr(data.symptomData, category);

      arr = makeWeek(arrFromObj);
    }

    arr = cleanUpData(arr);

    return arr;
}

function makeData(data, setData, page, category, timePeriod) {
  var arrFromObj = [];
  var arr = [];

  if(page === 'sleep') {
    if(category === 'quality') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.nightQualityData);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.nightQualityData);
    
      else
        arr = makeYear(data.nightQualityData);
    }

    else {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.nightSleepData);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.nightSleepData);
    
      else
        arr = makeYear(data.nightSleepData);
    }
  }

  else if(page === 'nap') {
    if(category === 'quality') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.napQualityData);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.napQualityData);
    
      else
        arr = makeYear(data.napQualityData);
    }

    else {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.napSleepData);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.napSleepData);
    
      else
        arr = makeYear(data.napSleepData);
    }
  }

  else if(page === 'fitness') {
    if(category === 'burned') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.fitnessData.burned);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.fitnessData.burned);
    
      else
        arr = makeYear(data.fitnessData.burned);
    }

    else if(category === 'dur') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.fitnessData.dur);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.fitnessData.dur);
    
      else
        arr = makeYear(data.fitnessData.dur);
    }

    else if(category === 'steps') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.fitnessData.steps);
    
      else if(timePeriod === 'past_month')
        arr = makeMonth(data.fitnessData.steps);
    
      else
        arr = makeYear(data.fitnessData.steps);
    }

    //it is some exercise
    else {
      arrFromObj = makeArr(data.fitnessData.exercises, category);

      if(timePeriod === 'past_week')
        arr = makeWeek(arrFromObj);

      else if(timePeriod === 'past_month')
        arr = makeMonth(arrFromObj);

      else
        arr = makeYear(arrFromObj);
    }
  }

  else if(page === 'meals') {
    if(category === 'cals') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.mealData.calories);

      else if(timePeriod === 'past_month')
        arr = makeMonth(data.mealData.calories);

      else
        arr = makeYear(data.mealData.calories);
    }

    else if(category === 'carbs') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.mealData.carbs);

      else if(timePeriod === 'past_month')
        arr = makeMonth(data.mealData.carbs);

      else
        arr = makeYear(data.mealData.carbs);
    }

    else if(category === 'fats') {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.mealData.fats);

      else if(timePeriod === 'past_month')
        arr = makeMonth(data.mealData.fats);

      else
        arr = makeYear(data.mealData.fats);
    }

    //proteins
    else {
      if(timePeriod === 'past_week')
        arr = makeWeek(data.mealData.proteins);

      else if(timePeriod === 'past_month')
        arr = makeMonth(data.mealData.proteins);

      else
        arr = makeYear(data.mealData.proteins);
    }
  }

  else if(page === 'period') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.periodData);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.periodData);

    else
      arr = makeYear(data.periodData);
  }

  else if(page === 'mood') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.moodData);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.moodData);

    else
      arr = makeYear(data.moodData);
  }

  else if(page === 'stress') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.stressData);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.stressData);

    else
      arr = makeYear(data.stressData);
  }

  else if(page === 'weight') {
    if(timePeriod === 'past_week')
      arr = makeWeek(data.weightData);

    else if(timePeriod === 'past_month')
      arr = makeMonth(data.weightData);

    else
      arr = makeYear(data.weightData);
  }

  else if(page === 'activity') {
    arrFromObj = makeArr(data.activityData, category);

    //it is some activity
    if(timePeriod === 'past_week')
      arr = makeWeek(arrFromObj);

    else if(timePeriod === 'past_month')
      arr = makeMonth(arrFromObj);

    else
      arr = makeYear(arrFromObj);
  }

  else if(page === 'symptoms') {
    arrFromObj = makeArr(data.symptomData, category);

    //it is some symptom
    if(timePeriod === 'past_week')
      arr = makeWeek(arrFromObj);

    else if(timePeriod === 'past_month')
      arr = makeMonth(arrFromObj);

    else
      arr = makeYear(arrFromObj);
  }

  //medication
  else {
    arrFromObj = makeArr(data.medicineData.meds, category);
    
    if(timePeriod === 'past_week')
      arr = makeWeek(arrFromObj);

    else if(timePeriod === 'past_month')
      arr = makeMonth(arrFromObj);

    else
      arr = makeYear(arrFromObj);
  }

  arr = cleanUpData(arr);

  setData(arr);
}

function convertUpperCase(str) {
  var split1 = str[0].toUpperCase().toString();
  var split2 = str.slice(1, str.length);

  split1 = split1.concat(split2);
  
  return(split1);
}

export default HistoryCorrelations;

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
  categories: {
    flexDirection: 'row', 
    alignSelf: 'center', 
    alignItems: 'center', 
    marginVertical: 2, 
    marginHorizontal: 8,
  },
  categoriesView: {
    alignSelf: 'flex-end',
    marginBottom: -16,
    borderRadius: 8,
    marginRight: '5%',
    backgroundColor: global.colorblindMode
        ? global.cb_navBarCurrentIconColor
        : global.navBarCurrentIconColor,
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
  divider2: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
        ? global.cb_contentDividerColor
        : global.contentDividerColor,
    marginLeft: 3,
    marginRight: 3,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  heading2: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: '5%',
    alignSelf: 'flex-start',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
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
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
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
    alignItems: 'center',
    height: '100%',
  },
  picker: {
    flex: 1,
    height: 32,
  },
  pickerView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  textAlt: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 0.425),
    position: 'relative',
  },
})