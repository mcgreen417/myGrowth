import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
  Dimensions,
  Button,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';
import NavBar from '../../shared/components/NavBar';

const GoalEditModal = ({title, goals, timestamp, userGoals, setUserGoals, editModal, setEditModal, navigation}) => {
  const [goalTitle, setGoalTitle] = useState('');
  const [pressed, setPressed] = useState(false);

  return( 
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Feelings modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={editModal}
            onRequestClose={() => setEditModal(!editModal)}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => {
                setPressed(false);
                setEditModal(!editModal);
              }}
              >
              <Pressable 
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setEditModal(true);
                }}
              >
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      name='pencil'
                      type='material-community'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Edit Goal</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        testID='closeButton'
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setEditModal(!editModal)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 20, }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text style={{
                            color: pressed 
                              ? '#4CB97A'
                              : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>New Goal Name</Text>
                      </View>
                      <View style={{
                          flex: 1, 
                          borderWidth: 1, 
                          borderColor: pressed
                            ? '#4CB97A'
                            : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput 
                          placeholder={title}
                          testID='editText'
                          fontSize={16}
                          color='#816868'
                          value={goalTitle}
                          onChangeText={(goalTitle) => setGoalTitle(goalTitle)}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8, }}
                          editable={true}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center', }}>
                    <Button
                      title='Edit Goal'
                      testID='editButton'
                      onPress={() => {
                        editGoal(title, goals, timestamp, goalTitle, userGoals, setUserGoals, navigation);
                        setEditModal(!editModal);
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Goal = ({ goals, title, type, timestamp, progress, completed, userGoals, setUserGoals, navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(completed);
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const progrArr = new Array(progress).fill('line');

  return (
    <View>
      {/* Delete goal modal */}
      <View style={styles().container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={deleteEntry}
          onRequestClose={() => setDeleteEntry(!deleteEntry)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setDeleteEntry(!deleteEntry)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setDeleteEntry(true)}              
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='star'
                    type='material-community'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Delete Goal</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <Text style={styles().text}>
                  Are you sure you wish to delete the goal   
                  <Text style={styles().textBoldAlt}> "{title}"</Text>
                  ?
                </Text>
                <Text style={styles().textBoldAlt}>This action cannot be undone.</Text>
              </View>
              <View 
                style={{ 
                  flexDirection: 'row', 
                  alignSelf: 'flex-end', 
                  marginVertical: 10, 
                  marginHorizontal: '5%', 
                }}>
                <TouchableOpacity 
                  style={{ marginRight: 20, }}
                  onPress={() => {
                    deleteGoal(title, goals, timestamp, userGoals, setUserGoals, navigation);
                    setDeleteEntry(!deleteEntry);
                  }}>
                  <Text style={styles().textDateTime}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteEntry(!deleteEntry)}>
                  <Text style={styles().textDateTime}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      <GoalEditModal 
        goals={goals}
        title={title}
        timestamp={timestamp}
        userGoals={userGoals}
        setUserGoals={setUserGoals}
        editModal={editModal}
        setEditModal={setEditModal}
        navigation={navigation}
      />

      <View style={{ 
        flexDirection: 'row',
        width: '90%',
        alignItems: 'flex-start',
        alignSelf: 'center', 
        marginVertical: 4,
      }}>
        <Icon
          name={toggleCheckBox
            ? 'check-box'
            : 'check-box-outline-blank'
          }
          type='MaterialIcons'
          color={toggleCheckBox
            ? '#4CB97A'
            : '#816868'
          }
          onPress={() => {
            if (!toggleCheckBox) {
              setToggleCheckBox(true);
              updateCompletion(title, userGoals, setUserGoals, navigation);
            } else {
              setToggleCheckBox(false);
            }
          }}
        />
        <View style={{ marginRight: 8 }}/>
        {!toggleCheckBox &&
          <Text style={styles().textGoal}>{title}</Text>
        }
        {toggleCheckBox &&
          <Text style={styles().textStrikethrough}>{title}</Text>
        }

        <View style={styles().iconView}>
          <View style={{ flexDirection: 'row' }}>
            <Icon 
              name='pencil' 
              type='material-community' 
              color={toggleCheckBox 
                ? '#D5CDCD'
                : '#816868'
              } 
              onPress={() => {
                if (!toggleCheckBox) {
                  setEditModal(!editModal)
                }
              }}
            />
            <Icon 
              name='close' 
              type='ionicon' 
              color='#816868' 
              onPress={() => setDeleteEntry(!deleteEntry)}
            />
          </View>
        </View>
      </View>

      {type === 'weekly' && 
        <View style={{ flexDirection:'row', marginLeft: '13%', marginTop: 4, marginBottom: 16, }}>
          {progrArr.map((item, index) => (         
            <View key={index} style={styles().progressBar} />
          ))}
        </View>
      }
    </View>
  );
};

const AddDailyGoalModal = ({
  goals,
  userDailies, 
  setUserDailies, 
  type,
  showAddDailyGoals, 
  setShowAddDailyGoals,
  navigation
}) => {
  const [goalTitle, setGoalTitle] = useState('');
  const [pressed, setPressed] = useState(false);

  return( 
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Daily Goal modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddDailyGoals}
            onRequestClose={() => setShowAddDailyGoals(!showAddDailyGoals)}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddDailyGoals(!showAddDailyGoals)}
              >
              <Pressable 
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddDailyGoals(true);
                }}
              >
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      name='star'
                      type='material-community'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Daily Goal</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowAddDailyGoals(!showAddDailyGoals)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 20, }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text style={{
                            color: pressed 
                              ? '#4CB97A'
                              : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>Daily Goal Name</Text>
                      </View>
                      <View style={{
                          flex: 1, 
                          borderWidth: 1, 
                          borderColor: pressed
                            ? '#4CB97A'
                            : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput 
                          placeholder='Daily goal name'
                          fontSize={16}
                          color='#816868'
                          value={goalTitle}
                          onChangeText={(goalTitle) => setGoalTitle(goalTitle)}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8, }}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Daily Goal button */}
                  <View style={{ alignSelf: 'center', }}>
                    <Button
                      title='Add Daily Goal'
                      onPress={() => {
                        addGoal(type, goalTitle, goals, userDailies, setUserDailies, navigation);
                        setShowAddDailyGoals(!showAddDailyGoals);
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const AddWeeklyGoalModal = ({
  goals,
  userWeeklies, 
  setUserWeeklies, 
  type,
  showAddWeeklyGoals, 
  setShowAddWeeklyGoals,
  navigation,
}) => {
  const [goalTitle, setGoalTitle] = useState('');
  const [pressed, setPressed] = useState(false);

  return( 
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Weekly Goal modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddWeeklyGoals}
            onRequestClose={() => setShowAddWeeklyGoals(!showAddWeeklyGoals)}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddWeeklyGoals(!showAddWeeklyGoals)}
              >
              <Pressable 
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddWeeklyGoals(true);
                }}
              >
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      name='star'
                      type='material-community'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Weekly Goal</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowAddWeeklyGoals(!showAddWeeklyGoals)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 20, }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text style={{
                            color: pressed 
                              ? '#4CB97A'
                              : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>Weekly Goal Name</Text>
                      </View>
                      <View style={{
                          flex: 1, 
                          borderWidth: 1, 
                          borderColor: pressed
                            ? '#4CB97A'
                            : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput 
                          placeholder='Weekly goal name'
                          fontSize={16}
                          color='#816868'
                          value={goalTitle}
                          onChangeText={(goalTitle) => setGoalTitle(goalTitle)}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8, }}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Weekly Goal button */}
                  <View style={{ alignSelf: 'center', }}>
                    <Button
                      title='Add Weekly Goal'
                      onPress={() => {
                        addGoal(type, goalTitle, goals, userWeeklies, setUserWeeklies,  navigation);
                        setShowAddWeeklyGoals(!showAddWeeklyGoals);
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const AddLongTermGoalModal = ({
  goals,
  userLongTerms, 
  setUserLongTerms, 
  type,
  showAddLongTermGoals, 
  setShowAddLongTermGoals,
  navigation,
}) => {
  const [goalTitle, setGoalTitle] = useState('');
  const [pressed, setPressed] = useState(false);

  return( 
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Long-Term Goal modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddLongTermGoals}
            onRequestClose={() => setShowAddLongTermGoals(!showAddLongTermGoals)}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddLongTermGoals(!showAddLongTermGoals)}
              >
              <Pressable 
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddLongTermGoals(true);
                }}
              >
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      name='star'
                      type='material-community'
                      color='white'
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Long-Term Goal</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowAddLongTermGoals(!showAddLongTermGoals)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 20, }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text style={{
                            color: pressed 
                              ? '#4CB97A'
                              : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>Long-Term Goal Name</Text>
                      </View>
                      <View style={{
                          flex: 1, 
                          borderWidth: 1, 
                          borderColor: pressed
                            ? '#4CB97A'
                            : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput 
                          placeholder='Long-term goal name'
                          fontSize={16}
                          color='#816868'
                          value={goalTitle}
                          onChangeText={(goalTitle) => setGoalTitle(goalTitle)}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8, }}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Long-Term Goal button */}
                  <View style={{ alignSelf: 'center', }}>
                    <Button
                      title='Add Long-Term Goal'
                      onPress={() => {
                        addGoal(type, goalTitle, goals, userLongTerms, setUserLongTerms, navigation);
                        setShowAddLongTermGoals(!showAddLongTermGoals);
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

function Goals({ navigation, route }) {
  const goals = route.params.goals;
  const goalsObj = populateGoals(goals);
  const countDown = new Date();  

  const [userDailies, setUserDailies] = useState(goalsObj.dailies);
  const [userWeeklies, setUserWeeklies] = useState(goalsObj.weeklies);
  const [userLongTerms, setUserLongTerms] = useState(goalsObj.longterms);

  const [showDailyGoals, setShowDailyGoals] = useState(true);
  const [showWeeklyGoals, setShowWeeklyGoals] = useState(true);
  const [showLongTermGoals, setShowLongTermGoals] = useState(true);
  const [showDailyGoalsInfo, setShowDailyGoalsInfo] = useState(false);
  const [showWeeklyGoalsInfo, setShowWeeklyGoalsInfo] = useState(false);
  const [showLongTermGoalsInfo, setShowLongTermGoalsInfo] = useState(false);

  const [showAddDailyGoals, setShowAddDailyGoals] = useState(false);
  const [showAddWeeklyGoals, setShowAddWeeklyGoals] = useState(false);
  const [showAddLongTermGoals, setShowAddLongTermGoals] = useState(false);

  return (
    <SafeAreaView style={styles().container}>

      {/* Daily Goals info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showDailyGoalsInfo}
          onRequestClose={() => setShowDailyGoalsInfo(!showDailyGoalsInfo)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowDailyGoalsInfo(!showDailyGoalsInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowDailyGoalsInfo(true)}
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Daily Goals</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      marginRight: 6,
                    }}>
                    <Icon
                      name='close'
                      type='ionicon'
                      color='white'
                      onPress={() => setShowDailyGoalsInfo(!showDailyGoalsInfo)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginTop: 10,
                  marginBottom: 16,
                }}>
                <Text style={styles().textInfo}>
                  Daily goals are goals that you want to aim to complete every day!
                </Text>
                <Text style={styles().textInfo}>
                  Daily goals will reset at midnight each day. Be sure to check back in if you've
                  completed a goal before then!
                </Text>
                <Text style={styles().textInfo}>
                  You may receive rewards for up to five daily goals per day, although you may
                  track additional goals for your own personal progress.
                </Text>
                <Text style={styles().textBoldAlt}>
                  Completion rewards +5
                  <Icon
                    name='star'
                    type='material-community'
                    color='#816868'
                    size={16}
                  />
                  {' '}per goal on a daily basis.
                </Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Weekly Goals info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showWeeklyGoalsInfo}
          onRequestClose={() => setShowWeeklyGoalsInfo(!showWeeklyGoalsInfo)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowWeeklyGoalsInfo(!showWeeklyGoalsInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowWeeklyGoalsInfo(true)}
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Weekly Goals</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      marginRight: 6,
                    }}>
                    <Icon
                      name='close'
                      type='ionicon'
                      color='white'
                      onPress={() => setShowWeeklyGoalsInfo(!showWeeklyGoalsInfo)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginTop: 10,
                  marginBottom: 16,
                }}>
                <Text style={styles().textInfo}>
                  Daily goals are goals that you want to aim to complete a certain number of 
                  times each week!
                </Text>
                <Text style={styles().textInfo}>
                  Weekly goals will reset every Sunday at midnight. Be sure to check back in if you've
                  completed a goal before then!
                </Text>
                <Text style={styles().textInfo}>
                  You may receive rewards for up to five sets of weekly goals per week, although you may
                  track additional goals for your own personal progress.
                </Text>
                <Text style={styles().textBoldAlt}>
                  Completion rewards +5
                  <Icon
                    name='star'
                    type='material-community'
                    color='#816868'
                    size={16}
                  />
                  {' '}per goal for each day of progress, and an additional one-time reward of +10
                  <Icon
                    name='star'
                    type='material-community'
                    color='#816868'
                    size={16}
                  />
                  {' '}for full weekly completion.
                </Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Long-Term Goals info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showLongTermGoalsInfo}
          onRequestClose={() => setShowLongTermGoalsInfo(!showLongTermGoalsInfo)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowLongTermGoalsInfo(!showLongTermGoalsInfo)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowLongTermGoalsInfo(true)}
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Long-Term Goals</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      marginRight: 6,
                    }}>
                    <Icon
                      name='close'
                      type='ionicon'
                      color='white'
                      onPress={() => setShowLongTermGoalsInfo(!showLongTermGoalsInfo)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginTop: 10,
                  marginBottom: 16,
                }}>
                <Text style={styles().textInfo}>
                  Long-term goals are goals that you want to aim to complete in the distant future!
                </Text>
                <Text style={styles().textInfo}>
                  Long-term goals will never reset and will remain in your history until you choose
                  to delete them.
                </Text>
                <Text style={styles().textInfo}>
                  You may receive rewards for up to three long-term goals per month, although you may
                  track additional goals for your own personal progress.
                </Text>
                <Text style={styles().textBoldAlt}>
                  Completion rewards +100
                  <Icon
                    name='star'
                    type='material-community'
                    color='#816868'
                    size={16}
                  />
                  {' '}per goal.
                </Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Daily Goals add */}
      <AddDailyGoalModal 
        goals={goals}
        userDailies={userDailies}
        setUserDailies={setUserDailies}
        type={'daily'}
        showAddDailyGoals={showAddDailyGoals} 
        setShowAddDailyGoals={setShowAddDailyGoals}
        navigation={navigation}
      />

      {/* Weekly Goals add */}
      <AddWeeklyGoalModal 
        goals={goals}
        userWeeklies={userWeeklies}
        setUserWeeklies={setUserWeeklies}
        type={'weekly'}
        showAddWeeklyGoals={showAddWeeklyGoals}
        setShowAddWeeklyGoals={setShowAddWeeklyGoals}
        navigation={navigation}
      />

      {/* Long Term Goals add */}
      <AddLongTermGoalModal 
        goals={goals}
        userLongTerms={userLongTerms}
        setUserLongTerms={setUserLongTerms}
        type={'longterm'}
        showAddLongTermGoals={showAddLongTermGoals}
        setShowAddLongTermGoals={setShowAddLongTermGoals}
        navigation={navigation}
      />

      {/* Start of the Goals page */}
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        {/* Gardener avatar + page blurb */}
        <View style={styles().avatarView}>
          <Text style={styles().pageDescription}>
            Set healthy goals and do your best to accomplish them! Let's do our
            best today too!
          </Text>
          <Image
            style={styles().avatarFlipped}
            source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
          />
        </View>
        <View style={styles().divider} />

        {/* Daily Goals section */}
        <View style={{ marginHorizontal: '5%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles().heading}>Daily Goals</Text>
              <View style={{ marginRight: 8, }}/>
              <Icon
                name='information-circle-outline'
                type='ionicon'
                color='#816868'
                onPress={() => setShowDailyGoalsInfo(!showDailyGoalsInfo)}
              />
              <View style={styles().iconView}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon 
                    name={showDailyGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                    onPress={() => setShowDailyGoals(!showDailyGoals)}
                    color='#816868' 
                    style={{ marginRight: 8, }}
                  />
                  <Icon name='plus' onPress={() => setShowAddDailyGoals(!showAddDailyGoals)} type='feather' color='#816868'/>
                </View>
              </View>
            </View>
            <Text style={styles().textBold}>({Math.abs(countDown.getHours() - 24)} hours until reset)</Text>
        </View>
        <View style={styles().line} />

        {/* daily goals if data is not null */}
        {showDailyGoals && userDailies.length > 0 &&
          <View style={{ marginVertical: 16 }}>
            {userDailies.map((item, index) => (
              <Goal
                key={index}
                goals={goals}
                type={item.Category}
                timestamp={item.Timestamp}
                title={item.Title}
                progress={item.Progress}
                completed={item.Completed}
                navigation={navigation}
                userGoals={userDailies}
                setUserGoals={setUserDailies}
              />
            ))}
          </View>
        }

        {/* daily goals if data is null */}
        {showDailyGoals && userDailies.length === 0 &&
          <View style={{ marginVertical: 16, marginHorizontal: '5%' }}>
            <Text style={styles().textBold}>Add some daily goals to get started!</Text>
          </View>
        }

        {/* Weekly Goals section */}
        <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
            <Text style={styles().heading}>Weekly Goals</Text>
            <View style={{ marginRight: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowWeeklyGoalsInfo(!showWeeklyGoalsInfo)}
            />
            <View style={styles().iconView}>
              <View style={{ flexDirection: 'row' }}>
                <Icon 
                  name={showWeeklyGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                  onPress={() => setShowWeeklyGoals(!showWeeklyGoals)}
                  color='#816868' 
                  style={{ marginRight: 8, }}
                />
                <Icon name='plus' onPress={() => setShowAddWeeklyGoals(!showAddWeeklyGoals)} type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>({sundayCountdown(countDown)} day(s) until reset)</Text>
        </View>
        <View style={styles().line} />

        {/* weekly goals if data is not null */}
        {showWeeklyGoals && userWeeklies.length > 0 &&
          <View style={{ marginVertical: 16 }}>
            {userWeeklies.map((item, index) => (
              <Goal
                key={index}
                goals={goals}
                type={item.Category}
                timestamp={item.Timestamp}
                title={item.Title}
                progress={item.Progress}
                completed={item.Completed}
                navigation={navigation}
                userGoals={userWeeklies}
                setUserGoals={setUserWeeklies}
              />
            ))}
          </View>
        }

        {/* weekly goals if data is null */}
        {showWeeklyGoals && userWeeklies.length === 0 &&
          <View style={{ marginVertical: 16, marginHorizontal: '5%', }}>
            <Text style={styles().textBold}>Add some weekly goals to get started!</Text>
          </View>
        }

        {/* Long-Term Goals section */}
        <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().heading}>Long-Term Goals</Text>
            <View style={{ marginRight: 8, }}/>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              onPress={() => setShowLongTermGoalsInfo(!showLongTermGoalsInfo)}
            />
            <View style={styles().iconView}>
              <View style={{ flexDirection: 'row' }}>
                <Icon 
                  name={showLongTermGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                  onPress={() => setShowLongTermGoals(!showLongTermGoals)}
                  color='#816868' 
                  style={{ marginRight: 8, }}
                />
                <Icon name='plus' onPress={() => setShowAddLongTermGoals(!showAddLongTermGoals)} type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>Shoot for the stars!</Text>
        </View>
        <View style={styles().line} />

        {/* long term goals if data is not null */}
        {showLongTermGoals && userLongTerms.length > 0 &&
          <View style={{ marginVertical: 16 }}>
            {userLongTerms.map((item, index) => (
              <Goal
                key={index}
                goals={goals}
                type={item.Category}
                timestamp={item.Timestamp}
                title={item.Title}
                progress={item.Progress}
                completed={item.Completed}
                navigation={navigation}
                userGoals={userLongTerms}
                setUserGoals={setUserLongTerms}
              />
            ))}
          </View>
        }

        {/* long term goals if data is null */}
        {showLongTermGoals && userLongTerms.length === 0 &&
          <View style={{ marginVertical: 16, marginHorizontal: '5%', }}>
            <Text style={styles().textBold}>Add some long-term goals to get started!</Text>
          </View>
        }

        <View style={styles().pageEnd} />
      </ScrollView>
      <NavBar goals={true} navigation={navigation} />
    </SafeAreaView>
  );
}

function sundayCountdown(date) {
  var sunday = new Date();
  sunday.setDate(date.getDate() + (7 - date.getDay()) % 7 );

  //+ (sunday.getDay() === 0 ? 1 : 0)
  
  return(7 + sunday.getDay() - date.getDay());
}

async function refreshPage(navigation, goals) {
  const date = new Date();
  const findSunday = 0 - date.getDay();
  const sunday = new Date(date.getDate() - findSunday);
  var arr = [];

  for(var i = 0; i < goals.length; i++) {
    let testDate = new Date(goals[i].Timestamp);
    
    if(goals[i].Category === 'daily') {
      if(testDate.getDate() < date.getDate()) {
        let obj = goals[i];
        obj.Completed = false;
        obj.Progress = 0;
        obj.Timestamp = new Date().toISOString();

        const res = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: obj.Title, Timestamp: obj.Timestamp, Completed: obj.Completed, Category: obj.Category, 
            Requirement: obj.Requirement, Progress: obj.Progress, Reward: obj.Reward}
        })

        arr.push(obj);
      }

      else
        arr.push(goals[i]);
    }

    else if(goals[i].Category === 'weekly') {
      if(Math.abs(testDate.getDate() - new Date(sunday.getDate() + testDate.getDay()).getDate()) >= 7) {
        let obj = goals[i];
        obj.Completed = false;
        obj.Progress = 0;
        obj.Timestamp = new Date().toISOString();

        const res = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: obj.Title, Timestamp: obj.Timestamp, Completed: obj.Completed, Category: obj.Category, 
            Requirement: obj.Requirement, Progress: obj.Progress, Reward: obj.Reward}
        })

        arr.push(obj);
      }

      else
        arr.push(goals[i]);
    }

    else
      arr.push(goals[i]);
  }

  navigation.push('Goals', { goals: arr });
}

async function addGoal(type, title, goals, userGoals, setUserGoals, navigation) {
  var arr = goals;

  const res = await API.graphql ({
    query: mutations.addMilestone,
    variables: {
      Title: title, 
      Category: type, 
      Requirement: type === 'daily' ? 1 : type === 'weekly' ? 7 : 100, 
      Progress: 0, 
      Reward: type === 'daily' ? 5 : type === 'weekly' ? 10 : 100
    }
  });

  arr.push(res.data.addMilestone);

  refreshPage(navigation, arr);
}

async function deleteGoal(title, goals, timestamp, userGoals, setUserGoals, navigation) {
  var newArr = [];

  //find timestamp of goal
  for(var i = 0; i < goals.length; i++) {
    if(goals[i].Title === title && goals[i].Timestamp === timestamp) {
      const res = await API.graphql ({
        query: mutations.deleteMilestone,
        variables: {timestamp: timestamp}
      });

      //break;
    }
    
    else
      newArr.push(goals[i]);
  }

  refreshPage(navigation, newArr);
}

async function updateCompletion(title, userGoals, setUserGoals, navigation) {
  var arr = userGoals;
  var points = 0;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i].Title === title && arr[i].Category === 'daily') {
      arr[i].Progress++;
      arr[i].Completed = true;

      const res = await API.graphql ({
        query: mutations.updateMilestone,
        variables: {Title: arr[i].Title, Timestamp: arr[i].Timestamp, Completed: arr[i].Completed, Category: arr[i].Category, 
          Requirement: arr[i].Requirement, Progress: arr[i].Progress, Reward: arr[i].Reward}
      });

      points = 5;

      const setPoints = await API.graphql ({
        query: mutations.updatePoints,
        variables: {points: 5}
      });
    }

    else if(arr[i].Title === title && arr[i].Category === 'weekly') {
      arr[i].Progress++;
      if(arr[i].Requirement === arr[i].Progress)
        arr[i].Completed = true;

      const res = await API.graphql ({
        query: mutations.updateMilestone,
        variables: {Title: arr[i].Title, Timestamp: arr[i].Timestamp, Completed: arr[i].Completed, Category: arr[i].Category, 
          Requirement: arr[i].Requirement, Progress: arr[i].Progress, Reward: arr[i].Reward}
      });

      points = arr[i].Completed ? arr[i].Reward : 5

      const setPoints = await API.graphql ({
        query: mutations.updatePoints,
        variables: {points: arr[i].Completed ? arr[i].Reward : 5}
      });
    }

    else if(arr[i].Title === title && arr[i].Category === 'longterm') {
      arr[i].Progress = 100;
      arr[i].Completed = true;
      
      const res = await API.graphql ({
        query: mutations.updateMilestone,
        variables: {Title: arr[i].Title, Timestamp: arr[i].Timestamp, Completed: arr[i].Completed, Category: arr[i].Category, 
          Requirement: arr[i].Requirement, Progress: arr[i].Progress, Reward: arr[i].Reward}
      });

      points = arr[i].Reward;

      const setPoints = await API.graphql ({
        query: mutations.updatePoints,
        variables: {points: arr[i].Reward}
      });
    }
  }

  setUserGoals(arr);

  navigation.navigate('GoalComplete', {points});

}

async function editGoal(title, goals, timestamp, newTitle, userGoals, setUserGoals, navigation) {
  var newArr = [];

  for(var i = 0; i < goals.length; i++) {
    if(goals[i].Title === title && goals[i].Timestamp === timestamp) {
      let obj = goals[i];
        obj.Title = newTitle
        obj.Completed = false;
        obj.Progress = 0;
        obj.Timestamp = new Date().toISOString();

        const res = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: obj.Title, Timestamp: obj.Timestamp, Completed: obj.Completed, Category: obj.Category, 
            Requirement: obj.Requirement, Progress: obj.Progress, Reward: obj.Reward}
        })

        newArr.push(obj);
    }
    
    else
      newArr.push(goals[i]);
  }

  refreshPage(navigation, newArr);
}

