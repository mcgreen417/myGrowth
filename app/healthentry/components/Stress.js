import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

const StressorsModal = ({ stressors, setStressors }) => {
  const [stressor, setStressor] = useState();
  return (
    <Pressable>
      {console.log(stressors)}
      <View style={styles().modalView}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Stressors</Text>
          <TextInput
            placeholder='Stressors'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 100,
            }}
            value={stressor}
            onChangeText={setStressor}
          />
        </View>
        <View style={{ width: '50%' }}>
          <Button
            title='Add Stressors'
            onPress={() => {
              let temp = new Array(stressor).concat(stressors);
              console.log('temp:', temp);
              setStressors(temp);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const Stress = ({ stress, setStress, stressors, setStressors }) => {
  const [showStressors, setShowStressors] = useState(false);
  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showStressors}
        onRequestClose={() => {
          setShowStressors(!showStressors);
        }}>
        <Pressable
          onPressOut={() => setShowStressors(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <StressorsModal stressors={stressors} setStressors={setStressors} />
        </Pressable>
      </Modal>
      <Text>Stress</Text>
      <Text>How would you rate your level of stress today?</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            height: 5,
            backgroundColor: '#816868',
            position: 'absolute',
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 20 / 2,
          }}></View>
        <Pressable onPress={() => setStress(0)}>
          <View
            style={{
              width: stress == 0 ? 25 : 5,
              height: 25,
              borderRadius: stress == 0 ? 25 : 10,
              backgroundColor: stress == 0 ? '#A5DFB2' : '#816868',
              marginLeft: stress == 0 ? -10 : 0,
              zIndex: 1,
            }}></View>
          <Text
            style={{
              flex: 1,
              flexGrow: 1,
              width: 45,
              textAlign: 'center',
              marginLeft: -20,
              flexWrap: 'wrap',
            }}>
            Not stressed
          </Text>
        </Pressable>

        <View
          style={{
            width: (Dimensions.get('window').width * 0.55 - 20) / 4,
          }}></View>
        <Pressable onPress={() => setStress(1)}>
          <View
            style={{
              width: stress == 1 ? 25 : 5,
              height: 25,
              borderRadius: stress == 1 ? 25 : 10,
              backgroundColor: stress == 1 ? '#A5DFB2' : '#816868',
              marginLeft: stress == 1 ? -10 : 0,
              zIndex: 1,
            }}></View>
          <Text
            style={{
              flex: 1,
              flexGrow: 1,
              width: 45,
              textAlign: 'center',
              marginLeft: -20,
              flexWrap: 'wrap',
            }}>
            A bit stressed
          </Text>
        </Pressable>

        <View
          style={{
            width: (Dimensions.get('window').width * 0.55 - 20) / 4,
          }}></View>
        <Pressable onPress={() => setStress(2)}>
          <View
            style={{
              width: stress == 2 ? 25 : 5,
              height: 25,
              borderRadius: stress == 2 ? 25 : 10,
              backgroundColor: stress == 2 ? '#A5DFB2' : '#816868',
              marginLeft: stress == 2 ? -10 : 0,
              zIndex: 1,
            }}></View>
          <Text
            style={{
              flex: 1,
              flexGrow: 1,
              width: 45,
              textAlign: 'center',
              marginLeft: -20,
              flexWrap: 'wrap',
            }}>
            Stressed
          </Text>
        </Pressable>

        <View
          style={{
            width: (Dimensions.get('window').width * 0.55 - 20) / 4,
          }}></View>
        <Pressable onPress={() => setStress(3)}>
          <View
            style={{
              width: stress == 3 ? 25 : 5,
              height: 25,
              borderRadius: stress == 3 ? 25 : 10,
              backgroundColor: stress == 3 ? '#A5DFB2' : '#816868',
              marginLeft: stress == 3 ? -10 : 0,
              zIndex: 1,
            }}></View>
          <Text
            style={{
              flex: 1,
              flexGrow: 1,
              width: 45,
              textAlign: 'center',
              marginLeft: -20,
              flexWrap: 'wrap',
            }}>
            Very stressed
          </Text>
        </Pressable>

        <View
          style={{
            width: (Dimensions.get('window').width * 0.55 - 20) / 4,
          }}></View>
        <Pressable onPress={() => setStress(4)}>
          <View
            style={{
              width: stress == 4 ? 25 : 5,
              height: 25,
              borderRadius: stress == 4 ? 25 : 10,
              backgroundColor: stress == 4 ? '#A5DFB2' : '#816868',
              marginLeft: stress == 4 ? -10 : 0,
              zIndex: 1,
            }}></View>
          <Text
            style={{
              flex: 1,
              flexGrow: 1,
              width: 45,
              textAlign: 'center',
              marginLeft: -20,
              flexWrap: 'wrap',
            }}>
            Extremely stressed
          </Text>
        </Pressable>
      </View>
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Stressors'
          onPress={() => setShowStressors(true)}
        />
      </View>
    </View>
  );
};

export default Stress;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
      margin: 0,
    },
    avatar: {
      width: 75,
      height: 75,
    },
    avatarView: {
      flexDirection: 'row',
      marginTop: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    divider: {
      height: 1,
      backgroundColor: '#816868',
      marginVertical: 20,
    },
    categoryText: {
      marginVertical: 6,
      marginHorizontal: 16,
      color: '#F5F5F5',
      fontSize: 16,
    },
    categoryView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4CB97A',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginHorizontal: 2,
    },
    heading: {
      color: '#4CB97A',
      fontSize: 20,
      fontWeight: 'bold',
    },
    iconView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    inlineRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    text: {
      color: '#816868',
      fontSize: 16,
      textAlign: 'center',
    },
    pageDescription: {
      color: '#816868',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      fontWeight: 'bold',
      marginRight: 20,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
      paddingBottom: -10,
      paddingTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    picker: {
      height: 32,
      width: '100%',
    },
    pickerView: {
      borderWidth: 1,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '70%',
      backgroundColor: '#f4f3f4',
    },
    textReg: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      textDecorationLine: 'none',
      textAlign: 'left',
    },
  });
