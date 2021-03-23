import React from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

const Mood = ({ type }) => {
  return (
    <View>
      <Image />
      <Text>{type}</Text>
    </View>
  );
};

const Medicine = (title, time, interval) => {
  return <View>{/* draw medication selection*/}</View>;
};

const Stress = (level) => {
  return <View>{/* draw the stress level */}</View>;
};

const HealthEntry = ({ navigation }) => {
  var stress_level = 0;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Modal>
        <Text>Add Feelings</Text>
      </Modal>
      <Modal>
        <Text>Add Stressors</Text>
      </Modal>
      <Modal>
        <Text>Add Activities</Text>
      </Modal> */}
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
        <View>
          <Text>Time for a new health entry!</Text>
          <Text>After you save your entry, you may edit it at any time.</Text>
        </View>
      </View>
      <View>
        <Text>SELECT DATE & TIME</Text>
        <View>
          <Text>Add date here</Text>
          <Text>Add time here</Text>
        </View>
      </View>
      <View>
        <Text>MOOD</Text>
        <View>
          <Mood type='awful' />
          <Mood type='bad' />
          <Mood type='Okay' />
          <Mood type='Good' />
          <Mood type='Great' />
        </View>
        <Button title='+ Add Feelings' />
      </View>
      <View>
        <Text>STRESS</Text>
        <Stress level={stress_level} />
        <Button title='+ Add Stressors' />
      </View>
      <View>
        <Text>DAILY ACTIVITIES</Text>
        <Text>What activities did you participate in today?</Text>
        <Button title='+ Add Activities' />
      </View>
      <View>
        <Button title='Next >' />
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HealthEntry;

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
