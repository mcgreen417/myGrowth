import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const SelectACategoryIcon = ({screens, navigation, setModalVisible, modalVisible, ...rest}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {
        navigation.navigate(screens.navigateTo);
        setModalVisible(!modalVisible);
      }}>
        <Image style={styles().chooserImg} source={screens.imageSrc} />
        <Text style={styles().textReg}>{screens.category}</Text>
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