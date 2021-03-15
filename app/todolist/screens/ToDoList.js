import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

const ToDoList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Gardener avatar + page blurb */}
      <View style={styles.avatarView}>
        <Text style={styles.pageDescription}>
          Use this to-do list to keep track of upcoming tasks. Let's have another productive day!
        </Text>
        <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
      </View>
      <View style={styles.divider} />

      {/* Category listing */}
      <View style={styles.inlineRow}>
        <Icon
          name='chevron-back'
          type='ionicon'
          color='#816868'
        />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '82%' }}>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>School</Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>Work</Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>Chores</Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>Games</Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={{ 
                marginVertical: 6, 
                marginLeft: 16,
                marginRight: 6, 
                color: '#F5F5F5', 
                fontSize: 16, 
              }}>Add Tab</Text>
              <Icon
                name='plus-circle'
                type='feather'
                color='#F5F5F5'
                style={{ marginRight: 12 }}
              />
            </View>
          </ScrollView>
        <View style={styles.iconView}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='chevron-forward'
              type='ionicon'
              color='#816868'
            />
          </View>
        </View>
      </View>

      {/* Task listing */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
        <View>
          <Button title='task1' />
          <Button title='task2' />
          <Button title='task3' />
          <Button title='task4' />
        </View>
      </ScrollView>
      <NavBar todo={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export { ToDoList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    justifyContent: 'center',
    alignSelf: 'center'
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
    width: '90%'
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
    width: '90%',
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
});
