import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Switch } from 'react-native-gesture-handler';

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

const Medication = () => {
  const [med, setMed] = useState(Array(medication.length).fill(false));
  console.log(med);

  return (
    <View>
      <Text>Medication</Text>
      <Text>Have you taken the following medications today?</Text>
      <View>
        {medication.map((item, index) => {
          console.log(index);
          console.log(med[index]);
          return (
            <View
              style={{ flexDirection: 'row', alignItems: 'center' }}
              key={index}>
              <Text>{item.name} at </Text>
              <Icon name='schedule' />
              <Text>{getTime(new Date(item.time))}</Text>
              <Icon name='arrow-drop-down' />
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
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Medication;

const styles = StyleSheet.create({});
