import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const CustomizePlant = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Select and item to change your palnt's appearance!</Text>
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
        <Button title='item1' />
        <Button title='item2' />
        <Button title='item3' />
        <Button title='item4' />
      </View>
      <View>
        <Button title='Clear changes' />
        <Button title='Confirm changes' />
      </View>
      <View>
        <Text>Want more options? </Text>
        <Button title='Visit the plant shop ->' />
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default CustomizePlant;

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
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
  },
  avatarSelectView: {
    height: '68%',
    marginBottom: 20,
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
  pageDescription: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
    flex: 1,
    flexWrap: 'wrap',
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  plant: {
    width: 270,
    height: 270,
  },
  plantButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 0,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 0,
    marginRight: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    // marginLeft: 130,
    marginRight: 0,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
