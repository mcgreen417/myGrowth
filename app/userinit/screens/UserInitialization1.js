import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
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

import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

function UserInitialization1({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState('unselected');
  const [bioSex, setBioSex] = useState('unselected');
  const [firstName, setFirstName] = useState('');
  const [dateDisplayText, setDateDisplayText] = useState('MM/DD/YYYY');
  const [dob, setDob] = useState('0000-00-00');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //console.log(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const zero = "0";
    var month = selectedDate.getMonth() + 1;
    var dateofmonth = selectedDate.getDate();
    const year = selectedDate.getFullYear();
    var fullStr = "";

    fullStr = fullStr.concat(month);
    fullStr = fullStr.concat("/");
    fullStr = fullStr.concat(dateofmonth);
    fullStr = fullStr.concat("/");
    fullStr = fullStr.concat(year);

    setDateDisplayText(fullStr);
    setDob(selectedDate.toISOString().slice(0, 10));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [useHeightMeasurement, setToggleHeightMeasurement] = useState(false);
  const toggleHeightMeasurement = () =>
    setToggleHeightMeasurement((previousState) => !previousState);

  const [useWeightMeasurement, setToggleWeightMeasurement] = useState(false);
  const toggleWeightMeasurement = () =>
    setToggleWeightMeasurement((previousState) => !previousState);

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
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
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
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>FIRST NAME</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* user's name in firstname var */}
          <View style={styles().userPrompt}>
            <TextInput 
              style={styles().textInput}
              placeholder='First name' 
              placeholderTextColor={global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeHolderTextColor}
              color={global.colorblindMode
                ? global.cb_textColor
                : global.textColor}
              value = {firstName}
              onChangeText = {(firstName) => {
                setFirstName(firstName);
              }}
            />
          </View>

          {/* Date of birth calendar pop-up */}
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>DATE OF BIRTH</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* stores the date in date var */}
          <View style={styles().datePicker}>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles().inlineRow}>
                <Icon 
                  name='calendar-sharp' 
                  type='ionicon' 
                  color='#816868'
                  style={{ marginRight: 8, }} 
                />
                <Text style={{ textDecorationLine: 'underline', color: '#4CB97A', fontSize: 16, }}>
                  {dateDisplayText}
                </Text>
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
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>GENDER</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* gender stored in gender */}
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={gender}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                mode={'dropdown'}>
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
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>BIOLOGICAL SEX</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* stored in bioSex */}
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={bioSex}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => setBioSex(itemValue)}
                mode={'dropdown'}>
                <Picker.Item label='Select one...' value='unselected' />
                <Picker.Item label='Male' value='male' />
                <Picker.Item label='Female' value='female' />
                <Picker.Item label='Assigned Male' value='amab' />
                <Picker.Item label='Assigned Female' value='afab' />
              </Picker>
            </View>
          </View>

          {/* Height user input entry + cm switch button */}
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>HEIGHT</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8 }}
            />
          </View>
          <View style={styles().userPrompt}>
            <TextInput 
              style={styles().textInput2} 
              onChangeText = {(height) => setHeight(height)} 
              placeholder='#'
              placeholderTextColor={
                global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeHolderTextColor}
              color={global.colorblindMode
              ? global.cb_textColor
              : global.textColor}
            />
            <Text style={styles().text}>IN</Text>
            <View style={{ marginRight: 8, }}/>
            <Icon
              name={
                useHeightMeasurement
                  ? 'toggle-on'
                  : 'toggle-off'
              }
              type='fontisto'
              value='heightMeasurement'
              status={useHeightMeasurement ? 'checked' : 'unchecked'}
              onPress={toggleHeightMeasurement}
              color={global.colorblindMode
                ? global.cb_textColor
                : global.textColor}
            />
            <View style={{ marginRight: 8, }}/>
            <Text style={styles().text}>CM</Text>
          </View>

          {/* Weight user input entry + kgs switch button */}
          <View style={styles().inlineRow2}>
            <View style={{ width: '50%' }}>
              <View style={styles().inlineRow2}>
                <Text style={styles().heading}>WEIGHT</Text>
                <Icon
                  name='information-circle-outline'
                  type='ionicon'
                  color='#816868'
                  style={{ marginLeft: 8 }}
                />
              </View>
              <View style={styles().userPrompt}>
                <TextInput 
                  style={styles().textInput3} 
                  onChangeText = {(weight) => setWeight(weight)}
                  placeholder='#' 
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor}
                  color={global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor}
                />
                <Text style={styles().text}>LB</Text>
                <View style={{ marginRight: 8, }}/>
                <Icon
                  name={
                    useWeightMeasurement
                      ? 'toggle-on'
                      : 'toggle-off'
                  }
                  type='fontisto'
                  value='weightMeasurement'
                  status={useWeightMeasurement ? 'checked' : 'unchecked'}
                  onPress={toggleWeightMeasurement}
                  color={global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor}
                />
                <View style={{ marginRight: 8, }}/>
                <Text style={styles().text}>KG</Text>
              </View>
            </View>

            {/* Next button */}
            <View style={{ width: '50%', marginTop: 40 }}>
              <View style={styles().buttonsContainer}>
                <Button
                  title='NEXT'
                  color={
                    global.colorblindMode
                      ? global.cb_optionButtonsColor
                      : global.optionButtonsColor
                  }
                  onPress={() => {
                    updateUser(firstName, dob, gender, bioSex);
                    navigation.navigate('UserInitialization2', { 
                      height: height, 
                      weight: weight, 
                      heightMeasurement: useHeightMeasurement, 
                      weightMeasurement: useWeightMeasurement
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

async function updateUser(firstName, dob, gender, bioSex) {
  const user = await Auth.currentAuthenticatedUser();
  await Auth.updateUserAttributes(user, {
    'name': firstName,
    'birthdate': dob,
    'gender': gender,
    'custom:biological_sex': bioSex,
    'custom:initialized': '1'
  });
}

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
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    datePicker: {
      marginBottom: 20,
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
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    inlineRow: {
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
    },
    inlineRow2: {
      flexDirection: 'row',
      width: '90%',
    },
    line: {
      width: '90%',
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
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
    textReg: {
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      textAlign: 'left',
    },
    pageDescription: {
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      fontSize: 16,
      flex: 1,
      flexWrap: 'wrap',
      fontWeight: 'bold',
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
      borderWidth: 2,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '70%',
      backgroundColor: global.colorblindMode
        ? global.cb_textInputFillColor
        : global.textInputFillColor,
      borderColor: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
    },
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      height: 40,
      borderColor: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: global.colorblindMode
        ? global.cb_textInputFillColor
        : global.textInputFillColor,
      color: global.colorblindMode
        ? global.cb_textInputColor
        : global.textInputColor,
      width: '70%',
      paddingLeft: 10,
      fontSize: 16,
    },
    textInput2: {
      height: 36,
      borderColor: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: global.colorblindMode
        ? global.cb_textInputFillColor
        : global.textInputFillColor,
      color: global.colorblindMode
        ? global.cb_textInputColor
        : global.textInputColor,
      width: '12%',
      textAlign: 'center',
      fontSize: 16,
      marginRight: 8,
    },
    textInput3: {
      height: 36,
      borderColor: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: '#f4f3f4',
      color: '#000000',
      width: '27%',
      textAlign: 'center',
      fontSize: 16,
      marginRight: 12,
    },
    text: {
      color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
      fontSize: 16,
    },
    textLink: {
      textDecorationLine: 'underline', 
      color: '#4CB97A',
      fontSize: 16,
    },
    userPrompt: {
      marginBottom: 20,
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default UserInitialization1;