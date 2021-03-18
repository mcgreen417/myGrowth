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

function HistoryDailyActivities2({ navigation }) {  
  const [selectactivity, setActivity] = useState('unselected');
  
  return (
    <SafeAreaView style={styles().container}>
      { /* Modal */}
      <HistorySelectACategory setModalView={setModalVisible} showModalView={modalVisible} navigation={navigation} />
      
      <View>
        <Text style={styles().bodyText}>
          View an easily digestable summary of your past daily activities 
          and check out the periods where you were the most active! 
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
        <Button title='History' onPress={() => navigation.navigate('HistoryDailyActivities1')} />
        <Button title='Activity View' />
        <Button title='Correlations' onPress={() => navigation.navigate('HistoryDailyActivities1')} />
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
        <Text style={styles().bodyText}>SELECT ACTIVITY</Text>
        <Picker
          selectedValue={selectactivity}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setActivity(itemValue)}
        >
          <Picker.Item label='Select one...' value='unselected' />
          <Picker.Item label='Played games' value='played_games' />
          <Picker.Item label='Did homework' value='did_homework' />
          <Picker.Item label='Cooked dinner' value='cooked_dinner' />
          <Picker.Item label='Listened to music' value='listen_music' />
          <Picker.Item label='Talked to friends' value='talk_friends' />
          <Picker.Item label='Went to work' value='went_work' />
        </Picker>
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryDailyActivities2;

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
  }
});