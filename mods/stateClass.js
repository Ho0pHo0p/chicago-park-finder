/* State class includes name, state code, and findStatePark method */
export default class State {
  constructor(stateName, stateId){
    this.name = stateName, 
    this.code = stateId,
    this.topParks;
    this.parks;
  }
  
  async findStateParks(){
    if (!this.parks){
      try{
      const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${this.code}&api_key=${key}`);
      const data = await res.json();
      this.parks = data.data
      }
      catch {
        console.log('error', err)
      }
    }
  } 
}