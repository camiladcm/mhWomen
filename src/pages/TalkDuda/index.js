import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import FooterD from '../../components/FooterD';
// import DudaCard from '../../components/DudaCard';

import Chat from '../../Chat';

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

        {/* <Chat /> */}

        <ScrollView> */}

        <DudaCard />
          <DudaCard />
          <DudaCard />
          <DudaCard />
        </ScrollView>

        <FooterD />
      </View>
    )
  }
}