import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

// import Loading from './src/pages/Loading';
import Duda from './src/pages/Duda';
import DudaStack from './src/routes/DudaStack';
import colors from './src/styles/colors';
import Chat from './src/Chat';

export default class App extends Component {
  render() {
    return (
      <>
        <Duda />
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
