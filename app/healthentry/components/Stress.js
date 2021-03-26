import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Stress = ({ stress, setStress }) => {
  return (
    <View style={{ width: '80%' }}>
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
        <Button title='+ Add Stressors' />
      </View>
    </View>
  );
};

export default Stress;

const styles = StyleSheet.create({});
