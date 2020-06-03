import React, { PureComponent } from 'react';
import { inject } from 'mobx-react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete, Place } from 'react-native-google-places-autocomplete';
import {getLangAndLat} from './routes'
 
@inject('rootStore')
class SelectLocationScreen extends PureComponent {
  render(){ 

    return (
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={async (data, details = true) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log("data.description" , data.description);
        let { description } = data;
        let addressWithSpaces = description.slice();
        console.log("SelectLocationScreen -> render -> addressWithSpaces.length", addressWithSpaces.length)
        for(let i=0; i<= addressWithSpaces.length; i++){
          if(addressWithSpaces[i] == ' ') {
            addressWithSpaces[i] = '+';
          }
        }
        console.log("SelectLocationScreen -> render -> addressWithSpaces", addressWithSpaces)
        // const addressToSend = addressWithSpaces.replaceAll(" ", "+");
        // console.log("SelectLocationScreen -> render -> addressToSend", addressToSend)
        const {code , extra } = await getLangAndLat(`Yitshak+Hachimi+Street,+Ashkelon,+Israel`)
        console.log("SelectLocationScreen -> code , extra", code , extra)
        if(code == 1) {
          const { lat, lng } = extra;
          this.props.navigation.navigate('UserSecond', { address:data.description, lat, lng })
        }
        if(code == 0) console.log("error fetch address coords");
        
      }}
      query={{
        key: 'AIzaSyDunTJh60gkRKtumHb1nTnKXGlCH4r9Dpk',
        language: 'en',
        components: 'country:il',
        // components: 'country:israel',
      }}
      />
      );
    }
};
 
export default SelectLocationScreen;