import React from 'react';
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native';

const LoadingGetHealthEntry = ({ loadingVisible, setLoadingVisible }) => {
  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={loadingVisible}
        onRequestClose={() => setLoadingVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000055',
          }}>
          <ActivityIndicator size='large' color='#4CB97A' />
        </View>
      </Modal>
    </View>
  );
};

export default LoadingGetHealthEntry;

const styles = StyleSheet.create({});