function populateGoals(goals) {
  var goalsObj = new Object();
  [goalsObj.dailies, goalsObj.weeklies, goalsObj.longterms] = [[], [], []];

  for(var i = 0; i < goals.length; i++) {
    if(goals[i].Category === 'daily')
      goalsObj.dailies.push(goals[i]);

    else if(goals[i].Category === 'weekly')
      goalsObj.weeklies.push(goals[i]);

    else
      goalsObj.longterms.push(goals[i]);
  }

  return goalsObj;
}

export { Goals };

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
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
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  goalButtonText: {
    marginVertical: 8,
    marginLeft: 16,
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goalButtonView: {
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
  },
  modalContainer: {
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  modalHeaderBar: {
    backgroundColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  line: {
    marginHorizontal: '5%',
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderBottomWidth: 1,
    minHeight: 1,
    marginTop: 10,
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
    marginBottom: 110,
  },
  progressBar: {
    width: 30, 
    height: 10, 
    backgroundColor: global.colorblindMode
    ? global.cb_optionButtonsColor
    : global.optionButtonsColor
  },
  text: {
    color: '#816868',
    fontSize: 16,
  },
  textAlt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBold: {
    color: '#816868',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBoldAlt: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    marginTop: 4,
  },
  textDateTime: {
    fontSize: 16,
    color: '#4CB97A',
    fontWeight: 'bold',
  },
  textDateTimeAlt: {
    fontSize: 16,
    color: '#4CB97A',
    marginTop: 6,
    marginBottom: 2,
  },
  textGoal: {
    color: '#816868',
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 5,
  },
  textInfo: {
    color: '#816868',
    fontSize: 16,
    marginBottom: 8,
  },
  textInputView: {
    height: 48, 
    width: Math.round(Dimensions.get('window').width * 0.7),
    position: 'relative',
  },
  textModal: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textStrikethrough: {
    color: '#816868',
    fontSize: 16,
    textDecorationLine: 'line-through',
    flexWrap: 'wrap',
    flex: 5,
  },
});
