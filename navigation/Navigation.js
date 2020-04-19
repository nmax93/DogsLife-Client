import React from 'react';
import {Image} from 'react-native';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import ExploreScreen from '../containers/Explore';
import MatchesScreen from '../containers/Matches';
import ProfileScreen from '../containers/profileScreen/Profile';
import {LoginScreen} from '../containers/loginScreen/LoginScreen';
import {RegisterScreen} from '../containers/registerScreen/RegisterScreen';

const matchScreen = createStackNavigator({
  Matches: {
    screen: MatchesScreen,
    navigationOptions: {
      headerTitle: 'Matches',
      headerLeft: null,
      headerTitleStyle: {
        flex: 1,
        fontSize: 18,
        color: '#333333',
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: 55,
      },
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
        fontSize: 18,
        color: '#333333',
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: 55,
      },
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
        fontSize: 18,
        color: '#333333',
      },
      headerStyle: {
        backgroundColor: '#FFF',
        height: 55,
      },
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

const Auth = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Login',
  },
);

const Navigation = createSwitchNavigator(
  {
    SignedIn: {
      screen: App,
    },
    SignedOut: {
      screen: Auth,
    },
  },
  {
    initialRouteName: 'SignedOut',
  },
);

export default createAppContainer(Navigation);
