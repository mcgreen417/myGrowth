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
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';
import { Icon } from 'react-native-elements';

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
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Select an item and check how it looks!
          </Text>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>

        {/* Plant Section */}
        <View style={styles.plantSection}>
          <View style={styles.plantImage}>
            <Image source={plant} style={styles.plant} />
          </View>
        </View>

        <View style={styles.dividerView}>
          <View style={styles.divider}></View>
        </View>

        {/* Plant Selection */}
        <View
          style={{
            marginLeft: 30,
            flex: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 5,
          }}>
          {plantItem.map((item) => (
            <View style={({ flex: 1 }, styles.plantItemSelect)}>
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
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text>900</Text>
                <Icon name='star-outline' type='ionicon' color='#938E8D' />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.dividerViewLow}>
          <View style={styles.divider}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View>
            <Pressable
              style={{
                backgroundColor: '#E5E5E5',
                margin: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 20 }}>
                  Clear changes
                </Text>
              </View>
            </Pressable>
          </View>
          <View>
            <Pressable
              style={{
                backgroundColor: '#E5E5E5',
                margin: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 20 }}>
                  Purchase all shown
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name='information-circle-outline'
            type='ionicon'
            color='#938E8D'
          />
          <Text>Want more options? </Text>
          <Pressable>
            <Text style={{ textDecorationLine: 'underline' }}>
              Create a new goal
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 200 }}></View>
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
    marginRight: 24,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
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
  pageDescription: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
    flexWrap: 'wrap',
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  plant: {
    width: 270,
    height: 270,
  },
  plantButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 0,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 0,
    marginRight: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 30,
    marginRight: 30,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  plantItem: { margin: 10 },
  plantItemSelect: { margin: 10 },
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
  },
});
