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
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Delete = ({
  deleteEntry,
  setDeleteEntry,
  stressors,
  setStressors,
  item,
  index,
}) => {
  return (
    <View style={styles().container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={deleteEntry}
        onRequestClose={() => {
          setDeleteEntry(!deleteEntry);
        }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: '#00000055',
          }}
          onPressOut={() => setDeleteEntry(!deleteEntry)}>
          <Pressable
            style={styles().modalContainer}
            onePress={() => setDeleteEntry(true)}>
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
                  name='frowning'
                  size={20}
                  type='fontisto'
                  color='white'
                  style={{ marginRight: 8 }}
                />
                <Text style={styles().textAlt}>Delete Stressor</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginHorizontal: '5%',
                maxHeight: '60%',
                marginVertical: 10,
              }}>
              <Text style={styles().text}>
                Are you sure you wish to delete the stressor
                <Text style={styles().textBoldAlt}> "{item.toString()}" </Text>?
              </Text>
              <Text style={styles().textBoldAlt}>
                This action cannot be undone.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginVertical: 10,
                marginHorizontal: '5%',
              }}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => {
                  setDeleteEntry(!deleteEntry);
                  let tempStressors = [...stressors];
                  tempStressors.splice(index, 1);
                  setStressors(tempStressors);
                }}>
                <Text style={styles().textButton}>DELETE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDeleteEntry(!deleteEntry)}>
                <Text style={styles().textButton}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

