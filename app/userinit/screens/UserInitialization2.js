import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
  FlatList,
  Switch,
  ScrollView,
  Dimensions,
} from 'react-native';

const avatars = new Array(48).fill('http://placeimg.com/100/100/any');

function UserInitialization2({ route, navigation }) {
  const [avatar, setAvatar] = useState(avatars);
  const { height, weight, heightMeasurement, weightMeasurement } = route.params;

  return (
    <SafeAreaView style={styles().container}>
      <View style={styles().pageSetup}>
        {/* Gardener avatar + page blurb */}
        <View style={styles().avatarView}>
          <Image
            style={styles().avatar}
            source={require('../../shared/assets/gardener-avatar/s1h1c1.png')}
          />
          <Text style={styles().pageDescription}>
            Next, let me know which look you prefer! Think of me as your new friend, here to guide
            you through the app!
          </Text>
        </View>
        {/* Top page divider */}
        <View style={styles().dividerView}>
          <View style={styles().divider} />
        </View>

        {/* Gardener avatar select */}
        <View style={styles().avatarSelectView}>
          <FlatList
            data={avatar}
            renderItem={({ item, index }) => (
              <Image
                source={{ uri: item, cache: 'reload' }}
                key={index}
                style={{ width: 55, height: 55, margin: 4 }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={6}
          />
        </View>

        {/* Back & next buttons */}
        <View style={styles().buttonsContainer}>
          <Button
            title='Back'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => navigation.navigate('UserInitialization1')}
          />
          <View style={{ width: '72%' }}></View>
          <Button
            title='Next'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => navigation.navigate('UserInitialization3',{ 
              height: height,
              weight: weight, 
              heightMeasurement: heightMeasurement, 
              weightMeasurement: weightMeasurement
            })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UserInitialization2;

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatar: {
    width: Math.round(Dimensions.get('window').width * 1/4),
    height: Math.round(Dimensions.get('window').width * 1/4),
    marginRight: 20,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  avatarSelectView: {
    height: '64%',
    marginBottom: 20,
  },
  buttons: {
    marginBottom: 10,
    width: '20%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '90%',
  },
  datePicker: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    width: '90%',
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
    textAlign: 'left',
    marginBottom: 10,
    width: '90%',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  line: {
    width: '90%',
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderBottomWidth: 1,
    minHeight: 1,
  },
  line2: {
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderRightWidth: 1,
    minHeight: 28,
    marginTop: 4,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    textAlign: 'left',
  },
  pageDescription: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  pageEnd: {
    marginBottom: 10,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 32,
    width: '100%',
  },
  pickerView: {
    borderWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
  },
  textInput: {
    height: 40,
    borderColor: global.colorblindMode
      ? global.cb_textInputBlackBorderColor
      : global.textInputBlackBorderColor,    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
    color: global.colorblindMode
      ? global.cb_textInputColor
      : global.textInputColor,
    width: '70%',
    paddingLeft: 10,
    fontSize: 16,
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput2: {
    height: 36,
    borderColor: global.colorblindMode
      ? global.cb_textInputBlackBorderColor
      : global.textInputBlackBorderColor,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: global.colorblindMode
      ? global.cb_textInputFillColor
      : global.textInputFillColor,
    color: global.colorblindMode
      ? global.cb_textInputColor
      : global.textInputColor,
    width: '12%',
    textAlign: 'center',
    fontSize: 16,
  },
  userPrompt: {
    marginBottom: 20,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
