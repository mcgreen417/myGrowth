import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

const Goal = ({ title, description, type, navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [deleteEntry, setDeleteEntry] = useState(false);

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
              <View style={styles().modalContainer}>
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
                    onPress={() => setDeleteEntry(!deleteEntry)}>
                    <Text style={styles().textDateTime}>DELETE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setDeleteEntry(!deleteEntry)}>
                    <Text style={styles().textDateTime}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
        </Modal>
      </View>

      <View style={{ 
        flexDirection: 'row',
        width: '90%',
        alignItems: 'flex-start',
        alignSelf: 'center', 
        marginVertical: 4,
      }}>
        {/* This icon should change to check-box when the user clicks on it (and retain that until daily reset) */}
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
            setToggleCheckBox(true);
            navigation.navigate('GoalComplete');}}
        />
        <View style={{ marginRight: 8 }}/>
        <Text style={styles().text}>{title}</Text>
        <View style={styles().iconView}>
          <View style={{ flexDirection: 'row' }}>
            <Pressable>
              <Icon 
                name='pencil' 
                type='material-community' 
                color='#816868' 
              />
            </Pressable>
            <Pressable>
              <Icon 
                name='close' 
                type='ionicon' 
                color='#816868' 
                onPress={() => setDeleteEntry(!deleteEntry)}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

function Goals({ navigation }) {
  var time = new Date();
  const [showDailyGoals, setShowDailyGoals] = useState(true);
  const [showWeeklyGoals, setShowWeeklyGoals] = useState(true);
  const [showLongTermGoals, setShowLongTermGoals] = useState(true);
  const [showDailyGoalsInfo, setShowDailyGoalsInfo] = useState(false);
  const [showWeeklyGoalsInfo, setShowWeeklyGoalsInfo] = useState(false);
  const [showLongTermGoalsInfo, setShowLongTermGoalsInfo] = useState(false);

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
              <View style={styles().modalContainer}>
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
              </View>
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
              <View style={styles().modalContainer}>
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
              </View>
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
              <View style={styles().modalContainer}>
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
              </View>
            </Pressable>
        </Modal>
      </View>

      {/* Start of the Goals page */}
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        {/* Gardener avatar + page blurb */}
        <View style={styles().avatarView}>
          <Text style={styles().pageDescription}>
            Set healthy goals and do your best to accomplish them! Let's do our
            best today too!
          </Text>
          <Image
            style={styles().avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
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
                  <Icon name='plus' type='feather' color='#816868'/>
                </View>
              </View>
            </View>
            <Text style={styles().textBold}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={styles().line} />
        {showDailyGoals &&
          <View style={{ marginVertical: 16 }}>
            <Goal
              title='Write a health entry'
              description='description 1'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Write a journal entry'
              description='description 2'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Consume 1200 calories total'
              description='description 3'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Take medicine'
              description='description 4'
              type='daily'
              navigation={navigation}
            />
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
                <Icon name='plus' type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={styles().line} />
        {showWeeklyGoals &&
          <View style={{ marginVertical: 16 }}>
            <Goal
              title='Exercise for 30m'
              description='description 1'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Read for 1h'
              description='description 2'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Go to class'
              description='description 3'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Go to work'
              description='description 4'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Study for 3h'
              description='description 5'
              type='weekly'
              navigation={navigation}
            />
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
                <Icon name='plus' type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>Shoot for the stars!</Text>
        </View>
        <View style={styles().line} />
        {showLongTermGoals &&
          <View style={{ marginTop: 16 }}>
            <Goal
              title='Graduate university'
              description='description 1'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Get a job'
              description='description 2'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Buy a house'
              description='description 3'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Get married'
              description='description 4'
              type='longterm'
              navigation={navigation}
            />
          </View>
        }

        <View style={styles().pageEnd} />
      </ScrollView>
      <NavBar goals={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export { Goals };

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatar: {
    width: 75,
    height: 75,
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
    marginRight: 20,
  },
  pageEnd: {
    marginBottom: 110,
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
  textInfo: {
    color: '#816868',
    fontSize: 16,
    marginBottom: 8,
  },
  textModal: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});
