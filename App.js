import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './global.js';

import Start from './app/login/screens/Start';
import SignUp from './app/login/screens/SignUp';
import Login from './app/login/screens/Login';
import ForgotPassword from './app/login/screens/ForgotPassword';
import PasswordResetVerification from './app/login/screens/PasswordResetVerification';
import ResetPassword from './app/login/screens/ResetPassword';
import UserInitialization1 from './app/userinit/screens/UserInitialization1';
import UserInitialization2 from './app/userinit/screens/UserInitialization2';
import UserInitialization3 from './app/userinit/screens/UserInitialization3';
import Home from './app/home/screens/Home';
import PlantShop from './app/home/screens/PlantShop';
import CustomizePlant from './app/home/screens/CustomizePlant';
import Journal from './app/journal/screens/Journal';
import CreateNewJournalEntry from './app/journal/screens/CreateNewJournalEntry';
import JournalEntryCompletion from './app/journal/screens/JournalEntryCompletion';
import JournalHistory from './app/journal/screens/JournalHistory';
import ViewJournalEntry from './app/journal/screens/ViewJournalEntry';
import WordCloudDisplay from './app/journal/screens/WordCloudDisplay';
import { Goals } from './app/goals/screens/Goals';
import { GoalComplete } from './app/goals/screens/GoalComplete';
import HealthEntry from './app/healthentry/screens/HealthEntry';
import EntryCompletion from './app/healthentry/screens/EntryCompletion';
import { ToDoList } from './app/todolist/screens/ToDoList';
import {
  HistoryHealthEntries,
  HistoryCorrelations,
} from './app/history/screens/History';
import HistoryDailyActivities1 from './app/history/screens/HistoryDailyActivities1';
import HistoryDailyActivities2 from './app/history/screens/HistoryDailyActivities2';
import HistoryFitness1 from './app/history/screens/HistoryFitness1';
import HistoryFitness2 from './app/history/screens/HistoryFitness2';
import HistoryGeneralHealth1 from './app/history/screens/HistoryGeneralHealth1';
import HistoryGeneralHealth2 from './app/history/screens/HistoryGeneralHealth2';
import HistoryMealTracking from './app/history/screens/HistoryMealTracking';
import HistoryMedication from './app/history/screens/HistoryMedication';
import HistoryMood from './app/history/screens/HistoryMood';
import HistoryPeriodTracking from './app/history/screens/HistoryPeriodTracking';
import HistorySleep1 from './app/history/screens/HistorySleep1';
import HistorySleep2 from './app/history/screens/HistorySleep2';
import HistoryStress from './app/history/screens/HistoryStress';
import HistoryWeight from './app/history/screens/HistoryWeight';
import AccountPanel from './app/account/screens/AccountPanel';
import UserSettings from './app/account/screens/UserSettings';
import GenerateReport from './app/account/screens/GenerateReport';
import VerificationCode from './app/login/screens/VerificationCode';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './app/shared/config/aws-exports';
import { Authenticator } from 'aws-amplify-react-native/dist/Auth';

Amplify.configure(awsconfig);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen
          name='Start'
          component={Start}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='VerificationCode'
          component={VerificationCode}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='PasswordResetVerification'
          component={PasswordResetVerification}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='UserInitialization1'
          component={UserInitialization1}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='UserInitialization2'
          component={UserInitialization2}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='UserInitialization3'
          component={UserInitialization3}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
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
          name='CreateNewJournalEntry'
          component={CreateNewJournalEntry}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='JournalEntryCompletion'
          component={JournalEntryCompletion}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='JournalHistory'
          component={JournalHistory}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='ViewJournalEntry'
          component={ViewJournalEntry}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='WordCloudDisplay'
          component={WordCloudDisplay}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='Goals'
          component={Goals}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='GoalComplete'
          component={GoalComplete}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HealthEntry1'
          component={HealthEntry}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='EntryCompletion'
          component={EntryCompletion}
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
          name='HistoryMood'
          component={HistoryMood}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryStress'
          component={HistoryStress}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryDailyActivities1'
          component={HistoryDailyActivities1}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryDailyActivities2'
          component={HistoryDailyActivities2}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryPeriodTracking'
          component={HistoryPeriodTracking}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryWeight'
          component={HistoryWeight}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryGeneralHealth1'
          component={HistoryGeneralHealth1}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryGeneralHealth2'
          component={HistoryGeneralHealth2}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryMedication'
          component={HistoryMedication}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistorySleep1'
          component={HistorySleep1}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistorySleep2'
          component={HistorySleep2}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryMealTracking'
          component={HistoryMealTracking}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryCorrelations'
          component={HistoryCorrelations}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryFitness1'
          component={HistoryFitness1}
          options={{ header: () => null }}
        />

        <Stack.Screen
          name='HistoryFitness2'
          component={HistoryFitness2}
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

export default App;
