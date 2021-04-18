import React, { useState } from 'react';
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
  ScrollView,
  Dimensions,
} from 'react-native';

function PasswordResetVerification({ route, navigation }) {
  const email = route.params;
  const [code, setCode] = useState('');
  const [pressed, setPressed] = useState(false);

  return (
    <SafeAreaView style={styles().container}>
      <StatusBar
        backgroundColor={
          global.colorblindMode
            ? global.cb_statusBarColor
            : global.statusBarColor
        }
        barStyle='light-content'
      />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps='handled' 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View style={styles().pageSetup}>
          {/* Logo + title + page instructions */}
          <Image
            style={styles().logo}
            source={require('../../shared/assets/icon.png')}
          />
          <Text style={styles().textTitle}>myGrowth</Text>
          <Text style={styles().textSubtitle}>Your General Wellness Tracker</Text>
          <Text style={styles().textInstructions}>
            A password reset code has been sent to your e-mail. Enter the password reset code 
            you received below.
          </Text>

          {/* Reset code text input */}
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <View style={styles().textInputView}>
              <View style={styles().labelView}>
                <Text
                  style={{
                    color: pressed ? '#4CB97A' : '#816868',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Reset Code
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: pressed ? '#4CB97A' : '#816868',
                  justifyContent: 'flex-end',
                  borderRadius: 6,
                  paddingHorizontal: 16,
                }}>
                <TextInput
                  placeholder='Reset code'
                  fontSize={16}
                  color='#816868'
                  placeholderTextColor={
                    global.colorblindMode
                      ? global.cb_placeHolderTextColor
                      : global.placeHolderTextColor
                  }
                  keyboardType='number-pad'
                  value={code}
                  onChangeText={(code) => {
                    setCode(code);
                  }}
                  maxLength={6}
                  onFocus={() => setPressed(true)}
                  onBlur={() => setPressed(false)}
                  style={{ top: -8 }}
                />
              </View>
            </View>
          </View>

          <View style={styles().buttons}>
            <Button
              title='VERIFY'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              onPress={() => navigation.navigate('ResetPassword', {email, code})}
            />
          </View>

          {/* Resend password reset code */}
          <View>
            <View style={{ flexDirection: 'row', marginTop: 16, }}>
              <Text style={styles().text}>Didn't receive a reset code?{' '}</Text>
              <TouchableOpacity>
                <Text style={styles().textLink}>Resend e-mail.</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login page redirect */}
          <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles().textLink}>Return to login.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
    },
    logo: {
      height: Math.round(Dimensions.get('window').width * 1/4),
      width: Math.round(Dimensions.get('window').width * 1/4),
    },
    buttons: {
      marginVertical: 10,
      width: Math.round(Dimensions.get('window').width * 3/4),
      borderColor: global.colorblindMode
        ? global.cb_optionButtonsBorderColor
        : global.optionButtonsBorderColor,
    },
    label: {
      color: '#816868',
      fontSize: 16,
      fontWeight: 'bold',
    },
    labelView: {
      position: 'absolute',
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      top: -16,
      left: 14,
      padding: 5,
      zIndex: 50,
    },
    pageSetup: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#816868',
      fontSize: 14,
    },
    textInputView: {
      height: 48,
      width: Math.round(Dimensions.get('window').width * 3/4),
      position: 'relative',
    },
    textInstructions: {
      color: '#816868',
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 16,
      width: Math.round(Dimensions.get('window').width * 3/4),
    },
    textLink: {
      color: global.colorblindMode
        ? global.cb_hyperlinkedTextColor
        : global.hyperlinkedTextColor,
      textDecorationLine: 'underline',
      fontSize: 14,
    },
    textSubtitle: {
      color: '#816868',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
    },
    textTitle: {
      color: '#816868',
      fontWeight: 'bold',
      fontSize: 44,
    },
  });

export default PasswordResetVerification;
