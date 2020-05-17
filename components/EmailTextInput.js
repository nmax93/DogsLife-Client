import React, {PureComponent} from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export class EmailTextInput extends PureComponent {
  onChangeEmail = text => {
    const {store} = this.props;
    store.setEmail(text);
  };

  render() {
    return (
      <TextInput
        style={styles.textInput}
        label="Email"
        onChangeText={this.onChangeEmail}
        placeholder={'E-mail'}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    top: width * 0.2,
    width: width * 0.75,
    aspectRatio: 7 / 1,
    fontSize: width * 0.05,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 3,
    paddingLeft: 10,
  },
});
