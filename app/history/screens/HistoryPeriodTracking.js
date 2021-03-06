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

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

function HistoryPeriodTracking({ route, navigation }) {
  const data = route.params.data;
  const settings = route.params.settings;
  const [modalVisible, setModalVisible] = useState(false);

  if(data !== null) {
    const arr = initDisplayData(data);
    const labels = getTimestamps(data);
    const commits = genCommits(arr, labels);
    const today = new Date();
    var predictDate = new Date();
    predictDate.setDate((today.getDate() + getPeriod(data)));

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
                View a summary of your period history and our predictions for your 
                upcoming period!
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
                page={'period'}
                page2Color={false} 
                settings={settings}
              />
            </View>
              
            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* Period prediction */}
            <View 
              style={{ 
                flexDirection: 'row', 
                width: '90%', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}>
              {/* Countdown circle (replace with actual responsive circle graph?) */}
              <View style={{ width: '45%' }}>
                <View 
                  style={{ 
                    borderWidth: 6,
                    borderRadius: 100/2, 
                    borderColor: global.colorblindMode
                      ? global.cb_navBarCurrentIconColor
                      : global.navBarCurrentIconColor,
                  }}>
                    <View style={{ marginVertical: 12 }}>
                      <Text style={styles().textNumber}>{getPeriod(data)}</Text>
                      <Text style={styles().textLight}>days until your{"\n"} next period</Text>
                    </View>
                </View>
              </View>
              <View style={{ width: '5%' }}/>
              {/* Period statistics */}
              <View style={{ width: '45%' }}>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles().text}>Next period predicted to occur on
                    <Text style={styles().textAltGreen}> {monthNames[predictDate.getMonth()]} {predictDate.getDate()}!{"\n"}</Text>
                  </Text>
                </View>
                {/*
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles().textLight}>Average time between cycles: 
                    <Text style={styles().textLightGreen}> 28 days</Text>
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 6, }}>
                  <Text style={styles().textLight}>Average cycle length: 
                    <Text style={styles().textLightGreen}> 7 days</Text>
                  </Text>
                </View>
                */}
              </View>
            </View>

            {/* Middle divider */}
            <View style={styles().dividerView}>
              <View style={styles().divider} />
            </View>

            {/* App suggestions */}
            <View style={{ marginHorizontal: '5%', }}>
              {/* Common symptom analysis */}
              <Text style={styles().text}>
                Based on this point in your cycle, some symptoms you may expect to
                encounter today are...
              </Text>
              <View style={styles().suggestionView}>
                <View style={{ marginVertical: 6, marginHorizontal: '2.5%', }}>
                  <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                    <View style={{ flexDirection: 'row', width: '50%', }}>
                      <Icon 
                        name='sick' 
                        type='material-icons' 
                        color='#A5DFB2'
                      />
                      <Text style={styles().textAlt}> (Suggestion #1)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%', }}>
                      <Icon 
                        name='sick' 
                        type='material-icons'
                        color='#A5DFB2'
                      />
                      <Text style={styles().textAlt}> (Suggestion #3)</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginVertical: 3, }}>
                    <View style={{ flexDirection: 'row', width: '50%', }}>
                      <Icon 
                        name='sick' 
                        type='material-icons'
                        color='#A5DFB2'
                      />
                      <Text style={styles().textAlt}> (Suggestion #2)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%', }}>
                      <Icon 
                        name='sick' 
                        type='material-icons' 
                        color='#A5DFB2'
                      />
                      <Text style={styles().textAlt}> (Suggestion #4)</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Medical disclaimer */}
              <Text style={styles().textLightSmall}>
                ** As a reminder, these analyses indicate correlation, not causation, and thus 
                may not indicate direct effects of your cycle. You may wish to speak to a medical 
                professional if your cycle is irregular or you regularly experience life-disrupting 
                symptoms.
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
                View a summary of your period history and our predictions for your 
                upcoming period!
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

function genCommits(arr, labels) {
  var commitsArr = [];

  for(var i = 0; i < 90; i++) {
    let obj = new Object();
    obj.date = labels[i];
    obj.count = arr[i];
    commitsArr.push(obj);
  }

  return commitsArr;
}

function initDisplayData(data) {
  var len = data.periodData.length;
  var arr = [];

  for(var i = len < 90 ? 0 : len - 90; i < len;  i++) {
    if(data.periodData[i] == 0 || data.periodData[i] == -1)
      arr.push(0);
    
    else
      arr.push(data.periodData[i]);
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

//simple 28 days in th future prediction
function getPeriod(data) {
  const curDate = new Date();
  const date = new Date(data.latestDate);
  var daysUntil = 28;
  var dateOfLastPeriod = date;

  //find date of last period
  for(var i = data.periodData.length; i >= 0; i--) {
    if(data.periodData[i] === 1) {
      dateOfLastPeriod = new Date(date.getDate() - (data.periodData.length - i));
      daysUntil = Math.abs(daysUntil - ((curDate.getDate() - dateOfLastPeriod.getDate()))) % 28;

      break;
    }
  }

  return daysUntil;
}

export default HistoryPeriodTracking;

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
  textAltGreen: {
    color: global.colorblindMode
      ? global.cb_navBarCurrentIconColor
      : global.navBarCurrentIconColor,
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
  textNumber: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textLight: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    textAlign: 'center',
  },
  textLightGreen: {
    color: global.colorblindMode
      ? global.cb_navBarCurrentIconColor
      : global.navBarCurrentIconColor,
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
