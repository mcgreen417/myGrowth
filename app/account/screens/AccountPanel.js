import React from 'react';
import { Auth, API } from 'aws-amplify';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import * as queries from '../../../src/graphql/queries';

import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

function AccountPanel({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style={styles.pageSetup}>

        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={require('../../shared/assets/gardener-avatar.png')}/>
          <Text style={styles.pageDescription}>
            Select one of the options below to customize your account settings.
          </Text>
        </View>
        {/* Top page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        {/* Account Settings */}
        <Text style={styles.heading}>ACCOUNT SETTINGS</Text>
        <View style={styles.line} />

        {/* User settings */}
        <View style={styles.inlineRow}>
          <TouchableOpacity 
            style={styles.buttons} 
            onPress={() => getUserSettings(navigation)}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>User Settings</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* Generate report */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('GenerateReport')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>Generate Report</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* Report a problem */}
        <View style={styles.inlineRow}>
          <TouchableOpacity 
            style={styles.buttons} 
            onPress={() => navigation.navigate('')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>Report a Problem</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* Leave a review */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>Leave a Review</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* About */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>About</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* Log out */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => signOut(navigation)}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.text}>Log out</Text>
              <View style={styles.iconView}>
                <Icon
                  name='chevron-forward'
                  type='ionicon'
                  color='#816868'
                  style={{ marginRight: -6 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        {/* Filler image */}
        <Image style={styles.fillerImage} source={require('../../shared/assets/SettingsPlantShelf.png')} />

      </View>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
}

async function signOut(navigation) {
  try {
    await Auth.signOut();
    navigation.navigate('Start');
  } catch(error) {
    console.log('error signing out: ', error);
  }
}

async function getUserSettings(navigation) {
  const user = Auth.currentAuthenticatedUser();

  const res = await API.graphql({
    query: queries.getSetting,
    variables: {UserID: user.username}
  });

  navigation.navigate('UserSettings', { 
    stress: res.data.getSetting.Options.stress, 
    weight: res.data.getSetting.Options.weight, 
    fitness: res.data.getSetting.Options.fitness, 
    meal: res.data.getSetting.Options.meal,
    dailyActivities: res.data.getSetting.Options.dailyActivities,
    medication: res.data.getSetting.Options.medication,
    period: res.data.getSetting.Options.period,
    sleep: res.data.getSetting.Options.sleep,
    userHeight: res.data.getSetting.Options.userHeight,
    userWeight: res.data.getSetting.Options.userWeight,
    metric: res.data.getSetting.Options.metric
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  avatar: {
    width: 75,
    height: 75,
    marginRight: 24,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  fillerImage: {
    width: 420,
    height: 170,
    marginLeft: '-6%',
  },  
  heading: {
    color: '#4CB97A',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '90%',
  },
  iconView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  line: {
    width: '90%',
    borderColor: '#816868',
    borderBottomWidth: 1,
    minHeight: 1,
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
  },
  pageEnd: {
    marginBottom: 30,
  },
  pageSetup: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountPanel;
