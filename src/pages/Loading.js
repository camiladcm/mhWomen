import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, StatusBar } from 'react-native';

import colors from '../styles/colors';
import Icon from '../assets/images/icon.png';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Icon} />
        <StatusBar hidden />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    margin: 0,
    padding: 0,
  },
  logo: {
    width: 80,
    height: 80,
  }
})