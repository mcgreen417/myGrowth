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
} from './app/userinit/screens/UserInitializationPage';
import HomePage from './app/home/screens/Home';
import PlantShop from './app/home/screens/PlantShop';
import CustomizePlant from './app/home/screens/CustomizePlant';
import { Journal } from './app/journal/screens/Journal';
import { Goals } from './app/goals/screens/Goals';
import { HealthEntry1 } from './app/healthentry/screens/HealthEntry';
import { ToDoList } from './app/todolist/screens/ToDoList';
import { HistoryHealthEntries } from './app/history/screens/History';
import AccountPanel from './app/account/screens/AccountPanel';
import UserSettings from './app/account/screens/UserSettings';
import GenerateReport from './app/account/screens/GenerateReport';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './app/shared/config/aws-exports';
import { Authenticator } from 'aws-amplify-react-native/dist/Auth';
Amplify.configure(awsconfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartPage'>
        <Stack.Screen
          name='StartPage'
          component={StartPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='SignUpPage'
          component={SignUpPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='LoginPage'
          component={LoginPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='ForgotPasswordPage'
          component={ForgotPasswordPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='PasswordResetVerificationPage'
          component={PasswordResetVerificationPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='ResetPasswordPage'
          component={ResetPasswordPage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='UserInitializationPage1'
          component={UserInitializationPage1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='UserInitializationPage2'
          component={UserInitializationPage2}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='UserInitializationPage3'
          component={UserInitializationPage3}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='PlantShop'
          component={PlantShop}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='CustomizePlant'
          component={CustomizePlant}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='Journal'
          component={Journal}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='GoalsPage'
          component={Goals}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='HealthEntry1'
          component={HealthEntry1}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='ToDoList'
          component={ToDoList}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='HistoryHealthEntries'
          component={HistoryHealthEntries}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='AccountPanel'
          component={AccountPanel}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='UserSettings'
          component={UserSettings}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='GenerateReport'
          component={GenerateReport}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
