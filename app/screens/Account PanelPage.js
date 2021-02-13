import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function AccountPanelPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#A5DFB2' barStyle='light-content' />
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                {/* page info and icon*/}

                {/* Settings redirect */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsPage')}>
                        <Text style={{ color: '#816868', textDecorationLine: 'none' }}>User Settings</Text>
                    </TouchableOpacity>
                </View>   
                {/* Link account redirect */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('LinkAccountPage')}>
                        <Text style={{ color: '#816868', textDecorationLine: 'none' }}>Link Account</Text>
                    </TouchableOpacity>
                </View>   
                {/* Report a problem redirect */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ReportProblemPage')}>
                        <Text style={{ color: '#816868', textDecorationLine: 'none' }}>Report a Problem</Text>
                    </TouchableOpacity>
                </View>   
                {/* Leave a review redirect */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewPage')}>
                        <Text style={{ color: '#816868', textDecorationLine: 'none' }}>Leave a Review</Text>
                    </TouchableOpacity>
                </View>   
                {/* About redirect */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
                        <Text style={{ color: '#816868', textDecorationLine: 'none' }}>About Us</Text>
                    </TouchableOpacity>
                </View>

                {/* content frame */}

                {/* navigation bar */}
   
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
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        borderColor: '',
    },
    textInput: {
        height: 40,
        borderColor: '#A5DFB2',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        textAlign: 'center',
    },
});

export default AccountPanelPage;
