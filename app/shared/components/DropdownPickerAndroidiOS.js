import React from 'react';
import {
  StyleSheet
} from 'react-native';
import DropdownPickerAndroid from './DropdownPickerAndroid';
import DropdownPickeriOS from './DropdownPickeriOS';

const DropdownPickerAndroidiOS = () => {
  if (global.usingiOSDevice) {
    return (
      <DropdownPickeriOS />
    );
  } else {
    return (
      <DropdownPickerAndroid />
    );
  }
}

const styles = () => StyleSheet.create({

});
  
export default DropdownPickerAndroidiOS;