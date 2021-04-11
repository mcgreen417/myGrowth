import React from 'react';
import {
  StyleSheet
} from 'react-native';
import ButtonAndroid from './ButtonAndroid';
import ButtoniOS from './ButtoniOS';

const OSButton = ({buttonText, navigationPath, screenName}) => {
  if (global.usingiOSDevice) {
    return (
      <ButtoniOS
        buttonText={buttonText}
        navigation={navigationPath}
        screenName={screenName}
      />
    );
  } else {
    return (
      <ButtonAndroid
        buttonText={buttonText}
        navigation={navigationPath}
        screenName={screenName}
      />
    );
  }
};

const styles = () => StyleSheet.create({

});

export default OSButton;