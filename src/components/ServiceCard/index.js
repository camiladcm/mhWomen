import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import colors from '../../styles/colors';

import styles from './styles';

import Icon from 'react-native-vector-icons/Feather'
import IconIo from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFe from 'react-native-vector-icons/Feather';
import IconFeather from 'react-native-vector-icons/Feather';
import IconTher from 'react-native-vector-icons/Feather';

export default class ServiceCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.box}>
            <IconIo name="wallet-outline" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Volta pra Mim</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.box}>
            <Icon name="shopping-cart" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Loja Virtual</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.box}>
            <IconAnt name="like2" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Benefícios</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.box}>
            <IconFe name="dollar-sign" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Transferências</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.box}>
            <IconFeather name="bell" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Lembretes</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.box}>
            <IconTher name="key" size={25} style={{ marginTop: 12, color: colors.purple }} />
            <Text style={styles.title}>Poupa pra Mim</Text>
          </View>
        </View>

      </View>
    )
  }
}