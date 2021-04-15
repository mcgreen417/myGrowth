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

{/* Add Activities pop-up */}
const AddActivitiesModal = ({ activities, setActivities }) => {
  const [activityName, setActivityName] = useState('');
  const [activityDuration, setActivityDuration] = useState('');

  return (
    <Pressable>
      {console.log(activities)}
      <View style={styles().modalView}>
        {/* Activity user input */}
        <View style={{ alignItems: 'center', flexDirection: 'row', }}>
          <Text style={styles().text}>Activity:</Text>
          <TextInput
            placeholder='Activity Name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 150,
              marginLeft: 10,
            }}
            keyboardType='default'
            value={activityName}
            onChangeText={setActivityName}
          />
        </View>

        {/* Activity duration user input */}
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10, }}>
          <Text style={styles().text}>Activity Duration:</Text>
          <TextInput
            placeholder='#'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 50,
              marginHorizontal: 10,
            }}
            keyboardType='number-pad'
            value={activityDuration}
            onChangeText={setActivityDuration}
          />
          <Text style={styles().text}>mins</Text>
        </View>

        {/* Add Activity button */}
        <View style={{ width: '50%', marginVertical: 20, }}>
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
            color={
              global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

{/* Daily activities section */}
const DailyActivities = ({ activities, setActivities }) => {
  const [showAddActivities, setShowAddActivities] = useState(false);
  return (

    <View style={{ width: '90%' }}>
      {/* Add Activities modal */}
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

      {/* Daily Activities heading */}
      <Text style={styles().heading}>DAILY ACTIVITIES</Text>
      <Text style={styles().text}>What activities did you participate in today?</Text>
      
      {/* Add Activities modal */}
      <View style={{ width: '40%', marginTop: 20, }}>
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
    },
    heading: {
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
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
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    text: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
    },
  });
