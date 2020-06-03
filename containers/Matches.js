import React, {Component} from 'react';
import {View, Animated, Dimensions, ActivityIndicator} from 'react-native';
import MatchesListController from '../components/MatchesListController';
import MatchesList from '../components/MatchesList';
import {consts} from '../consts';

const width = Dimensions.get('window').width;

export default class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      listDisplayed: new Animated.Value(0),
      systemMatches: [],
      geoMatches: [],
      collarMatches: [],
    };
  }

  componentDidMount() {
    fetch(`${consts.LocalHostUrl}/getMatches`, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({userId: 102, token: 'ASD123RT'}),
    })
      .then(res => res.json())
      .then(matches => {
        this.setState({
          systemMatches: matches.systemMatches,
          geoMatches: matches.geoMatches,
          collarMatches: matches.collarMatches,
          isLoaded: true,
        });
      })
      .catch(e => {
        console.log('Error in getMatches', e);
      });
  }

  listController = listNum => {
    let Xvalue;
    if (listNum === 1) {
      Xvalue = 0;
    } else if (listNum === 2) {
      Xvalue = -width;
    } else {
      Xvalue = -width * 2;
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
              <MatchesList matches={this.state.systemMatches} type={1} />
              <MatchesList matches={this.state.geoMatches} type={2} />
              <MatchesList matches={this.state.collarMatches} type={3} />
            </Animated.View>
          </View>
        )}
      </View>
    );
  }
}
