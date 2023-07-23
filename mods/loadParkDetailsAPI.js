const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2';

export default async function loadParkDetailsAPI(parkCode, parkDetails){
  try{
    const res = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${key}`);
    const data = await res.json();
    const parkObj = data.data[0]
    console.log(parkObj)
    parkDetails.name = parkObj.fullName;
    parkDetails.photo = parkObj.images;
    parkDetails.description = parkObj.description;
    parkDetails.directions = parkObj.directionsInfo
    parkDetails.address = parkObj.addresses
    parkDetails.contact = parkObj.contacts;
    parkDetails.hours = parkObj.operatingHours;
    parkDetails.weather = parkObj.weatherInfo;
    parkDetails.fees = parkObj.fees;    
  }
  catch {
    console.log('error')
  }
}

