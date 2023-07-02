import { searchBar, stateArray } from "./search.js";


export default function filterStates(e){
    let userInput = e.target.value 
    console.log(userInput.toUpperCase())
    filterLetters(userInput); 
  }
  
function filterLetters(userInput){
  for (let state of stateArray){
    let stateSlice = state.name.slice(0, searchBar.value.length); 

    if (stateSlice.toUpperCase() === userInput.toUpperCase()){
      console.log(state.name)
    }
  }
}

