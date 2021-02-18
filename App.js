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
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='PlantShop' component={PlantShop} />
        <Stack.Screen name='CustomizePlant' component={CustomizePlant} />
        <Stack.Screen name='Journal' component={Journal} />
        <Stack.Screen name='GoalsPage' component={Goals} />
        <Stack.Screen name='HealthEntry1' component={HealthEntry1} />
        <Stack.Screen name='ToDoList' component={ToDoList} />
        <Stack.Screen
          name='HistoryHealthEntries'
          component={HistoryHealthEntries}
        />
        <Stack.Screen name='AccountPanel' component={AccountPanel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
