import React, {PureComponent} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  completeButton: {
    width: width * 0.5,
    aspectRatio: 4 / 1,
    backgroundColor: '#8e5b5e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.38,
    top: width * 0.3,
    alignSelf: 'center',
  },
  text: {
    fontSize: 0.05 * width,
    fontWeight: 'bold',
    color: 'white',
  },
});

export class JoinButton extends PureComponent {
  onPress = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <TouchableOpacity style={styles.completeButton} onPress={this.onPress}>
        <Text style={styles.text}>JOIN</Text>
      </TouchableOpacity>
    );
  }
}
