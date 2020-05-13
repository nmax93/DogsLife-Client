import {StyleSheet, Dimensions} from 'react-native';
import { LIGHT_BACKGROUND, DARK_GRAY, BLACK, WHITE, LIGHT_GREEN, LIGHT_BROWN, LIGHT_PURPLE } from './colors';
const PRIMARY_COLOR = '#7444C0';

const ICON_FONT = 'tinderclone';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  bg: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: DIMENSION_HEIGHT,
    alignItems: 'center',

  },
  containerProfile: {marginHorizontal: 0},
  photo: {
    width: DIMENSION_WIDTH,
    height: 200,
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: BLACK,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{rotate: '90deg'}],
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {fontFamily: ICON_FONT, fontSize: 20, color: WHITE},

  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  roundedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: DIMENSION_HEIGHT*0.08,
    width: (DIMENSION_WIDTH*0.8) /3,
    borderRadius: 8,
    elevation:2,
    backgroundColor: LIGHT_GREEN,
  },
  walkButtonColor: {
    backgroundColor: LIGHT_PURPLE,

  },
  groomButtonColor: {
    backgroundColor: LIGHT_BROWN,

  },
  textButton: {
    display: 'flex',
    fontFamily: ICON_FONT,
    color: WHITE,
  },

  userInfoContainer: {
    paddingTop: 15,
    elevation:4,
    width: DIMENSION_WIDTH,
    alignItems: 'center',
    backgroundColor: LIGHT_BACKGROUND,

  },

  userInfo: {
    width: DIMENSION_WIDTH * 0.95,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: WHITE,
    elevation:1,



  },
  userImage: {
    paddingLeft: 10,
    borderRadius: 30,
    height: 60,
    width: 60
  },
  dogInfoContainer: {
    alignItems: 'center'
  },

  dogListContainer: {
    height: 50
  },
  dogListImage: {
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    width: 40,
    marginRight: 5,

  },
  greenBorder: {
    borderRadius: 50,
    borderWidth: 2,
    height: 40,
    width: 40,
    marginRight: 5,
    borderColor: LIGHT_BROWN
  },
  name: {
    paddingBottom: 5,
    color: DARK_GRAY,
  },
  addDogPlusButton:{
    borderRadius: 50,
    borderWidth: 1.5,
    height: 40,
    width: 40,
    marginRight: 5,
    borderColor: DARK_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSize: {
    height: 30, 
    width: 30
  }

});
