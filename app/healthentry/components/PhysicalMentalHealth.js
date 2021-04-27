import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
  Modal,
  Pressable,
  Dimensions,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Delete = ({
  deleteEntry,
  setDeleteEntry,
  symptoms,
  setSymptoms,
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
                }}>
                <Icon
                  name='pill'
                  type='material-community'
                  color='white'
                  style={{ marginRight: 8 }}
                />
                <Text style={styles().textAlt}>Delete Feeling</Text>
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
                Are you sure you wish to delete the medication
                <Text style={styles().textBoldAlt}>
                  {' '}
                  "{item.Title.toString()}"{' '}
                </Text>
                ?
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
                  let tempSymptoms = [...symptoms];
                  tempSymptoms.splice(index, 1);
                  setSymptoms(tempSymptoms);
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

const PhysicalMentalHealth = ({
  hadPeriod,
  setHadPeriod,
  weight,
  setWeight,
  symptoms,
  setSymptoms,
  options,
}) => {
  const [showAddSymptoms, setShowAddSymptoms] = useState(false);
  const [pressedSymptom, setPressedSymptom] = useState(false);
  const [pressedSeverity, setPressedSeverity] = useState(false);
  const [symptomTitle, setSymptomTitle] = useState('');
  const [symptomSeverity, setSymptomSeverity] = useState('');
  const [deleteEntry, setDeleteEntry] = useState(false);
  const [symptomIndex, setSymptomIndex] = useState();

  // console.log(options);

  return (
    <SafeAreaView style={{ width: '90%' }}>
      {deleteEntry && (
        <Delete
          deleteEntry={deleteEntry}
          setDeleteEntry={setDeleteEntry}
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          item={symptoms[symptomIndex]}
          index={symptomIndex}
        />
      )}

      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* Add Symptom modal */}
        <View style={styles().container}>
          <Modal
            animationType='fade'
            transparent={true}
            visible={showAddSymptoms}
            onRequestClose={() => setShowAddSymptoms(!showAddSymptoms)}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                backgroundColor: '#00000055',
              }}
              onPressOut={() => setShowAddSymptoms(!showAddSymptoms)}>
              <Pressable
                style={styles().modalContainer}
                onPressOut={() => {
                  Keyboard.dismiss();
                  setShowAddSymptoms(true);
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
                      name='sick'
                      type='MaterialIcons'
                      color='white'
                      size={20}
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles().textAlt}>Add Symptoms</Text>
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
                        onPress={() => setShowAddSymptoms(!showAddSymptoms)}
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
                            color: pressedSymptom ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Symptom
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressedSymptom ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Symptom name'
                          fontSize={16}
                          color='#816868'
                          value={symptomTitle}
                          onChangeText={setSymptomTitle}
                          maxLength={99}
                          onFocus={() => setPressedSymptom(true)}
                          onBlur={() => setPressedSymptom(false)}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <View style={styles().textInputView}>
                      <View style={styles().labelView}>
                        <Text
                          style={{
                            color: pressedSeverity ? '#4CB97A' : '#816868',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Severity
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: pressedSeverity ? '#4CB97A' : '#816868',
                          justifyContent: 'flex-end',
                          borderRadius: 10,
                          paddingHorizontal: 16,
                        }}>
                        <TextInput
                          placeholder='Severity (1-10)'
                          fontSize={16}
                          color='#816868'
                          value={symptomSeverity}
                          onChangeText={setSymptomSeverity}
                          keyboardType='numeric'
                          maxLength={2}
                          onFocus={() => setPressedSeverity(true)}
                          onBlur={() => setPressedSeverity(false)}
                          style={{ top: -8 }}
                        />
                      </View>
                    </View>
                  </View>

                  {/* Add Feeling button */}
                  <View style={{ alignSelf: 'center' }}>
                    <Button
                      title='+ Add Symptom'
                      onPress={() => {
                        let symptom = {
                          Title: symptomTitle,
                          Severity: parseInt(symptomSeverity || 0),
                        };
                        let temp = new Array(symptom).concat(symptoms);
                        //console.log('temp:', temp);
                        setSymptoms(temp);
                        //console.log('symptoms', symptoms);
                        //console.log('symptoms', symptoms);
                        setSymptomTitle('');
                        setSymptomSeverity('');
                        setShowAddSymptoms(true);
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

        <Text style={styles().heading}>PHYSICAL & MENTAL HEALTH</Text>

        {options.period && (
          <View>
            <View style={{ marginTop: 10 }} />
            <View style={styles().line} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles().text}>Did you have your period today?</Text>
              <View style={styles().switchView}>
                <View style={styles().line2} />
                <Switch
                  trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
                  thumbColor={hadPeriod ? '#4CB97A' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={() => setHadPeriod(!hadPeriod)}
                  value={hadPeriod}
                  style={{ marginLeft: 8 }}
                />
              </View>
            </View>
            <View style={styles().line} />
            <View style={{ marginBottom: 20 }} />
          </View>
        )}

        {options.weight && (
          <View>
            <Text style={styles().text}>
              If you have weighed yourself today, how much do you weigh?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
              }}>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 50,
                }}
                keyboardType='number-pad'
                value={weight.toString()}
                onChangeText={setWeight}
              />
              <Text style={styles().text}> lbs</Text>
            </View>
          </View>
        )}

        <Text style={styles().text}>
          Have you experienced any unusual physical or mental health symptoms
          today?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          {symptoms.map((item, index) => {
            // console.log(item);
            return (
              <View
                key={index}
                style={{
                  backgroundColor: global.colorblindMode
                    ? global.cb_navBarCurrentIconColor
                    : global.navBarCurrentIconColor,
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                  borderRadius: 10,
                  marginVertical: 5,
                }}>
                <Text style={{ color: 'white' }}>
                  {item.Title.toString()} , {item.Severity.toString()} Severity
                </Text>
                <Icon
                  name='close'
                  color='white'
                  onPress={() => {
                    setSymptomIndex(index);
                    setDeleteEntry(!deleteEntry);
                  }}
                />
              </View>
            );
          })}
        </View>
        <View
          style={{
            minWidth: '40%',
            maxWidth: '50%',
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Button
            title='+ Add Symptoms'
            onPress={() => setShowAddSymptoms(!showAddSymptoms)}
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

export default PhysicalMentalHealth;

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
    line: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
    },
    line2: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderRightWidth: 1,
      minHeight: 28,
      marginTop: 4,
      marginBottom: 4,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
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
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
    textInputView: {
      height: 48,
      width: Math.round((Dimensions.get('window').width * 1) / 2),
      position: 'relative',
    },
  });
