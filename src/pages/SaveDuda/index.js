import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

import DudaCard from '../../components/DudaCard';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.info}>Tipo de dica:</Text>
          <SearchBar placeholder="Busque aqui..." style={styles.find} />

        </View>

        <ScrollView>
          <DudaCard />
          <DudaCard />
          <DudaCard />
          <DudaCard />
        </ScrollView>
      </View >
    )
  }
}