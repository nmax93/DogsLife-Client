import React from 'react';
import styles from '../../../styles/ProfileStyle';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import NameAndDetails from './components/NameAndDetails';
import UserDemo from '../../../../assets/data/usersDemo';
import { VerticalSpace } from '../../../../components/verticalSpace';
import { DogsList } from '../dogInfo/components/dogsList';


const UserInfo = () => {
    const {
        age,
        image,
        info1,
        info2,
        info3,
        info4,
        location,
        match,
        name,
      } = UserDemo[7];

      return(
            <View style={styles.userInfoContainer}>
                <TouchableOpacity style={styles.userInfo}>
                  <NameAndDetails name={name} details={info1} />
                  <View>
                    <Image source={image} style={styles.userImage} />
                  </View>
                </TouchableOpacity>
                <VerticalSpace height={15} />
                <DogsList />
                <VerticalSpace height={5} />
            </View>

      );
};

export default UserInfo;
