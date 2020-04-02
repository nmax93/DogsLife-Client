import React from 'react';
import styles from '../styles/ProfileStyle';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ProfileItem from '../../components/ProfileItem';
import Demo from '../../assets/data/usersDemo';
const Profile2 = () => {
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
  } = Demo[7];

  return (
    <ImageBackground
      source={require('../../assets/images/bg.png')}
      style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton} />
            <Text style={styles.textButton}>Follow</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile2;
