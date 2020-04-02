import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

@inject('storeProfileScreen')@observer
export class DogImage extends PureComponent {
  onPressEditImage = () => {
    console.log('edit image press');
    
  }

  render(){
    const { image } = this.props.storeProfileScreen;
    return(
      <ImageBackground
      source={image}
      style={styles.dogImageBackground}
      imageStyle={styles.dogImage}>
          <TouchableOpacity style={styles.editButton} onPress={this.onPressEditImage}>
            <Icon name="edit" size={22} color="#333333" />
          </TouchableOpacity>
    </ImageBackground>
    )
  }
}

// not responsive image
const styles = StyleSheet.create({
  editButton:{
    position: 'absolute', 
    right: -13,
    bottom: 8
  },

  dogImage: {
    borderRadius: 60,

  },
  dogImageBackground: {
    height: 120,
    width: 120,

  },
});

