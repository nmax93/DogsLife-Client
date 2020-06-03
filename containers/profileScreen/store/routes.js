import { consts } from '../../../consts';
export async function getProfileInfo(userId) {    
      console.log("getProfileInfo -> userId", userId)
      const response = await fetch(`${consts.serverUrl}/getUserProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId})
      });    
      console.log("getProfileInfo -> response", response)
    return await response.json();
  }
