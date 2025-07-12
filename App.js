import {
  LogBox,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, { useEffect } from 'react';

// Import Navigators from React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginPage from './Screen/LoginPage';
const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Require cycle: node_modules/']);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
