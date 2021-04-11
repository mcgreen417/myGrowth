import React, { useState } from 'react';
import {
  View,
} from 'react-native';

  // StatusBar backgroundColor attribute only works for Android.
  // Creating a view of this height is a functional workaround -
  //   height is chosen to what looks best.
  // Currently only looks proper on an iPhone 12 Pro - for other devices,
  //   their screen sizes are different and they don't have notches.
  //   The device affects that number a lot.
const StatusBariOS = () => {
  const STATUS_BAR_HEIGHT = 55;

  if (global.usingiOSDevice) {
    return (
      <View style={{
        marginTop: -50,
        marginBottom: 5,
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor:
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
      }} />
    );
  } else {
    return (null);
  }
};

export default StatusBariOS;