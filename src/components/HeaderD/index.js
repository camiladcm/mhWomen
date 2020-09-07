import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/back.png';
import speakerIcon from '../../assets/images/speaker.png';

import styles from './styles';

export default class index extends Component {
  render() {
    return (
      <View >
        <View style={styles.container}>
          <View style={styles.topBar}>
            <View>
              <BorderlessButton >
                <Image source={backIcon} style={styles.backButton} />
              </BorderlessButton>
            </View>

            <Text style={styles.title}>Duda</Text>

            <BorderlessButton >
              <Image source={speakerIcon} style={styles.speakerButton} />
            </BorderlessButton>
          </View>
        </View>
      </View>
    )
  }
}