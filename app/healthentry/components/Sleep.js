import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  Dimensions,
  Button,
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

const Sleep = ({
  hadSleep,
  setHadSleep,
  qualityOfSleep,
  setQualityOfSleep,
  qualityOfNap,
  setQualityOfNap,
  naps,
  setNaps,
  sleepTime,
  setSleepTime,
}) => {
  return (
    <View style={{ width: '80%' }}>
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
            <Text>{getTime(new Date())}</Text>
            <Icon name='arrow-drop-down' type='material' />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name='schedule' />
            <Text>{getTime(new Date())}</Text>
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
        <Text>When did you nap today?</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name='schedule' />
            <Text>{getTime(new Date())}</Text>
            <Icon name='arrow-drop-down' type='material' />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name='schedule' />
            <Text>{getTime(new Date())}</Text>
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
                marginLeft: -20,
                flexWrap: 'wrap',
              }}>
              Slept very well
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '50%' }}>
        <Button title='+ Add New Nap' />
      </View>
    </View>
  );
};

export default Sleep;

const styles = StyleSheet.create({});
