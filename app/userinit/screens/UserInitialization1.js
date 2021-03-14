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
  FlatList,
  Switch,
} from 'react-native';

import { ToggleButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

function UserInitialization1({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState('unselected');
  const [bioSex, setBioSex] = useState('unselected');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate);
    setShow(Platform.OS === 'ios');
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
    <SafeAreaView style={styles().container}>
      <StatusBar
        backgroundColor={
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
        }
        barStyle='light-content'
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
            <Text style={styles().pageDescription}>
              Welcome to myGrowth! Let’s initialize your account. First, please
              answer a few questions about yourself.
            </Text>
          </View>
          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* First name user input entry */}
          <Text style={styles().heading}>FIRST NAME</Text>
          <View style={styles().userPrompt}>
            <TextInput style={styles().textInput} placeholder='First name' />
          </View>

          {/* Date of birth calendar pop-up */}
          <Text style={styles().heading}>DATE OF BIRTH</Text>
          <View style={styles().datePicker}>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles().inlineRow}>
                <View style={styles().iconView}>
                  <Image
                    source={require('../../shared/assets/baseline_event_black_18dp.png')}
                  />
                </View>
                <Text> MM/DD/YYYY</Text>
              </View>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
              />
            )}
          </View>

          {/* Gender drop-down */}
          <Text style={styles().heading}>GENDER</Text>
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={gender}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                mode={'dropdown'}
              >
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
          <Text style={styles().heading}>BIOLOGICAL SEX</Text>
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={bioSex}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => setBioSex(itemValue)}
                mode={'dropdown'}
              >
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
              </Picker>
            </View>
          </View>

          {/* Height user input entry + cm switch button */}
          <Text style={styles().heading}>HEIGHT</Text>
          <View style={styles().userPrompt}>
            <TextInput style={styles().textInput2} placeholder='#' />
            <Text> IN</Text>
            <ToggleButton
              icon={
                useHeightMeasurement
                  ? require('../../shared/assets/toggle_on.png')
                  : require('../../shared/assets/toggle_off.png')
              }
              value='heightMeasurement'
              status={useHeightMeasurement ? 'checked' : 'unchecked'}
              onPress={toggleHeightMeasurement}
            />
            <Text>CM</Text>
          </View>

          {/* Weight user input entry + kgs switch button */}
          <Text style={styles().heading}>WEIGHT</Text>
          <View style={styles().userPrompt}>
            <TextInput style={styles().textInput2} placeholder='#' />
            <Text> LB</Text>
            <ToggleButton
              icon={
                useWeightMeasurement
                  ? require('../../shared/assets/toggle_on.png')
                  : require('../../shared/assets/toggle_off.png')
              }
              value='weightMeasurement'
              status={useWeightMeasurement ? 'checked' : 'unchecked'}
              onPress={toggleWeightMeasurement}
            />
            <Text>KG</Text>
          </View>

          {/* Next button */}
          <View style={styles().buttonsContainer}>
            <View style={styles().buttons}>
              <Button
                title='NEXT'
                color='#A5DFB2'
                onPress={() => navigation.navigate('UserInitialization2')}
              />
            </View>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserInitialization1;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
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
    avatarSelectView: {
      height: '68%',
      marginBottom: 20,
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
    datePicker: {
      marginTop: 10,
      marginBottom: 30,
      flexDirection: 'row',
      width: '90%',
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
      color: '#816868',
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
    textReg: {
      color: 'black',
      textAlign: 'left',
    },
    pageDescription: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
      flex: 1,
      flexWrap: 'wrap',
    },
    pageEnd: {
      marginBottom: 10,
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
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
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
