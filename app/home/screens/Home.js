import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

function HomePage({ navigation }) {
  let plant = 4;
  let stage = 0;
  return (
    <SafeAreaView style={styles().container}>
      <ScrollView>
        {/* Avatar Section */}
        <View style={styles().avatarView}>
          <Text style={styles().pageDescription}>Good Morning, Firstname!</Text>
          <Image
            style={styles().avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
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

        {/* Plant Buttons */}
        <View style={styles().plantButtons}>
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('CustomizePlant')}>
            <Icon name='arrow-left' style={{ marginRight: 10 }} />
            <View>
              <Text style={styles().text}>Customize plant</Text>
            </View>
          </Pressable>
          <View
            style={{
              marginLeft: 50,
              marginRight: 50,
              height: '100%',
              width: 2,
              backgroundColor: global.colorblindMode
                ? global.cb_contentDividerColor
                : global.contentDividerColor
              ,
            }}></View>
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('PlantShop')}>
            <View>
              <Text style={styles().textReg}>Enter plant shop</Text>
            </View>
            <Icon name='arrow-right' style={{ marginLeft: 10 }} />
          </Pressable>
        </View>

        {/* Make New Entry */}
        <View style={styles().dividerView}>
          <View style={styles().dividerLeft} />
          <View>
            <Pressable>
              <View
                style={{
                  borderRadius: 10,
                  width: 280,
                  height: 100,
                  backgroundColor: '#E5E5E5',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}>
                <Text style={{
                  margin: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                }}>
                  Write a new entry! You wrote your last entry on (date) at
                  (time)
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles().dividerRight} />
        </View>

        {/* View past entries */}
        <View
          style={{
            marginTop: -20,
            alignItems: 'flex-end',
            marginRight: 20,
          }}>
          <Pressable>
            <View>
              <Text
                style={{
                  color: global.colorblindMode
                    ? global.cb_hyperlinkedTextColor
                    : global.hyperlinkedTextColor,
                  textDecorationLine: 'underline',
                  fontSize: 16,
                }}>
                View past entries
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Avatar Section */}
        <View style={styles().avatarView}>
          <Image
            style={{ width: 75, height: 75, marginLeft: 24 }}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
          <Text
            style={{
              color: global.colorblindMode
                ? global.cb_textColor
                : global.textColor,
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 30,
              marginRight: 50,
              flex: 1,
              flexWrap: 'wrap',
            }}>
            Why don't you try doing one of these?
          </Text>
        </View>

        <View style={{ marginLeft: 130, marginRight: 80, height: 300 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textReg}>Write a journal entry</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color={
                global.colorblindMode
                  ? global.cb_switchThumbColorTrue
                  : global.switchThumbColorTrue
              }
              style={{ marginLeft: 10 }}
            />
          </View>

          <View style={styles().dividerViewLow}>
            <View style={styles().divider}></View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textReg}>Create a new goal</Text>
          </View>

          <View style={styles().dividerViewLow}>
            <View style={styles().divider}></View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textReg}>Complete a goal</Text>
            <Icon
              name='checkmark-circle-outline'
              type='ionicon'
              color={
                global.colorblindMode
                  ? global.cb_switchThumbColorTrue
                  : global.switchThumbColorTrue
              }
              style={{ marginLeft: 10 }}
            />
          </View>

          <View style={styles().dividerViewLow}>
            <View style={styles().divider}></View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textReg}>View your history</Text>
          </View>

          <View style={styles().dividerViewLow}>
            <View style={styles().divider}></View>
          </View>
        </View>
      </ScrollView>
      <NavBar home={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomePage;

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
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 16
  }
});
