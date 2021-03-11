import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  FlatList,
  Pressable,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageSetup}>
        
          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
              <Text style={styles.pageDescription}>
                Purchase plant accessories using stars earned from completing goals!
              </Text>
              <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
            </View>

          {/* Plant section */}
          <View style={styles.plantSection}>
            <View style={styles.plantImage}>
              <Image source={plant} style={styles.plant} />
            </View>
          </View>

          {/* Plant buttons */}
          <View style={styles.plantButtons}>
            <Pressable
              style={styles.inlineRow}
              onPress={() => navigation.navigate('HomePage')}>
              <Icon name='arrow-left' color='#816868' />
              <View>
                <Text style={styles.plantLinks}>Return to Home</Text>
              </View>
            </Pressable>
            <View style={styles.line2} />
            <Pressable
              style={styles.inlineRow}
              onPress={() => navigation.navigate('CustomizePlant')}>
              <View>
                <Text style={styles.plantLinks}>Customize Plant</Text>
              </View>
              <Icon name='arrow-right' color='#816868' />
            </Pressable>
          </View>

          <View style={styles.dividerView}>
            <View style={styles.divider}></View>
          </View>

          {/* Plant selection */}
          <View
            style={styles.plantSelectView}>
            {plantItem.map((item) => (
              <View style={styles.plantItemSelect}>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? 'gray' : '#E5E5E5',
                    },
                    styles.plantItemPress,
                  ]}
                  onPress={() => setPlant(item)}>
                  <Image key={item} source={item} style={styles.plantItem} />
                </Pressable>
                <View
                  style={styles.inlineRow2}>
                  <Text style={styles.text}>900</Text>
                  <Icon 
                    name='star' 
                    type='MaterialCommunityIcons' 
                    color='#816868' 
                  />
                </View>
              </View>
            ))}
          </View>

          <View style={styles.dividerViewLow}>
            <View style={styles.divider}></View>
          </View>

          {/* Clear changes & purchase all shown buttons */}
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 16 }}>
            <View style={{ width: '42.5%' }}>
              <Button title='Clear Changes' color='#A5DFB2' onPress={() => onPress()}/>
            </View>
            <View style={{ width: '5%' }} />
            <View style={{ width: '42.5%' }}>
              <Button title='Purchase Shown' color='#A5DFB2' onPress={() => onPress()}/>
            </View>
          </View>

          {/* Goals redirect */}
          <View style={{ width: '90%' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
              <Icon
                name='information-circle-outline'
                type='ionicon'
                color='#816868'
              />
              <Text style={styles.text}> Want more stars? </Text>
              <Pressable>
                <Text style={styles.plantLinks}>Complete a new goal.</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.pageEnd}/>
        </View>
      </ScrollView>

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default PlantShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
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
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
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
    backgroundColor: '#816868',
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
  },
  pageDescription: {
    color: '#816868',
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    width: '90%',
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
  plantItem: { 
    margin: 10,
  },
  plantItemSelect: { 
    marginLeft: 12,
    marginRight: 12,
    marginTop: 4,
    marginBottom: 4,
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
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
});
