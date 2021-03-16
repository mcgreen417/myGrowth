import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';

function HistoryPeriodTracking({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
                      navigation.navigate('HistoryMealTracking');
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
          View your period history and our predictions for your upcoming period.
          Predictions based on info from your health entries.
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

      {/* page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>
      <View>{/*<PeriodPrediction />*/}</View>

      {/* page divider */}
      <View style={styles.dividerView}>
        <View style={styles.divider} />
      </View>

      <View>
        <Text>
          Based on this point in your cycle, some symptoms you may expect to
          encounter today are...
        </Text>
        {/*<PeriodSymptoms />*/}
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export default HistoryPeriodTracking;

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
