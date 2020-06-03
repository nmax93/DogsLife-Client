import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class StoreUserFirstScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    
      @observable name;
      @observable avatar = null;
      @observable gender = true;
      @observable errorMsg = null;
      @observable loading = false;

      @observable signupUserObject = {
                                    userGender: true,
                                    userName: null,
                                    userAvatar: null,
                                    userId: 105, // from rootStore
                                    // userId: this.rootStore.userId
                                    deciveMacId: null
                                }
    
      @action
      setUserMacId(mac){
      console.log("StoreUserFirstScreen -> deciveMacId -> mac", mac)
        this.signupUserObject.deciveMacId = mac;
      }

      @action
      setName(name) {
        console.log("signupStore -> setUserName -> name", name)
        this.name = name;
        this.signupUserObject.userName = name;
      }

      @action
      setGender(gender) { 
        this.gender = gender;
        this.signupUserObject.userGender = gender;
        console.log("StoreSignup -> setUserGender -> this.userGender", this.gender)
      }
    
      @action
      setAvatar(userImage) {
        console.log("signupStore -> setUserAvatar -> userImage", userImage)
        this.avatar = userImage;
        this.signupUserObject.userAvatar = userImage;
      }
}

