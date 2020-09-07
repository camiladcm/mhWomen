import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TalkDuda from '../pages/TalkDuda';
import SaveDuda from '../pages/SaveDuda';
import colors from '../styles/colors';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function DudaStack() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator initialLayout="TalkDuda">
    //     <Tab.Screen name="TalkDuda" component={TalkDuda} />
    //     <Tab.Screen name="SaveDuda" component={SaveDuda} />
    //   </Tab.Navigator>

    // </NavigationContainer>

    <NavigationContainer>
      <Navigator tabBarOptions={{
        style: {
          elevation: 2,
          height: 55,
        },
        tabStyle: {
          backgroundColor: colors.secondary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 14,
          fontWeight: 'bold',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        inactiveTintColor: colors.text,
        activeTintColor: colors.purple,
      }}>
        <Screen name="Conversa" component={TalkDuda} />
        <Screen name="Dicas salvas" component={SaveDuda} />
      </Navigator>
    </NavigationContainer>
  )
}

export default DudaStack;