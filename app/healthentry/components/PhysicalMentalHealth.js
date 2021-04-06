import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';

const AddSymptomsModal = ({ symptoms, setSymptoms }) => {
  const [symptomTitle, setSymptomTitle] = useState('');
  const [symptomSeverity, setSymptomSeverity] = useState('');

  return (
    <Pressable>
      {console.log(symptoms)}
      <View style={styles().modalView}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Symptom Title</Text>
          <TextInput
            placeholder='Symptom'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
            }}
            keyboardType='default'
            value={symptomTitle}
            onChangeText={setSymptomTitle}
          />
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Symptom Severity</Text>
          <TextInput
            placeholder='Symptom'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
            }}
            keyboardType='number-pad'
            value={symptomSeverity}
            onChangeText={setSymptomSeverity}
          />
        </View>
        <View style={{ width: '50%' }}>
          <Button
            title='Add Symptom'
            onPress={() => {
              let symptom = {
                Title: symptomTitle,
                Severity: parseInt(symptomSeverity),
              };
              let temp = new Array(symptom).concat(symptoms);
              console.log('temp:', temp);
              setSymptoms(temp);
              console.log('symptoms', symptoms);
              console.log('symptoms', symptoms);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const PhysicalMentalHealth = ({
  hadPeriod,
  setHadPeriod,
  weight,
  setWeight,
  symptoms,
  setSymptoms,
}) => {
  const [showAddSymptom, setShowAddSymptom] = useState(false);

  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showAddSymptom}
        onRequestClose={() => {
          setShowAddSymptom(!showAddSymptom);
        }}>
        <Pressable
          onPressOut={() => setShowAddSymptom(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <AddSymptomsModal symptoms={symptoms} setSymptoms={setSymptoms} />
        </Pressable>
      </Modal>
      <Text>Physical & Mental Health</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Did you have your period today?</Text>
        <Switch
          trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
          thumbColor={hadPeriod ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setHadPeriod(!hadPeriod)}
          value={hadPeriod}
        />
      </View>
      <Text>
        If you have weighed yourself today, how much do you weigh? (Leave field
        blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
          }}
          keyboardType='number-pad'
          value={weight}
          onChangeText={setWeight}
        />
        <Text>lbs</Text>
      </View>
      <Text>
        Have you experienced any unusual physical or mental health symptoms
        today?
      </Text>
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Symptoms'
          onPress={() => setShowAddSymptom(true)}
        />
      </View>
    </View>
  );
};

export default PhysicalMentalHealth;

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
