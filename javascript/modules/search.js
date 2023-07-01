import State, { createStates } from "./stateClass.js";


const searchBar = document.getElementById('search-bar');
let userStateCode = '';

const stateArray = createStates();

export default function searchState(){
  let userInput = searchBar.value;
  
  for (let state of stateArray){
    if (userInput.toUpperCase() === state.name.toUpperCase() || state.code){
      state.findStateParks()
    }
  }
}
  

