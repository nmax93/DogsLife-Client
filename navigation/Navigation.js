import React from 'react';
import {Image} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import {Dimensions} from 'react-native';
import ExploreScreen from '../containers/Explore';
import MatchesScreen from '../containers/Matches';
import ProfileScreen from '../containers/profileScreen/Profile';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const matchScreen = createStackNavigator({
  Matches: {
    screen: MatchesScreen,
    navigationOptions: {
      headerTitle: 'Matches',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: width * 0.061,
        color: 'black',
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: height * 0.08,
        elevation: 1,
      },
      tabBarIcon: ({focused}) => (
        <Image
          source={
            focused
              ? require('../images/black_map.png')
              : require('../images/grey_map.png')
          }
          style={{height: 30, aspectRatio: 1}}
        />
      ),
    },
  },
});

const exploreScreen = createStackNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      headerTitle: 'Explore',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: width * 0.061,
        color: 'black',
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: height * 0.08,
        elevation: 1,
      },
      tabBarIcon: ({focused}) => (
        <Image
          source={
            focused
              ? require('../images/black_map.png')
              : require('../images/grey_map.png')
          }
          style={{height: 30, aspectRatio: 1}}
        />
      ),
    },
  },
});

const profileScreen = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: width * 0.061,
        color: 'black',
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: height * 0.08,
        elevation: 1,
      },
      tabBarIcon: ({focused}) => (
        <Image
          source={
            focused
              ? require('../images/black_map.png')
              : require('../images/grey_map.png')
          }
          style={{height: 30, aspectRatio: 1}}
        />
      ),
    },
  },
});

const App = createBottomTabNavigator(
  {
    Match: {
      screen: matchScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_heart.png')
                : require('../images/grey_heart.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
    Explore: {
      screen: exploreScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_map.png')
                : require('../images/grey_map.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
    Profile: {
      screen: profileScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../images/black_user.png')
                : require('../images/grey_user.png')
            }
            style={{height: 30, aspectRatio: 1}}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Explore',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        height: 50,
      },
    },
  },
);

export default createAppContainer(App);
