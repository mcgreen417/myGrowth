import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

// StatusBar's backgroundColor attribute only works for Android.
// Creating a view of this height is a functional workaround -
//   height is chosen to what looks best.
// Currently only looks proper on an iPhone 12 Pro - for other devices,
//   their screen sizes are different and they don't have notches.
//   The device affects this height value a lot.
const STATUS_BAR_HEIGHT = 54;

const StatusBariOS = () => {
  if (global.usingiOSDevice) {
    return (
      <View style={styles().statusBar} />
    );
  } else {
    return (null);
  }
};

const styles = () => StyleSheet.create({
  statusBar: {
    marginTop: -50,
    marginBottom: 5,
    width: "100%",
    height: STATUS_BAR_HEIGHT,
    backgroundColor:
      global.colorblindMode
        ? global.cb_statusBarColor
        : global.statusBarColor
  }
});

export default StatusBariOS;