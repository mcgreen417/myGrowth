import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './app/screens/StartPage';
import SignUpPage from './app/screens/SignUpPage';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './app/screens/LoginPage';
import ForgotPasswordPage from './app/screens/ForgotPasswordPage';
import PasswordResetVerificationPage from './app/screens/PasswordResetVerificationPage';
import ResetPasswordPage from './app/screens/ResetPasswordPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartPage'>
        <Stack.Screen name='StartPage' component={StartPage} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen
          name='ForgotPasswordPage'
          component={ForgotPasswordPage}
        />
        <Stack.Screen
          name='PasswordResetVerificationPage'
          component={PasswordResetVerificationPage}
        />
        <Stack.Screen name='ResetPasswordPage' component={ResetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
