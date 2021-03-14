import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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

      {/* Category listing */}
      <View>
        <Button title='<' />
        <Button title='Categories' />
        <Button title='>' />
      </View>

      {/* Task listing */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Button title='task1' />
          <Button title='task2' />
          <Button title='task3' />
          <Button title='task4' />
        </View>
      </ScrollView>
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
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  fillerImage: {
    width: 340,
    height: 240,
    marginTop: -20,
  },
  categoryText: { 
    marginVertical: 8, 
    marginHorizontal: 12, 
    color: '#F5F5F5', 
    fontSize: 16,
  },
  categoryView: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#4CB97A', 
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-end',
  },
  inlineRow3: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-start',
  },
  line: {
    borderColor: '#816868',
    borderBottomWidth: 1,
    minHeight: 1,
    width: '90%',
  },
  line2: {
    borderColor: '#816868',
    borderRightWidth: 1,
    minHeight: 28,
    marginTop: 4,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  text: {
    color: '#816868',
    fontSize: 16,
    textAlign: 'center',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 20,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
