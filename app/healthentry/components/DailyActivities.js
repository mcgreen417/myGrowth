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
} from 'react-native';

const AddActivitiesModal = ({ activities, setActivities }) => {
  const [activityName, setActivityName] = useState('');
  const [activityDuration, setActivityDuration] = useState('');

  return (
    <Pressable>
      {console.log(activities)}
      <View style={styles().modalView}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Activity Name</Text>
          <TextInput
            placeholder='Activity'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
            }}
            keyboardType='default'
            value={activityName}
            onChangeText={setActivityName}
          />
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Activity Duration</Text>
          <TextInput
            placeholder='Activity'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
            }}
            keyboardType='number-pad'
            value={activityDuration}
            onChangeText={setActivityDuration}
          />
        </View>
        <View style={{ width: '50%' }}>
          <Button
            title='Add Activity'
            onPress={() => {
              let activity = {
                Name: activityName,
                Duration: parseInt(activityDuration),
              };
              let temp = new Array(activity).concat(activities);
              console.log('temp:', temp);
              setActivities(temp);
              console.log('activites', activities);
              console.log('activites', activities);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const DailyActivities = ({ activities, setActivities }) => {
  const [showAddActivities, setShowAddActivities] = useState(false);
  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showAddActivities}
        onRequestClose={() => {
          setShowAddActivities(!showAddActivities);
        }}>
        <Pressable
          onPressOut={() => setShowAddActivities(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <AddActivitiesModal
            activities={activities}
            setActivities={setActivities}
          />
        </Pressable>
      </Modal>
      <Text>Daily Activities</Text>
      <Text>What activities did you participate in today?</Text>
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Activities'
          onPress={() => setShowAddActivities(true)}
        />
      </View>
    </View>
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
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
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
    textReg: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      textDecorationLine: 'none',
      textAlign: 'left',
    },
  });
