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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* blurb */ }

        { /* search for correlations button */ }
        <Button title='Search for Correlations' color='#E5E5E5' onPress={  } />
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
      { /* blurb and icon */ }

      { /* categories selector */ }

      { /* custom component */ }

      { /* time period selector */ }

      { /* correlation blurb */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }

        { /* correlation blurb */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }

        { /* next period calculation */ }

        { /* correlation symptom blurb */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }

        { /* correlation symptom blurb */ }

        { /* exercise blurb */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* medication selector */ }

        { /* correlation symptom blurbs */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* time period selector */ }

        { /* display selector */ }

        { /* correlation symptom blurbs */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* recommonded nutritional values */ }

        { /* correlation symptom blurbs */ }
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
        { /* blurb and icon */ }

        { /* categories selector */ }

        { /* custom component */ }

        { /* correlation symptom blurb */ }
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