import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {WhiteButton} from '../../components/whiteButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    position: 'absolute',
    bottom: height*0.05
  },
});

export const Footer = props => {
  return (
    <View style={styles.container}>
        <WhiteButton onPress={props.onPress} navigation={props.navigation} text={props.text} next={props.next}/>
    </View>
  );
};
