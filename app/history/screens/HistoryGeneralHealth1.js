import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryGeneralHealth1({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [selectsymptom, setSymptom] = useState('unselected');

  return (
    <SafeAreaView style={styles().container}>

      {/* Modal + each of the navigable history pages */}
      <HistorySelectACategory
        setModalView={setModalVisible}
        showModalView={modalVisible}
        navigation={navigation}
      />

      {/* Actual screen */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>

          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              View a summary of your physical and mental health history and changes
              in symtpom frequency and intensity over time.
            </Text>
            <Image
              style={styles().avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
          </View>
          {/* Top page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Categories button */}
          <TouchableOpacity 
            style={styles().categoriesView} 
            onPress={() => setModalVisible(true)}
          >
            <View 
              style={styles().categories}>
              <Text style={styles().textAlt}>Categories</Text>
              <View>
                <Icon
                  name='arrow-top-right'
                  type='material-community'
                  color='white'
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Custom history component */}
          <TabBarAndContent generalHealth={true} navigation={navigation} />

          {/* Time Period and Select Symptom drop-down selection */}
          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, flexDirection: 'row', }}>
            <View style={{ width: '50%' }}>
              <Text style={styles().heading}>TIME PERIOD</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={timePeriod}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => setTimePeriod(itemValue)}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select one...' value='unselected' />
                  <Picker.Item label='Past week' value='past_week' />
                  <Picker.Item label='Past month' value='past_month' />
                  <Picker.Item label='Past year' value='past_year' />
                </Picker>
              </View>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles().heading}>SELECT SYMPTOM</Text>
              <View style={styles().pickerView}>
                <Picker
                  selectedValue={selectsymptom}
                  style={styles().picker}
                  onValueChange={(itemValue, itemIndex) => setSymptom(itemValue)}
                  mode={'dropdown'}
                >
                  <Picker.Item label='Select one...' value='unselected' />
                  <Picker.Item label='All symptoms' value='all_symptoms' />
                  <Picker.Item label='Stomach ache' value='stomach_ache' />
                  <Picker.Item label='Wrist soreness' value='wrist_soreness' />
                  <Picker.Item label='Back soreness' value='back_soreness' />
                  <Picker.Item label='Dizziness' value='dizziness' />
                  <Picker.Item label='Fatigue' value='fatigue' />
                </Picker>
              </View>
            </View>
          </View> 

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* App suggestions */}
          <View style={{ marginHorizontal: '5%', marginBottom: 20, }}>
            {/* Decrease symptom frequency analysis */}
            <Text style={styles().text}>
              Based on our analysis, the following activities may help decrease the frequency of
              (fill health symptom)...
            </Text>
            <View style={styles().suggestionView}>
               <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #1)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #3)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #2)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='checkmark-sharp' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #4)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Increase symptom intensity analysis */}
            <Text style={styles().text}>
              Likewise, the following activities may lead to an increase in the frequency of
              (fill health symptom)...
            </Text>
            <View style={styles().suggestionView}>
               <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #1)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #3)</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #2)</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: '50%', }}>
                    <Icon 
                      name='close' 
                      type='ionicon' 
                      color='#A5DFB2'
                    />
                    <Text style={styles().textAlt}>(Suggestion #4)</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Medical disclaimer */}
            <Text style={styles().textLightSmall}>
              ** As a reminder, these analyses indicate correlation, not causation, and thus 
              may not indicate direct effects of your daily habits. You may wish to speak to 
              a medical professional if pre-existing physical or mental health symptoms suddenly 
              change or worsen.
            </Text>
          </View>

          <View style={styles().pageEnd}/>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryGeneralHealth1;

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
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  categories: {
    flexDirection: 'row', 
    alignSelf: 'center', 
    alignItems: 'center', 
    marginVertical: 2, 
    marginHorizontal: 8,
  },
  categoriesView: {
    alignSelf: 'flex-end',
    marginBottom: -16,
    borderRadius: 8,
    marginRight: '5%',
    backgroundColor: global.colorblindMode
      ? global.cb_navBarCurrentIconColor
      : global.navBarCurrentIconColor,
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
  heading: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    alignItems: 'center',
    height: '100%',
  },
  picker: {
    flex: 1,
    height: 32,
  },
  pickerView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  suggestionView: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#816868',
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
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textAlt: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
  textLightSmall: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
