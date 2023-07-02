import { searchBar, stateArray } from "./search.js";
import { renderStates } from "./renderAutoComplete.js";

export let statesFiltered = [];

export default function filterStates(e){
    let userInput = e.target.value; 
    filterLetters(userInput);
    renderStates();
  }
  
function filterLetters(userInput){
  statesFiltered = [];
  for (let state of stateArray){
    let stateSlice = state.name.slice(0, searchBar.value.length); 

    if (stateSlice.toUpperCase() === userInput.toUpperCase()){
      statesFiltered.push(state)
    }
  }
}

