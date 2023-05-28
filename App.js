import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TailwindProvider } from "tailwindcss-react-native";
import LoginScreen from "./screens/LoginScreen";

const Stack=createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
   </TailwindProvider>
  );
}
