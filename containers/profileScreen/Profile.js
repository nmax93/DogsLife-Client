import React, {Component} from 'react';
import {inject, observer, Provider as MobxProvider} from 'mobx-react';
import {ScrollView, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import UserInfo from './components/userInfo/UserInfo';
import {DogInfo} from './components/dogInfo/dogInfo';
import {StoreProfileScreen} from './store';


@inject('rootStore')
@observer
class Profile extends Component {
  constructor(props) {
    super(props);
    this.storeProfileScreen = new StoreProfileScreen(props.rootStore);
  }

  async componentDidMount() {
    await this.storeProfileScreen.getProfile();
  }
  render() {
    return (
      <MobxProvider storeProfileScreen={this.storeProfileScreen}>
        <BaseView>
          <UserInfo />
          <ScrollView style={styles.flexView}>
            <DogInfo />
          </ScrollView>
        </BaseView>
      </MobxProvider>
    );
  }
}
export default Profile;


const styles = StyleSheet.create({
  flexView: {
    width: '100%',
    flex: 1,
  },
});

const BaseView = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;
