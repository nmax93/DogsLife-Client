import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from '../styles' 
import { MedBoldText } from '../../../../styles/fonts';

@inject('storeProfileScreen')@observer
export class DogName extends PureComponent {
    onChaneText = text => {
        this.props.storeProfileScreen.setDogName(text)
        
    }
    render(){
        const { name } = this.props.storeProfileScreen;
        return(
            <View style={styles.viewHeight}>
                <MedBoldText>Name</MedBoldText>
                <TextInput onEndEditing={(event) => this.onChaneText(event.nativeEvent.text)} 
                            placeholderTextColor={'black'} 
                            placeholder={name} 
                            style={styles.textInput} 
                             />
            </View>
        );
    }
}