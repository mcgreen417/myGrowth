import React from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import NavBar from '../../shared/components/NavBar';

const ReviewEntry = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 16,
          alignSelf: 'center',
        }}>
        <View style={{ width: '42.5%' }}>
          <Button
            title='Submit Entry'
            color='#A5DFB2'
            onPress={() => navigation.navigate('EntryCompletion')}
          />
        </View>
      </View>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default ReviewEntry;

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
