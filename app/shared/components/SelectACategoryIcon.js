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
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate(screens.navigateTo);
        setModalVisible(!modalVisible);
      }}
      style= {{
        alignItems: 'center',
        width: '25%',
        marginVertical: '5%',
      }}
    >
      <Image style={styles().chooserImg} source={screens.imageSrc} />
      <Text style={styles().text}>{screens.category}</Text>
    </TouchableOpacity>
  );
};

export default SelectACategoryIcon;

const styles = () => StyleSheet.create({
  chooserImg: {
    borderWidth: 1,
    borderColor: global.colorblindMode
      ? global.cb_optionButtonsColor
      : global.optionButtonsColor,
    width: 50,
    height: 50,
  },
  text: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: 2,
  },
});