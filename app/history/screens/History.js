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
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import TabBarAndContent from '../../shared/components/TabBarAndContent';
import HistorySelectACategory from '../../shared/components/HistorySelectACategory';

function HistoryHealthEntries({ route, navigation }) {
  const data = route.params.data;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
      
      { /* Modal */}
      <HistorySelectACategory
        setModalView={setModalVisible}
        showModalView={modalVisible}
        navigation={navigation}
        data={data}
      />
      
      {/* Actual screen */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              View an easily digestable summary of your health entry history! View
              your individual health entries below or select a category to get
              started.
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
          {/*<TabBarAndContent history={true} navigation={navigation} />*/}

          {/* Middle divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider} />
          </View>

          {/* Search for correlations blurb */}
          <View style={{ width: '90%' }}>
            <Text style={styles().text}>
              You can overlay graphs from different categories to search 
              for correlations between your physical and mental health. 
              Click below to get started!
            </Text>
          </View>

          {/* Search for correlations button */}
          <View style={{ width: '50%', marginVertical: 20, }}>
            <Button 
              title='SEARCH FOR CORRELATIONS'
              color={
                global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
              }
              onPress={() => navigation.navigate('HistoryHealthEntries')}>
            </Button>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
      <NavBar history={true} navigation={navigation} />
    </SafeAreaView>
  );
}

const HistoryCorrelations = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>{/* add correlations page here */}</Text>
    </SafeAreaView>
  );
};

export { HistoryHealthEntries, HistoryCorrelations };

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
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textAlt: {
    color: 'white',
    textDecorationLine: 'none',
    textAlign: 'center',
    fontSize: 16,
  },
});
