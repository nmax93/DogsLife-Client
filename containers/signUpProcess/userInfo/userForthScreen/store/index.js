import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class StoreUserForthScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    

      @observable hobbies = [false, false, false, false, false, false, false, false, false]


      @observable errorMsg = null;
      @observable loading = false;

      @observable signupObject = {
                                    hobbies: [false, false, false, false, false, false, false, false, false],
                                  }

      @action
      setHobbies(index, value){
        console.log("StoreUserSecondScreen -> setHangouts -> index, value", index, value)
        this.hobbies[index] = value;
        this.signupObject.hobbies[index] = this.hobbies[index];
        console.log("StoreUserSecondScreen -> setHangouts -> this.signupObject.hangouts[index]", this.signupObject.hobbies[index])

      }
}

