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
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import { Auth, API } from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cache } from 'react-native-cache';

const NavBar = ({
  home = false,
  journal = false,
  goals = false,
  todo = false,
  history = false,
  account = false,
  navigation,
}) => {
  const [usePressedIcon, setTogglePressedIcon] = useState(false);
  const togglePressedIcon = () =>
    setTogglePressedIcon((previousState) => !previousState);

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
      {/* home */}
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : home
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
          },
        ]}>
        <Icon
          name='home'
          color={
            home
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        <Text
          numberOfLines={1}
          style={{
            color: home
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          Home
        </Text>
      </Pressable>

      {/* journal */}
      <Pressable
        onPress={() => navigation.navigate('Journal')}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : journal
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
          },
        ]}>
        <Icon
          name='bookmark'
          color={
            journal
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        <Text
          numberOfLines={1}
          style={{
            color: journal
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          Journal
        </Text>
      </Pressable>

      {/* goals */}
      <Pressable
        onPress={() => getGoals(navigation)}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : goals
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
            borderTopRightRadius: 10,
          },
        ]}>
        <Icon
          name='star'
          color={
            goals
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        <Text
          numberOfLines={1}
          style={{
            color: goals
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          Goals
        </Text>
      </Pressable>

      {/* plus button */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: global.colorblindMode
            ? global.cb_optionButtonsColor
            : global.optionButtonsColor,
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
            onPress={() =>
              navigation.navigate('HealthEntry', {
                reviewTimestamp: new Date().toISOString(),
              })
            }
            style={({ pressed }) => [
              {
                width: 56,
                height: 56,
                justifyContent: 'center',
                backgroundColor: pressed
                  ? global.colorblindMode
                    ? global.cb_navBarCurrentIconColor
                    : global.navBarCurrentIconColor
                  : global.colorblindMode
                  ? global.cb_navBarCurrentIconColor
                  : global.navBarCurrentIconColor,
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
            <Icon
              name='plus'
              type='font-awesome'
              color={
                global.colorblindMode
                  ? global.cb_navBarIconColor
                  : global.navBarIconColor
              }
            />
          </Pressable>
        </View>
      </View>

      {/* to-do */}
      <Pressable
        onPress={() => getTodos(navigation)}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : todo
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
            borderTopLeftRadius: 10,
          },
        ]}>
        <Icon
          name='check'
          color={
            todo
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        <Text
          numberOfLines={1}
          style={{
            color: todo
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          To-Do
        </Text>
      </Pressable>
      <Pressable
        onPress={() => goToHistory(navigation)}
        style={({ pressed }) => [
          {
            padding: 5,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : history
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
          },
        ]}>
        <Icon
          name='history'
          color={
            history
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        <Text
          numberOfLines={1}
          style={{
            color: history
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          History
        </Text>
      </Pressable>

      {/* acct panel */}
      <Pressable
        onPress={() => {
          navigation.navigate('AccountPanel');
        }}
        style={({ pressed }) => [
          {
            padding: 4,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed
              ? global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor
              : account
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconBackgroundColor
                : global.navBarCurrentIconBackgroundColor
              : global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor,
          },
        ]}>
        <Icon
          name='menu'
          color={
            account
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor
          }
        />
        {/* Attempt at making the account icon color change onPress */}
        {/* <Pressable
        value='PressedIcon'
        status={usePressedIcon ? 'checked' : 'unchecked'}
        onPress={() => {
          account
            ? navigation.navigate('AccountPanel')
            : togglePressedIcon(); navigation.navigate('AccountPanel')
          }}  
        style={({ pressed }) => [
          {
            padding: 4,
            flex: 1,
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: pressed 
              ? (global.colorblindMode
                ? global.cb_navBarOnPressColor
                : global.navBarOnPressColor)
              : account
                ? (global.colorblindMode
                  ? global.cb_navBarCurrentIconBackgroundColor
                  : global.navBarCurrentIconBackgroundColor)
                : (global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor),
          },
        ]}>
        <Icon
          name='menu'
          color={
            usePressedIcon
              ? global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            : account
              ? (global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor)
              : (global.colorblindMode
                ? global.cb_navBarIconColor
                : global.navBarIconColor)}
        />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 12,
            color:
              account
                ? (global.colorblindMode
                  ? global.cb_navBarCurrentIconColor
                  : global.navBarCurrentIconColor)
                : (global.colorblindMode
                  ? global.cb_navBarIconColor
                  : global.navBarIconColor)
          }}
        >
          Account
        </Text>
      </Pressable> */}
        <Text
          numberOfLines={1}
          style={{
            color: account
              ? global.colorblindMode
                ? global.cb_navBarCurrentIconColor
                : global.navBarCurrentIconColor
              : global.colorblindMode
              ? global.cb_navBarIconColor
              : global.navBarIconColor,
          }}>
          Account
        </Text>
      </Pressable>
    </View>
  );
};

async function getGoals(navigation) {
  const date = new Date();
  const findSunday = 0 - date.getDay();
  const sunday = new Date(date.getDate() - findSunday);

  const res = await API.graphql({
    query: queries.getMilestones
  });

  var goals = res.data.getMilestones.Milestones;

  for(var i = 0; i < goals.length; i++) {
    let testDate = new Date(goals[i].Timestamp);

    if(goals[i].Category === 'daily') {
      if(testDate.getDate() < date.getDate()) {
        goals[i].Completed = false;
        goals[i].Progress = 0;

        const res2 = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: new Date().toISOString(), Completed: goals[i].Completed, Category: goals[i].Category, 
            Requirement: goals[i].Requirement, Progress: goals[i].Progress, Reward: goals[i].Reward}
        })
      }
    }

    else if(goals[i].Category === 'weekly') {
      if(Math.abs(testDate.getDate() - new Date(sunday.getDate() + testDate.getDay()).getDate()) >= 7) {
        goals[i].Completed = false;
        goals[i].Progress = 0;

        const res2 = await API.graphql ({
          query: mutations.deleteMilestone,
          variables: {timestamp: goals[i].Timestamp}
        });

        const res1 = await API.graphql({
          query: mutations.updateMilestone,
          variables: {Title: goals[i].Title, Timestamp: new Date().toISOString(), Completed: goals[i].Completed, Category: goals[i].Category, 
            Requirement: goals[i].Requirement, Progress: goals[i].Progress, Reward: goals[i].Reward}
        })
      }
    }
  }

  const res1 = await API.graphql({
    query: queries.getMilestones
  });

  goals = res1.data.getMilestones.Milestones;

  navigation.push('Goals', { goals });
}

async function getTodos(navigation) {
  const res = await API.graphql({
    query: queries.getTodos,
  });

  const todos = res.data.getTodos.toDos;

  navigation.navigate('ToDoList', { todos });
}

async function goToHistory(navigation) {
  const cache = new Cache({
    namespace: 'myapp',
    policy: {
      maxEntries: 50000,
    },
    backend: AsyncStorage,
  });

  const data = await cache.peek('data');
  const settings = await cache.peek('settings');

  navigation.push('HistoryHealthEntries', { data, settings });
}

export default NavBar;
