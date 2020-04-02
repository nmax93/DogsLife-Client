import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const WHITE = '#FFFFFF';
const DARK_GRAY = '#333333';

export default StyleSheet.create({
  containerCardItem: {
    width: SCREEN_WIDTH * 0.46,
    height: SCREEN_WIDTH * 0.5,
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: 'center',
    margin: SCREEN_WIDTH * 0.02,
  },
  image: {
    width: SCREEN_WIDTH * 0.46,
    height: SCREEN_WIDTH * 0.4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: DARK_GRAY,
    fontSize: SCREEN_WIDTH * 0.045,
    fontWeight: 'bold',
  },
});
