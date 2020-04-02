import React, {Component} from 'react';
import styles from './styles/MatchesListStyle';
import {View, ScrollView} from 'react-native';
import CardItem from './CardItem';

export default class MatchesList extends Component {
  componentDidMount() {
    this.mapMatches();
  }

  mapMatches = () => {
    const matches = this.props.matches.map((item, index) => {
      return <CardItem key={index} image={item.avatar} name={item.name} />;
    });
    return matches;
  };

  render() {
    return (
      <ScrollView style={styles.list}>
        <View style={styles.matchesContainer}>
          {this.mapMatches()}
          {this.mapMatches()}
          <View style={styles.bottomPadding} />
        </View>
      </ScrollView>
    );
  }
}
