import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Modal,
  Pressable,
  Alert,
  Image,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../../shared/components/NavBar';

const Goal = ({ title, description, type, navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.inlineRow2}>
      {/* This icon should change to check-box when the user clicks on it (and retain that until daily reset) */}
      <Pressable onPress={() => navigation.navigate('GoalComplete')}>
        <Icon
          name='check-box-outline-blank'
          type='MaterialIcons'
          color='#816868'
          style={{ marginRight: 6 }}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.iconView}>
        <View style={{ flexDirection: 'row' }}>
          <Pressable>
            <Icon name='pencil' type='material-community' color='#816868' />
          </Pressable>
          <Pressable>
            <Icon name='close' type='ionicon' color='#816868' />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

function Goals({ navigation }) {
  var time = new Date();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Set healthy goals and do your best to accomplish them! Let's do our
            best today too!
          </Text>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>
        <View style={styles.divider} />

        {/* Daily Goals section */}
        <View style={styles.inlineRow}>
          <Text style={styles.heading}>Daily Goals </Text>
          <Text style={styles.text}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Goal
            title='Write a health entry'
            description='description 1'
            type='daily'
            navigation={navigation}
          />
          <Goal
            title='Write a journal entry'
            description='description 2'
            type='daily'
            navigation={navigation}
          />
          <Goal
            title='Consume 1200 calories total'
            description='description 3'
            type='daily'
            navigation={navigation}
          />
          <Goal
            title='Take medicine'
            description='description 4'
            type='daily'
            navigation={navigation}
          />
        </View>
        {/* New Goal button */}
        <View style={{ width: '95%' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <Pressable>
              <View style={styles.goalButtonView}>
                <Text style={styles.goalButtonText}>New Goal</Text>
                <Icon
                  name='plus-circle'
                  type='feather'
                  color='#F5F5F5'
                  style={{ marginLeft: 6, marginRight: 12 }}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Weekly Goals section */}
        <View style={styles.inlineRow}>
          <Text style={styles.heading}>Weekly Goals </Text>
          <Text style={styles.text}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Goal
            title='Exercise for 30m'
            description='description 1'
            type='weekly'
            navigation={navigation}
          />
          <Goal
            title='Read for 1h'
            description='description 2'
            type='weekly'
            navigation={navigation}
          />
          <Goal
            title='Go to class'
            description='description 3'
            type='weekly'
            navigation={navigation}
          />
          <Goal
            title='Go to work'
            description='description 4'
            type='weekly'
            navigation={navigation}
          />
          <Goal
            title='Study for 3h'
            description='description 5'
            type='weekly'
            navigation={navigation}
          />
        </View>
        {/* New Goal button */}
        <View style={{ width: '95%' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <Pressable>
              <View style={styles.goalButtonView}>
                <Text style={styles.goalButtonText}>New Goal</Text>
                <Icon
                  name='plus-circle'
                  type='feather'
                  color='#F5F5F5'
                  style={{ marginLeft: 6, marginRight: 12 }}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Long-Term Goals section */}
        <View style={styles.inlineRow}>
          <Text style={styles.heading}>Long-Term Goals </Text>
          <Text style={styles.text}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Goal
            title='Graduate university'
            description='description 1'
            type='longterm'
            navigation={navigation}
          />
          <Goal
            title='Get a job'
            description='description 2'
            type='longterm'
            navigation={navigation}
          />
          <Goal
            title='Buy a house'
            description='description 3'
            type='longterm'
            navigation={navigation}
          />
          <Goal
            title='Get married'
            description='description 4'
            type='longterm'
            navigation={navigation}
          />
        </View>
        {/* New Goal button */}
        <View style={{ width: '95%' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <Pressable>
              <View style={styles.goalButtonView}>
                <Text style={styles.goalButtonText}>New Goal</Text>
                <Icon
                  name='plus-circle'
                  type='feather'
                  color='#F5F5F5'
                  style={{ marginLeft: 6, marginRight: 12 }}
                />
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.pageEnd} />
      </ScrollView>
      <NavBar goals={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export { Goals };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  goalButtonText: {
    marginVertical: 8,
    marginLeft: 16,
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goalButtonView: {
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
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  text: {
    color: '#816868',
    fontSize: 16,
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
});
