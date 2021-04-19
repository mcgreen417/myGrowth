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
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';
import { Picker } from '@react-native-picker/picker';

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

const preTasks = [
  { taskName: 'Task 1', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 2', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 3', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 4', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 5', taskDate: '2021-03-05T12:00:00Z' },
  { taskName: 'Task 6', taskDate: '2021-03-05T12:00:00Z' },
];

const AddTask = ({
  modalVisible,
  setModalVisible,
  currentItem,
  setCurrentItem,
  selectReminder,
  setSelectReminder,
  onModal,
  hideView,
}) => {
  return (
    <Pressable>
      <View style={styles().modalView}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Icon 
            name='star-outline' 
            color='#816868'
            style={{ marginRight: 4, }} 
          />
          <TextInput
            placeholder={currentItem.taskName}
            placeholderTextColor='#816868'
            color='#816868'
            style={{
              borderColor: '#816868',
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 4,
              width: '90%',
              paddingLeft: 6,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginBottom: 4, }}>
          <Icon 
            name='notes'
            color='#816868'
            style={{ marginRight: 4, }}  
          />
          <Text style={styles().heading}>NOTES</Text>
        </View>
          <TextInput
            multiline
            numberOfLines={4}
            style={{
              borderColor: '#816868',
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 4,
              width: '100%',
              paddingLeft: 6,
            }}
            placeholder='Add an optional task description...'
            placeholderTextColor='#816868'
            color='#816868'
          />
        <View style={{ alignSelf: 'flex-start', marginTop: 20, marginBottom: 10, }}>
          <Text style={styles().heading}>DUE DATE</Text>
          <View style={{ flexDirection: 'row', marginTop: 8, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
              <Icon 
                name='event' 
                color='#816868'
                style={{ marginRight: 4, }} 
              />
              <Text style={styles().textLink}>{getDate(new Date(currentItem.taskDate))}</Text>
              <Icon 
                name='arrow-drop-down' 
                type='material' 
                color='#816868'
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
              <Icon 
                name='schedule' 
                color='#816868'
                style={{ marginRight: 4, }} 
              />
              <Text style={styles().textLink}>{getTime(new Date(currentItem.taskDate))}</Text>
              <Icon 
                name='arrow-drop-down' 
                type='material' color='#816868'
              />
            </View>
          </View>
        </View>
        <View style={{ alignSelf: 'flex-start', marginVertical: 10, }}>
          <Text style={styles().heading}>REMINDER</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', }}>
          <View style={{ flexDirection: 'row', width: '50%', }}>
            <View style={styles().pickerView}>
              <Picker
                style={styles().picker}
                selectedValue={selectReminder}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectReminder(itemValue)
                }
                mode={'dropdown'}>
                <Picker.Item label='1 hour' value='1_hour' />
                <Picker.Item label='6 hours' value='6_hours' />
                <Picker.Item label='12 hours' value='12_hours' />
                <Picker.Item label='1 day' value='1_day' />
                <Picker.Item label='3 days' value='3_days' />
                <Picker.Item label='1 week' value='1_week' />
              </Picker>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ width: '22%' }}/>
            <Text style={styles().heading} onPress={() => hideView(false)}>{onModal}</Text>
            <View style={{ width: '10%' }}/>
            <Text style={styles().heading}>SAVE</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const ToDoList = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    taskName: 'No Task',
    taskDate: '2021-03-05T12:00:00Z',
  });
  const [selectReminder, setSelectReminder] = useState();

  const [tasks, setTasks] = useState(preTasks);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
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
            backgroundColor: '#00000050',
          }}>
          <AddTask
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            selectReminder={selectReminder}
            setSelectReminder={setSelectReminder}
            onModal='DELETE'
            hideView={setModalVisible}
          />
        </Pressable>
      </Modal>
      
      {/* Gardener avatar + page blurb */}
      <View style={styles().avatarView}>
        <Text style={styles().pageDescription}>
          Use this to-do list to keep track of upcoming tasks. Let's have
          another productive day!
        </Text>
        <Image
          style={styles().avatarFlipped}
          source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
        />
      </View>
      <View style={styles().divider} />

      {/* Category listing */}
      <View style={{ flexDirection: 'row', marginHorizontal: '3%' }}>
        <Icon name='chevron-back' type='ionicon' color='#816868' />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ width: '82%', }}>
          <View style={styles().categoryView}>
            <Text style={styles().categoryText}>School</Text>
          </View>
          <View style={styles().categoryView}>
            <Text style={styles().categoryText}>Work</Text>
          </View>
          <View style={styles().categoryView}>
            <Text style={styles().categoryText}>Chores</Text>
          </View>
          <View style={styles().categoryView}>
            <Text style={styles().categoryText}>Games</Text>
          </View>
          <View style={styles().categoryView}>
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
        <View style={styles().iconView}>
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
                    backgroundColor: '#816868',
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
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8, }}>
                    <Icon 
                      name='star-outline' 
                      color='#A5DFB2'
                      style={{ marginRight: 4, }}
                    />
                    <Text style={styles().headingAlt}>{item.taskName}</Text>
                  </View>
                  <View>
                    <View style={{ flexDirection: 'row', }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                          marginRight: 8,
                        }}>
                        <Icon 
                          name='event'
                          color='#A5DFB2'
                          style={{ marginRight: 4, }} 
                        />
                        <Text style={styles().textAlt}>{getDate(new Date(item.taskDate))}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <Icon 
                          name='schedule' 
                          color='#A5DFB2'
                          style={{ marginRight: 4, }}
                        />
                        <Text style={styles().textAlt}>{getTime(new Date(item.taskDate))}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
        <View style={{ marginLeft: 20, width: '40%', }}>
          {!showAddTask && (
            <Button
              title='+ Add New Task'
              onPress={() => setShowAddTask(true)}
              color={global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor}
            />
          )}
        </View>
        
        {showAddTask && (
          <AddTask
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            selectReminder={selectReminder}
            setSelectReminder={setSelectReminder}
            onModal='CLOSE'
            hideView={setShowAddTask}
          />
        )}
        <View style={{ marginBottom: 60, }} />
      </ScrollView>
      <NavBar todo={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export { ToDoList };

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    margin: 0,
  },
  avatarFlipped: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    transform: [
      { scaleX: -1 }
    ]
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
    marginHorizontal: 20,
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
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingAlt: {
    color: '#F5F5F5',
    fontSize: 16,
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
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 10,
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
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    borderRadius: 10,
    padding: 10,
    paddingBottom: -10,
    paddingTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 7,
  },
  picker: {
    height: 32,
    width: '100%',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    backgroundColor: '#f4f3f4',
  },
  text: {
    color: '#816868',
    fontSize: 16,
  },
  textAlt: {
    color: '#F5F5F5',
    fontSize: 16,
  },
  textLink: {
    color: '#4CB97A',
    fontSize: 16,
    textDecorationLine: 'underline'
  },
});
