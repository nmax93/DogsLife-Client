import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {Base} from '../../components/Base';
import {Logo} from '../../components/Logo';
import {RegisterArea} from './components/RegisterArea';
import {EmailTextInput} from '../../components/EmailTextInput';
import {PasswordTextInput} from '../../components/PasswordTextInput';
import {RegisterButton} from './components/RegisterButton';
import {StoreRegisterScreen} from './store/index';
import {ErrorMsg} from '../../components/errorMsg';
import {Loading} from '../../components/Loading';

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
        <Base color={'#e8cbba'}>
          <RegisterArea>
            <Logo />
            <EmailTextInput store={this.storeRegisterScreen} />
            <PasswordTextInput store={this.storeRegisterScreen} />
            <ErrorMsg height={50} store={this.storeRegisterScreen} />
            <RegisterButton store={this.storeRegisterScreen} navigation={this.props.navigation} />
            <Loading store={this.storeRegisterScreen} />
          </RegisterArea>
        </Base>
      </MobxProvider>
    );
  }
}
