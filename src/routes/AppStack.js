import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './HomeStack';

import Duda from '../pages/Duda';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomeStack} />
        <Stack.Screen name="Duda" component={Duda} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;