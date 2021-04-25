import React, { useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';
import Sprout from '../../shared/assets/svgs/sprout-emoji.svg';

const plantItemList = new Array(
  require('../../shared/assets/plant_sprites/1_0.png'),
  require('../../shared/assets/plant_sprites/2_0.png'),
  require('../../shared/assets/plant_sprites/3_0.png'),
  require('../../shared/assets/plant_sprites/4_0.png'),
  require('../../shared/assets/plant_sprites/5_0.png'),
  require('../../shared/assets/plant_sprites/6_0.png'),
  require('../../shared/assets/plant_sprites/9_0.png'),
  require('../../shared/assets/plant_sprites/8_0.png'),
  require('../../shared/assets/plant_sprites/7_0.png'),
  require('../../shared/assets/plant_sprites/10_0.png'),
  require('../../shared/assets/plant_sprites/11_0.png'),
  require('../../shared/assets/plant_sprites/12_0.png'),
  require('../../shared/assets/plant_sprites/13_0.png'),
  require('../../shared/assets/plant_sprites/14_0.png'),
  require('../../shared/assets/plant_sprites/15_0.png'),
  require('../../shared/assets/plant_sprites/16_0.png'),
  require('../../shared/assets/plant_sprites/19_0.png'),
  require('../../shared/assets/plant_sprites/18_0.png'),
  require('../../shared/assets/plant_sprites/17_0.png'),
  require('../../shared/assets/plant_sprites/20_0.png')
);

function PlantShop({ navigation }) {
  const [plant, setPlant] = useState(
    require('../../shared/assets/plant_sprites/4_0.png')
  );
  const [plantItem, setPlantItem] = useState(plantItemList);
  const [showGoalInfo, setShowGoalInfo] = useState(false);
  const [showPurchaseConfirmation, setShowPurchaseConfirmation] = useState(false);

  return (
    <SafeAreaView style={styles().container}>

      {/* Confirm Purchase modal */}
      <View style={styles().container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showPurchaseConfirmation}
          onRequestClose={() => setShowPurchaseConfirmation(!showPurchaseConfirmation)}
        >
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setShowPurchaseConfirmation(!showPurchaseConfirmation)}
          >
            <Pressable 
              style={styles().modalContainer}
              onPress={() => setShowPurchaseConfirmation(true)}              
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='star'
                    type='material-community'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Confirm Purchase</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={styles().text}>
                    Are you sure you wish to purchase the selected items for a total of   
                    <Text style={styles().textBoldAlt}> 900</Text>
                    <Icon
                      name='star'
                      type='MaterialCommunityIcons'
                      color='#816868'
                      size={16}
                      style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}
                    />?
                  </Text>
                </View>
                <Text style={styles().textBoldAlt}>This action cannot be undone.</Text>
              </View>
              <View 
                style={{ 
                  flexDirection: 'row', 
                  alignSelf: 'flex-end', 
                  marginVertical: 10, 
                  marginHorizontal: '5%', 
                }}>
                <TouchableOpacity 
                  style={{ marginRight: 20, }}
                  onPress={() => setShowPurchaseConfirmation(!showPurchaseConfirmation)}>
                  <Text style={styles().textButton}>CONFIRM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowPurchaseConfirmation(!showPurchaseConfirmation)}>
                  <Text style={styles().textButton}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      {/* Goals info pop-up */}
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={showGoalInfo}
          onRequestClose={() => setShowGoalInfo(!showGoalInfo)}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: '#00000055',
          }}
          onPressOut={() => setShowGoalInfo(!showGoalInfo)}
          >
            <Pressable
              style={styles().modalContainer}
              onePress={() => setShowGoalInfo(true)}
            >
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                }}>
                  <Icon
                    name='information-circle-outline'
                    type='ionicon'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>About Stars</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      justifyContent: 'flex-end',
                      marginRight: 6,
                    }}>
                    <Icon
                      name='close'
                      type='ionicon'
                      color='white'
                      onPress={() => setShowGoalInfo(!showGoalInfo)}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginTop: 10,
                  marginBottom: 16,
                }}>
                <Text style={styles().textSpaced}>
                  Stars (
                  <Icon
                    name='star'
                    type='material-community'
                    color='#816868'
                    size={16}
                  />
                  ) are myGrowth's official currency! 
                </Text>
                <Text style={styles().textSpaced}>
                  These can be used to buy new varieties of plants and plant accessories. 
                </Text>
                <Text style={styles().textSpaced}>
                  Stars can be earned by completing daily, weekly, or long-term goals recommended 
                  by myGrowth.
                </Text>
                <Text style={styles().textSpaced}>
                  Check out the Goals page and start tracking your progress toward your own personal 
                  goals today!
                </Text>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <Text style={styles().pageDescription}>
              Purchase accessories for your plant using stars earned from
              completing goals!
            </Text>
            <Image
              style={styles().avatarFlipped}
              source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
            />
          </View>

          {/* Current GP + stars display */}
          <View style={styles().plantInfoView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flexDirection: 'column', maxWidth: Math.round(Dimensions.get('window').width * 0.6), }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -10, }}>
                  <Sprout height={18} width={16} />
                  <View style={{ marginRight: 6, }}/>
                  <Text style={styles().textPlantInfo}>Current Plant Growth:</Text>
                </View>
                <Text style={styles().textPlantInfoSmall}>Plant fully grown, congratulations!</Text>
              </View>
              <View style={{ flex: 1, }}/>
              <View style={{ alignSelf: 'flex-end', }}>
                <Pressable
                  style={styles().plantInfoBackground}
                  onPress={() => getGoals(navigation)}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles().textPlantInfo}>900</Text>
                    <Icon
                      name='star'
                      color='white'
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Plant section */}
          <View style={styles().plantSection}>
            <View style={styles().plantImage}>
              <Image source={plant} style={styles().plant} />
            </View>
          </View>

          {/* Plant shop + customize buttons */}
          <View style={styles().plantButtonBackground}>
            <View style={styles().plantButtonView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Pressable
                  style={styles().plantButton}
                  onPress={() => navigation.navigate('CustomizePlant')}>
                  <Icon name='arrow-left' color='#816868' />
                  <Text style={styles().textPlantButton}>Customize Plant</Text>
                </Pressable>
                <View style={styles().line2} />
                <Pressable
                  style={styles().plantButton}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={styles().textPlantButton}>Return to Home</Text>
                  <Icon name='arrow-right' color='#816868' />
                </Pressable>
              </View>
            </View>
          </View>

          {/* Page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider}/>
          </View>

          {/* Plant selection */}
          <View style={styles().plantSelectView}>
            {plantItem.map((item, index) => (
              <View style={styles().plantItemSelect} key={index}>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? 'gray' : '#E5E5E5',
                    },
                    styles().plantItemPress,
                  ]}
                  onPress={() => setPlant(item)}>
                  <Image source={item} style={styles().plantItem} />
                </Pressable>
                <View style={styles().inlineRow2}>
                  <Text style={styles().text}>900</Text>
                  <Icon
                    name='star'
                    type='MaterialCommunityIcons'
                    color='#816868'
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Page divider */}
          <View style={styles().dividerView}>
            <View style={styles().divider}/>
          </View>

          {/* Clear Changes & Purchase All Shown buttons */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 16,
              justifyContent: 'center',
            }}>
            <View style={{ width: '42.5%' }}>
              <Button
                title='Clear Changes'
                color='#A5DFB2'
                onPress={() => setPlant(require('../../shared/assets/plant_sprites/4_0.png'))}
              />
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button
                title='Purchase Shown'
                color='#A5DFB2'
                onPress={() => setShowPurchaseConfirmation(!showPurchaseConfirmation)}
              />
            </View>
          </View>

          {/* Goals redirect */}
          <View style={{ marginRight: '5%', justifyContent: 'center', alignSelf: 'flex-end' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
              <Icon
                name='information-circle-outline'
                type='ionicon'
                color='#816868'
                onPress={() => setShowGoalInfo(!showGoalInfo)}
              />
              <View style={{ marginRight: 4, }}/>
              <Text style={styles().text}>Want more stars? </Text>
              <TouchableOpacity onPress={() => getGoals(navigation)}>
                <Text style={styles().plantLinks}>Complete a new goal.</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

async function getGoals(navigation) {
  const date = new Date();
  const findSunday = 0 - date.getDay();
  const sunday = new Date(date.getDate() - findSunday);

  const res = await API.graphql({
    query: queries.getMilestones
  });

  var goals = res.data.getMilestones.Milestones;

  for(var i = 0; i < goals.length; i++) {
    let testDate = new Date(goals[i].Timestamp);

    if(goals[i].Category === 'daily') {
      if(testDate.getDate() < date.getDate()) {
        goals[i].Completed = false;
        goals[i].Progress = 0;

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: goals[i].Timestamp, Completed: goals[i].Completed, Category: goals[i].Category, 
            Requirement: goals[i].Requirement, Progress: goals[i].Progress, Reward: goals[i].Reward}
        })
      }
    }

    else if(goals[i].Category === 'weekly') {
      if(testDate.getDate() - sunday.getDate() >= 7) {
        goals[i].Completed = false;
        goals[i].Progress = 0;

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: goals[i].Timestamp, Completed: goals[i].Completed, Category: goals[i].Category, 
            Requirement: goals[i].Requirement, Progress: goals[i].Progress, Reward: goals[i].Reward}
        })
      }
    }
  }

  const res1 = await API.graphql({
    query: queries.getMilestones
  });

  goals = res1.data.getMilestones.Milestones;

  navigation.push('Goals', { goals });
}

