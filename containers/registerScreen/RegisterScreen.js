import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {ImageBackground} from 'react-native';
import {Base} from '../../components/Base';
import {Logo} from '../../components/Logo';
import {RegisterArea} from './components/RegisterArea';
import {TextInputWithF} from '../../components/textInputWithF';
import {RegisterButton} from './components/RegisterButton';
import {StoreRegisterScreen} from './store/index';
import {ErrorMsg} from '../../components/errorMsg';
import {Loading} from '../../components/Loading';
import {ArrowLeft} from '../../components/arrowLeft';
import {VerticalSpaceP} from '../../components/verticalSpace';

@inject('rootStore')
@observer
export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.storeRegisterScreen = new StoreRegisterScreen(props.rootStore);
  }

  onChangeEmailText = text => {
    this.storeRegisterScreen.setEmail(text);
  };

  onChangePaswordText = text => {
    this.storeRegisterScreen.setPassword(text);
  };

  render() {
    return (
      <MobxProvider storeRegisterScreen={this.storeRegisterScreen}>
        <ImageBackground
          source={require('../../images/background_bright.png')}
          style={{width: '100%', height: '100%'}}>
            <VerticalSpaceP height={0.04} />
          <ArrowLeft
            white
            style={{marginLeft: 30}}
            navigation={this.props.navigation}
          />
            <VerticalSpaceP height={0.035} />
            <Logo />
            <VerticalSpaceP height={0.1} />
            <TextInputWithF
              placeholder={'E-mail'}
              onChange={this.onChangeEmailText}
            />
            <VerticalSpaceP height={0.015} />
            <TextInputWithF
              secureTextEntry
              placeholder={'Password'}
              onChange={this.onChangePaswordText}
            />
            <VerticalSpaceP height={0.015} />
            <ErrorMsg height={50} store={this.storeRegisterScreen} />
            <RegisterButton
              store={this.storeRegisterScreen}
              navigation={this.props.navigation}
            />
        </ImageBackground>
            <Loading store={this.storeRegisterScreen} />
      </MobxProvider>
    );
  }
}
