 import { stateInfo } from "./stateData.js";

export const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2';

/* State class includes name, state code, and findStatePark method */
export default class State {
  constructor(stateName, stateId){
    this.name = stateName, 
    this.code = stateId,
    this.parks;
  }
  
  async findStateParks(){
    if (!this.parks){
      try{
      const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${this.code}&api_key=${key}`);
      const data = await res.json();
      console.log(data)
      this.parks = data.data
      console.log('middle')
      }
      catch {
        console.log('error', err)
      }
    }else{
      console.log(this.parks)
    }
  } 
}

/* Function that takes data from stateData and creates 50 States */
export function createStates(){
  const stateArray = []; 
  for (let i=0; i < 50; i++){
      let state = new State(stateInfo.name[i], stateInfo.code[i]);
      stateArray.push(state)
      console.log()
  }
  console.log(stateArray)
  return stateArray
 }