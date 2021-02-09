import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const AccountPanel = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Here you can edit your account settings. Please select from one of the
          options below.
        </Text>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
      <View>
        <Button title='User Settings' />
        <Button title='Generate Report' />
        <Button title='Link Your Account' />
        <Button title='Report a Problem' />
        <Button title='Leave a Review' />
        <Button title='About' />
      </View>
      <View>
        <Image source={require('../../shared/assets/icon.png')} />
      </View>
    </SafeAreaView>
  );
};

export default AccountPanel;

const styles = StyleSheet.create({});