async function getTodos(navigation) {
  const res = await API.graphql({
    query: queries.getTodos
  });

  const todos = res.data.getTodos.toDos;

  navigation.navigate('ToDoList', {todos});
}

export default PlantShop;

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
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginHorizontal: '5%',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line2: {
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    height: '80%',
    width: 2,
  },
  modalContainer: {
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
    alignItems: 'center',
    width: '80%',
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
  modalHeaderBar: {
    backgroundColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  plant: {
    width: '60%',
    height: '90%',
  },
  plantButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
  },
  plantButtonBackground: {
    backgroundColor: '#816868',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
    width: '90%',
  },
  plantButtonView: {
    backgroundColor: '#A5DFB2', 
    marginHorizontal: 6, 
    marginTop: -6, 
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  plantImage: {
    width: '100%',
    height: 260,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#816868',
    marginBottom: -1,
  },
  plantItem: {
    margin: 12,
  },
  plantItemSelect: {
    marginVertical: 4,
  },
  plantItemPress: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderWidth: 3,
    borderColor: '#816868',
  },
  plantInfoBackground: {
    backgroundColor: '#A5DFB2', 
    borderRadius: 4, 
    paddingHorizontal: 12, 
    paddingVertical: 4,
    marginVertical: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  plantInfoView: {
    backgroundColor: '#816868',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 6,
  },
  plantLinks: {
    color: '#4CB97A',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  plantSelectView: {
    justifyContent: 'center',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 5,
    marginHorizontal: '5%',
    justifyContent: 'space-around',
    marginBottom: -4,
  },
  text: {
    fontSize: 16,
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
  textButton: {
    fontSize: 16,
    color: '#4CB97A',
    fontWeight: 'bold',
  },
  textSpaced: {
    fontSize: 16,
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    marginBottom: 4,
  },
  textAlt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBoldAlt: {
    fontSize: 16,
    color: '#816868',
    fontWeight: 'bold',
    marginTop: 4,
  },
  textPlantButton: {
    fontSize: 16, 
    color: 'white', 
    marginVertical: 4, 
    fontWeight: 'bold',
  },
  textPlantInfo: {
    fontSize: 18, 
    color: 'white', 
    marginVertical: 4, 
    fontWeight: 'bold',
  },
  textPlantInfoSmall: {
    fontSize: 14, 
    color: 'white', 
    marginVertical: 4, 
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});
