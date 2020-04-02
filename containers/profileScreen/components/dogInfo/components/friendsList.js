import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Image, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles' 
import { MedBoldText, SmallText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class Friends extends PureComponent {

//    onPress = () => {
//        this.props.navigation.navigate('SetDateOfBirth');
//    }
  render(){
      const { dogFriends } = this.props.storeProfileScreen;
      console.log("Friends -> render -> dogFriends", dogFriends)
    return (
        <TouchableOpacity style={styles.viewHeight}>
          <MedBoldText>Dog Friends</MedBoldText>
          <View style={styles.rowViewSpaceBetween}>
            <SmallText style={[styles.textInput,styles.verticalCenterText]}>{dogFriends.slice().length}</SmallText>
            <Image source={require('../../../../../images/dogIcon.jpeg')}
                    style={styles.dogIcon} />
          </View>
        </TouchableOpacity>
  )
  }  
}

