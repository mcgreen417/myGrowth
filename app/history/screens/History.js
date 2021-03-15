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

function HistoryHealthEntries({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
      { /* Modal */}
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles().centeredView}>
            {/* Dismiss Bar */}
            <View style={styles().inlineRowBackgrd}>
                {/* add category chooser modal here */}
                { /* image asset */ }
                <View>
                    <Image style={{width: 20, height: 20}} source={require('../../shared/assets/icon.png')}/>
                </View>
                <View>
                    <Text style={{color: 'white'}}>Select a Category</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    { /* X asset */ }
                    <View>
                        <Image source={require('../../shared/assets/close.png')}/>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Body of modal */}
            <View style={{backgroundColor: '#F6EFED', width: 300, height: 350,}}>
              {/* Buttons on modal */}
              <View style={styles().inlineRowModal}>
                  { /* health entries */ }
                  <View>
                      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Health Entries</Text>
                      </TouchableOpacity>
                  </View>

                  { /* mood */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                          navigation.navigate('HistoryMood');
                          setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Mood</Text>
                      </TouchableOpacity>
                  </View>

                  { /* stress */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryStress');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Stress</Text>
                      </TouchableOpacity>
                  </View>

                  { /* daily activities */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryDailyActivities1');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Daily Activities</Text>
                      </TouchableOpacity>
                  </View>
              </View>

              <View style={styles().inlineRowModal}>
                  { /* period tracking */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryPeriodTracking');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Period Tracking</Text>
                      </TouchableOpacity>
                  </View>

                  { /* weight */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryWeight');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Weight</Text>
                      </TouchableOpacity>
                  </View>

                  { /* gen health */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryGeneralHealth1');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>General Health</Text>
                      </TouchableOpacity>
                  </View>

                  { /* medicine */ }
                  <View>
                      <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryMedication');
                        setModalVisible(!modalVisible);
                      }}>
                          <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                          <Text style={styles().bodyText}>Medicine</Text>
                      </TouchableOpacity>
                  </View>
              </View>

              <View style={styles().inlineRowModal}>
                { /* sleep */ }
                <View>  
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('HistorySleep1');
                      setModalVisible(!modalVisible);
                    }}>
                        <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                        <Text style={styles().bodyText}>Sleep</Text>
                    </TouchableOpacity>
                </View>

                { /* meal tracking */ }
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryMealTracking');
                        setModalVisible(!modalVisible);
                      }}>
                        <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                        <Text style={styles().bodyText}>Meal Tracking</Text>
                    </TouchableOpacity>
                </View>

                { /* fitness */ }
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('HistoryFitness1');
                        setModalVisible(!modalVisible);
                      }}>
                        <Image style={styles().chooserImg} source={require('../../shared/assets/icon.png')}/>
                        <Text style={styles().bodyText}>Fitness</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Actual Screen */}
      <View>
        <Text style={styles().bodyText}>
          View an easily digestable summary of your health entry history! View
          your individual health entries below or select a category to get
          started!
        </Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles().avatar}
        />
      </View>
      {/* Top page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        { /* replace w/ custom component in future */ }
        <Button
          title='History'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <TouchableOpacity style={styles().buttons} onPress={() => setModalVisible(true)}>
          <View style={styles().inlineRow}>
            <Text style={styles().textReg}>Categories</Text>
            <View>
            <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* Middle Divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>
          Did you know? You can also overlay graphs from different categories to
          easily search for correlations between your physical and mental
          health. Click below to get started!
        </Text>
        <TouchableOpacity style={styles().buttonsCorr} onPress={() => navigation.navigate('HistoryHealthEntries')}>
          <View style={styles().inlineRow}>
            <Text style={styles().textCorr}>Search for Correlations</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

const HistoryCorrelations = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>{/* add correlations page here */}</Text>
    </SafeAreaView>
  );
};

export {
  HistoryHealthEntries,
  HistoryCorrelations,
};

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
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
    backgroundColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
  },
  buttonsCorr: {
    marginTop: 10,
    marginBottom: 10,
    width: 190,
    height: 40,
    backgroundColor: '#E5E5E5',
    shadowColor: 'gray',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  chooserImg: {
    borderWidth: 1,
    borderColor: global.colorblindMode
      ? global.cb_textInputBorderColor
      : global.textInputBorderColor,
    width: 40,
    height: 40,
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
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  inlineRowBackgrd: {
    backgroundColor:  global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor, 
    width: 300, 
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRowModal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCorr: {
    color: 'black',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
  textReg: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 12,
  },
  bodyText: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  }
});
