import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

const SelectACategoryIcon = ({
  screens,
  navigation,
  setModalVisible,
  modalVisible,
  data,
  settings,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screens.navigateTo, {data, settings});
        setModalVisible(!modalVisible);
      }}
      style={{
        alignItems: 'center',
        width: '25%',
        marginVertical: '5%',
      }}>
      <View style={{ 
        borderRadius: 500, 
        borderColor: '#A5DFB2', 
        borderWidth: 2, 
        paddingHorizontal: Math.round(Dimensions.get('window').width * 0.025), 
        alignItems: 'center' 
      }}>
        {screens.imageSrc}
      </View>
      <Text style={styles().text}>{screens.category}</Text>
    </TouchableOpacity>
  );
};

export default SelectACategoryIcon;

const styles = () =>
  StyleSheet.create({
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      flexWrap: 'wrap',
      textAlign: 'center',
      marginTop: 2,
    },
  });
