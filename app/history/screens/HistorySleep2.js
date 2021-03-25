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
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistorySleep2({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectDisplay, setDisplay] = useState('unselected');
  const [useReccSleep, setUseReccSleep] = useState(false);

  const toggleReccSleep = () =>
    setUseReccSleep((previousState) => !previousState);

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
          View your sleep history and our analysis of activities that may have a
          measurable effect on your duration or quality of sleep.
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
          onPress={() => navigation.navigate('HistorySleep1')}
        />
        <Button
          title='Quality'
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
          onPress={() => navigation.navigate('HistorySleep1')}
        />
        <TouchableOpacity style={styles().buttons} onPress={() => setModalVisible(true)}>
          <View style={styles().inlineRow}>
            <Text style={styles().textReg}>Categories</Text>
            <View>
              <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>

        <TabBarAndContent sleep={true} navigation={navigation} />

      </View>
      <View>
        <View>
          <Text style={styles().bodyText}>TIME PERIOD</Text>
          <Picker
            selectedValue={timePeriod}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
            mode={'dropdown'}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Past week' value='past_week' />
            <Picker.Item label='Past month' value='past_month' />
            <Picker.Item label='Past year' value='past_year' />
          </Picker>
        </View>
        <View>
          <Text style={styles().bodyText}>SELECT DISPLAY</Text>
          <Picker
            selectedValue={selectDisplay}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setDisplay(itemValue)}
            mode={'dropdown'}
          >
            <Picker.Item label='Select one...' value='unselected' />
            <Picker.Item label='Sleep Only' value='sleep_only' />
            <Picker.Item label='Naps Only' value='naps_only' />
          </Picker>
        </View>
      </View>
      {/* page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>Display recommended sleep amount</Text>
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
            useReccSleep
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleReccSleep}
          value={useReccSleep}
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

export default HistorySleep2;

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  chooserImg: {
    borderWidth: 1,
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
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
    backgroundColor: global.colorblindMode
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
