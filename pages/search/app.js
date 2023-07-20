import loadParks from "../../mods/loadSearchedParks.js";
import stateArray from "../../mods/statesData.js";


function App(){
  let userState = (function userStateObject(){
    const userStateString = localStorage.getItem('stateSearched');
    for(let state of stateArray){
      if(state.code === userStateString){
        return state
      }
    }
  })(); 
  let userPark;
  loadParks(userState, userPark);

}

App(); 