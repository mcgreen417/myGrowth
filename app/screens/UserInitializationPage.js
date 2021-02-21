import React from 'react';
import { 
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, 
} from 'react-native';

function UserInitializationPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={require('../assets/gardener-avatar.png')} />
          <Text style={styles.pageDescription}>
            Welcome to myGrowth! Let’s initialize{"\n"} 
            your account. First, please answer a{"\n"} 
            few questions about yourself.
          </Text>
        </View>
        {/* Top page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>
        {/* User selection section */}
          {/* First name user input entry */}
          {/* Date of birth calendar pop-up */}
          {/* Gender drop-down */}
          {/* Biological sex drop-down */}
          {/* Height user input entry + cm switch button */}
          {/* Weight user input entry + kgs switch button */}

        {/* Delete later, temp link for working */}
        <TouchableOpacity onPress={() => navigation.navigate('AccountPanelPage')}>
          <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>Account Panel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsPage')}>
          <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GenReportPage')}>
          <Text style={{ color: '#A5DFB2', textDecorationLine: 'underline' }}>Generate Report</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    alignItems: 'center',
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
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
  pageDescription: {
    color: '#816868', 
    fontSize: 16
  },
});

export default UserInitializationPage;
