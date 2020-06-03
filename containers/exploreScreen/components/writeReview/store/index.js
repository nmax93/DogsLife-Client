import {observable, action, flow} from 'mobx';
import { sendReview } from './routes'

export class StoreWriteReviewScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable starCountCleanliness = 3.5;
  @observable starCountFacilities = 3.5;
  @observable text;
  @observable userId = 105;
  @observable author = 'Hen';// this.rootStore.storeProfileScreen.name;

  @observable errorMsg = null;
  @observable loading = false;


  @action
  setCleanliness(value) {
    this.starCountCleanliness = value;
    console.log("StoreWriteReviewScreen -> setCleanliness -> this.starCountCleanliness", this.starCountCleanliness)
  }

  @action
  setFacilities(value) {
    this.starCountFacilities = value;
    console.log("StoreWriteReviewScreen -> setFacilities -> this.starCountFacilites", this.starCountFacilities)
  }

  @action
  setReviewText(text){
      this.text = text;
      console.log("StoreWriteReviewScreen -> setReviewText -> this.text", this.text)
  }

  @action
  sendReviewPressed = flow(function*(gardenId) {
    let reviewData = {gardenId: gardenId, text:this.text, starCountCleanliness: this.starCountCleanliness, starCountFacilities: this.starCountFacilities, author: this.author, userId: this.userId};
    try {
        const response = yield sendReview(reviewData);
    } catch (e) {
      this.errorMsg = 'Network error'
      console.log('catch', e);
    }
  });
}
