import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const medication = [
  { name: '(Medicine 1)', time: '2021-03-15T09:10:00Z' },
  { name: '(Medicine 2)', time: '2021-03-15T13:35:40Z' },
];

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

const Medication = ({ med, setMed }) => {
  return (
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>MEDICATION</Text>
      <Text style={styles().text}>Have you taken the following medications today?</Text>

      
      <View style={{ marginTop: 20, }}>
        {medication.map((item, index) => {
          console.log(index);
          console.log(med[index]);
          return (
            <View>
              <View style={styles().line}/>
              <View
                style={{ flexDirection: 'row', alignItems: 'center' }}
                key={index}>
                <Text style={styles().textLink}>{item.name}</Text>
                <Text style={styles().text}> at </Text>
                <Icon 
                  name='schedule' 
                  color={global.colorblindMode 
                    ? global.cb_textColor 
                    : global.textColor}
                  style={{ marginLeft: 2, marginRight: 4, }}
                />
                <Text style={styles().textLink}>{getTime(new Date(item.time))}</Text>
                <Icon 
                  name='arrow-drop-down'
                  color={global.colorblindMode 
                    ? global.cb_textColor 
                    : global.textColor} 
                />
                <View style={styles().switchView}>
                  <View style={styles().line2}/>
                  <Switch
                    trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                    thumbColor={med[index] ? '#4CB97A' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={() => {
                      let newMed = [...med];
                      newMed[index] = !med[index];
                      setMed(newMed);
                    }}
                    value={med[index]}
                    style={{ marginLeft: 8 }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles().line}/>

      <View style={{ width: '40%', marginTop: 20, }}>
        <Button 
          title='+ Add Medication' 
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
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline'
    },
  });
