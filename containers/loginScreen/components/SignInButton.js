import React, {PureComponent} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import {inject} from 'mobx-react';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  completeButton: {
    width: width * 0.5,
    aspectRatio: 4 / 1,
    backgroundColor: '#c8d9cb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.38,
    alignSelf: 'center',
    top: width * 0.25,
  },
  text: {
    fontSize: 0.05 * width,
    fontWeight: 'bold',
    color: '#333333',
  },
});

@inject('storeLoginScreen')
export class SignInButton extends PureComponent {
  onPress = async () => {
    await this.props.storeLoginScreen.signInPressed(this.props.navigation);
  };

  render() {
    return (
      <TouchableOpacity style={styles.completeButton} onPress={this.onPress}>
        <Text style={styles.text}>SIGN IN</Text>
      </TouchableOpacity>
    );
  }
}
