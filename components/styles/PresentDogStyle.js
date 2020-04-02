import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    aspectRatio: 4.5 / 1,
    paddingLeft: '2.5%',
  },
  avatar: {
    borderRadius: width * 7.5,
    height: width * 0.15,
    width: width * 0.15,
    margin: width * 0.025,
  },
  content: {
    width: width * 0.75,
    height: '100%',
    justifyContent: 'center',
  },
  section: {
    width: '100%',
    height: '25%',
  },
  name: {
    color: '#333333',
    fontSize: 0.05 * width,
    paddingBottom: width * 0.05,
  },
  description: {
    color: 'darkgrey',
    fontSize: 0.04 * width,
  },
});

export default styles;
