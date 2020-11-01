import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Calendar from './screens/Calendar'
import Events from './screens/Events'
import Notes from './screens/Notes'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  return (
   
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Calendar'>
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Notes" component={Notes} />
      
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
