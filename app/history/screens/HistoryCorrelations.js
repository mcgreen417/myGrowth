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

const DataChoosers = ({ page, data, setData }) => {
    //pages
    const [showSleep, setShowSleep] = useState(page === 'sleep' ? true : false);
    const [showNap, setShowNap] = useState(page === 'nap' ? true : false);
    const [showFitness, setShowFitness] = useState(page === 'fitness' ? true : false);
    const [showActivities, setShowActivities] = useState(page === 'activity' ? true : false);
    const [showMeal, setShowMeal] = useState(page === 'meals' ? true : false);
    const [showSymptom, setShowSymptom] = useState(page === 'symptoms' ? true : false);
    const [showMedicine, setShowMedicine] = useState(page === 'medications' ? true : false);

    console.log(page)

    const [picker, setPicker] = useState('unselected');
    return (
        <View style={{width: '90%'}}>
            {/* SLEEP || NAP */}
            { (showSleep || showNap) &&
                <View>
                    <Text style={styles().heading}>Use either the duration or quality of your rest!</Text>
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
                    <Text style={styles().heading}>Choose from a number of options regarding your fitness!</Text>
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
                    <Text style={styles().heading}>Compare data with specific activities!</Text>
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
                    <Text style={styles().heading}>Compare data with your nutritional values!</Text>
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
            { showSymptom || showNap &&
                <View>
                    <Text style={styles().heading}>Track how your symptoms may be affecting other aspects your days!</Text>
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
                    <Text style={styles().heading}>Choose between your medications and inspect how they may be affecting you!</Text>
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
    var string1 = 'mood';
    var string2 = 'stress';

    const [modalVisible, setModalVisible] = useState(false);
    const [picker1, setPicker1] = useState('mood');
    const [picker2, setPicker2] = useState('stress');
    const [chooser1, setChooser1] = useState(false);
    const [chooser2, setChooser2] = useState(false);
    const [data1, setData1] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [data2, setData2] = useState([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const [labels, setLabels] = useState(monthLabels);
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

                {/* Middle divider */}
                <View style={styles().dividerView}>
                    <View style={styles().divider} />
                </View>

                {(picker1 !== ('mood' || 'weight' || 'period' || 'stress')) || (picker2 !== ('mood' || 'weight' || 'period' || 'stress')) && 
                    <View>
                        <View style={{width: '90%'}}>
                            <Text style={styles().heading1}>Get more specific data for the page(s) you selected.</Text>
                        </View>

                        {/* Middle divider */}
                        <View style={styles().dividerView}>
                            <View style={styles().divider2} />
                        </View>
                    </View>
                }

                {picker1 !== ('mood' || 'weight' || 'period' || 'stress') &&
                    <DataChoosers 
                        page={picker1}
                        data={data1}
                        setData={setData1}
                    />
                }

                {picker2 !== ('mood' || 'weight' || 'period' || 'stress') &&
                    <DataChoosers 
                        page={picker2}
                        data={data2}
                        setData={setData2}
                    />
                }

                <View style={styles().pageEnd} />
            </View>
        </ScrollView>

        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
}

function makeData(data1, data2) {

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