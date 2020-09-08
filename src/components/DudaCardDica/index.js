import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconB from 'react-native-vector-icons/FontAwesome';

import dudaIcon from '../../assets/images/duda.png';

import styles from './styles';
import colors from '../../styles/colors';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={dudaIcon} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Finanças</Text>
            <Text style={styles.subject}>HH:HH | Duda</Text>
          </View>
        </View>

        <Text style={styles.bio}>Para que se tenha um bom planejamento financeiro é necessário que você tenha mapeadas todas as suas entradas e saídas de capital. Comece a planejar quais são seus pagamento até daqui a um ano. Seu planejamento financeiro documentado deve estar apto a</Text>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.send}>
            <Text style={styles.buttonText}>Avaliar dica</Text>
          </TouchableOpacity>
          <IconB name="bookmark" size={25} color={colors.purple} />
        </View>

      </View>
    )
  }
}