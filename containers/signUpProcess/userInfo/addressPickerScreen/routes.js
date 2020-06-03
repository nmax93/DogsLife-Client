export async function getLangAndLat(address) {
  let location = {}    
    try{
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Yitshak+Hachimi+Street,+Ashkelon,+Israel&key=AIzaSyDunTJh60gkRKtumHb1nTnKXGlCH4r9Dpk`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => response.json())
      .then(data => {
        Object.assign(location, data.results[0].geometry.location)
      });
    }
    catch (err) {
      console.log("cant find location", err);
      return { code: 0, err: err } // cant find location
    }            
    return { code: 1, extra: location };
  }