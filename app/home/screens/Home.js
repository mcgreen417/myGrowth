import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

function Home({ navigation }) {
  const [displayName, setDisplayName] = useState('(FirstName)');
  let plant = 4;
  let stage = 0;

  useEffect(() => {
    const user = getUser();
    setDisplayName(user.attributes.name);
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Good Morning, {'\n'}{displayName}!
          </Text>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>

        {/* Plant section */}
        <View style={styles.plantSection}>
          <View style={styles.plantImage}>
            <Image
              source={require('../../shared/assets/plant_sprites/' +
                plant +
                '_' +
                stage +
                '.png')}
              style={styles.plant}
            />
          </View>
        </View>

        {/* Plant buttons */}
        <View style={styles.plantButtons}>
          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('CustomizePlant')}>
            <Icon name='arrow-left' color='#816868' />
            <View>
              <Text style={styles.plantLinks}>Customize Plant</Text>
            </View>
          </Pressable>
          <View style={styles.line2} />
          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('PlantShop')}>
            <View>
              <Text style={styles.plantLinks}>Enter Plant Shop</Text>
            </View>
            <Icon name='arrow-right' color='#816868' />
          </Pressable>
        </View>

        {/* Write a new entry button */}
        <View style={styles.dividerView}>
          <View style={styles.dividerLeft} />
          <View>
            <Pressable>
              <View style={styles.entryButton}>
                <View
                  style={{
                    marginTop: 4,
                    marginBottom: 4,
                    marginLeft: 8,
                    marginRight: 8,
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
                    You wrote your last entry on (date) at (time).
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.dividerRight} />
        </View>

        {/* View past entries */}
        <View style={{ marginTop: -20 }}>
          <Pressable
            style={styles.inlineRowEnd}
            onPress={() => navigation.navigate('')}>
            <View style={{ alignSelf: 'flex-end' }}>
              <Text style={styles.plantLinks}>View Past Entries</Text>
            </View>
            <Icon name='arrow-right' color='#816868' />
          </Pressable>
        </View>

        {/* Activity suggestions */}
        <View style={styles.avatarView}>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
          <Text style={styles.activityView}>
            Why don't you try doing one of these activities?
          </Text>
        </View>

        <View style={{ marginLeft: '29%' }}>
          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('Journal')}>
            <Text style={styles.text}>Write a journal entry</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color='#4CB97A'
              style={{ marginLeft: 10 }}
            />
          </Pressable>

          <View style={styles.dividerViewLow}>
            <View style={styles.line} />
          </View>

          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('Goals')}>
            <Text style={styles.text}>Create a new goal</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color='#4CB97A'
              style={{ marginLeft: 10 }}
            />
          </Pressable>

          <View style={styles.dividerViewLow}>
            <View style={styles.line} />
          </View>

          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('Goals')}>
            <Text style={styles.text}>Complete a goal</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color='#4CB97A'
              style={{ marginLeft: 10 }}
            />
          </Pressable>

          <View style={styles.dividerViewLow}>
            <View style={styles.line} />
          </View>

          <Pressable
            style={styles.inlineRow}
            onPress={() => navigation.navigate('ToDoList')}>
            <Text style={styles.text}>Check your to-do list</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color='#4CB97A'
              style={{ marginLeft: 10 }}
            />
          </Pressable>

          <View style={styles.dividerViewLow}>
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.pageEnd} />
      </ScrollView>
      <NavBar home={true} navigation={navigation} />
    </SafeAreaView>
  );
}

async function getUser(){
  const user = await Auth.currentUserInfo();

  console.log(user.attributes);

  return user;
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityView: {
    color: '#816868',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
    flexWrap: 'wrap',
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
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
    backgroundColor: '#816868',
  },
  line2: {
    backgroundColor: '#816868',
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
  },
  pageDescription: {
    color: '#816868',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  pageEnd: {
    marginBottom: 100,
  },
  plant: {
    width: '60%',
    height: '90%',
  },
  plantButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  plantImage: {
    width: '100%',
    height: 260,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
    color: '#816868',
  },
});
