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
import { Icon } from 'react-native-elements';
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

        <View style={{ alignSelf: 'flex-end', marginTop: '15%', marginBottom: '-15%', marginRight: '5%' }}>
          <Icon
            name='eye-circle'
            type='material-community'
            size={48}
            color={global.cb_textColor}
            onPress={toggleSwitch}
          />
          <Text style={{ 
            fontWeight: 'bold', 
            fontSize: 14, 
            textAlign: 'center', 
            color: global.cb_textColor, 
            }}>
            {global.colorblindMode
              ? "Colorblind\nmode\nenabled"
              : "Enable\ncolorblind\nmode"}
          </Text>
        </View>

        <View style={styles().pageSetup}>
          {/* Logo + title */}
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text style={styles().textTitle}>myGrowth</Text>
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
            
            <View style={{ marginTop: 16, }}>
              <ButtonAndroidiOS
                buttonText='LOG IN'
                navigation={navigation}
                screenName='Login'
              />
            </View>
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
      width: '50%',
      borderColor: global.colorblindMode
        ? global.cb_optionButtonsBorderColor
        : global.optionButtonsBorderColor,
    },
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTitle: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontWeight: 'bold',
      fontSize: 44,
    },
  });
};

export default Start;
