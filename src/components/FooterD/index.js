import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { View, TextInput } from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TextInput placeholder={"Digite sua mensagem para Duda"} style={styles.text} />
        </View>
      </View>
    )
  }
}