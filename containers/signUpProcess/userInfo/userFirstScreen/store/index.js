import {observable, action, flow} from 'mobx';

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
        this.signupUserObject.deciveMacId = mac;
      }

      @action
      setName(name) {
        this.name = name;
        this.signupUserObject.userName = name;
      }

      @action
      setGender(gender) { 
        this.gender = gender;
        this.signupUserObject.userGender = gender;
      }
    
      @action
      setAvatar(userImage) {
        this.avatar = userImage;
        this.signupUserObject.userAvatar = userImage;
      }
}

