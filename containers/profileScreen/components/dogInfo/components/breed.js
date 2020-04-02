import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles'
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class DogBreed extends PureComponent {

    //    onPress = () => {
//        this.props.navigation.navigate('SetBreed');
//    }
  render(){
    const { breed } = this.props.storeProfileScreen;
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Breed</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>{breed}</SmallText>
            <Image source={require('../../../../../images/right_arrow.png')}
                    style={styles.arrow} />
          </View>
        </TouchableOpacity>
  )
  }  
}

