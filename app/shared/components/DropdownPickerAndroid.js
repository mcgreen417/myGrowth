import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Pass in all Picker.Items as objects inside of an array.  Color is always constant.
// Ex. arr = [{'Select one...', 'unselected'}, {'Male', 'male'}, ...] and iterate through with (x, y).
// Current complication: how to handle onValue change.
// onChangeFunction = put desired function into wrapper function like in ButtonFunctionAndroidiOS component.
// Everything is pasted here as reference - NOT actual component yet.  Remove null when ready.
const DropdownPickerAndroid = ({selectedValue, onChangeFunction, pickerLabelInfo}) => {
  return (
    null
    // <Picker
    //   selectedValue={gender}
    //   style={styles().picker}
    //   dropdownIconColor='#816868'
    //   onValueChange={(itemValue, itemIndex) => handleGenderChange(itemValue)}
    //   mode={'dropdown'}>
    //   <Picker.Item label='Select one...' value='unselected' />
    //   <Picker.Item label='Male' value='male' />
    //   <Picker.Item label='Female' value='female' color='#816868' />
    //   <Picker.Item label='Non-binary' value='nonbinary' color='#816868' />
    //   <Picker.Item label='Other' value='other' color='#816868' />
    //   <Picker.Item label='Prefer not to answer' value='noAnswer' color='#816868' />
    // </Picker>
  );
}

const styles = () => StyleSheet.create({
  picker: {
    height: 32,
    marginBottom: 4,
    width: '100%',
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
});
  
export default DropdownPickerAndroid;