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
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';

function HistoryMealTracking({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [timePeriod, setTimePeriod] = useState('unselected');

  const [selectNutrients, setNutrients] = useState('unselected');

  const [useReccNutrition, setUseReccNutrition] = useState(false);
  const toggleReccNutrition = () =>
    setUseReccNutrition((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal */}
      <View>
        <Modal
          animationType='none'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            {/* Dismiss Bar */}
            <View style={styles.inlineRowBackgrd}>
              {/* add category chooser modal here */}
              {/* image asset */}
              <View>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../shared/assets/icon.png')}
                />
              </View>
              <View>
                <Text style={{ color: 'white' }}>Select a Category</Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                {/* X asset */}
                <View>
                  <Image source={require('../../shared/assets/close.png')} />
                </View>
              </TouchableOpacity>
            </View>

            {/* Body of modal */}
            <View
              style={{ backgroundColor: '#F6EFED', width: 300, height: 350 }}>
              {/* Buttons on modal */}
              <View style={styles.inlineRowModal}>
                {/* health entries */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryHealthEntries');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Health Entries</Text>
                  </TouchableOpacity>
                </View>

                {/* mood */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryMood');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Mood</Text>
                  </TouchableOpacity>
                </View>

                {/* stress */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryStress');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Stress</Text>
                  </TouchableOpacity>
                </View>

                {/* daily activities */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryDailyActivities1');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Daily Activities</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inlineRowModal}>
                {/* period tracking */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryPeriodTracking');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Period Tracking</Text>
                  </TouchableOpacity>
                </View>

                {/* weight */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryWeight');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Weight</Text>
                  </TouchableOpacity>
                </View>

                {/* gen health */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryGeneralHealth1');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>General Health</Text>
                  </TouchableOpacity>
                </View>

                {/* medicine */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryMedication');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Medicine</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inlineRowModal}>
                {/* sleep */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistorySleep1');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Sleep</Text>
                  </TouchableOpacity>
                </View>

                {/* meal tracking */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Meal Tracking</Text>
                  </TouchableOpacity>
                </View>

                {/* fitness */}
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('HistoryFitness1');
                      setModalVisible(!modalVisible);
                    }}>
                    <Image
                      style={styles.chooserImg}
                      source={require('../../shared/assets/icon.png')}
                    />
                    <Text>Fitness</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <Text>
          View your meal history and our analysis of the potential effects of
          your eating havits. Check how much you've been eating recently!
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>

      {/* page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => setModalVisible(true)}>
          <View style={styles.inlineRow}>
            <Text style={styles.textReg}>Categories</Text>
            <View>
              <Image
                source={require('../../shared/assets/transit_enterexit.png')}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TabBarAndContent historyGenComp={true} navigation={navigation} />
      </View>
      <View>
        <View>
          <Text>TIME PERIOD</Text>
          <Picker
            selectedValue={timePeriod}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
            mode={'dropdown'}>
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Past week' value='past_week' />
            <Picker.Item label='Past month' value='past_month' />
            <Picker.Item label='Past year' value='past_year' />
          </Picker>
        </View>
        <View>
          <Text>SELECT NUTRIENT</Text>
          <Picker
            selectedValue={selectNutrients}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setNutrients(itemValue)}
            mode={'dropdown'}>
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Calories' value='calories' />
            <Picker.Item label='Total fat' value='total_fat' />
            <Picker.Item label='Cholesterol' value='cholesterol' />
            <Picker.Item label='Sodium' value='sodium' />
            <Picker.Item label='Total carbs' value='total_carbs' />
            <Picker.Item label='Sugar' value='sugar' />
          </Picker>
        </View>
      </View>
      {/* page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>
        <Text>Display recommended nutritional values</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#9AD2AF' }}
          thumbColor={useReccNutrition ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleReccNutrition}
          value={useReccNutrition}
        />
      </View>
      {/* page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you met your nutritional
          requirements, you often reported...
        </Text>
        {/*<MetNutritionAnalysis />*/}
      </View>
      <View>
        <Text>
          Based on our analysis, on days that you didn't meet your nutritional
          requirements, you often reported...
        </Text>
        {/*<NotMetNutritionAnalysis />*/}
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export default HistoryMealTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 80,
    height: 25,
    backgroundColor: '#4CB97A',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  chooserImg: {
    borderWidth: 1,
    borderColor: '#4CB97A',
    width: 40,
    height: 40,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  inlineRowBackgrd: {
    backgroundColor: '#A5DFB2',
    width: 300,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRowModal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textReg: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 12,
  },
});
