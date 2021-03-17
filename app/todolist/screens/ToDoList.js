import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Modal } from 'react-native';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDate(d) {
  return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

const tasks = [
  { taskName: 'Task 1', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 2', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 3', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 4', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 5', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 6', taskDate: '2021-03-05T12:00:00Z' },
];

const ToDoList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    taskName: 'No Task',
    taskDate: '2021-03-05T12:00:00Z',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPressOut={() => setModalVisible(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Pressable>
            <View style={styles.modalView}>
              <Text>{currentItem.taskName}</Text>
              <Text>{getDate(new Date(currentItem.taskDate))}</Text>
              <Text>{getTime(new Date(currentItem.taskDate))}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
      {/* Gardener avatar + page blurb */}
      <View style={styles.avatarView}>
        <Text style={styles.pageDescription}>
          Use this to-do list to keep track of upcoming tasks. Let's have
          another productive day!
        </Text>
        <Image
          style={styles.avatar}
          source={require('../../shared/assets/gardener-avatar.png')}
        />
      </View>
      <View style={styles.divider} />

      {/* Category listing */}
      <View style={styles.inlineRow}>
        <Icon name='chevron-back' type='ionicon' color='#816868' />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ width: '82%' }}>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>School</Text>
          </View>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Work</Text>
          </View>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Chores</Text>
          </View>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>Games</Text>
          </View>
          <View style={styles.categoryView}>
            <Text
              style={{
                marginVertical: 6,
                marginLeft: 16,
                marginRight: 6,
                color: '#F5F5F5',
                fontSize: 16,
              }}>
              Add Tab
            </Text>
            <Icon
              name='plus-circle'
              type='feather'
              color='#F5F5F5'
              style={{ marginRight: 12 }}
            />
          </View>
        </ScrollView>
        <View style={styles.iconView}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name='chevron-forward' type='ionicon' color='#816868' />
          </View>
        </View>
      </View>

      {/* Task listing */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
          marginBottom: 50,
        }}>
        <View>
          {tasks.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setModalVisible(true);
                  setCurrentItem(item);
                }}>
                <View
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 20,
                    backgroundColor: '#E5E5E5',
                    padding: 10,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 4.65,

                    elevation: 7,
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name='star-outline' />
                    <Text>{item.taskName}</Text>
                  </View>
                  <View>
                    <Text>Due Date</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <Icon name='event' />
                        <Text>{getDate(new Date(item.taskDate))}</Text>
                        <Icon name='arrow-drop-down' type='material' />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <Icon name='schedule' />
                        <Text>{getTime(new Date(item.taskDate))}</Text>
                        <Icon name='arrow-drop-down' type='material' />
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
          <View style={{ height: 30 }} />
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
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    margin: 0,
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  divider: {
    height: 1,
    backgroundColor: '#816868',
    marginVertical: 20,
  },
  categoryText: {
    marginVertical: 6,
    marginHorizontal: 16,
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
    marginHorizontal: 2,
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
    width: '100%',
    alignItems: 'center',
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
