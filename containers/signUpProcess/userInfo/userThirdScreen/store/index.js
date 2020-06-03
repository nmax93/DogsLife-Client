import {observable, action} from 'mobx';

export class StoreUserThirdScreen {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable isCheckMorning = true;
  @observable isCheckMidday = false;
  @observable isCheckAfternoon = false;
  @observable isCheckEvening = false;

  @observable morning = {duration: -1, type: true};
  @observable midday = {duration: -1, type: true};
  @observable afternoon = {duration: -1, type: true};
  @observable evening = {duration: -1, type: true};

  @observable errorMsg = null;
  @observable loading = false;

  @observable signupObject = {
    walk_routine: {
      morning: this.morning,
      midday: this.midday,
      afternoon: this.afternoon,
      evening: this.evening,
    },
  };

  @action
  buildSignupObject(navigation) {
    // when pressed next, build object and send
    this.signupObject.walk_routine = {
      morning: this.morning,
      midday: this.midday,
      afternoon: this.afternoon,
      evening: this.evening,
    };
    navigation.navigate('UserForth', {...navigation.state.params, ...this.signupObject})
  }

  @action
  setIsCheckedMorning() {
    this.isCheckMorning = !this.isCheckMorning;
    if (this.isCheckMorning == false) this.morning = {duration: -1, type: true};
  }
  @action
  setMorning(duration, type) {
    if (duration == -1) this.morning.type = !this.morning.type;
    if (type == -1) this.morning.duration = duration;
  }

  @action
  setIsCheckedMidday() {
    this.isCheckMidday = !this.isCheckMidday;
    if (this.isCheckMidday == false) this.midday = {duration: -1, type: true};
  }
  @action
  setMidday(duration, type) {
    if (duration == -1) this.midday.type = !this.midday.type;
    if (type == -1) this.midday.duration = duration;
  }
  @action
  setIsCheckedAfternoon() {
    this.isCheckAfternoon = !this.isCheckAfternoon;
    if (this.isCheckAfternoon == false)
      this.afternoon = {duration: -1, type: true};
  }
  @action
  setAfternoon(duration, type) {
    if (duration == -1) this.afternoon.type = !this.afternoon.type;
    if (type == -1) this.afternoon.duration = duration;
  }
  @action
  setIsCheckedEvening() {
    this.isCheckEvening = !this.isCheckEvening;
    if (this.isCheckEvening == false) this.evening = {duration: -1, type: true};
  }
  @action
  setEvening(duration, type) {
    if (duration == -1) this.evening.type = !this.evening.type;
    if (type == -1) this.evening.duration = duration;
  }
}
