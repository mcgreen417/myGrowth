import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './app/login/screens/StartPage';
import SignUpPage from './app/login/screens/SignUpPage';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './app/login/screens/LoginPage';
import ForgotPasswordPage from './app/login/screens/ForgotPasswordPage';
import PasswordResetVerificationPage from './app/login/screens/PasswordResetVerificationPage';
import ResetPasswordPage from './app/login/screens/ResetPasswordPage';
import {
  UserInitializationPage1,
  UserInitializationPage2,
  UserInitializationPage3,
} from './app/screens/UserInitializationPage';
import Home from './app/home/screens/Home';
import CustomizePlant from './app/home/screens/CustomizePlant';
import PlantShop from './app/home/screens/PlantShop';
import {
  EntryCompletion,
  HealthEntry1,
  HealthEntry2,
  HealthEntry3,
  HealthEntry4,
  HealthEntry5,
  ReviewEntry,
  ViewEntry,
} from './app/healthentry/screens/HealthEntry';

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
        <Stack.Screen
          name='UserInitializationPage1'
          component={UserInitializationPage1}
        />
        <Stack.Screen
          name='UserInitializationPage2'
          component={UserInitializationPage2}
        />
        <Stack.Screen
          name='UserInitializationPage3'
          component={UserInitializationPage3}
        />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CustomizePlant' component={CustomizePlant} />
        <Stack.Screen name='PlantShop' component={PlantShop} />
        <Stack.Screen name='HealthEntry1' component={HealthEntry1} />
        <Stack.Screen name='HealthEntry2' component={HealthEntry2} />
        <Stack.Screen name='HealthEntry3' component={HealthEntry3} />
        <Stack.Screen name='HealthEntry4' component={HealthEntry4} />
        <Stack.Screen name='HealthEntry5' component={HealthEntry5} />
        <Stack.Screen name='ReviewEntry' component={ReviewEntry} />
        <Stack.Screen name='EntryCompletion' component={EntryCompletion} />
        <Stack.Screen name='ViewEntry' component={ViewEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
