import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const SelectACategoryIcon = ({screens, setModalVisible, modalVisible, ...rest}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {
        // navigation.navigate(screens[0].navigateTo);
        setModalVisible(!modalVisible);
      }}>
        <Image style={styles().chooserImg} source={screens[0].imageSrc} />
        <Text style={styles().textReg}>{screens[0].category}</Text>
  
      </TouchableOpacity>
    </View>
  );
};

export default SelectACategoryIcon;

const styles = () => StyleSheet.create({
  chooserImg: {
    borderWidth: 1,
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    width: 40,
    height: 40,
  },
  textReg: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  },
});