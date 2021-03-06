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
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryMedication({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false);

  if(data !== null) {
    const medications = getPickerLabels(data);
    const dates = getTimestamps(data);
    const comms = initCommits(medications, dates, data);
    const [selectmedication, setMedication] = useState(medications[0]);
    const [commits, setCommits] = useState(comms);
    const [pressed, setPressed] = useState(false);

    return (
      <SafeAreaView style={styles().container}>

        {/* Modal + each of the navigable history pages */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        {/* Actual screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>

            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
              <Text style={styles().pageDescription}>
                View your medication history and some trends we've noticed from your
                consumption!
              </Text>
              <Image
                style={styles().avatarFlipped}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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
            <View style={{marginTop: 6}}>
              <TabBarAndContent 
                navigation={navigation} 
                data={data}
                multiPageData={commits}
                page={'medication'}
                page2Color={false}
                settings={settings}
              />
            </View>

            {/* Time Period dropdown picker */}
            <View style={{ marginTop: 30, alignSelf: 'flex-start', marginLeft: '5%', }}>
              <View style={styles().textInputView}>
                <View style={styles().labelView}>
                  <Text
                    style={{
                      color: pressed ? '#4CB97A' : '#816868',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Select Medicine
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: pressed ? '#4CB97A' : '#816868',
                    justifyContent: 'flex-end',
                    borderRadius: 6,
                    paddingLeft: 12,
                  }}>
                  <Picker
                    selectedValue={selectmedication}
                    style={styles().picker}
                    dropdownIconColor='#816868'
                    onValueChange={(itemValue, itemIndex) => {
                      setMedication(itemValue);
                      getCommits(itemValue, dates, data, setCommits);
                    }}
                    mode={'dropdown'}>
                    {medications.map((item, index) => {
                      return (
                          <Picker.Item key={index} label={item} value={item} color='#816868'/>
                      );
                    })}
                  </Picker>
                </View>
              </View>
            </View>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* App suggestions */}
            <View style={{ marginHorizontal: '5%', }}>
              {/* Took medication symptoms analysis */}
              <Text style={styles().text}>
                Based on our analysis, on days when you took your medication as prescribed, 
                you often reported experiencing the following...
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

              {/* Late/no medication symptoms analysis */}
              <Text style={styles().text}>
                Likewise, on days when you didn't take your prescribed medication or took 
                your prescribed medication late, you often reported experiencing the following...
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
              <Text style={styles().textLight}>
                ** Please consult a medical professional before altering your medication
                consumption as a result of these analyses. As a reminder, these analyses
                indicate correlation, not causation, and thus may not indicate direct effects 
                of your medication consumption. 
              </Text>
            </View>

            <View style={styles().pageEnd}/>
          </View>
        </ScrollView>
        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
  }

  else
    return (
      <SafeAreaView style={styles().container}>
        { /* Modal */}
        <HistorySelectACategory
          setModalView={setModalVisible}
          showModalView={modalVisible}
          navigation={navigation}
          data={data}
          settings={settings}
        />

        {/* Actual screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles().pageSetup}>
            
            {/* Gardener avatar + page blurb */}
            <View style={styles().avatarView}>
              <Text style={styles().pageDescription}>
                View your medication history and some trends we've noticed from your
                consumption!
              </Text>
              <Image
                style={styles().avatarFlipped}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
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

            <View style={{alignContent: 'center', margin: 22}}>
              <Text>
                Uh Oh! It seems like you don't have any data to view!
                Try making some health entries first!
              </Text>
            </View>
            
          </View>
        </ScrollView>
        <NavBar history={true} navigation={navigation} />
      </SafeAreaView>
    );
};

function getCommits(medName, dates, data, setCommits) {
  var length = data.medicineData.meds.length;
  var commits = [];
  var j = 89;

  for(var i = length < 90 ? 0 : length - 90; i < length; i++) {
    for(var [key, value] of Object.entries(JSON.parse(data.medicineData.meds[i]))) {
      //check if key is in what we are searching for
      if(key === medName) {
        let obj = new Object();
        obj.date = dates[j];

        if(value == true) {
          obj.count = 1;
        }
        
        else
          obj.count = 0;

        commits.push(obj);
      }

      //it's not
      else
        ;
    }
    j--;
  }

  setCommits(commits);
}

function initCommits(medications, dates, data) {
  var length = data.medicineData.meds.length;
  var commits = [];
  var j = 89;

  for(var i = length < 90 ? 0 : length - 90; i < length; i++) {
    for(var [key, value] of Object.entries(JSON.parse(data.medicineData.meds[i]))) {
      //check if key is in what we are searching for
      if(key === medications[0]) {
        let obj = new Object();
        obj.date = dates[j];

        if(value == true)
          obj.count = 1;
        
        else
          obj.count = 0;

        commits.push(obj);
      }

      //it's not
      else
        ;
    }
    j--;
  }

  return commits;
}

function getPickerLabels(data) {
  var length = data.medicineData.meds.length;
  var arr = [];

  for(var i = i = length < 90 ? 0 : length - 90; i < length; i++)
    for(var [key, value] of Object.entries(JSON.parse(data.medicineData.meds[i]))) {
      //check if key is in map
      if(!arr.includes(key)) {
        if(key !== 'null')
          arr.push(key);
      }

      //it exists
      else
        ;
    }

  return arr;
}

function getTimestamps(data) {
  var dates = [];
  const latestDate = new Date(data.latestDate);

  for(var i = 89; i >= 0; i--) {
    var date = new Date(latestDate.getTime() - (i * 24 * 60 * 60 * 1000));
    dates.push(date.toISOString().substring(0, 10));
  }

  return dates;
}

export default HistoryMedication;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatarFlipped: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    transform: [
      { scaleX: -1 }
    ]
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
  labelView: {
    position: 'absolute',
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    top: -16,
    left: 14,
    padding: 5,
    zIndex: 50,
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
    fontSize: 20,
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
  textInputView: {
    height: 48,
    width: Math.round(Dimensions.get('window').width * 0.425),
    position: 'relative',
  },
  textLight: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 14,
    textAlign: 'center',
  },
});
