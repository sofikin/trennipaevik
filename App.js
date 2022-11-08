import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {values} from '@babel/runtime/helpers/regeneratorRuntime';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddExercise from "./src/screens/AddExercise";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;
        if (route.name === 'AddExercise') {
          icon = focused
            ? require('./src/assets/addexercise.svg')
            : require('./src/assets/addexercise.svg');
        }

        return <Image style={{width: 24, height: 24}} source={{icon}} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: '#000000'},
    })}>
    <Tab.Screen name="AddExercise" component={AddExercise} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddExercise"
            component={AddExercise}
            options={{headerShown: false}}
          />
          {/*<Stack.Screen*/}
          {/*  name="AddExercise"*/}
          {/*  component={AddExercise}*/}
          {/*  options={{headerShown: false}}*/}
          {/*/>*/}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
