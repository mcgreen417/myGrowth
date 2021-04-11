import React from 'react';
import {
  Button,
  StyleSheet,
} from 'react-native';

const ButtonAndroid = ({buttonText, navigation, screenName}) => {
  return (
    <Button
      color={
        global.colorblindMode
          ? global.cb_optionButtonsColor
          : global.optionButtonsColor
      }
      title={buttonText}
      onPress={() => navigation.navigate(screenName)}
    />
  );
};

const styles = () => StyleSheet.create({

});

export default ButtonAndroid;