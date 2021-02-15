import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './app/screens/StartPage';
import SignUpPage from './app/screens/SignUpPage';
import LoginPage from './app/screens/LoginPage';
import ForgotPasswordPage from './app/screens/ForgotPasswordPage';
import PasswordResetVerificationPage from './app/screens/PasswordResetVerificationPage';
import ResetPasswordPage from './app/screens/ResetPasswordPage';
import UserInitializationPage from './app/screens/UserInitializationPage';
import AccountPanelPage from  './app/screens/AccountPanelPage';
import settingsPage from './app/screens/settingsPage';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react-native/dist/Auth';
Amplify.configure(awsconfig);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartPage'>
        <Stack.Screen name='StartPage' component={StartPage} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name='LoginPage' component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage} options={{ headerShown: false }} />
        <Stack.Screen name='PasswordResetVerificationPage' component={PasswordResetVerificationPage} options={{ headerShown: false }} />
        <Stack.Screen name='ResetPasswordPage' component={ResetPasswordPage} options={{ headerShown: false }} />
        <Stack.Screen name='UserInitializationPage' component={UserInitializationPage} options={{ headerShown: false }} />
        <Stack.Screen name='AccountPanelPage' component={AccountPanelPage} options={{ headerShown: false }} />
        <Stack.Screen name='settingsPage' component={settingsPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;