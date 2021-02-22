import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const ToDoList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Use this to-do list to keep track of upcoming tasks. Let's do our best
          to have another productive day!
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
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
      <NavBar todo={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export { ToDoList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
});
