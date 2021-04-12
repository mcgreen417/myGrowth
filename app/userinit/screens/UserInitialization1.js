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
  Modal,
} from 'react-native';

import { Icon } from 'react-native-elements';
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
  const [useHeightMeasurement, setToggleHeightMeasurement] = useState(false);
  const [useWeightMeasurement, setToggleWeightMeasurement] = useState(false);
  const [showFirstNameInfo, setShowFirstNameInfo] = useState(false);
  const [showDOBInfo, setShowDOBInfo] = useState(false);
  const [showGenderInfo, setShowGenderInfo] = useState(false);
  const [showBioSexInfo, setShowBioSexInfo] = useState(false);
  const [showHeightInfo, setShowHeightInfo] = useState(false);
  const [showWeightInfo, setShowWeightInfo] = useState(false);

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
    const firstNameRegexPattern = /^(?=.*[a-zA-Z]).{1,}$/;
    const charsNotAllowedRegexPattern = /[^a-zA-Z-' ]/g;

    firstName = firstName.replace(charsNotAllowedRegexPattern, '');
    setFirstName(firstName);

    if (firstName.match(firstNameRegexPattern)) {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validFirstName: true,
        checkTextInputChange: true,
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validFirstName: false,
        checkTextInputChange: false,
        validSignUp: false,        
      });
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

    if (itemValue === 'unselected') {
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

    if (itemValue === 'unselected') {
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

  const handleHeightChange = (height) => {
    const heightRegexPattern = /^[0-9]*$/;
    const charsNotAllowedRegex = /[^0-9]/g

    height = height.replace(charsNotAllowedRegex, '');
    setHeight(height);

    if (height.match(heightRegexPattern)) {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validHeight: true,
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validHeight: false,
        validSignUp: false,
      });
    }
  }

  const handleWeightChange = (weight) => {
    const weightRegexPattern = /^[0-9]*$/;
    const charsNotAllowedRegex = /[^0-9]/g;

    weight = weight.replace(charsNotAllowedRegex, '');
    setWeight(weight);

    if (weight.match(weightRegexPattern)) {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validWeight: true,
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validWeight: false,
        validSignUp: false,
      });
    }
  }

  const toggleHeightMeasurement = () => {
    setToggleHeightMeasurement((previousState) => !previousState);
  }

  const toggleWeightMeasurement = () => {
    setToggleWeightMeasurement((previousState) => !previousState);
  }

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

      {/* First name info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showFirstNameInfo}
          onRequestClose={() => setShowFirstNameInfo(!showFirstNameInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>First Name</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowFirstNameInfo(!showFirstNameInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <Text style={styles().text}>
                    Please enter your first name so our friendly assistant knows who you are!
                  </Text>
                  <Text style={styles().text}>
                    You may use a username if you are uncomfortable entering this information.
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is required.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Date of birth info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showDOBInfo}
          onRequestClose={() => setShowDOBInfo(!showDOBInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Date of Birth</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowDOBInfo(!showDOBInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <Text style={styles().text}>
                    Please enter your date of birth so we know how old you are!
                  </Text>
                  <Text style={styles().text}>
                    This information is important for legal purposes and will be used 
                    in physical health calculations.
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is required.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Gender info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showGenderInfo}
          onRequestClose={() => setShowGenderInfo(!showGenderInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Gender</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowGenderInfo(!showGenderInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <Text style={styles().text}>
                    Please enter your gender so we know more about you!
                  </Text>
                  <Text style={styles().text}>
                    This information will be used in physical health calculations in combination with 
                    your biological sex.
                  </Text>
                  <Text style={styles().text}>
                    You may choose not to answer this question if it makes you uncomfortable. However, 
                    this may cause certain physical health calculations to be inaccurate. 
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is required.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Biological sex info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showBioSexInfo}
          onRequestClose={() => setShowBioSexInfo(!showBioSexInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Biological Sex</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowBioSexInfo(!showBioSexInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <Text style={styles().text}>
                    Please enter your biological sex so we know more about you!
                  </Text>
                  <Text style={styles().text}>
                    This information will be used in physical health calculations in combination with 
                    your gender.
                  </Text>
                  <Text style={styles().text}>
                    You may choose not to answer this question if it makes you uncomfortable. However, 
                    this may cause certain physical health calculations to be inaccurate. 
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is required.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Height info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showHeightInfo}
          onRequestClose={() => setShowHeightInfo(!showHeightInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Height</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowHeightInfo(!showHeightInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <Text style={styles().text}>
                    Please enter your height so we know how tall you are!
                  </Text>
                  <Text style={styles().text}>
                    This information will be used in physical health calculations.
                  </Text>
                  <Text style={styles().text}>
                    You may choose not to answer this question if you are unsure of your height. 
                    However, this may cause certain physical health calculations to be inaccurate.
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is optional.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Weight info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showWeightInfo}
          onRequestClose={() => setShowWeightInfo(!showWeightInfo)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}>
              <View style={styles().modalContainer}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                    }}>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Weight</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowWeightInfo(!showWeightInfo)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginVertical: 10,
                  }}>
                  <Text style={styles().text}>
                    Please enter your weight so we know how much you weigh!
                  </Text>
                  <Text style={styles().text}>
                    This information will be used in physical health calculations and can be updated
                    daily via your daily health entries.
                  </Text>
                  <Text style={styles().text}>
                    You may choose not to answer this question if you are unsure of your weight. 
                    However, this may cause certain physical health calculations to be inaccurate.
                  </Text>
                  <Text style={styles().textBoldAlt}>This field is optional.</Text>
                </View>
              </View>
            </View>
        </Modal>
      </View>

      {/* Start of user initialization 1 page */}
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
            <View style={{ marginRight: 8 }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowFirstNameInfo(!showFirstNameInfo)}
            />
          </View>

          {/* zuser's name in firstname var */}
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
              maxLength = {50}
              onChangeText = {(firstName) => {
                handleFirstNameChange(firstName);
              }}
            />
          </View>

          {/* Date of birth calendar pop-up */}
          <View style={styles().inlineRow2}>
            <Text style={styles().heading}>DATE OF BIRTH</Text>
            <View style={{ marginLeft: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowDOBInfo(!showDOBInfo)}
            />
          </View>

          {/* Stores the date in date var */}
          <View style={styles().datePicker}>
            <TouchableOpacity onPress={showDatepicker}>
              <View style={styles().inlineRow}>
                <Icon name='calendar-sharp' type='ionicon' color='#816868' />
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                    color: global.colorblindMode
                      ? global.cb_hyperlinkedTextColor
                      : global.hyperlinkedTextColor,
                    marginLeft: 8,
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
            <View style={{ marginRight: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowGenderInfo(!showGenderInfo)}
            />
          </View>

          {/* Gender stored in gender */}
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
            <View style={{ marginRight: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowBioSexInfo(!showBioSexInfo)}
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
            <View style={{ marginRight: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowHeightInfo(!showHeightInfo)}
            />
          </View>
          <View style={styles().userPrompt}>
            <TextInput 
              style={styles().textInput2}
              maxLength = {3}
              value={height}
              onChangeText = {(height) => handleHeightChange(height)} 
              placeholder='#'
              placeholderTextColor={
                global.colorblindMode
                  ? global.cb_placeHolderTextColor
                  : global.placeHolderTextColor
              }
              keyboardType='number-pad'
            />
            <View style={{ flexDirection: 'row', marginTop: 4, }}>
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
          </View>

          {/* Weight user input entry + kgs switch button */}
          <View style={styles().inlineRow2}>
            <View style={{ width: '50%' }}>
              <View style={styles().inlineRow2}>
                <Text style={styles().heading}>WEIGHT</Text>
                <View style={{ marginRight: 8 }}/>
                <Icon
                  name='information-circle-outline'
                  type='ionicon'
                  color='#816868'
                  onPress={() => setShowWeightInfo(!showWeightInfo)}
                />
              </View>
              <View style={styles().userPrompt}>
                <TextInput 
                  style={styles().textInput3}
                  maxLength = {3}
                  value={weight}
                  onChangeText = {(weight) => handleWeightChange(weight)}
                  placeholder='#' 
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  keyboardType='number-pad'
                />
                <View style={{ flexDirection: 'row', marginTop: 4, }}>
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
            </View>

            {/* Next button */}
            <View style={{ width: '50%', marginTop: '9%', }}>
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
                      updateUser(firstName, dob, gender, bioSex);
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
    modalContainer: {
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      alignItems: 'center',
      width: '80%',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    modalHeaderBar: {
      backgroundColor: global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
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
      fontSize: 18,
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
        ? global.cb_textColor
        : global.textColor,
      borderWidth: 1.5,
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
      borderWidth: 1.5,
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
      borderWidth: 1.5,
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
      marginBottom: 8,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textBoldAlt: {
      fontSize: 16,
      color: '#816868',
      fontWeight: 'bold',
      marginTop: 4,
    },
    textButton: {
      fontSize: 16,
      color: '#4CB97A',
      fontWeight: 'bold',
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