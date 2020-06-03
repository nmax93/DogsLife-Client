import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    paddingLeft: '4%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  avatar: {
    borderRadius: width * 7.5,
    height: width * 0.15,
    width: width * 0.15,
    margin: width * 0.025,
  },
  content: {
    borderWidth: 1,
    width: width * 0.75,
    justifyContent: 'center',    
  },
  section: {
    alignItems: 'center', 
    flexDirection: 'row',
    width: width * 0.25,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 0.03 * width,
    borderWidth: 1
  },
  description: {
    borderWidth: 1,

    color: 'darkgrey',
    fontSize: 0.04 * width,
  },
});

export default styles;
