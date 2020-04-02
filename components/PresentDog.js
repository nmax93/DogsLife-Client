import React, {Component} from 'react';
import styles from './styles/PresentDogStyle';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class PresentDog extends Component {
  render() {
    const avatar = this.props.data.avatar;
    const name = this.props.data.name;
    const bread = this.props.data.bread;
    const weight = this.props.data.weight;

    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageSection}>
          <Image source={{uri: avatar}} style={styles.avatar} />
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.description}>{`${bread}, ${weight}kg`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
