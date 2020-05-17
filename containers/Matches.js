import React, {Component} from 'react';
import {View, Animated, Dimensions, ActivityIndicator} from 'react-native';
import MatchesListController from '../components/MatchesListController';
import MatchesList from '../components/MatchesList';
import { consts } from '../consts';

const width = Dimensions.get('window').width;

export default class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      listDisplayed: new Animated.Value(0),
      matches: {},
    };
  }

  async componentDidMount() {
    await fetch(`${consts.serverUrl}/getMatches`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
    })
      .then(res => res.json())
      .then(matches => {
        this.setState({matches: matches, isLoaded: true});
      })
      .catch(e => {
        console.log("Error in getMatches", e);
          });
  }

  listController = listNum => {
    let Xvalue;
    if (listNum === 1) {
      Xvalue = 0;
    } else {
      Xvalue = -width;
    }
    Animated.timing(this.state.listDisplayed, {
      toValue: Xvalue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {!this.state.isLoaded && (
          <ActivityIndicator size={'large'} style={{marginTop: 20}} />
        )}
        {this.state.isLoaded && (
          <View>
            <MatchesListController changeListDisplayed={this.listController} />
            <Animated.View
              style={{
                flex: 1,
                flexDirection: 'row',
                left: this.state.listDisplayed,
              }}>
              <MatchesList matches={this.state.matches.owner_matches} />
              <MatchesList matches={this.state.matches.dog_matches} />
            </Animated.View>
          </View>
        )}
      </View>
    );
  }
}
