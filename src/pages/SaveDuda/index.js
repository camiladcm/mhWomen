import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import DudaCardDica from '../../components/DudaCardDica';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.box}>
            <Text>03 de Setembro de 2020</Text>
          </View>
        </View>


        <ScrollView>

          <DudaCardDica />
          <DudaCardDica />
        </ScrollView>

        {/* <FooterD /> */}
      </View>
    )
  }
}