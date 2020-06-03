import { consts } from '../consts';

export async function sendDogsFromDogCollar(data) {
    let url = `${consts.serverUrl}/createDogMatch`;
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (response.ok) {
      } else {
      }
      return "okay";
  
    } catch (e) {
      console.log('error in fetch -> sendDogsFromDogCollar');
      return "network error";
    }
  }

  // not done response incorrect
  