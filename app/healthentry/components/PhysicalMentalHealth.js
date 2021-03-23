import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
} from 'react-native';

const PhysicalMentalHealth = () => {
  const [hadPeriod, setHadPeriod] = useState(false);

  return (
    <View style={{ width: '80%' }}>
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
          style={{ borderBottomColor: '#C4BEBD', borderBottomWidth: 1 }}
        />
        <Text>lbs</Text>
      </View>
      <Text>
        Have you experienced any unusual physical or mental health symptoms
        today?
      </Text>
      <View style={{ width: '50%' }}>
        <Button title='+ Add Symptoms' />
      </View>
    </View>
  );
};

export default PhysicalMentalHealth;

const styles = StyleSheet.create({});
