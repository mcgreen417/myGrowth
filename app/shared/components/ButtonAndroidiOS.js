import React from 'react';
import {
  StyleSheet
} from 'react-native';
import ButtonFunctionAndroidiOS from './ButtonFunctionAndroidiOS';
import ButtonNavigateAndroidiOS from './ButtonNavigateAndroidiOS';

// If the button navigates immediately to another page, pass in navigation and screenName.
// If the button calls a function instead (that might perform a task and then go to another page),
//   create a wrapper function and pass that in as callFunction.
// You can ignore/not pass in parameters you are not using.
//
// TouchableOpacity is used instead of Button on iOS devices.
// By having one customized TouchableOpacity component to replace Buttons, this will
//   be 100% displayed/working as intended on both types of devices.
// When looking at different attributes to adjust appearance, prioritze attributes that are not OS-tagged.
//   If not, there are different workarounds to match it on iOS.
const ButtonAndroidiOS = ({buttonText, navigation, screenName, callFunction}) => {
  if (navigation !== undefined) {
    return (
      <ButtonNavigateAndroidiOS
        buttonText={buttonText}
        navigation={navigation}
        screenName={screenName}
      />
    );
  } else {
    return (
      <ButtonFunctionAndroidiOS
        buttonText={buttonText}
        callFunction={callFunction}
      />
    );
  }
};

const styles = () => StyleSheet.create({

});

export default ButtonAndroidiOS;