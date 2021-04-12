import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

// TouchableOpacity is used instead of Button on iOS devices.
// By having one customized TouchableOpacity component to replace Buttons, this will
//   be 100% displayed/working as intended on both types of devices.
// When looking at different attributes to adjust appearance, prioritze attributes that are not OS-tagged.
//   If not, there are different workarounds to match it on iOS.
const ButtonAndroidiOS = ({buttonText, navigation, screenName}) => {
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
    marginVertical: 10,
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

export default ButtonAndroidiOS;