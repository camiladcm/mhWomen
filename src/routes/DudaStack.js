import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TalkDuda from '../pages/TalkDuda';
import SaveDuda from '../pages/SaveDuda';
import colors from '../styles/colors';

import IconAntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAwe from 'react-native-vector-icons/FontAwesome';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function DudaStack() {
  return (

    <Navigator tabBarOptions={{
      showIcon: true,
      style: {
        elevation: 3,
        height: 40,
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

      },
      inactiveTintColor: colors.purple,
      activeTintColor: colors.orange,
    }}>
      <Screen name="TalkDuda" component={TalkDuda} options={{
        tabBarLabel: 'Conversa', tabBarIcon: ({ size, focused }) => {
          return (
            <IconAntDesign name="message-processing" size={20} color={focused ? colors.orange : colors.purple} />
          )
        }
      }} />
      <Screen name="SaveDuda" component={SaveDuda} options={{
        tabBarLabel: 'Dicas Salvas', tabBarIcon: ({ size, focused }) => {
          {
            return (
              <IconAwe name="bookmark" size={20} color={focused ? colors.orange : colors.purple} />
            )
          }
        }
      }} />
    </Navigator>

  )
}

export default DudaStack;