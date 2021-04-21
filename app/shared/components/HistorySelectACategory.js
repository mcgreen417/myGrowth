import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
<<<<<<< Updated upstream
=======
  Pressable,
  Dimensions,
>>>>>>> Stashed changes
} from 'react-native';
import { Icon } from 'react-native-elements';
import { SvgCssUri } from 'react-native-svg';
import SelectACategoryIcon from './SelectACategoryIcon';
import Book from '../../shared/assets/svgs/book-emoji.svg'
import Smiley from '../../shared/assets/svgs/smiley-emoji.svg'
import AngrySymbol from '../../shared/assets/svgs/angry-symbol-emoji.svg'
import Camping from '../../shared/assets/svgs/camping-emoji.svg'
import Flower from '../../shared/assets/svgs/flower-emoji.svg'
import DNA from '../../shared/assets/svgs/dna-emoji.svg'
import Stethoscope from '../../shared/assets/svgs/stethoscope-emoji.svg'
import Pill from '../../shared/assets/svgs/pill-emoji.svg'
import ManSleeping from '../../shared/assets/svgs/man-sleeping-emoji.svg'
import Plate from '../../shared/assets/svgs/plate-emoji.svg'
import WomanRunning from '../../shared/assets/svgs/woman-running-emoji.svg'

const screensInfo = [
  {
    category: 'Health Entries',
    imageSrc: <Book height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryHealthEntries',
  },
  {
    category: 'Mood',
    imageSrc: <Smiley height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryMood',
  },
  {
    category: 'Stress',
    imageSrc: <AngrySymbol height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryStress',
  },
  {
    category: 'Daily Activities',
    imageSrc: <Camping height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryDailyActivities1',
  },
  {
    category: 'Period Tracking',
    imageSrc: <Flower height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryPeriodTracking',
  },
  {
    category: 'Weight',
    imageSrc: <DNA height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryWeight',
  },
  {
    category: 'General Health',
    imageSrc: <Stethoscope height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryGeneralHealth1',
  },
  {
    category: 'Medicine',
    imageSrc: <Pill height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryMedication',
  },
  {
    category: 'Sleep',
    imageSrc: <ManSleeping height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistorySleep1',
  },
  {
    category: 'Meal Tracking',
    imageSrc: <Plate height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryMealTracking',
  },
  {
    category: 'Fitness',
    imageSrc: <WomanRunning height={Math.round(Dimensions.get('window').width * 0.12)}/>,
    navigateTo: 'HistoryFitness1',
  },
];

const HistorySelectACategory = ({
  setModalView,
  showModalView,
  navigation,
  data,
  ...rest
}) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={showModalView}
      onRequestClose={() => setModalView(!showModalView)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
                marginVertical: 6,
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
                marginRight: 6,
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
            {screensInfo.map((screen, index) => (
              <SelectACategoryIcon
                key={index}
                screens={screen}
                navigation={navigation}
                data={data}
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
