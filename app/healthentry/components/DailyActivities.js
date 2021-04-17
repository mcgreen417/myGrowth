import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Pressable,
  TextInput,
  Dimensions,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

{
  /* Daily activities section */
}
const DailyActivities = ({ activities, setActivities }) => {
  const [showAddActivities, setShowAddActivities] = useState(false);
  const [pressedActivity, setPressedActivity] = useState(false);
  const [pressedDuration, setPressedDuration] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [activityDuration, setActivityDuration] = useState('');

  return (
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Daily Activity modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddActivities}
            onRequestClose={() => {
              setPressedActivity(false);
              setPressedDuration(false);
              setShowAddActivities(!showAddActivities);
            }}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => {
                setPressedActivity(false);
                setPressedDuration(false);
                setShowAddActivities(!showAddActivities);
              }}>
              <Pressable
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setPressedActivity(false);
                  setPressedDuration(false);
                  setShowAddActivities(true);
                }}>
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
                      name='sports-football'
                      type='MaterialIcons'
                      color='white'
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Daily Activities</Text>
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
                        onPress={() => {
                          setPressedActivity(false);
                          setPressedDuration(false);
                          setShowAddActivities(!showAddActivities);
                        }}
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
                  <View style={{ marginTop: 16, marginBottom: 20 }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text
                          style={{
                            color: pressedActivity ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Activity
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressedActivity ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Activity name'
                          fontSize={16}
                          color='#816868'
                          value={activityName}
                          onChangeText={setActivityName}
                          maxLength={99}
                          onFocus={() => {
                            setPressedActivity(true);
                            setPressedDuration(false);
                          }}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text
                          style={{
                            color: pressedDuration ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Duration
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressedDuration ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Duration (mins)'
                          fontSize={16}
                          color='#816868'
                          value={activityDuration}
                          onChangeText={setActivityDuration}
                          keyboardType='numeric'
                          maxLength={4}
                          onFocus={() => {
                            setPressedActivity(false);
                            setPressedDuration(true);
                          }}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center' }}>
                    <Button
                      title='Add Activity'
                      onPress={() => {
                        let activity = {
                          Name: activityName,
                          Duration: parseInt(activityDuration || 0),
                        };
                        let temp = new Array(activity).concat(activities);
                        //console.log('temp:', temp);
                        setActivities(temp);
                        //console.log('activites', activities);
                        //console.log('activites', activities);
                        setPressedActivity(false);
                        setPressedDuration(false);
                        setActivityName('');
                        setActivityDuration('');
                        setShowAddActivities(true);
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

        {/* Daily Activities heading */}
        <Text style={styles().heading}>DAILY ACTIVITIES</Text>

        <Text style={styles().text}>
          What activities did you participate in today?
        </Text>

        {/* Add Activities modal */}
        <View style={{ width: '40%', marginTop: 20, marginBottom: 10 }}>
          <Button
            title='+ Add Activities'
            onPress={() => setShowAddActivities(true)}
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyActivities;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    label: {
      color: '#816868',
      fontSize: 16,
      fontWeight: 'bold',
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
      width: Math.round((Dimensions.get('window').width * 4) / 5),
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
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textInputView: {
      height: 48,
      width: Math.round((Dimensions.get('window').width * 1) / 2),
      position: 'relative',
    },
  });
