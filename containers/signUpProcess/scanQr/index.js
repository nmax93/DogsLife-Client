import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScanBigQuestionText, BigBoldText} from '../../styles/fonts';
import styled from 'styled-components/native';
import {Header} from './components/header';
import {VerticalSpaceP} from '../../../components/verticalSpace';
import {Footer} from './components/footer';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/AntDesign';
import {sendSignupInfo, sendNewUserInfo} from '../store/routes'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

@inject('rootStore')
@observer
export class ScanCollarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScanned: false,
      isDone: false,
      mac_id: '',
    };
  }
  onSuccess = e => {
    this.setState({isScanned: true, isDone: true, mac_id: e.data});
  };

  onPressDone = () => {
    const macId =  this.state.mac_id
    const { dogInSystem } = this.props.navigation.state.params;
    if(dogInSystem) {
      sendNewUserInfo({signupUserObject: this.props.navigation.state.params, macId });
        this.props.navigation.navigate('SignupFinish')
    }
    else {
      sendSignupInfo({signupUserObject: this.props.navigation.state.params.signupUserObject , 
        signupDogObject: Object.assign(this.props.navigation.state.params.signupDogObject, macId )});
        this.props.navigation.navigate('SignupFinish')
    }
    
  }

  render() {
    return (
      <BaseView>
        <Header title navigation={this.props.navigation} />
        <VerticalSpaceP height={0.05} />
        <ScanBigQuestionText>Scan Dog QR Collar</ScanBigQuestionText>
        <VerticalSpaceP height={0.05} />
        <View style={styles.scanArea}>
          {!this.state.isScanned ? (
            <QRCodeScanner
              onRead={this.onSuccess}
              cameraStyle={styles.cameraContainer}
              containerStyle={styles.container}
            />
          ) : (
            <View style={styles.completeView}>
              <Icon name="check" size={35} color="green" />
              <BigBoldText style={styles.completeText}>
                SCAN COMPLETED
              </BigBoldText>
            </View>
          )}
        </View>
        {this.state.isDone ? (
          <Footer
            text={'Done !'}
            navigation={this.props.navigation}
            // send data from store
            onPress={this.onPressDone}
          />
        ) : null}
      </BaseView>
    );
  }
}

const BaseView = styled(View)`
  display: flex;
  flex: 1;
  background-color: #f2d2a9;
  align-items: center;
`;

const styles = StyleSheet.create({
  cameraContainer: {
    width: width * 0.6,
  },
  scanArea: {
    width: width * 0.6,
    height: height * 0.5,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  completeText: {
    color: 'green',
  },
  completeView: {
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    backgroundColor: '#f6dcbb',
  },
});
