import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles/DogsGardenStyle';
import PresentDog from './PresentDog';

export default class DogsGarden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      screenOpacity: new Animated.Value(0),
      fetchedData: false,
      presentDogs: [],
    };
  }

  getPresentDogs = () => {
    fetch('http://localhost:5050/getPresentDogsInGarden', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({gardenId: this.props.data.id}),
    })
      .then(res => res.json())
      .then(data => {
        this.setState({presentDogs: data, fetchedData: true});
      })
      .catch();
  };

  displayComponent = () => {
    this.setState({isOpen: true}, () => {
      Animated.timing(this.state.screenOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => this.getPresentDogs());
    });
  };

  hideComponent = () => {
    Animated.timing(this.state.screenOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => this.setState({isOpen: false, fetchedData: false}));
  };

  displayController = () => {
    if (this.state.isOpen) {
      this.hideComponent();
    } else {
      this.displayComponent();
    }
  };

  mapPresentDogs = () => {
    const presentDogs = this.state.presentDogs.map((item, index) => {
      return <PresentDog key={index} data={item} />;
    });
    return presentDogs;
  };

  render() {
    const name = this.props.data.name;
    const image = this.props.data.image;

    return (
      this.state.isOpen && (
        <Animated.View
          style={[styles.container, {opacity: this.state.screenOpacity}]}>
          <TouchableWithoutFeedback
            touchSoundDisabled={true}
            onPress={this.displayController}>
            <View style={styles.darkBackground} />
          </TouchableWithoutFeedback>
          <View style={styles.box}>
            <Image source={{uri: image}} style={styles.gardenImage} />
            <View style={styles.closeButton}>
              <TouchableOpacity onPress={this.displayController}>
                <Image
                  source={require('../images/close.png')}
                  style={styles.closeButtonImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleSection}>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.textSection}>
              <Text style={styles.text}>Currently present dogs:</Text>
            </View>
            <ScrollView style={styles.presentDogsSection}>
              {!this.state.fetchedData && (
                <ActivityIndicator size={'large'} style={{marginTop: 20}} />
              )}
              {this.state.fetchedData && this.mapPresentDogs()}
            </ScrollView>
          </View>
        </Animated.View>
      )
    );
  }
}