{
  /* Stressors section */
}
const Stress = ({ stress, setStress, stressors, setStressors }) => {
  const [showAddStressors, setShowAddStressors] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [stressor, setStressor] = useState('');
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [stressorIndex, setStressorIndex] = useState();

  return (
    <SafeAreaView style={{ width: '90%' }}>
      {deleteEntry && (
        <Delete
          stressors={stressors}
          setStressors={setStressors}
          deleteEntry={deleteEntry}
          setDeleteEntry={setDeleteEntry}
          index={stressorIndex}
          item={stressors[stressorIndex]}
        />
      )}
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Stressors modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddStressors}
            onRequestClose={() => setShowAddStressors(!showAddStressors)}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddStressors(!showAddStressors)}>
              <Pressable
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddStressors(true);
                }}>
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
                      name='frowning'
                      color='white'
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Stressors</Text>
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
                        onPress={() => setShowAddStressors(!showAddStressors)}
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
                  <View style={{ marginTop: 16, marginBottom: 20 }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text
                          style={{
                            color: pressed ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Stressor
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressed ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Stressor name'
                          fontSize={16}
                          color='#816868'
                          value={stressor}
                          onChangeText={setStressor}
                          maxLength={99}
                          onFocus={() => setPressed(true)}
                          onBlur={() => setPressed(false)}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center' }}>
                    <Button
                      title='+ Add Stressor'
                      onPress={() => {
                        let temp = new Array(stressor).concat(stressors);
                        //console.log('temp:', temp);
                        setStressors(temp);
                        setStressor('');
                        setShowAddStressors(true);
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

        {/* Stress heading */}
        <Text style={styles().heading}>STRESS</Text>

        <Text style={styles().text}>
          How would you rate your level of stress today?
        </Text>

        {/* Stress slider */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              marginBottom: 20,
              marginHorizontal: 10,
              alignItems: 'center',
              width: Dimensions.get('window').width * 0.78,
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
              }}
            />

            {/* Not stresssed */}
            <Pressable onPress={() => setStress(1)}>
              <View
                style={{
                  width: stress == 1 ? 25 : 5,
                  height: 25,
                  borderRadius: stress == 1 ? 25 : 10,
                  backgroundColor: stress == 1 ? '#A5DFB2' : '#816868',
                  marginLeft: stress == 1 ? -10 : 0,
                  zIndex: 1,
                }}
              />
              <Text style={styles().textSlider}>1</Text>
            </Pressable>
            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}
            />

            {/* A bit stressed */}
            <Pressable onPress={() => setStress(2)}>
              <View
                style={{
                  width: stress == 2 ? 25 : 5,
                  height: 25,
                  borderRadius: stress == 2 ? 25 : 10,
                  backgroundColor: stress == 2 ? '#A5DFB2' : '#816868',
                  marginLeft: stress == 2 ? -10 : 0,
                  zIndex: 1,
                }}
              />
              <Text style={styles().textSlider}>2</Text>
            </Pressable>
            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}
            />

            {/* Stressed */}
            <Pressable onPress={() => setStress(3)}>
              <View
                style={{
                  width: stress == 3 ? 25 : 5,
                  height: 25,
                  borderRadius: stress == 3 ? 25 : 10,
                  backgroundColor: stress == 3 ? '#A5DFB2' : '#816868',
                  marginLeft: stress == 3 ? -10 : 0,
                  zIndex: 1,
                }}
              />
              <Text style={styles().textSlider}>3</Text>
            </Pressable>
            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}
            />

            {/* Very stressed */}
            <Pressable onPress={() => setStress(4)}>
              <View
                style={{
                  width: stress == 4 ? 25 : 5,
                  height: 25,
                  borderRadius: stress == 4 ? 25 : 10,
                  backgroundColor: stress == 4 ? '#A5DFB2' : '#816868',
                  marginLeft: stress == 4 ? -10 : 0,
                  zIndex: 1,
                }}
              />
              <Text style={styles().textSlider}>4</Text>
            </Pressable>
            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}
            />

            {/* Extremely stressed */}
            <Pressable onPress={() => setStress(5)}>
              <View
                style={{
                  width: stress == 5 ? 25 : 5,
                  height: 25,
                  borderRadius: stress == 5 ? 25 : 10,
                  backgroundColor: stress == 5 ? '#A5DFB2' : '#816868',
                  marginLeft: stress == 5 ? -10 : 0,
                  zIndex: 1,
                }}
              />
              <Text style={styles().textSlider}>5</Text>
            </Pressable>
          </View>
        </View>

        <View style={{ marginBottom: 16, }}>
          <Text style={styles().text}>
            If you were stressed today, what were some of the sources of your
            stress?
          </Text>
        </View>

        {stressors.length > 0 &&
          <View style={styles().itemView}>
            {stressors.map((item, index) => {
              return (
                <View
                  key={index}
                  style={styles().itemContainers}>
                  <Text style={{ color: 'white', fontSize: 16, marginRight: 4, }}>
                    {item.toString()}
                  </Text>
                  <Icon
                    name='close'
                    color='white'
                    size={16}
                    onPress={() => {
                      setStressorIndex(index);
                      setDeleteEntry(!deleteEntry);
                    }}
                  />
                </View>
              );
            })}
          </View>
        }

        {/* Add Stressors button */}
        <View
          style={{
            minWidth: '40%',
            maxWidth: '50%',
            marginBottom: 10,
          }}>
          <Button
            title='+ Add Stressors'
            onPress={() => setShowAddStressors(true)}
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
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    itemContainers: {
      backgroundColor: global.colorblindMode
        ? global.cb_navBarCurrentIconColor
        : global.navBarCurrentIconColor,
      marginHorizontal: 2,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 3,
    },
    itemView: {
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      flexWrap: 'wrap',
      marginBottom: 16,
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
      width: Math.round((Dimensions.get('window').width * 4) / 5),
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
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textBoldAlt: {
      fontSize: 16,
      color: '#816868',
      fontWeight: 'bold',
      marginTop: 4,
    },
    textButton: {
      fontSize: 16,
      color: '#4CB97A',
      fontWeight: 'bold',
    },
    textInputView: {
      height: 48,
      width: Math.round((Dimensions.get('window').width * 1) / 2),
      position: 'relative',
    },
    textSlider: {
      flex: 1,
      flexGrow: 1,
      width: 45,
      textAlign: 'center',
      marginLeft: -20,
      flexWrap: 'wrap',
      marginTop: 4,
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 20,
    },
  });
