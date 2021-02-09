import React from 'react';
import {
  StyleSheet,
  SafeView,
  Text,
  View,
  Button,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Goal = (title, description, type) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text>{title}</Text>
      <Button title='X' />
    </View>
  );
};

const Goals = () => {
  return (
    <SafeView>
      <Modal>
        <Text>Add Create New Goals Here</Text>
      </Modal>
      <View>
        <View>
          <Text>Daily Goals</Text>
          <Text>{time} until reset</Text>
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
          <Text>{time} until reset</Text>
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
    </SafeView>
  );
};

const GoalsCompletion = () => {
  return (
    <SafeView>
      <View>
        <Image source={require('../../assets/icon.png')} />
      </View>
      <View>
        <Image source={require('../../assets/icon.png')} />
        <Text>You have completed a goal!</Text>
        <Text>+30 stars</Text>
      </View>
      <View>
        <Button title='Return to Goals' />
        <Button title='Return to Home' />
      </View>
    </SafeView>
  );
};

export { Goals, GoalsCompletion };

const styles = StyleSheet.create({});
