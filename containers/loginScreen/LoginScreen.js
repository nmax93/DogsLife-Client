import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {Base} from '../../components/Base';
import {Logo} from '../../components/Logo';
import {LoginArea} from './components/LoginArea';
import {EmailTextInput} from '../../components/EmailTextInput';
import {PasswordTextInput} from '../../components/PasswordTextInput';
import {SignInButton} from './components/SignInButton';
import {JoinButton} from './components/JoinButton';
import {StoreLoginScreen} from './store';
import {ErrorMsg} from '../../components/errorMsg';
import {Loading} from '../../components/Loading';

@inject('rootStore')
@observer
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.storeLoginScreen = new StoreLoginScreen(props.rootStore);
  }

  onChangeEmailText = text => {
    this.storeLoginScreen.setEmail(text);
  };

  onChangePaswordText = text => {
    this.storeLoginScreen.setPassword(text);
  };

  render() {
    return (
      <MobxProvider storeLoginScreen={this.storeLoginScreen}>
        <Base color={'#e8cbba'}>
          <LoginArea>
            <Logo />
            <EmailTextInput store={this.storeLoginScreen} />
            <PasswordTextInput store={this.storeLoginScreen} />
            <ErrorMsg height={50} store={this.storeLoginScreen} />
            <SignInButton navigation={this.props.navigation} />
            <JoinButton navigation={this.props.navigation} />
            <Loading store={this.storeLoginScreen} />
          </LoginArea>
        </Base>
      </MobxProvider>
    );
  }
}
