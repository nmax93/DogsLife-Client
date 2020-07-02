import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {SmallText} from '../../../containers/styles/fonts';
import Icon from 'react-native-vector-icons/Ionicons';


const width = Dimensions.get('window').width;

function getEnergy(energy) {
  switch (energy) {
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';
  }
}

function getLeftTime(firstScan, avgTime) {
  let nowDate = new Date();
  console.log("getLeftTime -> nowDate", nowDate)
  const firstScanDate = new Date(firstScan);
  console.log("getLeftTime -> firstScanDate", firstScanDate)
  console.log("getLeftTime -> (nowDate - firstScanDate) / 1000 / 60", (nowDate - firstScanDate) / 1000 / 60)
  let minutesSinceFirstScan = (nowDate - firstScanDate) / 1000 / 60;
  if (minutesSinceFirstScan < 1 && minutesSinceFirstScan > 0) return 1;
  if (minutesSinceFirstScan < avgTime)
    return Math.floor(avgTime - minutesSinceFirstScan);
  else return 0;
}

export const Gender = props => {
  return (
    <View style={styles.iconStyle}>
      {props.gender == 1 ? (
          <Icon
          name="md-male"
          size={20}
          color={'black'}
        />
      ) : (
        <Icon
        name="md-female"
        size={20}
        color={'black'}
      />
      )}
    </View>
  );
};

export const DogDetails = props => {
  console.log("props.dogDetailsInGarden.first_scan", props.dogDetailsInGarden)
  return (
    <View style={styles.container}>
      <View style={styles.paramContainer}>
        <Image
          source={require('../../../images/energy.png')}
          style={styles.icon}
        />
        <SmallText>{getEnergy(props.energy)}</SmallText>
      </View>
      {getLeftTime(props.dogDetailsInGarden.first_scan, props.avgTime) ? (
        <View style={styles.paramContainer}>
          <Image
            source={require('../../../images/counterclockwise.png')}
            style={styles.icon}
          />
          <SmallText>{`${getLeftTime(props.dogDetailsInGarden.first_scan, props.avgTime)} Min`}</SmallText>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width * 0.4,
    height: width * 0.2,
  },
  paramContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: (width * 0.6) / 2.7,
    alignItems: 'center',
  },
  paramContainerGender: {
    flexDirection: 'row',
    width: (width * 0.6) / 7,
    justifyContent: 'center',
  },
  iconFemale: {
    borderWidth: 1,
    width: width * 0.052,
    height: width * 0.052,
  },
  icon: {
    borderWidth: 1,
    width: width * 0.048,
    height: width * 0.048,
  },
  iconStyle: {
    marginLeft: 11,
  },
});
