import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  darkBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.4,
  },
  box: {
    width: '90%',
    height: '90%',
    left: '5%',
    top: '5%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: (width / 6) * 0.12,
  },
  gardenImage: {
    width: '100%',
    height: '30%',
    borderTopLeftRadius: (width / 6) * 0.12,
    borderTopRightRadius: (width / 6) * 0.12,
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  closeButtonImage: {
    maxWidth: width * 0.08,
    maxHeight: width * 0.08,
  },
  titleSection: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    paddingLeft: '3%',
  },
  textSection: {
    width: '100%',
    height: '3%',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  presentDogsSection: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: width * 0.06,
    color: '#333333',
  },
  text: {
    fontSize: width * 0.045,
    color: '#333333',
  },
});

export default styles;
