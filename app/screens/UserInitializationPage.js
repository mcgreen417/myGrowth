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
        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          {/* Gardener avatar + page blurb */}
          <Image style={styles.avatar} source={require('../assets/gardener-avatar.png')} />
          <Text style={{ color: '#816868', fontSize: 16 }}>
            Welcome to myGrowth! Let’s initialize{"\n"} 
            your account. First, please answer a{"\n"} 
            few questions about yourself.
          </Text>
        </View>
        {/* Top page divider */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#816868', marginLeft: 20, marginRight: 20 }} />
        </View>
        {/* User selection section */}
          {/* First name user input entry */}
          {/* Date of birth calendar pop-up */}
          {/* Gender drop-down */}
          {/* Biological sex drop-down */}
          {/* Height user input entry + cm switch button */}
          {/* Weight user input entry + kgs switch button */}
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
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 50,
  },
});

export default UserInitializationPage;
