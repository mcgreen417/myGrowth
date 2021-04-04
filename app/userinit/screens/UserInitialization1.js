import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Alert,
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

import { Icon } from 'react-native-elements';
import { ToggleButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import RNDateTimePicker from '@react-native-community/datetimepicker';

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

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const minimumUserBirthDate = new Date(currentYear - 13, currentMonth, currentDay);
  const maximumUserBirthDate = new Date(currentYear - 150, currentMonth, currentDay);

  const [userInitializationProperties, setUserInitializationProperties] = useState({
    validFirstName: false,
    validDateOfBirth: false,
    validGender: false,
    validBiologicalSex: false,
    checkTextInputChange: false,
    validSignUp: false,
  });


  const handleFirstNameChange = (firstName) => {
    const firstNameRegexPattern = /^(?=.*[a-zA-z]).{1,}$/;
    const charsNotAllowedRegexPattern = /[^a-zA-z-' ]/g;

    firstName = firstName.replace(charsNotAllowedRegexPattern, '');
    setFirstName(firstName);

    if (firstName.match(firstNameRegexPattern)) {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validFirstName: true,
        checkTextInputChange: true,
      });
      console.log("valid");
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validFirstName: false,
        checkTextInputChange: false,
        validSignUp: false,        
      });
      console.log("invalid");
    }
  }

  // Birth date calendar selector.
  // Currently marks is valid if user opens the calendar because the currentDate is auto-selected,
  //   which is >= 13 years old.
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // console.log(currentDate);
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
    
    setUserInitializationProperties({
      ...userInitializationProperties,
      validDateOfBirth: true,
    });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleGenderChange = (itemValue) => {
    setGender(itemValue);    

    if (itemValue === "unselected") {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validGender: false,
        validSignUp: false,        
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validGender: true,
      });  
    }
  }

  const handleBioSexChange = (itemValue) => {
    setBioSex(itemValue);    

    if (itemValue === "unselected") {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validBiologicalSex: false,
        validSignUp: false,        
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validBiologicalSex: true,
      });  
    }
  }

  const [useHeightMeasurement, setToggleHeightMeasurement] = useState(false);
  const toggleHeightMeasurement = () =>
    setToggleHeightMeasurement((previousState) => !previousState);

  const [useWeightMeasurement, setToggleWeightMeasurement] = useState(false);
  const toggleWeightMeasurement = () =>
    setToggleWeightMeasurement((previousState) => !previousState);

  const checkRequiredFields = (firstName, dob, gender, bioSex) => {
    const ableToSignUp = (userInitializationProperties.validFirstName
                          && userInitializationProperties.validDateOfBirth
                          && userInitializationProperties.validGender
                          && userInitializationProperties.validBiologicalSex);
    const validFirstName = userInitializationProperties.validFirstName;
    const validDOB = userInitializationProperties.validDateOfBirth;
    const validGender = userInitializationProperties.validGender;
    const validBioSex = userInitializationProperties.validBiologicalSex;
    
    if (ableToSignUp) {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validSignUp: true,
      });

    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validSignUp: false,
      });

      // Future update so that relevant input boxes have a red outline and a red 'x' next to/above them?
      if (!validFirstName && !validDOB && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check that you entered information in the First Name, Date of Birth, Gender, and Biological Sex fields.');
      } else if (!validFirstName && !validDOB && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, and Gender fields.');
      } else if (!validFirstName && !validDOB && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, and Biological Sex fields.');
      } else if (!validFirstName && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Gender, and Biological Sex fields.');
      } else if (!validDOB && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth, Gender, and Biological Sex fields.');
      } else if (!validFirstName && !validDOB) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Date of Birth fields.');
      } else if (!validFirstName && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Gender fields.');
      } else if (!validFirstName && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Biological Sex fields.');
      } else if (!validDOB && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth and Gender fields.');   
      } else if (!validDOB && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth and Biological Sex fields.');  
      } else if (!validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Gender and Biological Sex fields.'); 
      } else if (!validFirstName) {
        createAlert('Oh no!', 'Please make sure that you\'ve entered at least one character for your name.'); 
      } else if (!validDOB) {
        createAlert('Oh no!', 'Please make sure you\'ve selected your date of birth and are 13 years or older.'); 
      } else if (!validGender) {
        createAlert('Oh no!', 'Please select an option for Gender - if you do not wish to answer, please select \'Prefer not to answer\'.'); 
      } else if (!validBioSex) {
        createAlert('Oh no!', 'Please select an option for Biological Sex - if you do not wish to answer, please select \'Prefer not to answer\'.');   
      } else {
        createAlert('Error', 'Please check all fields and try again');
      }
    }
  }  

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
              style={{ marginLeft: 6 }}
            />
          </View>

          {/* user's name in firstname var */}
          <View style={styles().userPrompt}>
            <TextInput 
              style={styles().textInput}
              placeholder='First name' 
              placeholderTextColor={
                global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeHolderTextColor
              }
              value = {firstName}
              maxLength = {50}
              onChangeText = {(firstName) => {
                handleFirstNameChange(firstName);
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
              style={{ marginLeft: 6 }}
            />
          </View>

          {/* stores the date in date var */}
          <View style={styles().datePicker}>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles().inlineRow}>
                <Icon name='calendar-sharp' type='ionicon' color='#816868' />
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    color: global.colorblindMode
                      ? global.cb_hyperlinkedTextColor
                      : global.hyperlinkedTextColor
                  }}
                >
                  {dateDisplayText}
                </Text>
              </View>
            </TouchableOpacity>
            {show && (
              <RNDateTimePicker
                testID='dateTimePicker'
                minimumDate={maximumUserBirthDate}
                maximumDate={minimumUserBirthDate}
                value={minimumUserBirthDate}
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
              style={{ marginLeft: 6 }}
            />
          </View>

          {/* gender stored in gender */}
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={gender}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => handleGenderChange(itemValue)}
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
              style={{ marginLeft: 6 }}
            />
          </View>

          {/* stored in bioSex */}
          <View style={{ width: '90%' }}>
            <View style={styles().pickerView}>
              <Picker
                selectedValue={bioSex}
                style={styles().picker}
                onValueChange={(itemValue, itemIndex) => handleBioSexChange(itemValue)}
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
              style={{ marginLeft: 6 }}
            />
          </View>
          <View style={styles().userPrompt}>
            <TextInput 
              style={styles().textInput2}
              maxLength = {3}
              onChangeText = {(height) => setHeight(height)} 
              placeholder='#'
              placeholderTextColor={
                global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeHolderTextColor
              }
            />
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
          <View style={styles().inlineRow2}>
            <View style={{ width: '50%' }}>
              <View style={styles().inlineRow2}>
                <Text style={styles().heading}>WEIGHT</Text>
                <Icon
                  name='information-circle-outline'
                  type='ionicon'
                  color='#816868'
                  style={{ marginLeft: 6 }}
                />
              </View>
              <View style={styles().userPrompt}>
                <TextInput 
                  style={styles().textInput3}
                  maxLength = {3}
                  onChangeText = {(weight) => setWeight(weight)}
                  placeholder='#' 
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                />
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
                    checkRequiredFields(firstName, dob, gender, bioSex);
                    if (userInitializationProperties.validSignUp) {
                      navigation.navigate('UserInitialization2', { 
                        height: height, 
                        weight: weight, 
                        heightMeasurement: useHeightMeasurement, 
                        weightMeasurement: useWeightMeasurement
                      });
                    }
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

const createAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      { text: 'OK', }
    ]
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
      borderWidth: 1,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '70%',
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
    textInput: {
      height: 40,
      borderColor: global.colorblindMode
        ? global.cb_textInputBlackBorderColor
        : global.textInputBlackBorderColor,
      borderWidth: 1,
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
        ? global.cb_textInputBlackBorderColor
        : global.textInputBlackBorderColor,
      borderWidth: 1,
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
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: '#f4f3f4',
      color: '#000000',
      width: '27%',
      textAlign: 'center',
      fontSize: 16,
      marginRight: 12,
    },
    text: {
      color: 'black',
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