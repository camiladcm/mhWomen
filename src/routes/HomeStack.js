import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../pages/HomePage';
import ExtractPage from '../pages/ExtractPage';
import InvestPage from '../pages/InvestPage';
import ServicePage from '../pages/ServicePage';
import HelpPage from '../pages/HelpPage';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconDes from 'react-native-vector-icons/AntDesign';
import IconFou from 'react-native-vector-icons/Entypo';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';
import IconIgn from 'react-native-vector-icons/AntDesign';

import colors from '../styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Navigator tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.secondary,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabStyle: {
          marginTop: 5,
          margin: 4,
          height: 50,
          width: 56,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        labelStyle: {
          fontSize: 12,
          marginTop: 5,
        },
        inactiveBackgroundColor: colors.secondary,
        activeBackgroundColor: colors.orange,
        inactiveTintColor: colors.purple,
        activeTintColor: colors.secondary,
      }}>
        <Screen name="HomePage" component={HomePage} options={{
          tabBarLabel: 'Início', tabBarIcon: ({ size, focused }) => {
            return (
              <IconAnt name="home" size={size} color={focused ? colors.secondary : colors.purple} />
            )
          }
        }} />

        <Screen name="ExtractPage" component={ExtractPage} options={{
          tabBarLabel: 'Extrato', tabBarIcon: ({ size, focused }) => {
            return (
              <IconDes name="filetext1" size={size} color={focused ? colors.secondary : colors.purple} />
            )
          }
        }} />

        <Screen name="InvestPage" component={InvestPage} options={{
          tabBarLabel: 'Investir', tabBarIcon: ({ size, focused }) => {
            return (
              <IconFou name="bar-graph" size={size} color={focused ? colors.secondary : colors.purple} />
            )
          }
        }} />

        <Screen name="ServicePage" component={ServicePage} options={{
          tabBarLabel: 'Serviços', tabBarIcon: ({ size, focused }) => {
            return (
              <IconSim name="social-dropbox" size={size} color={focused ? colors.secondary : colors.purple} />
            )
          }
        }} />

        <Screen name="HelpPage" component={HelpPage} options={{
          tabBarLabel: 'Ajuda', tabBarIcon: ({ size, focused }) => {
            return (
              <IconIgn name="questioncircleo" size={size} color={focused ? colors.secondary : colors.purple} />
            )
          }
        }} />
      </Navigator>
    </NavigationContainer>
  )
}

export default HomeStack;