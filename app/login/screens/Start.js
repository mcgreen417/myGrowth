import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import ButtonAndroidiOS from '../../shared/components/ButtonAndroidiOS';
import StatusBariOS from '../../shared/components/StatusBariOS';

function Start({ navigation }) {
  // Colorblind mode switch initialization
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    global.colorblindMode = !global.colorblindMode;
  };

  return (
    // styles is now a function (styles()), will allow us to reload changes made to stylesheet
    //   from the colorblind mode toggle.
    <SafeAreaView style={styles().container}>
      <StatusBariOS />
      <StatusBar
        backgroundColor={
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
        }
        barStyle='light-content'
      />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps='handled' 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        {/* Colorblind mode switch displayed on screen */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, }}>
            {global.colorblindMode
              ? 'Colorblind mode enabled'
              : 'Enable colorblind mode?'}
          </Text>
          <Switch
            trackColor={{
              false: global.cb_switchTrackColorFalse,
              true: global.cb_switchTrackColorTrue,
            }}
            thumbColor={
              isEnabled
                ? global.cb_switchThumbColorTrue
                : global.cb_switchThumbColorFalse
            }
            ios_backgroundColor={global.cb_blackColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
            caption='Colorblind Mode Toggle'
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          {/* Logo + title */}
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: global.colorblindMode
                ? global.cb_textColor
                : global.textColor,
              fontSize: 44,
            }}>
            myGrowth
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: global.colorblindMode
                ? global.cb_textColor
                : global.textColor,
              fontSize: 20,
              marginBottom: 40,
            }}>
            Your General Wellness Tracker
          </Text>
          {/* Sign up + login buttons */}
          <View style={styles().buttons}>
            <ButtonAndroidiOS
              buttonText='SIGN UP'
              navigation={navigation}
              screenName='SignUp'
            />
            <View style={{ marginVertical: 8 }} />
            <ButtonAndroidiOS
              buttonText='LOG IN'
              navigation={navigation}
              screenName='Login'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// stylesheet turned into a function to allow for reloading of the stylesheet.
const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
    },
    logo: {
      width: 150,
      height: 150,
      marginTop: -100,
    },
    buttons: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      height: 50,
    },
  });
};

export default Start;
