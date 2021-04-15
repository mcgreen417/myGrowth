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

    return (
        <View style={{width: '90%'}}>
            {/* SLEEP */}
            { showSleep &&
                <View>
                    <Text style={styles().heading2}>Use either the duration or quality of your sleep!</Text>
                    <View style={styles().pickerView}>
                        <Picker
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);
                                
                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'duration' : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'duration' : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'burned' : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            <Picker.Item label='Calories Burned' value='burned'/>
                            <Picker.Item label='Workout Duration' value='dur'/>
                            <Picker.Item label='Total Steps' value='steps'/>
                            {exercises.map((item, index) => {
                                return (
                                    <Picker.Item key={index} label={item} value={item} />
                                );
                            })}
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? activities[0] : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            {activities.map((item, index) => {
                                return (
                                    <Picker.Item key={index} label={item} value={item} />
                                );
                            })}
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? 'cals' : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? symptoms[0] : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            {symptoms.map((item, index) => {
                                return (
                                    <Picker.Item key={index} label={item} value={item} />
                                );
                            })}
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
                            selectedValue={isFirst ? category1 : category2}
                            style={styles().picker}
                            onValueChange={(itemValue, itemIndex) => {
                                if(isFirst)
                                    setCategory1(itemValue);
                                else
                                    setCategory2(itemValue);

                                makeData(dataRecs, setData, isFirst ? page1 : page2, itemValue === 'unselected' ? medications[0] : itemValue, timePeriod);
                                setLegend(makeLegend(page1, page2, isFirst ? itemValue : category1, isFirst ? category2 : itemValue));
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label='Select One...' value='unselected'/>
                            {medications.map((item, index) => {
                                return (
                                    <Picker.Item key={index} label={item} value={item} />
                                );
                            })}
                        </Picker>
                    </View>
                </View>
            }

        </View>
    );
};

function HistoryCorrelations({ route, navigation }) {
    const data = route.params.data;

    const arr1 = initData('mood', data);
    const arr2 = initData('stress', data);
    const legendInit = makeLegend('mood', 'stress', 'unselected', 'unselected');

    const [modalVisible, setModalVisible] = useState(false);
    const [picker1, setPicker1] = useState('mood');
    const [picker2, setPicker2] = useState('stress');
    const [data1, setData1] = useState(arr1);
    const [data2, setData2] = useState(arr2);
    const [labels, setLabels] = useState(dayLabels);
    const [category1, setCategory1] = useState('unselected');
    const [category2, setCategory2] = useState('unselected');
    const [timePeriod, setTimePeriod] = useState('past_week');
    const [legend, setLegend] = useState(legendInit);

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

                                    if(itemValue === 'mood' || 'stress' || 'weight' || 'period') {
                                        makeData(data, setData1, itemValue, 'unselected', timePeriod);
                                        setLegend(makeLegend(itemValue, picker2, 'unselected', 'unselected'));
                                    }
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

                                    if(itemValue === 'mood' || 'stress' || 'weight' || 'period') {
                                        makeData(data, setData2, itemValue, 'unselected', timePeriod);
                                        setLegend(makeLegend(picker1, itemValue, 'unselected', 'unselected'));
                                    }
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

                                //make data per category selected
                                makeData(data, setData1, picker1, category1, itemValue);
                                makeData(data, setData2, picker2, category2, itemValue);

                                //new graph labels
                                makeLabels(itemValue, setLabels, data);
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

function getPickerLabels(page, data) {
    var arr = [];

    if(page === 'fitness') {
        let length = data.fitnessData.exercises.length;

        for(var i = 0; i < length; i++)
            for(var [key, value] of Object.entries(JSON.parse(data.fitnessData.exercises[i]))) {
                //check if key is in map
                if(!arr.includes(key)) {
                    if(key !== 'null')
                    arr.push(key);
                }

                //it exists
                else
                    ;
            }
    }

    else if(page === 'activity') {
        let length = data.activityData.length;

        for(var i = 0; i < length; i++)
            for(var [key, value] of Object.entries(JSON.parse(data.activityData[i]))) {
                //check if key is in map
                if(!arr.includes(key)) {
                    if(key !== 'null')
                    arr.push(key);
                }

                //it exists
                else
                    ;
            }
    }

    else if(page === 'medications') {
        let length = data.medicineData.meds.length;

        for(var i = 0; i < length; i++)
            for(var [key, value] of Object.entries(JSON.parse(data.medicineData.meds[i]))) {
                //check if key is in map
                if(!arr.includes(key)) {
                    if(key !== 'null')
                    arr.push(key);
                }

                //it exists
                else
                    ;
            }
    }

    //symptoms
    else {
        let length = data.symptomData.length;

        for(var i = 0; i < length; i++)
            for(var [key, value] of Object.entries(JSON.parse(data.symptomData[i]))) {
                //check if key is in map
                if(!arr.includes(key)) {
                    if(key !== 'null')
                    arr.push(key);
                }

                //it exists
                else
                    ;
            }
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
        setLabels(monthLabels);
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

    for(var i = 0; i < length; i++)
        for(var [key, value] of Object.entries(JSON.parse(objArr[i]))) {
            if(key === target) {
                arr.push(value);
            }

            else
                arr.push(0);
        }

    return arr;
}

function initData(page, data) {
    var arr = [];

    if(page === 'mood') {
        let length = data.moodData.length;

        arr = data.moodData.slice(length - 7, length);
    }

    else {
        let length = data.stressData.length;

        arr = data.stressData.slice(length - 7, length);
    }

    arr = cleanUpData(arr);

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
            let length = arrFromObj.length;

            if(timePeriod === 'past_week')
            arr = arrFromObj.slice(length - 7, length);

            else if(timePeriod === 'past_month')
                arr = arrFromObj.slice(length - 30, length);

            else
                arr = arrFromObj.slice(length - 365, length);
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
        let length = arrFromObj.length;

        //it is some activity
        if(timePeriod === 'past_week')
            arr = arrFromObj.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = arrFromObj.slice(length - 30, length);

        else
            arr = arrFromObj.slice(length - 365, length);
    }

    else if(page === 'symptoms') {
        arrFromObj = makeArr(data.symptomData, category);
        let length = arrFromObj.length;

        //it is some symptom
        if(timePeriod === 'past_week')
            arr = arrFromObj.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = arrFromObj.slice(length - 30, length);

        else
            arr = arrFromObj.slice(length - 365, length);
    }

    //medication
    else {
        arrFromObj = makeArr(data.medicineData.meds, category);
        let length = arrFromObj.length;

        //it is some medication
        if(timePeriod === 'past_week')
            arr = arrFromObj.slice(length - 7, length);

        else if(timePeriod === 'past_month')
            arr = arrFromObj.slice(length - 30, length);

        else
            arr = arrFromObj.slice(length - 365, length);
    }

    arr = cleanUpData(arr);

    setData(arr);
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