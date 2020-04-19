import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Logo = () => (
  <View style={styles.container}>
    <View style={styles.pugContainer}>
      <Image source={require('../images/Pug.png')} style={styles.pug} />
    </View>
    <View style={styles.dogslifeContainer}>
      <Image
        source={require('../images/dogslife.png')}
        style={styles.dogslife}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    top: width * 0.15,
    width: '100%',
    alignItems: 'center',
  },
  pugContainer: {
    height: width * 0.35,
    alignItems: 'center',
  },
  pug: {
    resizeMode: 'contain',
    height: '100%',
  },
  dogslifeContainer: {
    height: width * 0.18,
    alignItems: 'center',
  },
  dogslife: {
    resizeMode: 'contain',
    height: '100%',
  },
});
