import { searchBar, stateArray } from "./search.js";
import { renderParks, renderStates } from "./renderAutoComplete.js";
import { key } from "./stateClass.js";

export let statesFiltered = [];
export let parksFiltered = [];

export default function autocomplete(e){
  let userInput = e.target.value; 
  filterStateLetters(userInput);
  filterParks(statesFiltered)
  renderStates();
  renderParks();
}
  
function filterStateLetters(userInput){
  statesFiltered = [];
  for (let state of stateArray){
    let stateSlice = state.name.slice(0, searchBar.value.length); 

    if (stateSlice.toUpperCase() === userInput.toUpperCase()){
      statesFiltered.push(state)
    }
  }
}

function filterParks(statesFiltered){
  parksFiltered = [];
  if(statesFiltered){
    const topState = statesFiltered[0];
    console.log(topState)
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${topState.code}&limit=5&api_key=${key}`)
      .then((res)=> res.json())
      .then((data) => {
        let topStateParks = (data.data)
        parksFiltered.push(...topStateParks)
        console.log(parksFiltered)
      })
      .catch(function(err){
        console.log('error', err)
      })
  }else if(!statesFiltered){
    
  }
}