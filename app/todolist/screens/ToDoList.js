import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const AddNewTask = () => {
  return <View>{/* add modal for adding tasks */}</View>;
};

const ToDoList = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Use this to-do list to keep track of upcoming tasks. Let's do our best
          to have another productive day!
        </Text>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Button title='<' />
        <Button title='Categories' />
        <Button title='>' />
      </View>
      <View>
        <Button title='task1' />
        <Button title='task2' />
        <Button title='task3' />
        <Button title='task4' />
      </View>
    </SafeAreaView>
  );
};

export { ToDoList };

const styles = StyleSheet.create({});
