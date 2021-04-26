import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

// This button is called if onPress navigates to a new screen.
const ButtonNavigateAndroidiOS = ({buttonText, navigation, screenName}) => {
  return (
    <TouchableOpacity
      style={styles().button}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles().text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor:
      global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
    borderRadius: 2,
    height: 35,
    justifyContent: 'center',
    width: '100%',

    // Android shadow attributes
    elevation: 3,

    // iOS shadow attributes
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    color: 'white',
    fontSize: 14,
  }
});

export default ButtonNavigateAndroidiOS;