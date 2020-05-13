import { consts } from '../consts';

export async function sendDogsFromDogCollar(data) {
    console.log("sendDogsFromDogCollar -> myDogId, dogsFoundArray", data)
    let url = `${consts.serverUrl}/createDogMatch`;
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log("sendDogsFromDogCollar completed")
      } else {
        console.log('sendDogsFromDogCollar Failed, got status: ' + response.status);
      }
      return "okay";
  
    } catch (e) {
      console.log('error in fetch -> sendDogsFromDogCollar');
      return "network error";
    }
  }

  // not done response incorrect
  