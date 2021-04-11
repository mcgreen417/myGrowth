import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const ButtoniOS = ({buttonText, navigation, screenName}) => {
  return (
    <TouchableOpacity
      style={styles().buttoniOS}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles().text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  buttoniOS: {
    alignItems: 'center',
    backgroundColor:
      global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 14,
  }
});

export default ButtoniOS;