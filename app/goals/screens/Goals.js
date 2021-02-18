import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const Goal = ({ title, description, type }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{title}</Text>
      <Button title='X' />
    </View>
  );
};

const Goals = ({ navigation }) => {
  var time = new Date();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Modal>
        <Text>Add Create New Goals Here</Text>
      </Modal> */}
      <View>
        <View>
          <Text>Daily Goals</Text>
          <Text>{time.toLocaleString()} until reset</Text>
        </View>
        <View>
          <Goal
            title='Write a health entry'
            description='description 1'
            type='daily'
          />
          <Goal
            title='Write a journal entry'
            description='description 2'
            type='daily'
          />
          <Goal
            title='Consume 1200 calories total'
            description='description 3'
            type='daily'
          />
          <Goal
            title='Take medicine'
            description='description 4'
            type='daily'
          />
        </View>
        <View>
          <Button title='New Goal +' />
        </View>
      </View>
      <View>
        <View>
          <Text>Weekly Goals</Text>
          <Text>{time.toLocaleString()} until reset</Text>
        </View>
        <View>
          <Goal
            title='Exercise for 30m'
            description='description 1'
            type='weekly'
          />
          <Goal title='Read for 1h' description='description 2' type='weekly' />
          <Goal title='Go to class' description='description 3' type='weekly' />
          <Goal title='Go to work' description='description 4' type='weekly' />
          <Goal
            title='Study for 3h'
            description='description 5'
            type='weekly'
          />
        </View>
        <View>
          <Button title='New Goal +' />
        </View>
      </View>
      <NavBar goals={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const GoalsCompletion = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
        <Text>You have completed a goal!</Text>
        <Text>+30 stars</Text>
      </View>
      <View>
        <Button title='Return to Goals' />
        <Button title='Return to Home' />
      </View>
    </SafeAreaView>
  );
};

export { Goals, GoalsCompletion };

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
