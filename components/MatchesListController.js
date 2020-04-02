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
      button3color: 'darkgrey',
      brownLineX: new Animated.Value(width / 50),
    };
  }

  onButtonClick = num => {
    if (num === this.state.curSelectedButton) {
      return;
    }
    let Xvalue;
    if (num === 1) {
      Xvalue = width * 0.02;
      this.setState({
        button1color: '#8e725b',
        button2color: 'darkgrey',
        button3color: 'darkgrey',
      });
    } else if (num === 2) {
      Xvalue = width * 0.355;
      this.setState({
        button2color: '#8e725b',
        button1color: 'darkgrey',
        button3color: 'darkgrey',
      });
    } else {
      Xvalue = width * 0.69;
      this.setState({
        button3color: '#8e725b',
        button1color: 'darkgrey',
        button2color: 'darkgrey',
      });
    }
    this.setState({curSelectedButton: num}, () => {
      this.props.changeListDisplayed(num);
      Animated.timing(this.state.brownLineX, {
        toValue: Xvalue,
        duration: 250,
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(3)}>
          <Text style={[styles.text, {color: this.state.button3color}]}>
            OWNER & DOG
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
