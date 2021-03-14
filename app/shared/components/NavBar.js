import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Pressable,
} from 'react-native';
import { Icon } from 'react-native-elements';

const NavBar = ({
  home = false,
  journal = false,
  goals = false,
  todo = false,
  history = false,
  account = false,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        width: '100%',
      }}>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
          },
        ]}>
        <Icon name='home' color={home ? '#4CB97A' : '#F5F5F5'} />
        <Text numberOfLines={1} style={{ color: home ? '#4CB97A' : '#F5F5F5' }}>
          Home
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Journal')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
          },
        ]}>
        <Icon name='bookmark' color={journal ? '#4CB97A' : '#F5F5F5'} />
        <Text
          numberOfLines={1}
          style={{ color: journal ? '#4CB97A' : '#F5F5F5' }}>
          Journal
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('GoalsPage')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
            borderTopRightRadius: 10,
          },
        ]}>
        <Icon name='star' color={goals ? '#4CB97A' : '#F5F5F5'} />
        <Text
          numberOfLines={1}
          style={{ color: goals ? '#4CB97A' : '#F5F5F5' }}>
          Goals
        </Text>
      </Pressable>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
          zIndex: 3,
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F6EFED',
            borderRadius: 70 / 2,
            margin: -1,
            bottom: 30,
          }}>
          <Pressable
            onPress={() => navigation.navigate('HealthEntry1')}
            style={({ pressed }) => [
              {
                width: 56,
                height: 56,
                justifyContent: 'center',
                backgroundColor: pressed ? 'white' : '#4CB97A',
                borderRadius: 56 / 2,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
              },
            ]}>
            <Icon name='plus' type='font-awesome' color='#F5F5F5' />
          </Pressable>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('ToDoList')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
            borderTopLeftRadius: 10,
          },
        ]}>
        <Icon name='check' color={todo ? '#4CB97A' : '#F5F5F5'} />
        <Text numberOfLines={1} style={{ color: todo ? '#4CB97A' : '#F5F5F5' }}>
          To-Do
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('HistoryHealthEntries')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
          },
        ]}>
        <Icon name='history' color={history ? '#4CB97A' : '#F5F5F5'} />
        <Text
          numberOfLines={1}
          style={{ color: history ? '#4CB97A' : '#F5F5F5' }}>
          History
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('AccountPanel')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed ? 'white' : '#A5DFB2',
          },
        ]}>
        <Icon name='menu' color={account ? '#4CB97A' : '#F5F5F5'} />
        <Text
          numberOfLines={1}
          style={{ color: account ? '#4CB97A' : '#F5F5F5' }}>
          Account
        </Text>
      </Pressable>
    </View>
  );
};

export default NavBar;
