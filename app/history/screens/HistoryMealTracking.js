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

function HistoryMealTracking({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectNutrients, setNutrients] = useState('unselected');
  const [useReccNutrition, setUseReccNutrition] = useState(false);
  
  const toggleReccNutrition = () =>
    setUseReccNutrition((previousState) => !previousState);

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
          View your meal history and our analysis of the potential effects of
          your eating habits. Check how much you've been eating recently!
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
        />
        <Button
          title='Correlations'
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
          <Text style={styles().bodyText}>SELECT NUTRIENT</Text>
          <Picker
            selectedValue={selectNutrients}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => setNutrients(itemValue)}
          >
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
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>Display recommended nutritional values</Text>
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
            useReccNutrition
              ? (global.colorblindMode 
                ? global.cb_switchThumbColorTrue
                : global.switchThumbColorTrue)
              : (global.colorblindMode
                ? global.cb_switchThumbColorFalse
                : global.switchThumbColorFalse)
          }
          ios_backgroundColor={global.cb_switchIosBackgroundColor}
          onValueChange={toggleReccNutrition}
          value={useReccNutrition}
        />
      </View>
      {/* page divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
      <View>
        <Text style={styles().bodyText}>
          Based on our analysis, on days that you met your nutritional
          requirements, you often reported...
        </Text>
        {/*<MetNutritionAnalysis />*/}
      </View>
      <View>
        <Text style={styles().bodyText}>
          Based on our analysis, on days that you didn't meet your nutritional
          requirements, you often reported...
        </Text>
        {/*<NotMetNutritionAnalysis />*/}
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryMealTracking;

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