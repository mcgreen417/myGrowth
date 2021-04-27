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
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Delete = ({
  deleteEntry,
  setDeleteEntry,
  activities,
  setActivities,
  item,
  index,
}) => {
  return (
    <View style={styles().container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={deleteEntry}
        onRequestClose={() => {
          setDeleteEntry(!deleteEntry);
        }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: '#00000055',
          }}
          onPressOut={() => setDeleteEntry(!deleteEntry)}>
          <Pressable
            style={styles().modalContainer}
            onePress={() => setDeleteEntry(true)}>
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
                <Text style={styles().textAlt}>Delete Daily Activity</Text>
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
                Are you sure you wish to delete the daily activity
                <Text style={styles().textBoldAlt}>
                  {' '}
                  "{item.Name.toString()}"{' '}
                </Text>
                ?
              </Text>
              <Text style={styles().textBoldAlt}>
                This action cannot be undone.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginVertical: 10,
                marginHorizontal: '5%',
              }}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => {
                  setDeleteEntry(!deleteEntry);
                  let tempActivities = [...activities];
                  tempActivities.splice(index, 1);
                  setActivities(tempActivities);
                }}>
                <Text style={styles().textButton}>DELETE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDeleteEntry(!deleteEntry)}>
                <Text style={styles().textButton}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

{
  /* Daily activities section */
}
const DailyActivities = ({ activities, setActivities }) => {
  const [showAddActivities, setShowAddActivities] = useState(false);
  const [pressedActivity, setPressedActivity] = useState(false);
  const [pressedDuration, setPressedDuration] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [activityDuration, setActivityDuration] = useState('');
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [activityIndex, setActivityIndex] = useState();

  return (
    <SafeAreaView style={{ width: '90%' }}>
      {deleteEntry && (
        <Delete
          deleteEntry={deleteEntry}
          setDeleteEntry={setDeleteEntry}
          activities={activities}
          setActivities={setActivities}
          item={activities[activityIndex]}
          index={activityIndex}
        />
      )}
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Daily Activity modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddActivities}
            onRequestClose={() => setShowAddActivities(!showAddActivities)}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddActivities(!showAddActivities)}>
              <Pressable
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
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
                        onPress={() => setShowAddActivities(!showAddActivities)}
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
                          onFocus={() => setPressedActivity(true)}
                          onBlur={() => setPressedActivity(false)}
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
                          onFocus={() => setPressedDuration(true)}
                          onBlur={() => setPressedDuration(false)}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center' }}>
                    <Button
                      title='+ Add Activity'
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
                        setActivityName('');
                        setActivityDuration('');
                        setShowAddActivities(true);
                        Keyboard.dismiss();
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

        <View style={{ marginBottom: 16, }}>
          <Text style={styles().text}>
            What activities did you participate in today?
          </Text>
        </View>

        {activities.length > 0 &&
          <View style={styles().itemView}>
            {activities.map((item, index) => {
              // console.log(item);
              return (
                <View
                  key={index}
                  style={styles().itemContainers}>
                  <Text style={{ color: 'white', fontSize: 16, }}>
                    {item.Name.toString()}, {item.Duration.toString()} min
                  </Text>
                  <Icon
                    name='close'
                    color='white'
                    onPress={() => {
                      setActivityIndex(index);
                      setDeleteEntry(!deleteEntry);
                    }}
                  />
                </View>
              );
            })}
          </View>
        }

        {/* Add Activities modal */}
        <View
          style={{
            wminWidth: '40%',
            maxWidth: '50%',
            marginBottom: 10,
          }}>
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
    itemContainers: {
      backgroundColor: global.colorblindMode
        ? global.cb_navBarCurrentIconColor
        : global.navBarCurrentIconColor,
      marginHorizontal: 2,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 3,
    },
    itemView: {
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      flexWrap: 'wrap',
      marginBottom: 16,
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
    textBoldAlt: {
      fontSize: 16,
      color: '#816868',
      fontWeight: 'bold',
      marginTop: 4,
    },
    textButton: {
      fontSize: 16,
      color: '#4CB97A',
      fontWeight: 'bold',
    },
    textInputView: {
      height: 48,
      width: Math.round((Dimensions.get('window').width * 1) / 2),
      position: 'relative',
    },
  });
