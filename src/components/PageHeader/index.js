import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import user from '../../assets/images/user.png';
import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <Image source={user} style={styles.icon} />
          </View>

          <View style={styles.top}>
            <Text style={styles.header}>Jana Doe</Text>
            <Text style={styles.info}>ag 0000 c/c 12345-6</Text>
          </View>
        </View>
      </View>
    )
  }
}