import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';
import Wave from '../../shared/assets/svgs/wave-emoji.svg';
import Sprout from '../../shared/assets/svgs/sprout-emoji.svg';

function Home({ navigation, route }) {
  let plant = 4;
  let stage = 0;
  //const [avatar, setAvatar] = useState(0);
  const [displayName, setDisplayName] = useState('(FirstName)');
  const [mostRecentEntryString, setMostRecentEntryString] = useState('You wrote your last entry on (date) at (time).');
  const [points, setPoints] = useState(900);

  useEffect(() => {
    async function setName() {
      const user = await Auth.currentAuthenticatedUser();

      setDisplayName(user.attributes.name);
    }

    async function setRecentEntryString() {
      var setString = 'You haven\'t written an entry yet, write your very first entry now!';
      const user = await Auth.currentAuthenticatedUser();
      var temp = null;

      //put query here
      const res = await API.graphql({
        query: queries.getDailyEntries,
        variables: {UserID: user.username}
      });

      //if res dailyentries is empty
      if(res.data.getDailyEntries.dailyEntries.length == 0)
        ;

      else {
        var date = new Date(res.data.getDailyEntries.dailyEntries[0].Timestamp);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        var realDate = ''.concat(month).concat('/').concat(day).concat('/').concat(year);
        setString = 'You wrote your last entry on '.concat(realDate);
      }

      setMostRecentEntryString(setString);
    }

    // async function getAvatarId() {
    //   const cache = new Cache({
    //     namespace: 'myapp',
    //     policy: {
    //       maxEntries: 50000,
    //     },
    //     backend: AsyncStorage,
    //   });

    //   const id = await cache.peek('avatar');

    //   setAvatar(id);
    // }

    async function getPoints() {
      const res = await API.graphql({
        query: queries.getSetting
      });

      const points = res.data.getSetting.Points;

      setPoints(points);
    }

    setName();
    setRecentEntryString();
    //getAvatarId();
    getPoints();
  });

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles().avatarView}>
            <View style={{ flex: 1, }}>
              <Text style={styles().pageDescription}>Good Morning,</Text>
              <View style={{ flexDirection: 'row', }}>
                <Text style={styles().pageDescription}>{displayName}!</Text>
                <View style={{ marginRight: 8, }}/>
                <Wave height={28} width={28}/>
              </View>
            </View>
            <Image
              style={styles().avatarFlipped}
              source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
            />
          </View>

          {/* Current GP + stars display */}
          <View style={styles().plantInfoView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: 'column', maxWidth: Math.round(Dimensions.get('window').width * 0.6), }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -10, }}>
                  <Sprout height={18} width={16} />
                  <View style={{ marginRight: 6, }}/>
                  <Text style={styles().textPlantInfo}>Current Plant Growth:</Text>
                </View>
                <Text style={styles().textPlantInfoSmall}>Plant fully grown, congratulations!</Text>
              </View>
              <View style={{ alignSelf: 'flex-end', }}>
                <Pressable
                  style={styles().plantInfoBackground}
                  onPress={() => getGoals(navigation)}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles().textPlantInfo}>{points}</Text>
                    <Icon
                      name='star'
                      color='white'
                    />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Plant Section */}
          <View style={styles().plantSection}>
            <View style={styles().plantImage}>
              <Image
                source={require('../../shared/assets/plant_sprites/' +
                  plant +
                  '_' +
                  stage +
                  '.png')}
                style={styles().plant}
              />
            </View>
          </View>

          {/* Plant shop + customize buttons */}
          <View style={styles().plantButtonBackground}>
            <View style={styles().plantButtonView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Pressable
                  style={styles().plantButton}
                  onPress={() => navigation.navigate('CustomizePlant', {points})}>
                  {/*<Icon name='arrow-left' color='#816868' />*/}
                  <Text style={styles().textPlantButton}>Customize Plant</Text>
                </Pressable>
                {/*<View style={styles().line2} />
                <Pressable
                  style={styles().plantButton}
                  onPress={() => navigation.navigate('PlantShop', {points})}>
                  <Text style={styles().textPlantButton}>Enter Plant Shop</Text>
                  <Icon name='arrow-right' color='#816868' />
                </Pressable>*/}
              </View>
            </View>
          </View>

          {/* Write a new entry button */}
          <View style={styles().dividerView}>
            <View style={styles().dividerLeft} />
            <View>
              <Pressable onPress={() => navigation.navigate('HealthEntry')}>
                <View style={styles().entryButton}>
                  <View
                    style={{
                      marginVertical: 4,
                      marginHorizontal: 8,
                      paddingLeft: 8,
                      paddingTop: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#A5DFB2',
                      }}>
                      Write a new entry!
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#F6EFED',
                        marginTop: -4,
                      }}>
                      {mostRecentEntryString}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View style={styles().dividerRight} />
          </View>

          {/* View past entries */}
          <View style={{ alignSelf: 'flex-end', marginTop: -16, marginRight: '2.5%' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', }}
              onPress={() => navigation.navigate('HealthEntryHistory')}>
              <Text style={styles().plantLinks}>View Past Entries</Text>
              <Icon name='arrow-right' color='#816868' />
            </TouchableOpacity>
          </View>

          {/* Avatar Section */}

          <View style={{ width: '90%', marginTop: 20, }}>
            <View style={{ flexDirection: 'row', }}>
              <Image
                style={styles().avatar}
                source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
              />
              <View style={{ marginLeft: '5%', flex: 1, }}>
                <Text style={styles().activityView}>
                  Why don't you try doing one of these activities?
                </Text>
                <TouchableOpacity
                  style={styles().inlineRow}
                  onPress={() => navigation.navigate('HealthEntry')}>
                  <Text style={styles().text}>Write a health entry</Text>
                  <Icon
                    name='checkmark-circle-outline'
                    type='ionicon'
                    color={
                      global.colorblindMode
                        ? global.cb_switchThumbColorTrue
                        : global.switchThumbColorTrue
                    }
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>

                <View style={styles().dividerViewLow}>
                  <View style={styles().line} />
                </View>

                <TouchableOpacity
                  style={styles().inlineRow}
                  onPress={() => navigation.navigate('Journal')}>
                  <Text style={styles().text}>Write a journal entry</Text>
                  <Icon
                    name='checkmark-circle-outline'
                    type='ionicon'
                    color={
                      global.colorblindMode
                        ? global.cb_switchThumbColorTrue
                        : global.switchThumbColorTrue
                    }
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>

                <View style={styles().dividerViewLow}>
                  <View style={styles().line} />
                </View>

                <TouchableOpacity
                  style={styles().inlineRow}
                  onPress={() => getGoals(navigation)}>
                  <Text style={styles().text}>Complete a goal</Text>
                  <Icon
                    name='checkmark-circle-outline'
                    type='ionicon'
                    color={
                      global.colorblindMode
                        ? global.cb_switchThumbColorTrue
                        : global.switchThumbColorTrue
                    }
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>

                <View style={styles().dividerViewLow}>
                  <View style={styles().line} />
                </View>

                <TouchableOpacity
                  style={styles().inlineRow}
                  onPress={() => getTodos(navigation)}>
                  <Text style={styles().text}>Check your to-do list</Text>
                  <Icon
                    name='checkmark-circle-outline'
                    type='ionicon'
                    color='#4CB97A'
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>

                <View style={styles().dividerViewLow}>
                  <View style={styles().line} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles().pageEnd} />
        </View>
      </ScrollView>
      <NavBar home={true} navigation={navigation} />
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

        const res2 = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: new Date().toISOString(), Completed: goals[i].Completed, Category: goals[i].Category, 
            Requirement: goals[i].Requirement, Progress: goals[i].Progress, Reward: goals[i].Reward}
        })
      }
    }

    else if(goals[i].Category === 'weekly') {
      if(Math.abs(testDate.getDate() - new Date(sunday.getDate() + testDate.getDay()).getDate()) >= 7) {
        goals[i].Completed = false;
        goals[i].Progress = 0;

        const res2 = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: new Date().toISOString(), Completed: goals[i].Completed, Category: goals[i].Category, 
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

export default Home;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  activityView: {
    color: '#816868',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  avatar: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
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
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
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
    marginTop: 20,
    marginBottom: 20,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: '#816868'
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginRight: '5%',
    borderWidth: 1,
    borderColor: '#816868'
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  entryButton: {
    borderRadius: 10,
    width: 280,
    height: 90,
    backgroundColor: '#816868',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
  },
  line2: {
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    height: '80%',
    width: 2,
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    fontSize: 28,
    fontWeight: 'bold',
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
    maxWidth: Math.round(Dimensions.get('window').width * 0.3),
  },
  plantInfoView: {
    backgroundColor: '#816868',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 6,
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
  },
  plantLinks: {
    color: '#4CB97A',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
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
