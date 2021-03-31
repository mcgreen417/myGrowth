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

function HistoryWeight({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');

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
              View a history of your changes in weight over time and receive calorie
              and exercise recommendations.
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
          <TabBarAndContent historyGenComp={true} navigation={navigation} />

          <View style={{ width: '90%', justifyContent: 'flex-start', marginTop: 20, }}>
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

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Recommended calories */}
          <View style={{ marginHorizontal: '5%', }}>
            <Text style={styles().text}>
              Based on your biological information, we can provide you the following
              recommendations on your calorie consumption thresholds...
            </Text>
            <View style={{ borderRadius: 10, marginVertical: 10, }}>
              <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                <View style={{ width: '50%', backgroundColor: '#43A56C', borderTopLeftRadius: 10, }}>
                  <Text style={styles().textAltWhite}>Weight gain</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderTopRightRadius: 10, }}>
                  <Text style={styles().textAltBrown}>xxxx cal</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                <View style={{ width: '50%', backgroundColor: '#4CB97A', borderLeftRadius: 10, }}>
                  <Text style={styles().textAltWhite}>Mild weight gain</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: 'white', borderRightRadius: 10, }}>
                  <Text style={styles().textAltBrown}>xxxx cal</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                <View style={{ width: '50%', backgroundColor: '#A5DFB2', borderLeftRadius: 10, }}>
                  <Text style={styles().textAltWhite}>Maintan weight</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderRightRadius: 10, }}>
                  <Text style={styles().textAltBrown}>xxxx cal</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                <View style={{ width: '50%', backgroundColor: '#C5E8CF', borderLeftRadius: 10, }}>
                  <Text style={styles().textAltWhite}>Mild weight loss</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: 'white', borderRightRadius: 10, }}>
                  <Text style={styles().textAltBrown}>xxxx cal</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                <View style={{ width: '50%', backgroundColor: '#D8EFDE', borderBottomLeftRadius: 10, }}>
                  <Text style={styles().textAltWhite}>Weight loss</Text>
                </View>
                <View style={{ width: '50%', backgroundColor: '#F5F5F5', borderBottomRightRadius: 10, }}>
                  <Text style={styles().textAltBrown}>xxxx cal</Text>
                </View>
              </View>
            </View>
            <Text style={styles().textLight}>
              ** Please consult a medical professional before planning to go above 
              (xxxx cal) or below (1200 cal), the minimum/maximum recommended daily calories 
              amounts, for an extended period of time. Recommendations are based on current 
              height, weight, and activity level, and thus may not always be accurate.
            </Text>
          </View>

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Recommended exercises (decide how we're going to add this in?) */}
          <View style={{ marginHorizontal: '5%', marginBottom: 20, }}>
            <Text style={styles().text}>
              Exercise is a great way to stay in shape and manage your weight! The
              following exercise regimens are recommended for you.
            </Text>
          </View>

          <View style={styles().pageEnd}/>
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryWeight;

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
    width: '40%',
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
  textAltBrown: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  textAltWhite: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  textLight: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
