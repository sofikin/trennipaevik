import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {values} from '@babel/runtime/helpers/regeneratorRuntime';
import Splash from "./src/screens/Splash";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
