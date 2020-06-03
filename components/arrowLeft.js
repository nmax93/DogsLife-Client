import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ArrowLeft = props => (
  <TouchableOpacity onPress={() => props.navigation.goBack()}>
    <View style={[styles.container, props.style]}>
      <Image
        source={props.white ? require('../images/arrow_right_white.png') : require('../images/left.png')}
        style={props.white ? styles.bigArrow : styles.smallArrow}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 10,
  },
  smallArrow: {
    height: height * 0.06,
    width: width * 0.06,
  },
  bigArrow: {
    height: height * 0.06,
    width: width * 0.06,
  },
  pressSize: {
    height: height * 0.1,
    width: width * 0.1,
  },
});
