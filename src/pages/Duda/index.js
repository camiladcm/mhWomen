import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderD from '../../components/HeaderD';
import DudaStack from '../../routes/DudaStack';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderD />
        <DudaStack />
      </View>
    )
  }
}