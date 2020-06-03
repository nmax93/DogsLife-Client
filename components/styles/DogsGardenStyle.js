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
    height: '85%',
    left: '5%',
    top: '8%',
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
  nameAndRank: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    top: 15,
    paddingRight: 20,


    },
  titleSection: {
    borderBottomWidth: 2,
    borderBottomColor: '#e0bab0',
    paddingLeft: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    width: '100%',
    height: '3%',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingVertical: '5%',

  },
  presentDogsSection: {
    width: '100%',
    top: 25,

  },
  title: {
    fontSize: width * 0.05,
    color: '#333333',
    fontWeight: 'bold',
    

  },
  text: {
    fontSize: width * 0.04,
    color: '#333333',
  },
});

export default styles;
