import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';

const NavBar = () => {
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
      }}
    >
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='home' color='#F5F5F5' />
        <Text>Home</Text>
      </View>
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='bookmark' color='#F5F5F5' />
        <Text>Journal</Text>
      </View>
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='star' color='#F5F5F5' />
        <Text>Goals</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
          zIndex: 3,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F6EFED',
            borderRadius: 70 / 2,
            margin: -20,
            bottom: 40,
          }}
        >
          <View
            style={{
              width: 56,
              height: 56,
              justifyContent: 'center',
              backgroundColor: '#4CB97A',
              borderRadius: 56 / 2,
            }}
          >
            <Icon name='plus' type='font-awesome' color='#F5F5F5' />
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='check' color='#F5F5F5' />
        <Text>To-Do</Text>
      </View>
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='history' color='#F5F5F5' />
        <Text>History</Text>
      </View>
      <View
        style={{
          padding: 5,
          flex: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#A5DFB2',
        }}
      >
        <Icon name='menu' color='#F5F5F5' />
        <Text numberOfLines={1} style={{ color: '#F5F5F5' }}>
          Account
        </Text>
      </View>
    </View>
  );
};

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Good Morning, Firstname!</Text>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Button title='<- Customize plant' />
        <Button title='Enter plant shop ->' />
      </View>
      <View>
        <Button title='Write a new entry! You wrote your last entry on (date) at (time)' />
        <Button title='View past entries ->' />
      </View>
      <View>
        <Image
          source={require('../../shared/assets/icon.png')}
          style={styles.avatar}
        />
        <View>
          <Text>Why don't you try doing one of these?</Text>
          <Button title='Write a journal entry' />
          <Button title='Create a new goal' />
          <Button title='Complete a goal' />
          <Button title='View your history' />
        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
});
