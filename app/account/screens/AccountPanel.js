import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

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
            You can edit your account settings on this page. Please select one of the options below.
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
          <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('UserSettings')}>
            <View style={styles.inlineRow}>
              <Text style={styles.textReg}>User Settings</Text>
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
              <Text style={styles.textReg}>Generate Report</Text>
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

        {/* Link account */}
        <View style={styles.inlineRow}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.textReg}>Link Account</Text>
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
          <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('e')}>
            <View style={styles.inlineRow}>
              <Text style={styles.textReg}>Report a Problem</Text>
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
              <Text style={styles.textReg}>Leave a Review</Text>
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
              <Text style={styles.textReg}>About</Text>
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
            onPress={() => navigation.navigate('')}
          >
            <View style={styles.inlineRow}>
              <Text style={styles.textReg}>Log out</Text>
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
      </View>
      <NavBar account={true} navigation={navigation} />
    </SafeAreaView>
  );
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
  line2: {
    borderColor: '#816868',
    borderRightWidth: 1,
    minHeight: 28,
    marginTop: 4,
    marginBottom: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  textReg: {
    color: 'black',
    textDecorationLine: 'none',
    textAlign: 'left',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 16,
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
