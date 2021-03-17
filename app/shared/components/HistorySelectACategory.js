import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SelectACategoryIcon from './SelectACategoryIcon';

const screensInfo = [
  {
    category : "Health Entries",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryHealthEntries"
  },
  {
    category : "Mood",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryMood"
  },
  {
    category : "Stress",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryStress"
  },
  {
    category : "Daily Activities",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "DailyActivities"
  },
  {
    category : "Period Tracking",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryPeriodTracking"
  },
  {
    category : "Weight",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryWeight"
  },
  {
    category : "General Health",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryGeneralHealth1"
  },
  {
    category : "Medicine",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryMedication"
  },
  {
    category : "Sleep",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistorySleep1"
  },
  {
    category : "Meal Tracking",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryMealTracking"
  },
  {
    category : "Fitness",
    imageSrc : require("../assets/icon.png"),
    navigateTo : "HistoryFitness1"
  },
];

const HistorySelectACategory = ({setModalView, showModalView, navigation, ...rest}) => {

  return (
    <View>
      

      <Modal animationType="none"
        transparent={true}
        visible={showModalView}
        onRequestClose={() => setModalView(!showModalView)}
      >

        {/* Entire modal */}
        <View style={styles().centeredView}>

          {/* Modal structure properties, Dismiss Bar */}
          <View style={styles().inlineRowBackgrd}>
            {/* add category chooser modal here */}
            { /* image asset */ }
            <View>
              <Image style={{width: 20, height: 20}} source={require('../../shared/assets/icon.png')}/>
            </View>

            <View>
              <Text style={{color: 'white'}}>Select a Category</Text>
            </View>

            <TouchableOpacity onPress={() => setModalView(!showModalView)}>
              { /* X asset */ }
              <View>
                <Image source={require('../assets/close.png')}/>
              </View>

            </TouchableOpacity>
          </View>

          {/* Body of modal */}
          <View style={{backgroundColor: '#F6EFED', width: 300, height: 350,}}>
            {/* Buttons on modal */}
            <View
              style={{
                marginLeft: 30,
                flex: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexGrow: 5,
              }}>
                
                {screensInfo.map((screen) => (
                  <SelectACategoryIcon screens={screen} navigation={navigation} setModalVisible={setModalView} modalVisible={showModalView} />
                ))}
            </View>
          </View>



        </View>
      </Modal>
    </View>
  );
};

export default HistorySelectACategory;

const styles = () => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  inlineRowBackgrd: {
    color: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300, 
    height: 30,
  },
});