import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Calendar from "./screens/Calendar";
import Events from "./screens/Events";
import Notes from "./screens/Notes";
import Task from "./screens/Task";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

