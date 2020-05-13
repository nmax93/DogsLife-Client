import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
  AppState,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import {sendDogsFromDogCollar} from './routes';

//const window = Dimensions.get('window');

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

@inject('rootStore')
export default class BleController extends Component {
  constructor() {
    super();

    this.state = {
      scanning: false,
      peripherals: new Map(),
      appState: '',
      myDog: 'DOG1',
    };

    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
    this.handleStopScan = this.handleStopScan.bind(this);
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(
      this,
    );
    // this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(
    //   this,
    // );
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BleManager.start({showAlert: false});

    this.handlerDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
    this.handlerStop = bleManagerEmitter.addListener(
      'BleManagerStopScan',
      this.handleStopScan,
    );
    // this.handlerDisconnect = bleManagerEmitter.addListener(
    //   'BleManagerDisconnectPeripheral',
    //   this.handleDisconnectedPeripheral,
    // );
    this.handlerUpdate = bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
    // the app requests the user to enable bluetooth when leaving the house
    BleManager.enableBluetooth()
      .then(() => {
        console.log('The bluetooth is already enabled or the user confirm');
      })
      .catch(error => {
        console.log('The user refuse to enable bluetooth');
      });
    this.startScan();
  }

  handleAppStateChange(nextAppState) {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      BleManager.getConnectedPeripherals([]).then(peripheralsArray => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    this.setState({appState: nextAppState});
  }

  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
    //this.handlerDisconnect.remove();
    this.handlerUpdate.remove();
  }

  handleDisconnectedPeripheral(data) {
    let peripherals = this.state.peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({peripherals});
    }
    console.log('Disconnected from ' + data.peripheral);
  }

  handleUpdateValueForCharacteristic(data) {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  }

  handleStopScan() {
    console.log('Scan is stopped');
    this.setState({scanning: false});
    this.getDataFromDogsCollars();
  }

  startScan() {
    if (!this.state.scanning) {
      // get array from server
      BleManager.scan(
        [
          '19999998-00f2-537e-4f6c-d104768a1215',
        ],
        10,
        true,
      ).then(() => {
        console.log('Scanning...');
        this.setState({scanning: true});
      });
    }
  }

  // retrieveConnected() {
  //   BleManager.getConnectedPeripherals([]).then((results) => {
  //     if (results.length == 0) {
  //       console.log('No connected peripherals');
  //     }
  //     console.log(results);
  //     let peripherals = this.state.peripherals;
  //     for (let i = 0; i < results.length; i++) {
  //       let peripheral = results[i];
  //       peripheral.connected = true;
  //       peripherals.set(peripheral.id, peripheral);
  //       this.setState({peripherals});
  //     }
  //   });
  // }

  handleDiscoverPeripheral(peripheral) {
    let peripherals = this.state.peripherals;
    peripherals.set(peripheral.id, peripheral);
    this.setState({peripherals});
  }

  async getDataFromDogsCollars() {
    let peripherals = this.state.peripherals;
    const iterator1 = peripherals[Symbol.iterator]();
    console.log('size', peripherals.size);
    for (let item of iterator1) {
      console.log('dogs in peripherals', item[0]);
      await this.connectToDogCollar(item[1]);
    }
  }

  connectToDogCollar(peripheral) {
    let res;
    BleManager.connect(peripheral.id)
      .then(() => {
        let peripherals = this.state.peripherals;
        let p = peripherals.get(peripheral.id);
        if (p) {
          p.connected = true;
          peripherals.set(peripheral.id, p);
          this.setState({peripherals});
        }
        console.log('Connected to ' + peripheral.id);

        setTimeout(() => {
          BleManager.retrieveServices(peripheral.id)
            .then(peripheralInfo => {
              let service = peripheral.advertising.serviceUUIDs[0];
              let foundDogNameCharacteristic = '2101';
              setTimeout(() => {
                BleManager.read(
                  peripheral.id,
                  service,
                  foundDogNameCharacteristic,
                )
                  .then(readData => {
                    for (let i = 0; i < 5; i++) {
                      console.log('Read: ' + readData.toString());
                    }
                    res = sendDogsFromDogCollar({
                      my_dog_id: peripheral.id,
                      matched_dogs_ids: readData,
                    });
                    console.log("res", res);
                    
                    BleManager.disconnect(peripheral.id)
                      .then(() => {
                        console.log('Disconnected from:', peripheral.id);
                      })
                      .catch(error => {
                        console.log(error);
                        console.log(
                          'Disconnect error peripheral',
                          peripheral.id,
                        );
                      });
                  })
                  .catch(error => {
                    console.log('Read error', error);
                  });
              }, 600);
            })
            .catch(error => {
              console.log('Retrieve Services error', error);
            });
        }, 1200);
      })
      .catch(error => {
        console.log('Connection error', error);
        console.log('Connection error peripheral', peripheral.id);
        this.reconnectToDogCollar(peripheral);
      });
  }

  reconnectToDogCollar(peripheral) {
    this.connectToDogCollar(peripheral);
  }

  render() {
    return null;
  }
}
