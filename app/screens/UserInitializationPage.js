import React, { useState } from 'react';
import { 
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View, 
} from 'react-native';

import { ToggleButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

function UserInitializationPage({ navigation }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState('unselected');
  const [bioSex, setBioSex] = useState('unselected');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [useHeightMeasurement, setUseHeightMeasurement] = useState(false);
    const toggleHeightMeasurement = () =>
      setUseHeightMeasurement((previousState) => !previousState);

  const [useWeightMeasurement, setUseWeightMeasurement] = useState(false);
  const toggleWeightMeasurement = () =>
    setUseWeightMeasurement((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          
          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={require('../assets/gardener-avatar.png')} />
            <Text style={styles.pageDescription}>
              Welcome to myGrowth! Let’s initialize{"\n"} 
              your account. First, please answer a{"\n"} 
              few questions about yourself.
            </Text>
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          {/* First name user input entry */}
          <Text style={styles.heading}>FIRST NAME</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput} placeholder='First name' />
          </View>

          {/* Date of birth calendar pop-up */}
          <Text style={styles.heading}>DATE OF BIRTH</Text>
          <View>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles.inlineRow}>
                <View style={styles.iconView}>
                  <Image source={require('../assets/baseline_event_black_18dp.png')} />
                </View>
                <Text>MM/DD/YYYY</Text>
              </View>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          
          {/* Gender drop-down */}
          <Text style={styles.heading}>GENDER</Text>
          <View style={{ width: '90%' }}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={gender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
                <Picker.Item label='Non-binary' value='nonbinary' />
                <Picker.Item label='Other' value='other' />
                <Picker.Item label='Prefer not to answer' value='noAnswer' />
              </Picker>
            </View>
          </View>

          {/* Biological sex drop-down */}
          <Text style={styles.heading}>BIOLOGICAL SEX</Text>
          <View style={{ width: '90%' }}>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={bioSex}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setBioSex(itemValue)}>
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
              </Picker>
            </View>
          </View>

          {/* Height user input entry + cm switch button */}
          <Text style={styles.heading}>HEIGHT</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput2} placeholder='#' />
            <Text>IN</Text>
            <ToggleButton
              icon = {useHeightMeasurement ? "bluetooth" : "alarm"}
              value="heightMeasurement"
              status = {useHeightMeasurement ? 'checked' : 'unchecked'}
              onPress= {toggleHeightMeasurement}
            />
            <Text>CM</Text>
          </View>

          {/* Weight user input entry + kgs switch button */}
          <Text style={styles.heading}>WEIGHT</Text>
          <View style={styles.userPrompt}>
            <TextInput style={styles.textInput2} placeholder='#' />
            <Text>LBS</Text>
            <ToggleButton
              icon = {useWeightMeasurement ? "bluetooth" : "alarm"}
              value="weightMeasurement"
              status = {useWeightMeasurement ? 'checked' : 'unchecked'}
              onPress= {toggleWeightMeasurement}
            />
            <Text>KG</Text>
          </View>

          {/* Next button */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttons}>
              <Button title='NEXT' color='#A5DFB2' onPress={ () => signIn() } />
            </View>
          </View>

          <View style={styles.pageEnd}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  },
  buttons: {
    marginBottom: 10,
    width: '20%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '90%',
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
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '90%',
  },
  text: {
    color: 'black',
    textDecorationLine: 'none',
    textAlign: 'left',
  },
  pageDescription: {
    color: '#816868', 
    fontSize: 16,
  },
  pageEnd: {
    marginBottom: 10,
  },
  picker: {
    height: 32, 
    width: '100%',
  },
  pickerView: {
    borderWidth: 1, 
    marginBottom: 20,
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    backgroundColor: '#f4f3f4',
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f4f3f4',
    color: '#000000',
    width: '70%',
    paddingLeft: 10,
    fontSize: 16,
  },
  textInput2: {
    height: 36,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f4f3f4',
    color: '#000000',
    width: '12%',
    textAlign: 'center',
    fontSize: 16,
  },
  userPrompt: {
    marginBottom: 20,
    width: '90%',
    borderColor: 'black',
  }
});

export default UserInitializationPage;
