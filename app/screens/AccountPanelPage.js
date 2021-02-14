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
                <View>
                    <Text style={styles.info}>Here you can edit your account settings. Please select from one of the options below.</Text>
                    <Image source={require('../assets/gardener-avatar.png')} />
                </View>

                {/* Settings redirect */} 
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('settingsPage')}>
                    <Text style={styles.text}>User Settings</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>  
                {/* generate report redirect */}
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('genReportPage')}>
                    <Text style={styles.text}>Generate Report</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>
                {/* Link account redirect */}
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('linkAccountPage')}>
                    <Text style={styles.text}>Link Account</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>  
                {/* Report a problem redirect */}
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('reportProblemPage')}>
                    <Text style={styles.text}>Report a Problem</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>   
                {/* Leave a review redirect */}
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('leaveReviewPage')}>
                    <Text style={styles.text}>Leave a Review</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>    
                {/* About redirect */}
                <View style={styles.line}/>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress= { () => navigation.navigate('aboutPage')}>
                    <Text style={styles.text}>About</Text>
                    <Image source={require('../assets/chevron.png')} />
                </TouchableOpacity>
                <View style={styles.line}/> 

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
    text: {
        color: 'black',
        textDecorationLine: 'none',
    },
    info: {
        color: 'black',
        textDecorationLine: 'none',
        fontSize: 18,
    }
});

export default AccountPanelPage;
