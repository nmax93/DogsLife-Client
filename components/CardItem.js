import React, {Component} from 'react';
import styles from './styles/CardItemStyle';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class CardItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <Image source={{uri: this.props.image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
