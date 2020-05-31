import React, {Component} from 'react';
import styles from './styles/CardItemStyle';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class CardItem extends Component {
  render() {
    switch (this.props.type) {
      case 1:
        return this.matches();
      case 2:
        return this.geoMatches();
      case 3:
        return this.collarMatches();
    }
  }

  matches = () => {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: this.props.match.owner.avatar}}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.match.owner.name}</Text>
            </View>
          </View>
          <View>
            <Image
              source={{uri: this.props.match.dog.avatar}}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.match.dog.name}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>{this.props.match.grade}%</Text>
        </View>
      </TouchableOpacity>
    );
  };

  geoMatches = () => {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <View>
          <Image
            source={{uri: this.props.match.owner.avatar}}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.match.owner.name}</Text>
          </View>
        </View>
        <View>
          <Text>{this.props.match.distance}km</Text>
        </View>
      </TouchableOpacity>
    );
  };

  collarMatches = () => {
    return (
      <TouchableOpacity style={styles.containerCardItem}>
        <View>
          <Image source={{uri: this.props.match.avatar}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.match.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  }
