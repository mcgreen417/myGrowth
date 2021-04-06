import React, { useState } from 'react';
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
} from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import DateTimePicker from '@react-native-community/datetimepicker';

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

async function getMedications(setMedications) {
  const res = await API.graphql({
    query: queries.getSetting,
  });
  // console.log(res);
  const meds = res.data.getSetting.Medications;
  // console.log(meds.length);
  setMedications(meds);
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

const AddMedication = ({ setShowAddMedicine }) => {
  const [medicineName, setMedicineName] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(new Date(currentDate));
  };

  return (
    <Pressable>
      <View style={styles().modalView}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Medicine Title</Text>
          <TextInput
            placeholder='Title'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
            }}
            keyboardType='default'
            value={medicineName}
            onChangeText={setMedicineName}
          />
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Medicine Times</Text>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ textDecorationLine: 'underline', color: '#4CB97A' }}>
              {getTime(new Date(date))}
            </Text>
            <Icon name='arrow-drop-down' />
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
        <View style={{ width: '50%' }}>
          <Button
            title='Add Medication'
            onPress={() => {
              if (medicineName != '' && date != undefined) {
                addMedicationHelper(medicineName, date);
                setShowAddMedicine(false);
              }
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

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
  getMedications(setMedications);

  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showAddMedicine}
        onRequestClose={() => {
          setShowAddMedicine(!showAddMedicine);
        }}>
        <Pressable
          onPressOut={() => setShowAddMedicine(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <AddMedication setShowAddMedicine={setShowAddMedicine} />
        </Pressable>
      </Modal>
      <Text>Medication</Text>
      <Text>Have you taken the following medications today?</Text>
      <View>
        {medications != undefined &&
          medications.map((item, index) => {
            return (
              <View
                style={{ flexDirection: 'row', alignItems: 'center' }}
                key={index}>
                <Text>{item.name} at </Text>
                <Icon name='schedule' />
                <Text>{getTime(new Date(item.times))}</Text>
                <Icon name='arrow-drop-down' />
                <Switch
                  trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                  thumbColor={getBit(medChecked, index) ? '#4CB97A' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={() => {
                    setMedChecked(flipBit(medChecked, index));
                  }}
                  value={getBit(medChecked, index)}
                />
                <Icon name='close' onPress={() => removeMedication(index)} />
              </View>
            );
          })}
      </View>
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Medication'
          onPress={() => setShowAddMedicine(true)}
        />
      </View>
    </View>
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
      margin: 0,
    },
    avatar: {
      width: 75,
      height: 75,
    },
    avatarView: {
      flexDirection: 'row',
      marginTop: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    divider: {
      height: 1,
      backgroundColor: '#816868',
      marginVertical: 20,
    },
    categoryText: {
      marginVertical: 6,
      marginHorizontal: 16,
      color: '#F5F5F5',
      fontSize: 16,
    },
    categoryView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4CB97A',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginHorizontal: 2,
    },
    heading: {
      color: '#4CB97A',
      fontSize: 20,
      fontWeight: 'bold',
    },
    iconView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    inlineRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    text: {
      color: '#816868',
      fontSize: 16,
      textAlign: 'center',
    },
    pageDescription: {
      color: '#816868',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      fontWeight: 'bold',
      marginRight: 20,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
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
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
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
    textReg: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      textDecorationLine: 'none',
      textAlign: 'left',
    },
  });
