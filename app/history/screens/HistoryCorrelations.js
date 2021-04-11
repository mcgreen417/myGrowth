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
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

const Graph = ({labels, data1, data2, legend}) => {
    return(
        <View style={{margin:24}}>
            <LineChart 
                data={{
                    labels: labels,
                    datasets: [
                        {   data: data1,
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
                width={353} // from react-native
                height={250}
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
    timePeriod,
    dataRecs,
    data,
    setData
}) => {

    const [picker, setPicker] = useState('unselected');

    return (
        <View style={{width: '90%'}}>
            {/* SLEEP */}
            { showSleep &&
                <View>
                    <Text style={styles().heading2}>Use either the duration or quality of your sleep!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Duration' value='duration'/>
                            <Picker.Item label='Quality' value='quality'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* NAP */}
            { showNap &&
                <View>
                    <Text style={styles().heading2}>Use either the duration or quality of your naps!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Duration' value='duration'/>
                            <Picker.Item label='Quality' value='quality'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* FITNESS */}
            { showFitness &&
                <View>
                    <Text style={styles().heading2}>Choose from a number of options regarding your fitness!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Calories Burned' value='burned'/>
                            <Picker.Item label='Workout Duration' value='dur'/>
                            <Picker.Item label='Total Steps' value='steps'/>
                            <Picker.Item label='Exercise 1' value='exercise_1'/>
                            <Picker.Item label='Exercise 2' value='exercise_2'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* ACTIVITIES */}
            { showActivities &&
                <View>
                    <Text style={styles().heading2}>Compare data with specific activities!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Activity 1' value='activity_1'/>
                            <Picker.Item label='Activity 2' value='activity_2'/>
                            <Picker.Item label='Activity 3' value='activity_3'/>
                            <Picker.Item label='Activity 4' value='activity_4'/>
                            <Picker.Item label='Activity 5' value='activity_5'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* MEAL */}
            { showMeal &&
                <View>
                    <Text style={styles().heading2}>Compare data with your nutritional values!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Calories' value='cals'/>
                            <Picker.Item label='Carbohydrates' value='carbs'/>
                            <Picker.Item label='Fats' value='fats'/>
                            <Picker.Item label='Proteins' value='proteins'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* SYMPTOM */}
            { showSymptom &&
                <View>
                    <Text style={styles().heading2}>Track how your symptoms may be affecting other aspects your days!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Symptom 1' value='symptom_1'/>
                            <Picker.Item label='Symptom 2' value='symptom_2'/>
                            <Picker.Item label='Symptom 3' value='symptom_3'/>
                            <Picker.Item label='Symptom 4' value='symptom_4'/>
                            <Picker.Item label='Symptom 5' value='symptom_5'/>
                        </Picker>
                    </View>
                </View>
            }

            {/* MEDICINE */}
            { showMedicine &&
                <View>
                    <Text style={styles().heading2}>Choose between your medications and inspect how they may be affecting you!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={picker}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setPicker(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Medication 1' value='medication_1'/>
                            <Picker.Item label='Medication 2' value='medication_2'/>
                            <Picker.Item label='Medication 3' value='medication_3'/>
                            <Picker.Item label='Medication 4' value='medication_4'/>
                            <Picker.Item label='Medication 5' value='medication_5'/>
                        </Picker>
                    </View>
                </View>
            }

        </View>
    );
};

function HistoryCorrelations({ route, navigation }) {
    const data = route.params.data;

    console.log(data.fitnessData);

    const [modalVisible, setModalVisible] = useState(false);
    const [picker1, setPicker1] = useState('mood');
    const [picker2, setPicker2] = useState('stress');
    const [data1, setData1] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [data2, setData2] = useState([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const [labels, setLabels] = useState(monthLabels);
    const [timePeriod, setTimePeriod] = useState('past_month');
    const [legend, setLegend] = useState(['Data1', 'Data2']);

    return (
      <SafeAreaView style={styles().container}>
        {/* Modal + each of the navigable history pages */}
        <HistorySelectACategory
            setModalView={setModalVisible}
            showModalView={modalVisible}
            navigation={navigation}
            data={data}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles().pageSetup}>
                {/* Categories button */}
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

                <View style={{width: '90%'}}>
                    <Text style={styles().heading1}>Please select which categories you would like to compare.</Text>
                </View>

                {/* Middle divider */}
                <View style={styles().dividerView}>
                    <View style={styles().divider} />
                </View>
                
                <View 
                    style={{ 
                    width: '90%', 
                    justifyContent: 'flex-start', 
                    marginVertical: 20, 
                    flexDirection: 'row',
                }}>
                    <View style={{ width: '50%', }}>
                        <Text style={styles().heading}>PAGE 1</Text>
                        <View style={styles().pickerView}>
                            <Picker
                                selectedValue={picker1}
                                style={styles().picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    setPicker1(itemValue);
                                }}
                                mode={'dropdown'}
                            >
                                <Picker.Item label='Mood' value='mood' />
                                <Picker.Item label='Stress' value='stress' />
                                <Picker.Item label='Sleep' value='sleep' />
                                <Picker.Item label='Nap' value='nap' />
                                <Picker.Item label='Weight' value='weight' />
                                <Picker.Item label='Period' value='period' />
                                <Picker.Item label='Fitness' value='fitness' />
                                <Picker.Item label='Activities' value='activity' />
                                <Picker.Item label='Meals' value='meals' />
                                <Picker.Item label='Symptoms' value='symptoms' />
                                <Picker.Item label='Medications' value='medications' />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ width: '50%', }}>
                        <Text style={styles().heading}>PAGE 2</Text>
                        <View style={styles().pickerView}>
                            <Picker
                                selectedValue={picker2}
                                style={styles().picker}
                                onValueChange={(itemValue, itemIndex) => {
                                    setPicker2(itemValue);
                                }}
                                mode={'dropdown'}
                            >
                                <Picker.Item label='Mood' value='mood' />
                                <Picker.Item label='Stress' value='stress' />
                                <Picker.Item label='Sleep' value='sleep' />
                                <Picker.Item label='Nap' value='nap' />
                                <Picker.Item label='Weight' value='weight' />
                                <Picker.Item label='Period' value='period' />
                                <Picker.Item label='Fitness' value='fitness' />
                                <Picker.Item label='Activities' value='activity' />
                                <Picker.Item label='Meals' value='meals' />
                                <Picker.Item label='Symptoms' value='symptoms' />
                                <Picker.Item label='Medications' value='medications' />
                            </Picker>
                        </View>
                    </View>
                </View>

                <DataChoosers 
                    showSleep={picker1 === 'sleep' ? true : false}
                    showNap={picker1 === 'nap' ? true : false}
                    showFitness={picker1 === 'fitness' ? true : false}
                    showActivities={picker1 === 'activity' ? true : false}
                    showMeal={picker1 === 'meals' ? true : false}
                    showSymptom={picker1 === 'symptoms' ? true : false}
                    showMedicine={picker1 === 'medications' ? true : false}
                    dataRecs={data}
                    timePeriod={timePeriod}
                    data={data1}
                    setData={setData1}
                />

                <DataChoosers 
                    showSleep={picker2 === 'sleep' ? true : false}
                    showNap={picker2 === 'nap' ? true : false}
                    showFitness={picker2 === 'fitness' ? true : false}
                    showActivities={picker2 === 'activity' ? true : false}
                    showMeal={picker2 === 'meals' ? true : false}
                    showSymptom={picker2 === 'symptoms' ? true : false}
                    showMedicine={picker2 === 'medications' ? true : false}
                    dataRecs={data}
                    timePeriod={timePeriod}
                    data={data2}
                    setData={setData2}
                />

                <View style={styles().dividerView}>
                    <View style={styles().divider} />
                </View>

                <View style={{width: '90%'}}>
                    <Text style={styles().heading1}>Please select the time period you like to view.</Text>
                </View>

                <View>
                    <Text style={styles().heading}>TIME PERIOD</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={timePeriod}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setTimePeriod(itemValue);
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Past Week' value='past_week' />
                            <Picker.Item label='Past Month' value='past_month' />
                            <Picker.Item label='Past Year' value='past_year' />
                        </Picker>
                    </View>
                </View>

                <View style={styles().pageEnd} />
            </View>
        </ScrollView>

        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
}

function makeLabels(timePeriod, setLabels) {
    
}

function makeArr(objArr, target) {
    const length = objArr.length;
    var arr = [];

    for(var i = 0; i < length; i++)
        for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
            if(key === target)
                arr.push(value);

            else
                arr.push(0);
        }
    
    return arr;
}

function makeData(data, setData, page, category, timePeriod) {
    var arrFromObj = [];
    var arr = [];

    if(page === 'sleep') {
        if(category === 'quality') {
            let length = data.nightQualityData.length;

            if(timePeriod === 'past_week')
                arr = data.nightQualityData.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.nightQualityData.slice(length - 30, length);

            else
                arr = data.nightQualityData.slice(length - 365, length);
        }

        else {
            let length = data.nightSleepData.length;

            if(timePeriod === 'past_week')
                arr = data.nightSleepData.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.nightSleepData.slice(length - 30, length);

            else
                arr = data.nightSleepData.slice(length - 365, length);
        }
    }

    else if(page === 'nap') {
        if(category === 'quality') {
            let length = data.napQualityData.length;

            if(timePeriod === 'past_week')
                arr = data.napQualityData.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.napQualityData.slice(length - 30, length);

            else
                arr = data.napQualityData.slice(length - 365, length);
        }

        else {
            let length = data.napSleepData.length;

            if(timePeriod === 'past_week')
                arr = data.napSleepData.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.napSleepData.slice(length - 30, length);

            else
                arr = data.napSleepData.slice(length - 365, length);
        }
    }

    else if(page === 'fitness') {
        if(category === 'burned') {
            let length = data.fitnessData.burned.length;

            if(timePeriod === 'past_week')
                arr = data.fitnessData.burned.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.fitnessData.burned.slice(length - 30, length);

            else
                arr = data.fitnessData.burned.slice(length - 365, length);
        }

        else if(category === 'dur') {
            let length = data.fitnessData.dur.length;

            if(timePeriod === 'past_week')
                arr = data.fitnessData.dur.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.fitnessData.dur.slice(length - 30, length);

            else
                arr = data.fitnessData.dur.slice(length - 365, length);
        }

        else if(category === 'steps') {
            let length = data.fitnessData.steps.length;

            if(timePeriod === 'past_week')
                arr = data.fitnessData.steps.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.fitnessData.steps.slice(length - 30, length);

            else
                arr = data.fitnessData.steps.slice(length - 365, length);
        }

        //it is some exercise
        else {
            arrFromObj = makeArr(data.fitnessData.exercises, category);
            let length = arrFromObj;

            if(timePeriod === 'past_week')
                ;

            else if(timePeriod === 'past_month')
                ;

            else
                ;
        }
    }

    else if(page === 'meal') {
        if(category === 'cals') {
            let length = data.mealData.calories.length;

            if(timePeriod === 'past_week')
                arr = data.mealData.calories.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.mealData.calories.slice(length - 30, length);

            else
                arr = data.mealData.calories.slice(length - 365, length);
        }

        else if(category === 'carbs') {
            let length = data.mealData.carbs.length;

            if(timePeriod === 'past_week')
                arr = data.mealData.carbs.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.mealData.carbs.slice(length - 30, length);

            else
                arr = data.mealData.carbs.slice(length - 365, length);
        }

        else if(category === 'fats') {
            let length = data.mealData.fats.length;

            if(timePeriod === 'past_week')
                arr = data.mealData.fats.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.mealData.fats.slice(length - 30, length);

            else
                arr = data.mealData.fats.slice(length - 365, length);
        }

        //proteins
        else {
            let length = data.mealData.proteins.length;

            if(timePeriod === 'past_week')
                arr = data.mealData.proteins.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = data.mealData.proteins.slice(length - 30, length);

            else
                arr = data.mealData.proteins.slice(length - 365, length);
        }
    }

    else if(page === 'period') {
        let length = data.periodData.length;

        if(timePeriod === 'past_week')
            arr = data.periodData.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = data.periodData.slice(length - 30, length);

        else
            arr = data.periodData.slice(length - 365, length);
    }

    else if(page === 'mood') {
        let length = data.moodData.length;

        if(timePeriod === 'past_week')
            arr = data.moodData.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = data.moodData.slice(length - 30, length);

        else
            arr = data.moodData.slice(length - 365, length);
    }

    else if(page === 'stress') {
        let length = data.stressData.length;

        if(timePeriod === 'past_week')
            arr = data.stressData.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = data.stressData.slice(length - 30, length);

        else
            arr = data.stressData.slice(length - 365, length);
    }

    else if(page === 'weight') {
        let length = data.weightData.length;

        if(timePeriod === 'past_week')
            arr = data.weightData.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = data.weightData.slice(length - 30, length);

        else
            arr = data.weightData.slice(length - 365, length);
    }

    else if(page === 'activity') {
        arrFromObj = makeArr(data.activityData, category);
        let length = arrFromObj;

        //it is some activity
        if(timePeriod === 'past_week')
            ;

        else if(timePeriod === 'past_month')
            ;

        else
            ;
    }

    else if(page === 'symptom') {
        arrFromObj = makeArr(data.symptomData, category);
        let length = arrFromObj;

        //it is some symptom
        if(timePeriod === 'past_week')
            ;

        else if(timePeriod === 'past_month')
            ;

        else
            ;
    }

    //medication
    else {
        arrFromObj = makeArr(data.medicineData.meds, category);
        let length = arrFromObj;

        //it is some medication
        if(timePeriod === 'past_week')
            ;

        else if(timePeriod === 'past_month')
            ;

        else
            ;
    }
}

export default HistoryCorrelations;

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.colorblindMode
            ? global.cb_pageBackgroundColor
            : global.pageBackgroundColor,
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
        color: global.colorblindMode
          ? global.cb_textColor
          : global.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading1: {
        color: global.colorblindMode
          ? global.cb_textColor
          : global.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    heading2: {
        color: global.colorblindMode
          ? global.cb_textColor
          : global.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 12,
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
})