import React, {Component} from 'react';
import styles from './styles/MatchesListStyle';
import {View, ScrollView} from 'react-native';
import CardItem from './CardItem';

export default class MatchesList extends Component {
  mapMatches = () => {
    const matches = this.props.matches.map((item, index) => {
      return <CardItem key={index} match={item} type={this.props.type} />;
    });
    return matches;
  };

  render() {
    return (
      <ScrollView style={styles.list}>
        <View style={styles.matchesContainer}>
          {this.mapMatches()}
          <View style={styles.bottomPadding} />
        </View>
      </ScrollView>
    );
  }
}
