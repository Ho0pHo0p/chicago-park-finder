import { searchBar, stateArray } from "./search.js";
import { renderParks, renderStates } from "./renderAutoComplete.js";
import { key } from "./stateClass.js";
import { autofillInput } from "./renderAutoComplete.js";

export let statesFiltered = [];
export let parksFiltered = [];

export default async function autocomplete(e){
  let userInput = searchBar.value;
  filterStateLetters(userInput);
  renderStates();
  autofillInput();
  await filterParks(statesFiltered)
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

async function filterParks(statesFiltered){
  parksFiltered = [];

  if (statesFiltered.length !== 0){
    const topState = statesFiltered[0];
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