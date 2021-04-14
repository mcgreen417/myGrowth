import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
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
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gardener avatar + page blurb */}
        <View style={styles().avatarView}>
          <Text style={styles().pageDescription}>
            Select an item from your inventory to change your plant's
            appearance!
          </Text>
          <Image
            style={styles().avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>

        {/* Plant section */}
        <View style={styles().plantSection}>
          <View style={styles().plantImage}>
            <Image source={plant} style={styles().plant} />
          </View>
        </View>

        {/* Plant buttons */}
        <View style={styles().plantButtons}>
          <TouchableOpacity
            style={styles().inlineRow}
            onPress={() => navigation.navigate('Home')}>
            <Icon name='arrow-left' color='#816868' />
            <View>
              <Text style={styles().plantLinks}>Return to Home</Text>
            </View>
          </TouchableOpacity>
          <View style={styles().line2} />
          <TouchableOpacity
            style={styles().inlineRow}
            onPress={() => navigation.navigate('PlantShop')}>
            <View>
              <Text style={styles().plantLinks}>Enter Plant Shop</Text>
            </View>
            <Icon name='arrow-right' color='#816868' />
          </TouchableOpacity>
        </View>

        <View style={styles().dividerView}>
          <View style={styles().divider}></View>
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
            </View>
          ))}
        </View>

        <View style={styles().dividerViewLow}>
          <View style={styles().divider}></View>
        </View>

        {/* Clear changes & purchase all shown buttons */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignSelf: 'center',
          }}>
          <View style={{ width: '42.5%' }}>
            <Button
              title='Clear Changes'
              color='#A5DFB2'
              onPress={() => onPress()}
            />
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ width: '42.5%' }}>
            <Button
              title='Confirm Changes'
              color='#A5DFB2'
              onPress={() => onPress()}
            />
          </View>
        </View>

        <View style={styles().pageEnd} />
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default PlantShop;

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
    width: '90%',
    alignSelf: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
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
  line2: {
    backgroundColor: '#816868',
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
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
    alignSelf: 'center',
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
    marginTop: 8,
    marginBottom: 8,
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
});
