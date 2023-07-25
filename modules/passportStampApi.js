const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2';

export default async function displayParksApi(displayParks){
  try{
    const res = await fetch(`https://developer.nps.gov/api/v1/parks?q=new&limit=10&api_key=${key}`);
    const data = await res.json();
    const array = data.data;
    array.forEach(element => {
      displayParks.push(element)
    })
  }
  catch {
      console.log('error')
  }
}