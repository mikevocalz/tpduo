import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RootStack = createStackNavigator<RootStackParamList>();

export default function TwoPaneHub() {
  return (
    <RootStack.Navigator initialRouteName='TabOneScreen'
      screenOptions={{
        gestureEnabled: true,
        animationEnabled: false
      }}>
      <RootStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          // header: props => <DexHeader {...props} />,
          // headerStyle: {
          //   backgroundColor: '#ff0000'
          // },
        }}
      />
      <RootStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Pokedex', headerStyle: {
            backgroundColor: '#CC0000',
            borderBottomColor: "#67001a",
            borderBottomWidth: 3

          },
        }}
      />
    </RootStack.Navigator>
  );
}

