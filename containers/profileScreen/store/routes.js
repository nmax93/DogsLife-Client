import { consts } from '../../../consts';
export async function getProfileInfo(userId, token) {    
      const response = await fetch(`${consts.serverUrl}/getUserProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId, token})
      });    
    return await response.json();
  }
