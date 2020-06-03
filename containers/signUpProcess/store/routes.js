import { consts } from '../../../consts';
export async function sendSignupInfo(data) {    
    console.log("sendSignupInfo -> data", data)
      const response = await fetch(`${consts.serverUrl}/addSignupObject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });    
      console.log("sendSignupInfo -> response", response)
    return ;
  }

  export async function sendNewUserInfo(data) {    
    console.log("sendNewUserInfo -> data", data)
      const response = await fetch(`${consts.serverUrl}/addNewUserToExistDog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });    
      console.log("sendNewUserInfo -> response", response)
    return ;
  }
