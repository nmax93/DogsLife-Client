import {observable, action} from 'mobx';

export class StoreDogFirstScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    
      @observable name;
      @observable avatar = null;
      @observable description = null;
      @observable errorMsg = null;
      @observable loading = false;

      @observable signupObject = {
                                    dogName: null,
                                    dogAvatar: null,
                                    dogDescription: null
                                }
    
      @action
      setName(name) {
        this.name = name;
        this.signupObject.dogName = name;
      }

      @action
      setAvatar(userImage) {
        this.avatar = userImage;
        this.signupObject.dogAvatar = userImage;
      }

      @action
      setDescription(text){
          this.description = text;
          this.signupObject.dogDescription = text;
      }
}

