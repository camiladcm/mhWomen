import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import duda from '../../assets/images/duda.png';
import card from '../../assets/images/card.png'

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import ServiceCard from '../../components/ServiceCard';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PageHeader />

        <ScrollView>
          <View style={styles.box}>

            <View style={styles.top}>
              <Text style={styles.title}>Visão geral do seu plano</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.sub}>Conta</Text>
              <Text style={styles.saldo}>Saldo disponível</Text>

              <View style={styles.min}>
                <Text style={styles.valor}>R$ XXXX,XX</Text>
                <Text style={styles.another}>Ver extrato</Text>
              </View>
            </View>

            <View style={styles.info}>
              <Text style={styles.sub}>Cartão de crédito</Text>
              <Text style={styles.saldo}>Limites disponíveis</Text>

              <View style={styles.min}>
                <Text style={styles.valor}>R$ XXXX,XX</Text>
                <Text style={styles.another}>Ver dados</Text>
              </View>
            </View>

            <View style={styles.info}>
              <Text style={styles.sub}>Investimento</Text>
              <Text style={styles.saldo}>DD/MM/AAAA</Text>

              <View style={styles.min}>
                <Text style={styles.valor}>R$ XXXX,XX</Text>
                <Text style={styles.another}>Ver ganhos</Text>
              </View>
            </View>
          </View>

          <View style={styles.menu}>
            <View style={styles.circle}></View>
            <View style={styles.circle2}></View>
          </View>

          <View style={styles.buttom}>
            <TouchableOpacity style={styles.touch}>
              <Image source={duda} style={styles.duda} />
            </TouchableOpacity>
          </View>

          <View style={styles.services}>
            <Text style={styles.infoServices}>Seus serviços mais usados</Text>
          </View>

          <View style={styles.new}>
            <ServiceCard />
          </View>

          <View style={styles.detail}>
            <Text style={styles.allServices}>Ver todos serviços</Text>
          </View>

          <View style={styles.services}>
            <Text style={styles.infoServices}>Seu plano</Text>
            <Text style={styles.plano}>Plano: empreendedora mulher</Text>
            <Image source={card} style={styles.card} />
            <Text style={styles.cardDetail}>Ver detalhes</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}