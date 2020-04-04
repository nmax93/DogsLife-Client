import React, { PureComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export class PasswordTextInput extends PureComponent {
    render(){
        const { store } = this.props;
        return(
            <TextInput secureTextEntry={true} style={styles.textInput} label='Password' onChangeText={text => store.setPassword(text)} />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 51, 
        fontSize: 13
    },
  });