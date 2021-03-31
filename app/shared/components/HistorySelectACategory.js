import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Icon } from 'react-native-elements';
import SelectACategoryIcon from './SelectACategoryIcon';

const screensInfo = [
  {
    category: 'Health Entries',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryHealthEntries',
  },
  {
    category: 'Mood',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryMood',
  },
  {
    category: 'Stress',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryStress',
  },
  {
    category: 'Daily Activities',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryDailyActivities1',
  },
  {
    category: 'Period Tracking',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryPeriodTracking',
  },
  {
    category: 'Weight',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryWeight',
  },
  {
    category: 'General Health',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryGeneralHealth1',
  },
  {
    category: 'Medicine',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryMedication',
  },
  {
    category: 'Sleep',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistorySleep1',
  },
  {
    category: 'Meal Tracking',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryMealTracking',
  },
  {
    category: 'Fitness',
    imageSrc: require('../assets/icon.png'),
    navigateTo: 'HistoryFitness1',
  },
];

const HistorySelectACategory = ({
  setModalView,
  showModalView,
  navigation,
  ...rest
}) => {
  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={showModalView}
      onRequestClose={() => setModalView(!showModalView)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -100,
          zIndex: 1,
          backgroundColor: '#00000055',
        }}>
        <View style={styles().container}>
          {/* Modal structure properties, Dismiss Bar */}
          <View style={styles().modalHeaderBar}>
            <View
              style={{
                flexDirection: 'row',
                flex: 2,
                marginLeft: 4,
                marginVertical: 4,
              }}>
              <Icon
                name='arrow-collapse-right'
                type='material-community'
                color='white'
                style={{ marginRight: 8 }}
              />
              <Text style={styles().textAlt}>Select a Category</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                marginRight: 4,
              }}>
              <Icon
                name='close'
                type='ionicon'
                color='white'
                onPress={() => setModalView(!showModalView)}
              />
            </View>
          </View>

          {/* Body of modal */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '90%',
              justifyContent: 'center',
              maxHeight: '60%',
            }}>
            {/* Will create each of the icons for all pages */}
            {screensInfo.map((screen) => (
              <SelectACategoryIcon
                screens={screen}
                navigation={navigation}
                setModalVisible={setModalView}
                modalVisible={showModalView}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HistorySelectACategory;

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      alignItems: 'center',
      width: '70%',
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
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
