import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import dudaIcon from '../../assets/images/duda.png';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={dudaIcon} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Desafio financeiro</Text>
            <Text style={styles.subject}>HH:HH | Duda</Text>
          </View>
        </View>

        <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione porro sunt dolore similique, dolorum recusandae, delectus vel hic totam eum repudiandae inventore laudantium dolor sint veritatis itaque aspernatur fugiat!</Text>

        <View style={styles.footer}>
          <Text style={styles.end}>Você ganhou 5 pontos!</Text>
        </View>

      </View>
    )
  }
}