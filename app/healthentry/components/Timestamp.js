import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const Timestamp = ({ timestamp, setTimestamp }) => {
  console.log(timestamp);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || timestamp;
    setShow(Platform.OS === 'ios');
    setTimestamp(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>SELECT DATE & TIME</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable
          onPress={() => showDatepicker()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
          }}>
          <Icon
            name='event'
            color={
              global.colorblindMode
                ? global.cb_contentDividerColor
                : global.contentDividerColor
            }
            style={{ marginRight: 4 }}
          />
          <Text style={styles().textLink}>{getDate(new Date(timestamp))}</Text>
          <Icon
            name='arrow-drop-down'
            type='material'
            color={
              global.colorblindMode
                ? global.cb_contentDividerColor
                : global.contentDividerColor
            }
          />
        </Pressable>
        <Pressable
          onPress={() => showTimepicker()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
          }}>
          <Icon
            name='schedule'
            color={
              global.colorblindMode
                ? global.cb_contentDividerColor
                : global.contentDividerColor
            }
            style={{ marginRight: 4 }}
          />
          <Text style={styles().textLink}>{getTime(new Date(timestamp))}</Text>
          <Icon
            name='arrow-drop-down'
            type='material'
            color={
              global.colorblindMode
                ? global.cb_contentDividerColor
                : global.contentDividerColor
            }
          />
        </Pressable>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={timestamp}
            mode={mode}
            is24Hour={false}
            display='default'
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default Timestamp;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
    },
    avatarFlipped: {
      width: Math.round((Dimensions.get('window').width * 1) / 4),
      height: Math.round((Dimensions.get('window').width * 1) / 4),
      transform: [{ scaleX: -1 }],
    },
    avatarView: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_contentDividerColor
        : global.contentDividerColor,
      marginLeft: 20,
      marginRight: 20,
    },
    dividerView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    line2: {
      backgroundColor: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      marginLeft: 40,
      marginRight: 40,
      height: '100%',
      width: 2,
    },
    pageDescription: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1,
      flexWrap: 'wrap',
      marginRight: 10,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      alignItems: 'center',
      height: '100%',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
