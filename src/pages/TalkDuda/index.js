import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';;

import DudaCardSaude from '../../components/DudaCardSaude';
import DudaCardDesafio from '../../components/DudaCardDesafio';

import Chat from '../../Chat';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.box}>
            <Text>07 de Setembro de 2020</Text>
          </View>
        </View>

        {/* <Chat /> */}

        <ScrollView>
          <DudaCardSaude />
          <DudaCardDesafio />
        </ScrollView>



        {/* <FooterD /> */}
      </View>
    )
  }
}