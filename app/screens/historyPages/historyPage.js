import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Switch,
  Button,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

/* -------------main history page-------------- */
function HistoryPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>

      </View>
    </SafeAreaView>
  );
}

/* -------------mood history page-------------- */
function HistoryMoodPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------stress history page-------------- */
function HistoryStressPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------daily activities history page-------------- */
function HistoryDailyActPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------period tracking history page-------------- */
function HistoryPeriodPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------weight history page-------------- */
function HistoryWeightPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------gen health history page-------------- */
function HistoryGenHealthPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------medication history page-------------- */
function HistoryMedicationPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------sleep history page-------------- */
function HistorySleepPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------meal tracking history page-------------- */
function HistoryMealTrackPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

/* -------------fitness history page-------------- */
function HistoryFitnessPage({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style = {{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: 300,
  },
  line: {
    width: 320,
    borderColor: '#938F8E',
    borderBottomWidth: 1,
    minHeight: 1,
  },
  line2 : {
    borderColor: '#938F8E',
    borderRightWidth: 1,
    minHeight: 18,
  },
  text: {
    color: 'black',
    textDecorationLine: 'none',
  },
  info: {
    color: 'black',
    fontSize: 18,
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 24,
    marginBottom: 14,
  }
});

export {
  HistoryPage,
  HistoryMoodPage,
  HistoryStressPage,
  HistoryDailyActPage,
  HistoryPeriodPage,
  HistoryWeightPage,
  HistoryGenHealthPage,
  HistoryMedicationPage,
  HistorySleepPage,
  HistoryMealTrackPage,
  HistoryFitnessPage,
};