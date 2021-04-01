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
          <Text style={styles().text}>Symptom:</Text>
          <TextInput
            placeholder='Symptom Name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 150,
              marginLeft: 10,
            }}
            keyboardType='default'
            value={symptomTitle}
            onChangeText={setSymptomTitle}
          />
        </View>
        
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10, }}>
          <Text style={styles().text}>Symptom Severity:</Text>
          <TextInput
            placeholder='#'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
              marginHorizontal: 10,
            }}
            keyboardType='number-pad'
            value={symptomSeverity}
            onChangeText={setSymptomSeverity}
          />
          <Text style={styles().textLight}>(1-10)</Text>
        </View>

        <View style={{ width: '50%', marginVertical: 20, }}>
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
            color={
              global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
            }
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
    <View style={{ width: '90%' }}>
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

      <Text style={styles().heading}>PHYSICAL & MENTAL HEALTH</Text>

      <View style={{ marginTop: 10, }}/>
      <View style={styles().line}/>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Text style={styles().textLight}>Did you have your period today?</Text>
        <View style={styles().switchView}>
          <View style={styles().line2}/>
          <Switch
            trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
            thumbColor={hadPeriod ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => setHadPeriod(!hadPeriod)}
            value={hadPeriod}
            style={{ marginLeft: 8, }}
          />
        </View>
      </View>
      <View style={styles().line}/>
      <View style={{ marginBottom: 20, }}/>

      <Text style={styles().textLight}>
        If you have weighed yourself today, how much do you weigh? (Leave field
        blank if you are unsure.)
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20, }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 50,
          }}
          keyboardType='number-pad'
          value={weight.toString()}
          onChangeText={(val) => setWeight(parseInt(val))}
        />
        <Text style={styles().textLight}> lbs</Text>
      </View>

      <Text style={styles().textLight}>
        Have you experienced any unusual physical or mental health symptoms today?
      </Text>

      <View style={{ width: '40%', marginTop: 20, }}>
        <Button
          title='+ Add Symptoms'
          onPress={() => setShowAddSymptom(true)}
          color={
            global.colorblindMode
            ? global.cb_optionButtonsColor
            : global.optionButtonsColor
          }
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
    },
    heading: {
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
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
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textLight: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
    },
  });
