import React, { useState, useEffect, useRef } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  Platform,
  Modal,
  Pressable,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import DateTimePicker from '@react-native-community/datetimepicker';

async function getMedications() {
  const res = await API.graphql({
    query: queries.getSetting,
  });

  return res.data.getSetting.Medications;
}

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

async function removeMedication(index) {
  const res = await API.graphql({
    query: mutations.removeMedication,
    variables: { index: index },
  });
}

async function addMedicationHelper(name, times) {
  const res = await API.graphql({
    query: mutations.addMedication,
    variables: { medication: { name: name, times: times } },
  });
  // console.log(res);
}

function getBit(medChecked, index) {
  var mask = 1 << index;

  return (medChecked & mask) != 0;
}

function flipBit(medChecked, index) {
  var mask = 1 << index;

  return medChecked ^ mask;
}

const Medication = ({
  medChecked,
  setMedChecked,
  medications,
  setMedications,
}) => {
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [medicineName, setMedicineName] = useState('');
  const [pressed, setPressed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(new Date(currentDate));
  };

  useEffect(() => {
    getMedications().then((med) => setMedications(med));
  }, [deleteEntry]);

  return (
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Medication modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddMedicine}
            onRequestClose={() => setShowAddMedicine(!showAddMedicine)}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddMedicine(!showAddMedicine)}>
              <Pressable
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddMedicine(true);
                }}>
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      name='pill'
                      type='material-community'
                      color='white'
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Medication</Text>
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
                        onPress={() => setShowAddMedicine(!showAddMedicine)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 12 }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text
                          style={{
                            color: pressed ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Medication
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressed ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Medication name'
                          fontSize={16}
                          color='#816868'
                          value={medicineName}
                          onChangeText={setMedicineName}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Time Taken selection */}
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles().textBoldAlt}>Time Taken:</Text>
                    <TouchableOpacity
                      onPress={() => setShow(true)}
                      style={{ alignItems: 'center', flexDirection: 'row' }}>
                      <Icon
                        name='schedule'
                        size={20}
                        color={
                          global.colorblindMode
                            ? global.cb_textColor
                            : global.textColor
                        }
                        style={{ marginLeft: 6, marginRight: 4 }}
                      />
                      <Text style={styles().textLink}>
                        {getTime(new Date(date))}
                      </Text>
                      <Icon
                        name='arrow-drop-down'
                        color={
                          global.colorblindMode
                            ? global.cb_textColor
                            : global.textColor
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  {show && (
                    <DateTimePicker
                      value={date}
                      mode={'time'}
                      is24Hour={false}
                      display='clock'
                      onChange={onChange}
                    />
                  )}

                  {/* Add Medication button */}
                  <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <Button
                      title='Add Medication'
                      onPress={() => {
                        if (medicineName != '' && date != undefined) {
                          addMedicationHelper(medicineName, date);
                          setMedicineName('');
                          setDate(Date());
                        }
                        setShowAddMedicine(true);
                        Keyboard.dismiss();
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>

        <Text style={styles().heading}>MEDICATION</Text>

        <Text style={styles().text}>What medication have you taken today?</Text>
        {medications.length > 0 && <View style={{ marginBottom: 10 }} />}
        <View>
          {medications != undefined &&
            medications.map((item, index) => {
              return (
                <View key={index}>
                  {/* Delete Medication modal */}
                  <View style={styles().container}>
                    <Modal
                      animationType='fade'
                      transparent={true}
                      visible={deleteEntry}
                      onRequestClose={() => {
                        setDeleteEntry(!deleteEntry);
                      }}>
                      <Pressable
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          zIndex: 1,
                          backgroundColor: '#00000055',
                        }}
                        onPressOut={() => setDeleteEntry(!deleteEntry)}>
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
                                name='pill'
                                type='material-community'
                                color='white'
                                style={{ marginRight: 8 }}
                              />
                              <Text style={styles().textAlt}>
                                Delete Medication
                              </Text>
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
                              Are you sure you wish to delete the medication
                              <Text style={styles().textBoldAlt}>
                                {' '}
                                "{item.name}"{' '}
                              </Text>
                              ?
                            </Text>
                            <Text style={styles().textBoldAlt}>
                              This action cannot be undone.
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-end',
                              marginVertical: 10,
                              marginHorizontal: '5%',
                            }}>
                            <TouchableOpacity
                              style={{ marginRight: 20 }}
                              onPress={() => {
                                setDeleteEntry(!deleteEntry);
                                removeMedication(index);
                              }}>
                              <Text style={styles().textButton}>DELETE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => setDeleteEntry(!deleteEntry)}>
                              <Text style={styles().textButton}>CANCEL</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Pressable>
                    </Modal>
                  </View>

                  <View style={styles().line3} />
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name='pill'
                      type='material-community'
                      color={
                        global.colorblindMode
                          ? global.cb_textColor
                          : global.textColor
                      }
                      style={{ marginRight: 4 }}
                    />
                    <Text style={styles().textLink}>{item.name}</Text>
                    <Text style={styles().text}> at </Text>
                    <Icon
                      name='schedule'
                      color={
                        global.colorblindMode
                          ? global.cb_textColor
                          : global.textColor
                      }
                      style={{ marginLeft: 2, marginRight: 4 }}
                    />
                    <Text style={styles().textLink}>
                      {getTime(new Date(item.times))}
                    </Text>
                    <Icon
                      name='arrow-drop-down'
                      color={
                        global.colorblindMode
                          ? global.cb_textColor
                          : global.textColor
                      }
                    />
                    <View style={styles().switchView}>
                      <View style={styles().line2} />
                      <View style={{ marginLeft: 10 }}>
                        <Icon
                          name='close'
                          color='#816868'
                          onPress={() => setDeleteEntry(!deleteEntry)}
                        />
                      </View>
                      <Switch
                        style={{ marginLeft: 8 }}
                        trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                        thumbColor={
                          getBit(medChecked, index) ? '#4CB97A' : '#f4f3f4'
                        }
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={() => {
                          setMedChecked(flipBit(medChecked, index));
                        }}
                        value={getBit(medChecked, index)}
                      />
                    </View>
                  </View>
                  <View style={styles().line3} />
                </View>
              );
            })}
        </View>
        <View style={{ width: '40%', marginTop: 20, marginBottom: 10 }}>
          <Button
            title='+ Add Medication'
            onPress={() => setShowAddMedicine(!showAddMedicine)}
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Medication;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
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
    },
    line3: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
      marginTop: -1,
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
    modalView: {
      margin: 20,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
      paddingBottom: -10,
      paddingTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
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
    textInputView: {
      height: 48,
      width: Math.round((Dimensions.get('window').width * 1) / 2),
      position: 'relative',
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
