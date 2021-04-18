import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  Modal,
  TextInput,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const Mood = ({ mood, setMood, feelings, setFeelings }) => {
  const [showAddFeelings, setShowAddFeelings] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [feel, setFeel] = useState('');

  return (
    <SafeAreaView style={{ width: '90%' }}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Feelings modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddFeelings}
            onRequestClose={() => setShowAddFeelings(!showAddFeelings)}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddFeelings(!showAddFeelings)}
              >
              <Pressable 
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddFeelings(true);}}
              >
                <View style={styles().modalHeaderBar}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 2,
                      marginLeft: 6,
                      marginVertical: 4,
                      alignItems: 'center',
                    }}>
                    <Icon
                      type='fontisto'
                      name='smiley'
                      color='white'
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Feelings</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginRight: 6,
                      }}>
                      <Icon
                        name='close'
                        type='ionicon'
                        color='white'
                        onPress={() => setShowAddFeelings(!showAddFeelings)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: '5%',
                    maxHeight: '60%',
                    marginTop: 10,
                    marginBottom: 16,
                  }}>
                  <View style={{ marginTop: 16, marginBottom: 20, }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text style={{
                            color: pressed 
                              ? '#4CB97A'
                              : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>Feeling</Text>
                      </View>
                      <View style={{
                          flex: 1, 
                          borderWidth: 1, 
                          borderColor: pressed
                            ? '#4CB97A'
                            : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput 
                          placeholder='Feeling name'
                          fontSize={16}
                          color='#816868'
                          value={feel}
                          onChangeText={setFeel}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8, }}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center', }}>
                    <Button
                      title='Add Feeling'
                      onPress={() => {
                        let temp = new Array(feel).concat(feelings);
                        //console.log('temp:', temp);
                        setFeelings(temp);
                        //console.log('feelings', feelings);
                        //console.log('feelings', feelings);
                        setFeel('');
                        setShowAddFeelings(true);
                        Keyboard.dismiss();
                      }}
                      color={
                        global.colorblindMode
                          ? global.cb_optionButtonsColor
                          : global.optionButtonsColor
                      }
                    />
                  </View>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        </View>

        {/* Mood heading */}
        <Text style={styles().heading}>MOOD</Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{ alignItems: 'center' }}>
            {/* Awful face */}
            <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(1)}>
              <Icon
                type='fontisto'
                name='mad'
                size={(Dimensions.get('window').width * 0.8) / 5 - 10}
                onPress={() => setMood(1)}
                color={mood == 1 ? '#4CB97A' : '#816868'}
              />
            </Pressable>
            <Text
              style={{
                color:
                  mood == 1
                    ? '#4CB97A'
                    : global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Awful
            </Text>
          </View>

          {/* Bad face */}
          <View style={{ alignItems: 'center' }}>
            <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(2)}>
              <Icon
                type='fontisto'
                name='frowning'
                size={(Dimensions.get('window').width * 0.8) / 5 - 10}
                color={mood == 2 ? '#4CB97A' : '#816868'}
              />
            </Pressable>
            <Text
              style={{
                color:
                  mood == 2
                    ? '#4CB97A'
                    : global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Bad
            </Text>
          </View>

          {/* Okay face */}
          <View style={{ alignItems: 'center' }}>
            <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(3)}>
              <Icon
                type='fontisto'
                name='neutral'
                size={(Dimensions.get('window').width * 0.8) / 5 - 10}
                color={mood == 3 ? '#4CB97A' : '#816868'}
              />
            </Pressable>
            <Text
              style={{
                color:
                  mood == 3
                    ? '#4CB97A'
                    : global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Okay
            </Text>
          </View>

          {/* Good face */}
          <View style={{ alignItems: 'center' }}>
            <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(4)}>
              <Icon
                type='fontisto'
                name='smiling'
                size={(Dimensions.get('window').width * 0.8) / 5 - 10}
                color={mood == 4 ? '#4CB97A' : '#816868'}
              />
            </Pressable>
            <Text
              style={{
                color:
                  mood == 4
                    ? '#4CB97A'
                    : global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Good
            </Text>
          </View>

          {/* Great face */}
          <View style={{ alignItems: 'center' }}>
            <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(5)}>
              <Icon
                type='fontisto'
                name='smiley'
                size={(Dimensions.get('window').width * 0.8) / 5 - 10}
                color={mood == 5 ? '#4CB97A' : '#816868'}
              />
            </Pressable>
            <Text
              style={{
                color:
                  mood == 5
                    ? '#4CB97A'
                    : global.colorblindMode
                    ? global.cb_textColor
                    : global.textColor,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Great
            </Text>
          </View>
        </View>

        {/* Add Feelings button */}
        <View style={{ width: '40%', marginTop: 10, marginBottom: 10, }}>
          <Button
            title='+ Add Feelings'
            onPress={() => setShowAddFeelings(!showAddFeelings)}
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mood;

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
    },
    heading: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    label: {
      color: '#816868',
      fontSize: 16,
      fontWeight: 'bold',
    },
    labelView: {
      position: 'absolute',
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      top: -16,
      left: 14,
      padding: 5,
      zIndex: 50,
    },
    modalContainer: {
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      alignItems: 'center',
      width: Math.round(Dimensions.get('window').width * 4/5),
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    modalHeaderBar: {
      backgroundColor: global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textInputView: {
      height: 48, 
      width: Math.round(Dimensions.get('window').width * 1/2),
      position: 'relative',
    },
  });
