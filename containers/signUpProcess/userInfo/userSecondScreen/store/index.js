import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

export class StoreUserSecondScreen {
    constructor(rootStore) {
        this.rootStore = rootStore;
      }
    
      @observable isDatePickerVisible = false;
      @observable birthdate = null;

      @observable moreThenOneDog = false;

      @observable address = null;
      @observable radiusInMeters = 200;
      @observable feedMorning = -1;
      @observable feedNoon = -1;
      @observable feedEvening = -1;
      @observable hangouts = [false, false, false, false]


      @observable errorMsg = null;
      @observable loading = false;

      @observable signupUserObject = {
                                    hangouts: [false, false, false, false],
                                    userBirthdate: null,
                                    radiusInMeters: 200,
                                    // address:{
                                    //   lng: null,
                                    //   lat: null
                                    // },
                                    feedMorning: -1,
                                    feedNoon: -1,
                                    feedEvening: -1,
                                    moreThenOneDog: false
                                }

    
      @action
      setDatePickerVisible(isVisible) {
        this.isDatePickerVisible = isVisible;
      }
      @action
      setBirthdate(userAge, dateString) {
        console.log("StoreUserSecondScreen -> setBirthdate -> dateString", dateString)
        console.log("signupStore -> setUserBirthdate -> userDate", userAge)
        this.birthdate = userAge;
        this.signupUserObject.userBirthdate = dateString;

      }

      @action
      setRadiusInMeters(selection) {
        console.log("StoreUserSecondScreen -> radiusInMeters -> selection", selection)
        this.radiusInMeters = selection;
        this.signupUserObject.radiusInMeters = this.radiusInMeters;
      }

      @action
      setAddress({address, lat, lng} ) {
        console.log("StoreUserSecondScreen -> setAddress -> address,{ lat, lng }", address, lat, lng )
        this.address = address;
        // this.signupUserObject.address = {
        //                                     lat:lat,
        //                                     lng:lng
        //                                   }
      }

      @action
      setFeedMorning(selection){
        console.log("StoreUserSecondScreen -> setFeedMorning -> selection", selection)
        this.feedMorning = selection;
        this.signupUserObject.feedMorning = this.feedMorning;
      }
      @action
      setFeedNoon(selection){
        console.log("StoreUserSecondScreen -> setFeedNoon -> selection", selection)
        this.feedNoon = selection;
        this.signupUserObject.feedNoon = this.feedNoon;
      }
      @action
      setFeedEvning(selection){
        console.log("StoreUserSecondScreen -> setFeedEvning -> selection", selection)
        this.feedEvening = selection;
        this.signupUserObject.feedEvening = this.feedEvening;
      }

      @action
      setHangouts(index, value){
        console.log("StoreUserSecondScreen -> setHangouts -> index, value", index, value)
        this.hangouts[index] = value;
        this.signupUserObject.hangouts[index] = this.hangouts[index];
        console.log("StoreUserSecondScreen -> setHangouts -> this.signupUserObject.hangouts[index]", this.signupUserObject.hangouts[index])

      }
}

