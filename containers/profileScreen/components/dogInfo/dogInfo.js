import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View} from 'react-native';
import styles from '../../../styles/ProfileStyle';
import {DogImage} from './components/dogImage';
import {VerticalSpace} from '../../../../components/verticalSpace';
import {Divider} from '../../../../components/divider';
import {Activities} from './components/activities';
import {DogName} from './components/dogName';
import {DogDescription} from './components/dogDescription';
import {DogBreed} from './components/breed';
import {Personality} from './components/personality';
import {BirthDate} from './components/dateOfBirth';
import {Friends} from './components/friendsList';
import {AccountPrivacy} from './components/accountPrivacy';

// @inject('storeProfileScreen')@observer
export class DogInfo extends Component {
  render() {
    return (
      <View style={styles.dogInfoContainer}>
        <VerticalSpace height={20} />
        <DogImage />
        <VerticalSpace height={40} />
        <Activities />
        <Divider />
        <DogName />
        <Divider />
        <DogDescription />
        <Divider />
        <DogBreed />
        <Divider />
        <Personality />
        <Divider />
        <BirthDate />
        <Divider />
        <Friends />
        <AccountPrivacy />
      </View>
    );
  }
}
