import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {Footer} from '../../components/footer';
import {Question} from '../../components/qustion';
import { EnergyLevel } from '../../userInfo/components/pickers'
import {PlayerOrCalm} from './components/playerOrCalm'
import {ParkPreference} from './components/parkPref'
import {StoreDogThirdScreen} from './store'
import { GenderPicker, SpayedPicker, SizePicker } from './components/getAlongWith'
import {sendSignupInfo} from '../../store/routes'

@inject('rootStore')
@observer
export class DogThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.storeDogThirdScreen = new StoreDogThirdScreen(props.rootStore);
  }
  componentDidMount() {
    console.log(this.props.navigation.state.params); // just fot debugging
  }

  noCollarButtonPressed = () => {
    sendSignupInfo({signupUserObject: this.props.navigation.state.params.signupUserObject , 
      signupDogObject: Object.assign(this.props.navigation.state.params.signupDogObject )});
    this.props.navigation.navigate('SignupFinish');
  }
  render() {
    const name = this.props.navigation.state.params.dogName ? this.props.navigation.state.params.dogName: 'your dog' ;
    const { signupObject } = this.storeDogThirdScreen;
        return (
      <MobxProvider storeDogThirdScreen={this.storeDogThirdScreen}>
      <BaseView>
        <Header navigation={this.props.navigation} />
        <VerticalSpaceP height={0.09} />
        <Question text={`What is ${name} energy level?`} />
        <VerticalSpaceP height={0.02} />
        <EnergyLevel />
        <VerticalSpaceP height={0.05} />
        <Question text={`With whom ${name} doesn't get along with?`} />
        <VerticalSpaceP height={0.02} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '88%'}}>
          <GenderPicker store={this.storeDogThirdScreen} />
          <SpayedPicker store={this.storeDogThirdScreen} />
          <SizePicker store={this.storeDogThirdScreen} />
        </View>
        <VerticalSpaceP height={0.05} />
        <Question text={`How is ${name}?`} />
        <PlayerOrCalm />
        <VerticalSpaceP height={0.05} />
        <Question text={`Park preference.`} />
        <ParkPreference />
        <Footer
          noCollarNeed
          onPressNoCollar={this.noCollarButtonPressed}
          screenNumber={7}
          navigation={this.props.navigation}
          next={'ScanCollar'}
          text={'Scan collar QR'}
          params={{signupUserObject: this.props.navigation.state.params.signupUserObject , 
                    signupDogObject: Object.assign(this.props.navigation.state.params.signupDogObject, signupObject)}}
        />
      </BaseView>
    </MobxProvider>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #f2d2a9;
  align-items: center;
`;