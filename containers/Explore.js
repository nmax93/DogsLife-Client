import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import DogsGarden from '../components/DogsGarden';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.gardenRef = React.createRef();
    this.state = {gardens: [], displayedGarden: null};
  }

  componentDidMount() {
    fetch('http://localhost:5050/getGardens', {
      method: 'GET',
      headers: {'Content-type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        this.setState({gardens: data});
      })
      .catch();
  }

  mapGardens = () => {
    const gardens = this.state.gardens.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={{latitude: item.lat, longitude: item.long}}
          title={item.name}
          image={require('../images/dogs_playground.png')}
          onPress={() => this.onMarkerPress(item)}
        />
      );
    });
    return gardens;
  };

  onMarkerPress = garden => {
    this.setState({displayedGarden: garden}, () =>
      this.gardenRef.current.displayController(),
    );
  };

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: 32.092064,
            longitude: 34.804049,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {this.mapGardens()}
        </MapView>
        {this.state.displayedGarden && (
          <DogsGarden ref={this.gardenRef} data={this.state.displayedGarden} />
        )}
      </View>
    );
  }
}

export default Explore;
