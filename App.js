import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Duda from './src/pages/Duda';
import DudaStack from './src/routes/DudaStack';
import colors from './src/styles/colors';
import Chat from './src/Chat';

import HomePage from './src/pages/HomePage';
import HomeStack from './src/routes/HomeStack';

export default class App extends Component {
  render() {
    return (
      <>
        <HomeStack />
        {/* <HomePage /> */}
        {/* <Duda /> */}
        {/* <Chat /> */}
        <StatusBar barStyle="dark-content" backgroundColor={styles.color.backgroundColor} />
      </>
    )

  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: colors.secondary,
  }
})
