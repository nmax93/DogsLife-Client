import React, {PureComponent} from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export class PasswordTextInput extends PureComponent {
  render() {
    const {store} = this.props;
    return (
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        label="Password"
        onChangeText={text => store.setPassword(text)}
        placeholder={'Password'}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    top: width * 0.25,
    width: width * 0.75,
    aspectRatio: 7 / 1,
    fontSize: width * 0.05,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 3,
    paddingLeft: 10,
  },
});
