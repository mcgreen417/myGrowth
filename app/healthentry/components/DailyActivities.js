import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DailyActivities = () => {
  return (
    <View style={{ width: '80%' }}>
      <Text>Daily Activities</Text>
      <Text>What activities did you participate in today?</Text>
      <View style={{ width: '50%' }}>
        <Button title='+ Add Activities' />
      </View>
    </View>
  );
};

export default DailyActivities;

const styles = StyleSheet.create({});
