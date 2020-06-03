import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {View} from 'react-native';
import {MedQuestionTextWide} from '../../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from '../components/header';
import {VerticalSpaceP} from '../../../../components/verticalSpace';
import {UploadImageArea} from './components/uploadImageArea';
import {TextInputWithF} from '../../../../components/textInputWithF';
import {Footer} from '../../components/footer';
import {Question} from '../../components/qustion';
import {StoreDogFirstScreen} from './store';

@inject('rootStore')
@observer
export class DogFirstScreen extends Component {
  constructor(props) {
    super(props);
    this.storeDogFirstScreen = new StoreDogFirstScreen(props.rootStore);
  }
  onChangeNameText = text => {
    this.storeDogFirstScreen.setName(text);
  };
  onChangeDescriptionText = text => {
    this.storeDogFirstScreen.setDescription(text);
  };

  render() {
    const {name, signupObject} = this.storeDogFirstScreen;
    return (
      <MobxProvider storeDogFirstScreen={this.storeDogFirstScreen}>
        <BaseView>
          <Header title navigation={this.props.navigation} />
          <VerticalSpaceP height={0.05} />
          <MedQuestionTextWide>What is your dog name?</MedQuestionTextWide>
          <VerticalSpaceP height={0.05} />
          <UploadImageArea />
          <VerticalSpaceP height={0.03} />
          <TextInputWithF
            placeholder={'Bambi'}
            onChange={this.onChangeNameText}
          />
          <VerticalSpaceP height={0.01} />
          <Question text={`Tell us about ${name}.`} />
          <TextInputWithF
            bigger={2}
            placeholder={'He is bouncy, fast and cute.'}
            onChange={this.onChangeDescriptionText}
          />
          <Footer
            screenNumber={5}
            navigation={this.props.navigation}
            next={'DogSecond'}
            params={{signupUserObject: this.props.navigation.state.params, signupDogObject: signupObject}}
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
