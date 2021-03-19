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
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryFitness2({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectDisplay, setDisplay] = useState('unselected');  
  const [useReccActivity, setUseReccActivity] = useState(false);
  
  const toggleReccActivity = () =>
    setUseReccActivity((previousState) => !previousState);

  return (
    <SafeAreaView style={styles().container}>
      {/* Modal + each of the navigable history pages */}
      <HistorySelectACategory
        setModalView={setModalVisible}
        showModalView={modalVisible}
        navigation={navigation}
      />

      <View>
        <Text style={styles().bodyText}>
          View your fitness history and our analysis of positive health effects that 
          may be attributed to your current workout routine.
        </Text>
        <Image 
          source={require('../../shared/assets/icon.png')} 
          style={styles().avatar}
        />
      </View>
      {/* page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Button
          title='History'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
          onPress={() => navigation.navigate('HistoryFitness1')}
        />
        <Button
          title='Exercises'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
        />
        <Button
          title='Correlations'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
          onPress={() => navigation.navigate('HistoryFitness1')}
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
      <View>
        <View>
          <Text style={styles().bodyText}>TIME PERIOD</Text>
          <Picker
            selectedValue={timePeriod}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Past week' value='past_week' />
            <Picker.Item label='Past month' value='past_month' />
            <Picker.Item label='Past year' value='past_year' />
          </Picker>
        </View>
        <View>
          <Text style={styles().bodyText}>SELECT EXERCISE</Text>
          <Picker
            selectedValue={selectDisplay}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setDisplay(itemValue)}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='PLACEHOLDER' value='temp' />
            <Picker.Item label='PLACEHOLDER2' value='temp' />
          </Picker>
        </View>
      </View>
      {/* page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>Display recommended activity levels</Text>
        <Switch
          trackColor={{ 
            false: global.colorblindMode 
              ? global.cb_switchTrackColorFalse
              : global.switchTrackColorFalse,
            true: global.colorblindMode
              ? global.cb_switchTrackColorTrue 
              : global.switchTrackColorTrue
          }}
          thumbColor={
            useReccActivity
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleReccActivity}
          value={useReccActivity}
        />
      </View>
      {/* page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>
          ADD APPROPRIATE TEXT HERE
        </Text>
        {/*<ProperSleepAnalysis />*/}
      </View>
      <View>
        <Text style={styles().bodyText}>
          ADD APPROPRIATE TEXT HERE
        </Text>
        {/*<NotEnoughSleepAnalysis />*/}
      </View>
      <View>
        <Text style={styles().bodyText}>
          ADD APPROPRIATE TEXT HERE
        </Text>
        {/*<OversleptSleepAnalysis />*/}
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryFitness2;

const styles = () => StyleSheet.create({
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
    justifyContent: "center",
    alignItems: "center",
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
  bodyText: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
});