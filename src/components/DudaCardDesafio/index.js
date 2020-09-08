import React, { Component } from 'react';
import { View, Image, Text, Modal, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconB from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';

import dudaIcon from '../../assets/images/duda.png';

import styles from './styles';
import colors from '../../styles/colors';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  createFirstButtonAlert = () =>
    Alert.alert(
      "Parabéns! Você acertou e ganhou X pontos!",
      "Seu esforço está dando resultado! Estes pontos podem ser aplicados como desconto na loja virtual!",
      [
        {
          text: "Sair",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  createSecondButtonAlert = () =>
    Alert.alert(
      "Ops! Você errou, mas não desanime!",
      "O seu esforço conta muito para o Bmg, por isso, você ganha 1 ponto. Você consegue!",
      [
        {
          text: "Sair",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={dudaIcon} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Desafio financeiro</Text>
            <Text style={styles.subject}>HH:HH | Duda</Text>
          </View>
        </View>

        <Text style={styles.bio}>O conceito de finanças é o estudo de como as pessas e as empresas fazem a administração, o controle e a alocação dos recursos da empresa. Esta definição está correta?</Text>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.send} onPress={() => this.setState({ isVisible: true })}>
            <Text style={styles.buttonText}>Responder</Text>
          </TouchableOpacity>
          <IconB name="bookmark-o" size={25} color={colors.purple} />
        </View>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
          onRequestClose={() => { this.setState({ isVisible: false }) }}>

          <View style={styles.modal}>
            <View style={styles.headerM}>
              <Text style={styles.modalText}>Desafio</Text>
              <IconAnt name="closecircleo" size={20} color={colors.purple} onPress={() => { this.setState({ isVisible: false }) }} />
            </View>

            <View style={styles.another}>
              <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae laboriosam recusandae molestias, hic, quibusdam iusto dicta praesentium nostrum harum perferendis possimus obcaecati vel, quis provident fugiat totam. A, facilis.</Text>
            </View>

            <View style={styles.modalButtons}>
              <Button title="Sim" onPress={this.createFirstButtonAlert} color={colors.purple} />
              <Button title="Não" color={colors.purple} onPress={this.createSecondButtonAlert} />
            </View>

          </View>

        </Modal>

      </View>
    )
  }
}