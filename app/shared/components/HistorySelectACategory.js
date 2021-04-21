import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
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

const defaultSettings = {
  "dailyActivities": false,
  "fitness": false,
  "meal": false,
  "medication": false,
  "metric": false,
  "period": false,
  "sleep": false,
  "stress": false,
  "weight": false,
}  

const HistorySelectACategory = ({
  setModalView,
  showModalView,
  navigation,
  data,
  settings,
  ...rest
}) => {
  const [newScreensInfo, setNewScreensInfo] = useState(createNewScreensInfo(settings));

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={showModalView}
      onRequestClose={() => setModalView(!showModalView)}>
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          backgroundColor: '#00000055',
        }}
        onPressOut={() => setModalView(!showModalView)}
      >
        <Pressable 
          style={styles().container}
          onPress={() => setModalView(true)}  
        >
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
            {newScreensInfo.map((screen, index) => (
              <SelectACategoryIcon
                key={index}
                screens={screen}
                navigation={navigation}
                data={data}
                settings={settings}
                setModalVisible={setModalView}
                modalVisible={showModalView}
              />
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

async function setSettingsFromCache() {
  //instantiate new cache
  const cache = new Cache({
    namespace: "myapp",
    policy: {
      maxEntries: 50000
    },
    backend: AsyncStorage
  });

  var newSettings = await cache.peek('settings');
  
  setSettings(newSettings);
}

function createNewScreensInfo(settings) {
  var arr = [screensInfo[0], screensInfo[1]];

  for(var i = 0; i < screensInfo.length; i++) {
    if(i === 2 && settings.stress)
      arr.push(screensInfo[2]);

    else if(i === 3 && settings.dailyActivities)
      arr.push(screensInfo[3]);
    
    else if(i === 4 && settings.period)
      arr.push(screensInfo[4]);

    else if(i === 5 && settings.weight)
      arr.push(screensInfo[5]);

    else if(i === 6)
      arr.push(screensInfo[6]);

    else if(i === 7 && settings.medication)
      arr.push(screensInfo[7]);

    else if(i === 8 && settings.sleep)
      arr.push(screensInfo[8]);

    else if(i === 9 && settings.meal)
      arr.push(screensInfo[9]);

    else if(i === 10 && settings.fitness)
      arr.push(screensInfo[10]);
  }

  return arr;
}

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
