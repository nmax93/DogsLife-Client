import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  list: {
    minWidth: SCREEN_WIDTH,
    backgroundColor: 'ghostwhite',
    minHeight: SCREEN_HEIGHT - SCREEN_WIDTH / 7 - 105,
  },
  matchesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  bottomPadding: {
    width: '100%',
    height: 50,
  },
});
