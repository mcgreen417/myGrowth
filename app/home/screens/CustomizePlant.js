import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
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

function CustomizePlant({ navigation }) {
  const [plant, setPlant] = useState(
    require('../../shared/assets/plant_sprites/4_0.png')
  );
  const [plantItem, setPlantItem] = useState(plantItemList);

  return (
    <SafeAreaView style={styles().container}>
      {/* Avatar Section */}
      <View style={styles().avatarView}>
        <Text style={styles().pageDescription}>
          Select an item to change your plant's appearance!
        </Text>
        <Image
          style={styles().avatar}
          source={require('../../shared/assets/gardener-avatar.png')}
        />
      </View>

      {/* Plant Section */}
      <View style={styles().plantSection}>
        <View style={styles().plantImage}>
          <Image source={plant} style={styles().plant} />
        </View>
      </View>

      <View style={styles().dividerViewLow}>
        <View style={styles().divider}></View>
      </View>

      {/* Plant Selection */}
      <View style={{ marginRight: 30, marginLeft: 30 }}>
        <FlatList
          horizontal
          data={plantItem}
          renderItem={({ item, index }) => (
            <View style={styles().plantItemSelect}>
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
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles().dividerViewLow}>
        <View style={styles().divider}></View>
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
                Confirm changes
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Want more options? </Text>
        <Pressable>
          <Text style={{ textDecorationLine: 'underline' }}>
            Visit the plant shop
          </Text>
        </Pressable>
      </View>

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CustomizePlant;

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
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
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
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginLeft: 20,
    marginRight: 0,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginLeft: 0,
    marginRight: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_contentDividerColor
      : global.contentDividerColor,
    marginRight: 0,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
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
