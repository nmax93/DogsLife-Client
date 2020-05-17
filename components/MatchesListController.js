import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Animated, Dimensions} from 'react-native';
import styles from './styles/MatchesListControllerStyle';

const width = Dimensions.get('window').width;

export default class MatchesListController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSelectedButton: 1,
      button1color: '#8e725b',
      button2color: 'darkgrey',
      brownLineX: new Animated.Value(width / 50),
    };
  }

  onButtonClick = num => {
    if (num === this.state.curSelectedButton) {
      return;
    }
    let Xvalue;
    if (num === 1) {
      Xvalue = width * 0.01;
      this.setState({
        button1color: '#8e725b',
        button2color: 'darkgrey',
      });
    } else {
      Xvalue = width * 0.51;
      this.setState({
        button2color: '#8e725b',
        button1color: 'darkgrey',
      });
    }
    this.setState({curSelectedButton: num}, () => {
      this.props.changeListDisplayed(num);
      Animated.timing(this.state.brownLineX, {
        toValue: Xvalue,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(1)}>
          <Text style={[styles.text, {color: this.state.button1color}]}>
            OWNER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(2)}>
          <Text style={[styles.text, {color: this.state.button2color}]}>
            DOG
          </Text>
        </TouchableOpacity>
        <View style={styles.beigeLine} />
        <Animated.View
          style={[styles.brownLine, {left: this.state.brownLineX}]}
        />
      </View>
    );
  }
}
