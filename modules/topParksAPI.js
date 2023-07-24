const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2';

export default async function topParks(states){
  let parksFiltered = [];

  if(states.length !== 0){
    const topState = states[0];
    if(!topState.topParks){
      try{
          const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${topState.code}&limit=5&api_key=${key}`);
          const data = await res.json();
          parksFiltered = data.data
          topState.topParks = parksFiltered; 
      }
      catch {
            console.log('error')
      }
    }
  }
  
}