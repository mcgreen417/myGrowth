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
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';
import { Auth, API } from 'aws-amplify';
import * as queries from '../../../src/graphql/queries';

function HistoryStress({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [timePeriod, setTimePeriod] = useState('unselected');
  const [data, setData] = useState([]);

  getBasicData(data, setData);

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
          View your stress level history and easily visualize changes in your
          stress levels over time, alongside potential causes for these changes.
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
        <TouchableOpacity style={styles().buttons} onPress={() => setModalVisible(true)}>
          <View style={styles().inlineRow}>
            <Text style={styles().textReg}>Categories</Text>
            <View>
              <Image source={require('../../shared/assets/transit_enterexit.png')} />
            </View>
          </View>
        </TouchableOpacity>

        <TabBarAndContent historyGenComp={true} navigation={navigation} data={data} timePeriod={timePeriod} page={'stress'} />

      </View>
      {/* Middle Divider */}
      <View style={styles().dividerView}>
        <View style={styles().divider} />
      </View>
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
        <Text style={styles().bodyText}>
          Based on our analysis, the following activities may help to reduce
          your stress...
        </Text>
        {/*<ReduceStressAnalysis />*/}
      </View>
      <View>
        <Text style={styles().bodyText}>
          Likewise, if you're felling stressed, you should avoid the following
          activities if possible...
        </Text>
        {/*<AvoidStressAnalysis />*/}
      </View>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
};

async function getBasicData(data, setData) {
  const res = await API.graphql({
    query: queries.getChartData
  })

  const arr = res.data;

  setData(arr.getChartData);
}

export default HistoryStress;

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
