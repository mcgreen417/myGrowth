import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  Dimensions,
  Button,
  Modal,
} from 'react-native';
import { Icon } from 'react-native-elements';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDate(d) {
  return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

const AddNap = ({ naps, setNaps, setShowAddNap }) => {
  const [qualityOfNap, setQualityOfNap] = useState(-1);
  const [napTimeStart, setNapTimeStart] = useState(new Date());
  const [napTimeEnd, setNapTimeEnd] = useState(new Date());

  return (
    <Pressable>
      <View style={styles().modalView}>
        <View>
          <Text>When did you nap today?</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name='schedule' />
              <Text>{getTime(napTimeStart)}</Text>
              <Icon name='arrow-drop-down' type='material' />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name='schedule' />
              <Text>{getTime(napTimeEnd)}</Text>
              <Icon name='arrow-drop-down' type='material' />
            </View>
          </View>
        </View>
        <View>
          <Text>How would you rate your quality of sleep during your nap?</Text>
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
            <Pressable onPress={() => setQualityOfNap(0)}>
              <View
                style={{
                  width: qualityOfNap == 0 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 0 ? 25 : 10,
                  backgroundColor: qualityOfNap == 0 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 0 ? -10 : 0,
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
                Slept very poorly
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(1)}>
              <View
                style={{
                  width: qualityOfNap == 1 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 1 ? 25 : 10,
                  backgroundColor: qualityOfNap == 1 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 1 ? -10 : 0,
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
                Slept poorly
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(2)}>
              <View
                style={{
                  width: qualityOfNap == 2 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 2 ? 25 : 10,
                  backgroundColor: qualityOfNap == 2 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 2 ? -10 : 0,
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
                Slept alright
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(3)}>
              <View
                style={{
                  width: qualityOfNap == 3 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 3 ? 25 : 10,
                  backgroundColor: qualityOfNap == 3 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 3 ? -10 : 0,
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
                Slept well
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(4)}>
              <View
                style={{
                  width: qualityOfNap == 4 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 4 ? 25 : 10,
                  backgroundColor: qualityOfNap == 4 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 4 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -40,
                  flexWrap: 'wrap',
                }}>
                Slept very well
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Button
            title='Add Nap'
            onPress={() => {
              console.log(naps);
              let tempNaps = [...naps];
              tempNaps.push({
                Start: napTimeStart.toISOString(),
                End: napTimeEnd.toISOString(),
                Quality: qualityOfNap,
              });
              setNaps(tempNaps);
              setShowAddNap(false);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const Sleep = ({
  hadSleep,
  setHadSleep,
  qualityOfSleep,
  setQualityOfSleep,
  naps,
  setNaps,
  sleepTimeStart,
  setSleepTimeStart,
  sleepTimeEnd,
  setSleepTimeEnd,
}) => {
  const [showAddNap, setShowAddNap] = useState(false);
  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showAddNap}
        onRequestClose={() => {
          setShowAddNap(!showAddNap);
        }}>
        <Pressable
          onPressOut={() => setShowAddNap(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <AddNap naps={naps} setNaps={setNaps} setShowAddNap={setShowAddNap} />
        </Pressable>
      </Modal>
      <Text>Sleep</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Did you sleep today?</Text>
        <Switch
          trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
          thumbColor={hadSleep ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setHadSleep(!hadSleep)}
          value={hadSleep}
        />
      </View>
      <View>
        <Text>When did you sleep last night?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name='schedule' />
            <Text>{getTime(sleepTimeStart)}</Text>
            <Icon name='arrow-drop-down' type='material' />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name='schedule' />
            <Text>{getTime(sleepTimeEnd)}</Text>
            <Icon name='arrow-drop-down' type='material' />
          </View>
        </View>
      </View>
      <View>
        <Text>How would you rate your quality of sleep last night?</Text>
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
          <Pressable onPress={() => setQualityOfSleep(0)}>
            <View
              style={{
                width: qualityOfSleep == 0 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 0 ? 25 : 10,
                backgroundColor: qualityOfSleep == 0 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 0 ? -10 : 0,
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
              Slept very poorly
            </Text>
          </Pressable>

          <View
            style={{
              width: (Dimensions.get('window').width * 0.55 - 20) / 4,
            }}></View>
          <Pressable onPress={() => setQualityOfSleep(1)}>
            <View
              style={{
                width: qualityOfSleep == 1 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 1 ? 25 : 10,
                backgroundColor: qualityOfSleep == 1 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 1 ? -10 : 0,
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
              Slept poorly
            </Text>
          </Pressable>

          <View
            style={{
              width: (Dimensions.get('window').width * 0.55 - 20) / 4,
            }}></View>
          <Pressable onPress={() => setQualityOfSleep(2)}>
            <View
              style={{
                width: qualityOfSleep == 2 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 2 ? 25 : 10,
                backgroundColor: qualityOfSleep == 2 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 2 ? -10 : 0,
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
              Slept alright
            </Text>
          </Pressable>

          <View
            style={{
              width: (Dimensions.get('window').width * 0.55 - 20) / 4,
            }}></View>
          <Pressable onPress={() => setQualityOfSleep(3)}>
            <View
              style={{
                width: qualityOfSleep == 3 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 3 ? 25 : 10,
                backgroundColor: qualityOfSleep == 3 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 3 ? -10 : 0,
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
              Slept well
            </Text>
          </Pressable>

          <View
            style={{
              width: (Dimensions.get('window').width * 0.55 - 20) / 4,
            }}></View>
          <Pressable onPress={() => setQualityOfSleep(4)}>
            <View
              style={{
                width: qualityOfSleep == 4 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 4 ? 25 : 10,
                backgroundColor: qualityOfSleep == 4 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 4 ? -10 : 0,
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
              Slept very well
            </Text>
          </Pressable>
        </View>
      </View>
      <View>
        {naps.map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {item.Start} to {item.End} with Quality of {item.Quality}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={{ width: '50%' }}>
        <Button title='+ Add New Nap' onPress={() => setShowAddNap(true)} />
      </View>
    </View>
  );
};

export default Sleep;

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
