import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import PageHeader from '../../components/PageHeader';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageHeader />
        <Text style={styles.title}>Serviços</Text>
      </View>
    )
  }
}