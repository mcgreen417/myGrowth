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
  Pressable,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import StatusBariOS from '../../shared/components/StatusBariOS';

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
  const [activityLevel, setActivityLevel] = useState('');
  const [metric, setToggleMetric] = useState(false);
  const [showFirstNameInfo, setShowFirstNameInfo] = useState(false);
  const [showDOBInfo, setShowDOBInfo] = useState(false);
  const [showGenderInfo, setShowGenderInfo] = useState(false);
  const [showBioSexInfo, setShowBioSexInfo] = useState(false);
  const [showActivityLevelInfo, setShowActivityLevelInfo] = useState(false);
  const [showHeightInfo, setShowHeightInfo] = useState(false);
  const [showWeightInfo, setShowWeightInfo] = useState(false);
  const [pressedFirstName, setPressedFirstName] = useState(false);
  const [pressedGender, setPressedGender] = useState(false);
  const [pressedBioSex, setPressedBioSex] = useState(false);
  const [pressedActivityLevel, setPressedActivityLevel] = useState(false);
  const [pressedHeight, setPressedHeight] = useState(false);
  const [pressedWeight, setPressedWeight] = useState(false);

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
    validActivityLevel: false,
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

  const toggleMetric = () => {
    setToggleMetric((previousState) => !previousState);
  }

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

  const handleActivityLevelChange = (itemValue) => {
    setActivityLevel(itemValue);    

    if (itemValue === 'unselected') {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validActivityLevel: false,
        validSignUp: false,        
      });
    } else {
      setUserInitializationProperties({
        ...userInitializationProperties,
        validActivityLevel: true,
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

  const checkRequiredFields = (firstName, dob, gender, bioSex, activityLevel) => {
    const ableToSignUp = (userInitializationProperties.validFirstName
                          && userInitializationProperties.validDateOfBirth
                          && userInitializationProperties.validGender
                          && userInitializationProperties.validBiologicalSex
                          && userInitializationProperties.validActivityLevel);
    const validFirstName = userInitializationProperties.validFirstName;
    const validDOB = userInitializationProperties.validDateOfBirth;
    const validGender = userInitializationProperties.validGender;
    const validBioSex = userInitializationProperties.validBiologicalSex;
    const validActivityLevel = userInitializationProperties.validActivityLevel;
    
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
      if (!validFirstName && !validDOB && !validGender && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check that you entered information in the First Name, Date of Birth, Gender, Biological Sex, and Activity Level fields.');
      } else if (!validFirstName && !validDOB && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check that you entered information in the First Name, Date of Birth, Gender, and Biological Sex fields.');
      } else if (!validFirstName && !validDOB && !validGender && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, Gender, and Activity Level fields.');
      } else if (!validFirstName && !validDOB && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, and Gender fields.');
      } else if (!validFirstName && !validDOB && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, Biological Sex, and Activity Level fields.');
      } else if (!validFirstName && !validDOB && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, and Biological Sex fields.');
      } else if (!validFirstName && !validGender && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Gender, Biological Sex, and Activity Level fields.');
      } else if (!validFirstName && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Gender, and Biological Sex fields.');
      } else if (!validDOB && !validGender && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth, Gender, Biological Sex, and Activity Level fields.');
      } else if (!validDOB && !validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth, Gender, and Biological Sex fields.');
      } else if (!validFirstName && !validDOB && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Date of Birth, and Activity Level fields.');
      } else if (!validFirstName && !validDOB) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Date of Birth fields.');
      } else if (!validFirstName && !validGender && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Gender, and Activity Level fields.');
      } else if (!validFirstName && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Gender fields.');
      } else if (!validFirstName && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name, Biological Sex, and Activity Level fields.');
      } else if (!validFirstName && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Biological Sex fields.');
      } else if (!validDOB && !validGender && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth, Gender, and Activity Level fields.');
      } else if (!validDOB && !validGender) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth and Gender fields.');   
      } else if (!validDOB && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth, Biological Sex, and Activity Level fields.');
      } else if (!validDOB && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth and Biological Sex fields.');  
      } else if (!validGender && !validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Gender, Biological Sex, and Activity Level fields.'); 
      } else if (!validGender && !validBioSex) {
        createAlert('Oh no!', 'Please double-check your entered information in the Gender and Biological Sex fields.'); 
      } else if (!validFirstName && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the First Name and Activity Level fields.');
      } else if (!validFirstName) {
        createAlert('Oh no!', 'Please make sure that you\'ve entered at least one character for your name.'); 
      } else if (!validDOB && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Date of Birth and Activity Level fields.');
      } else if (!validDOB) {
        createAlert('Oh no!', 'Please make sure you\'ve selected your date of birth and are 13 years or older.'); 
      } else if (!validGender && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Gender and Activity Level fields.');
      } else if (!validGender) {
        createAlert('Oh no!', 'Please select an option for Gender-- if you do not wish to answer, please select \'Prefer not to answer\'.'); 
      } else if (!validBioSex && !validActivityLevel) {
        createAlert('Oh no!', 'Please double-check your entered information in the Biological Sex and Activity Level fields.');
      } else if (!validBioSex) {
        createAlert('Oh no!', 'Please select an option for Biological Sex-- if you do not wish to answer, please select \'Prefer not to answer\'.');   
      } else if (!validActivityLevel) {
        createAlert('Oh no!', 'Please select an option for Activity Level-- if you do not wish to answer, please select \'Prefer not to answer\'.')
      } else {
        createAlert('Error', 'Please check all fields and try again');
      }
    }
  }

  return (
    <SafeAreaView style={styles().container}>
      <StatusBariOS />
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowFirstNameInfo(!showFirstNameInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowFirstNameInfo(true)}
            >
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
                <Text style={styles().text}>You can change this in your user settings at any time.</Text>
                <Text style={styles().text}>
                  You may use a nickname, username, or alias if you are uncomfortable entering this 
                  information.
                </Text>
                <Text style={styles().textBoldAlt}>This field is required.</Text>
              </View>
            </Pressable>
          </Pressable>
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowDOBInfo(!showDOBInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPressOut={() => setShowDOBInfo(true)}
            >
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
                  This information will be used in physical health calculations and can be updated
                  in your user settings at any time.
                </Text>
                <Text style={styles().textBoldAlt}>This field is required.</Text>
              </View>
            </Pressable>
          </Pressable>
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowGenderInfo(!showGenderInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPressOut={() => setShowGenderInfo(true)}
            >
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
                  your biological sex and can be updated in your user settings at any time.
                </Text>
                <Text style={styles().text}>
                  You may choose not to answer this question if it makes you uncomfortable. However, 
                  this may cause certain physical health calculations to be inaccurate. 
                </Text>
                <Text style={styles().textBoldAlt}>This field is required.</Text>
              </View>
            </Pressable>
          </Pressable>
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowBioSexInfo(!showBioSexInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowBioSexInfo(true)}
            >
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
                  your gender and can be updated in your user settings at any time.
                </Text>
                <Text style={styles().text}>
                  You may choose not to answer this question if it makes you uncomfortable. However, 
                  this may cause certain physical health calculations to be inaccurate. 
                </Text>
                <Text style={styles().textBoldAlt}>This field is required.</Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Activity level info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showActivityLevelInfo}
          onRequestClose={() => setShowActivityLevelInfo(!showActivityLevelInfo)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowActivityLevelInfo(!showActivityLevelInfo)}
          >
            <Pressable
              style={styles().modalContainer}
              onPress={() => setShowActivityLevelInfo(true)}
            >
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
                  <Text style={styles().textAlt}>Activity Level</Text>
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
                      onPress={() => setShowActivityLevelInfo(!showActivityLevelInfo)}
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
                  Please let us know how active you typically are in your average week!
                </Text>
                <Text style={styles().text}>
                  This information will be used in physical health calculations and can be updated
                  in your user settings at any time.
                </Text>
                <Text style={styles().text}>
                  You may choose not to answer this question if you are unsure of your typical activity 
                  level. However, this may cause certain physical health calculations to be inaccurate. 
                </Text>
                <Text style={styles().textBoldAlt}>This field is optional.</Text>
              </View>
            </Pressable>
          </Pressable>
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowHeightInfo(!showHeightInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowHeightInfo(true)}
            >
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
                  This information will be used in physical health calculations and can be updated 
                  in your user settings at any time.
                </Text>
                <Text style={styles().text}>
                  You may choose not to answer this question if you are unsure of your height. 
                  However, this may cause certain physical health calculations to be inaccurate.
                </Text>
                <Text style={styles().textBoldAlt}>This field is optional.</Text>
              </View>
            </Pressable>
          </Pressable>
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
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowWeightInfo(!showWeightInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowWeightInfo(true)}  
            >
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
                  dynamically via your daily health entries.
                </Text>
                <Text style={styles().text}>
                  You may choose not to answer this question if you are unsure of your weight. 
                  However, this may cause certain physical health calculations to be inaccurate.
                </Text>
                <Text style={styles().textBoldAlt}>This field is optional.</Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Start of user initialization 1 page */}
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      color: pressedFirstName ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    First Name
                  </Text>
                  <View style={{ marginRight: 4 }}/>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color={pressedFirstName
                      ? '#4CB97A'
                      : '#816868'
                    }
                    onPress={() => setShowFirstNameInfo(!showFirstNameInfo)}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedFirstName ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingHorizontal: 16,
                }}>
                {/* zuser's name in firstname var */}
                <TextInput
                  placeholder='First name'
                  fontSize={16}
                  color='#816868'
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  value={firstName}
                  onChangeText = {(firstName) => {
                    handleFirstNameChange(firstName);
                  }}
                  maxLength={50}
                  onFocus={() => setPressedFirstName(true)}
                  onBlur={() => setPressedFirstName(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          {/* Date of birth calendar pop-up */}
          <View style={{ marginVertical: 2, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().inlineRow2}>
              <Text style={styles().heading}>Date of Birth</Text>
              <View style={{ marginLeft: 4, }}/>
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
          </View>

          {/* Gender dropdown picker */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <View style={{ flexDirection: 'row', }}>
                  <Text
                    style={{
                      color: pressedGender ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Gender
                  </Text>
                  <View style={{ marginRight: 4, }}/>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='#816868'
                    onPress={() => setShowGenderInfo(!showGenderInfo)}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedGender ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingLeft: 12,
                }}>
                <Picker
                  selectedValue={gender}
                  style={styles().picker}
                  dropdownIconColor='#816868'
                  onValueChange={(itemValue, itemIndex) => handleGenderChange(itemValue)}
                  mode={'dropdown'}>
                  <Picker.Item label='Select one...' value='unselected' color='#816868' />
                  <Picker.Item label='Male' value='male' color='#816868' />
                  <Picker.Item label='Female' value='female' color='#816868' />
                  <Picker.Item label='Non-binary' value='nonbinary' color='#816868' />
                  <Picker.Item label='Other' value='other' color='#816868' />
                  <Picker.Item label='Prefer not to answer' value='noAnswer' color='#816868' />
                </Picker>
              </View>
            </View>
          </View>

          {/* Biological Sex dropdown picker */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <View style={{ flexDirection: 'row', }}>
                  <Text
                    style={{
                      color: pressedBioSex ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Biological Sex
                  </Text>
                  <View style={{ marginRight: 4, }}/>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='#816868'
                    onPress={() => setShowBioSexInfo(!showBioSexInfo)}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedBioSex ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingLeft: 12,
                }}>
                <Picker
                  selectedValue={bioSex}
                  style={styles().picker}
                  dropdownIconColor='#816868'
                  onValueChange={(itemValue, itemIndex) => handleBioSexChange(itemValue)}
                  mode={'dropdown'}>
                  <Picker.Item label='Select one...' value='unselected' color='#816868' />
                  <Picker.Item label='Male' value='male' color='#816868' />
                  <Picker.Item label='Female' value='female' color='#816868' />
                  <Picker.Item label='Assigned Male' value='amab' color='#816868' />
                  <Picker.Item label='Assigned Female' value='afab' color='#816868' />
                  <Picker.Item label='Prefer not to answer' value='noAnswer' color='#816868' />
                </Picker>
              </View>
            </View>
          </View>

          {/* Activity Level dropdown picker */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <View style={{ flexDirection: 'row', }}>
                  <Text
                    style={{
                      color: pressedActivityLevel ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Activity Level
                  </Text>
                  <View style={{ marginRight: 4, }}/>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='#816868'
                    onPress={() => setShowActivityLevelInfo(!showActivityLevelInfo)}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressedActivityLevel ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingLeft: 12,
                }}>
                <Picker
                  selectedValue={activityLevel}
                  style={styles().picker}
                  dropdownIconColor='#816868'
                  onValueChange={(itemValue, itemIndex) => handleActivityLevelChange(itemValue)}
                  mode={'dropdown'}>
                  <Picker.Item label='Select one...' value='unselected' color='#816868' />
                  <Picker.Item label='Sedentary (minimal activity)' value='sedentary' color='#816868' />
                  <Picker.Item label='Lightly active (1-2 days/week)' value='lightlyActive' color='#816868' />
                  <Picker.Item label='Moderately active (3-5 days/week)' value='moderatelyActive' color='#816868' />
                  <Picker.Item label='Very active (6-7 days/week)' value='veryActive' color='#816868' />
                </Picker>
              </View>
            </View>
          </View>

          {/* Height user input entry + cm switch button */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles().textInputView2}>
                <View style={styles().labelView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        color: pressedHeight ? '#4CB97A' : '#816868',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Height
                    </Text>
                    <View style={{ marginRight: 4 }}/>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color={pressedHeight
                        ? '#4CB97A'
                        : '#816868'
                      }
                      onPress={() => setShowHeightInfo(!showHeightInfo)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressedHeight ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingHorizontal: 16,
                  }}>
                  <TextInput
                    placeholder='Height'
                    fontSize={16}
                    color='#816868'
                    placeholderTextColor={
                      global.colorblindMode
                        ? global.cb_placeHolderTextColor
                        : global.placeHolderTextColor
                    }
                    value={height}
                    onChangeText = {(height) => handleHeightChange(height)} 
                    maxLength={3}
                    keyboardType='number-pad'
                    onFocus={() => setPressedHeight(true)}
                    onBlur={() => setPressedHeight(false)}
                    style={{ top: -8 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 16, }}>
                <Text style={styles().text}>IN</Text>
                <View style={{ marginRight: 8, }}/>
                <Icon
                  name={
                    metric
                      ? 'toggle-on'
                      : 'toggle-off'
                  }
                  type='fontisto'
                  value='metric'
                  status={metric ? 'checked' : 'unchecked'}
                  onPress={toggleMetric}
                  color={global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor}
                />
                <View style={{ marginRight: 8, }}/>
                <Text style={styles().text}>CM</Text>
              </View>
            </View>
          </View>

          {/* Weight user input entry + cm switch button */}
          <View style={{ marginTop: 10, marginBottom: 20, alignSelf: 'flex-start', marginLeft: '5%', }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={styles().textInputView2}>
                <View style={styles().labelView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        color: pressedWeight ? '#4CB97A' : '#816868',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Weight
                    </Text>
                    <View style={{ marginRight: 4 }}/>
                    <Icon
                      name='information-circle-outline'
                      type='ionicon'
                      color={pressedWeight
                        ? '#4CB97A'
                        : '#816868'
                      }
                      onPress={() => setShowWeightInfo(!showWeightInfo)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressedWeight ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingHorizontal: 16,
                  }}>
                  <TextInput
                    placeholder='Weight'
                    fontSize={16}
                    color='#816868'
                    placeholderTextColor={
                      global.colorblindMode
                        ? global.cb_placeHolderTextColor
                        : global.placeHolderTextColor
                    }
                    value={weight}
                    onChangeText = {(weight) => handleWeightChange(weight)} 
                    maxLength={3}
                    keyboardType='number-pad'
                    onFocus={() => setPressedWeight(true)}
                    onBlur={() => setPressedWeight(false)}
                    style={{ top: -8 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 12, marginLeft: 16, }}>
                <Text style={styles().text}>LB</Text>
                <View style={{ marginRight: 8, }}/>
                <Icon
                  name={
                    metric
                      ? 'toggle-on'
                      : 'toggle-off'
                  }
                  type='fontisto'
                  value='metric'
                  status={metric ? 'checked' : 'unchecked'}
                  onPress={toggleMetric}
                  color={global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor}
                />
                <View style={{ marginRight: 8, }}/>
                <Text style={styles().text}>KG</Text>
              </View>
            </View>
          </View>

          <View style={{ alignSelf: 'flex-end', marginRight: '5%', marginTop: -38 }}>
                <Button
                  title='NEXT'
                  color={
                    global.colorblindMode
                      ? global.cb_optionButtonsColor
                      : global.optionButtonsColor
                  }
                  onPress={() => {
                    checkRequiredFields(firstName, dob, gender, bioSex, activityLevel);
                    if (userInitializationProperties.validSignUp) {
                      updateUser(firstName, dob, gender, bioSex, navigation, activityLevel, height, weight, metric);
                    }
                  }}
                />
              </View>
          
          <View style={styles().pageEnd}/>
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

async function updateUser(firstName, dob, gender, bioSex, navigation, activityLevel, height, weight, metric) {
  const cognitoAttr = {
    'name': firstName,
    'birthdate': dob,
    'gender': gender,
    'biological_sex': bioSex,
    'avatar_id': '0',
    'initialized': '1'
  }

  navigation.navigate('UserInitialization2', { 
    activityLevel: activityLevel,
    height: height, 
    weight: weight, 
    metric: metric,
    cognitoAttr: cognitoAttr
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
      width: Math.round(Dimensions.get('window').width * 1/4),
      height: Math.round(Dimensions.get('window').width * 1/4),
      marginRight: 20,
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
    label: {
      color: '#816868',
      fontSize: 16,
      fontWeight: 'bold',
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
      marginBottom: '6%',
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    picker: {
      height: 32,
      marginBottom: 4,
      width: '100%',
      color: '#816868',
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
    textInputView: {
      height: 48,
      width: Math.round(Dimensions.get('window').width * 0.7),
      position: 'relative',
    },
    textInputView2: {
      height: 48,
      width: Math.round(Dimensions.get('window').width * 0.35),
      position: 'relative',
    },
    userPrompt: {
      marginBottom: 20,
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default UserInitialization1;