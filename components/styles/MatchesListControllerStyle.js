import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    aspectRatio: 7 / 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  text: {
    fontSize: width * 0.04,
    color: 'darkgrey',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    height: '100%',
    width: width / 3,
    justifyContent: 'center',
  },
  beigeLine: {
    width: '96%',
    borderBottomWidth: 1,
    borderColor: '#e8cbba',
    position: 'absolute',
    bottom: '6%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  brownLine: {
    width: '29%',
    borderBottomWidth: 2,
    borderColor: '#8e725b',
    position: 'absolute',
    bottom: '6%',
  },
});

export default styles;
