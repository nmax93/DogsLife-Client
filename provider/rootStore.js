import { observable, action } from 'mobx';
// import { StoreDashboardScreen } from '../screens/dashboardScreen/store';
// import { StoreProfileScreen } from '../screens/profileScreen/store';
// import { StoreLoginScreen } from '../screens/loginScreen/store';

class rootStore {
    // constructor() {
    //     this.storeDashboardScreen = new StoreDashboardScreen(this)
    //     this.storeProfileScreen = new StoreProfileScreen(this)
    //     this.storeLoginScreen = new StoreLoginScreen(this)
    // }

    @observable loading = false;
    @observable userToken;
    @observable userId = 1;
    @observable userEmail;
    @observable userDogs = [];
    @observable selectedDog;

    @action
    setSelectedDog(dogObject){
        this.selectedDog = dogObject;
    }

    // not in use when DB connected
    @action
    buildDogArray(demo){
        const releventDogs = demo.slice().filter(obj => obj.owmner_id === 1);
        this.userDogs = releventDogs;
        this.selectedDog = releventDogs[0];
    }

    // @action
    // setUserInfo(info){        
    //     this.userToken = info.token;
    //     this.userId = info.user_id;        
    //     this.userEmail = info.email;        
    // }
    
    // @action
    // setIsLoading(isLoading){
    //     this.isLoading = isLoading;
    // }
}

export default new rootStore();