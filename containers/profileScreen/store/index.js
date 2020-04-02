import { observable, action, flow, computed } from 'mobx';
// import AsyncStorage from '@react-native-community/async-storage';


export class StoreProfileScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable name = null;
  @observable description = null;
  @observable breed = null;
  @observable personality = [];
  @observable dateOfBirth = null;
  @observable image = null;
  @observable collar = null;
  @observable groomingList = [];
  @observable feediingList = [];
  @observable walkList = [];
  @observable dogFriends = [];
  @observable accountPrivacy;
  //   @observable avgTimeInGarden
  @observable userDogs = [];
  @observable selectedDog;

  @action
  setSelectedDog(dogObject){
      this.selectedDog = dogObject;
      this.name = dogObject.name;
      this.description = dogObject.description;
      this.breed = dogObject.breed;
      this.personality = dogObject.personality.slice();
      this.dateOfBirth = dogObject.dateOfBirth;
      this.image = dogObject.image;
      //   this.collar = dogObject.collar;
    //   this.groomingList = dogObject.groomingList.slice();
    //   this.feediingList = dogObject.feediingList.slice();
    //   this.walkList = dogObject.walkList.slice();
      this.dogFriends = dogObject.dogFriends.slice();
      this.accountPrivacy = dogObject.accountPrivacy;
      console.log("StoreProfileScreen -> setSelectedDog -> this.accountPrivacy", this.accountPrivacy)
  }


  @action
  setDogName(text){
      this.name = text;
      console.log("StoreProfileScreen -> setDogName -> this.name", this.name)
  }

  @action
  setDogDescription(text){
      this.description = text;
      console.log("StoreProfileScreen -> setDogDescription -> this.description", this.description)
  }

  // not in use when DB connected
  @action
  buildDogArray(demo){
      const releventDogs = demo.slice().filter(obj => obj.owmner_id === 1);
      this.userDogs = releventDogs;
      this.setSelectedDog(releventDogs[0]);
  }
  
}