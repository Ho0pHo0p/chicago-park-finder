// import topParks from "./topParksAPI.js";
import userInputFunc from "./userInput.js";
import { renderParks, renderStates } from "./searchMenu.js";

function filterStateLetters(userInput, stateArray){
  let statesFiltered = [];
  for (let state of stateArray){
    let stateSlice = state.name.slice(0, userInput.length); 

    if (stateSlice.toUpperCase() === userInput.toUpperCase()){
      statesFiltered.push(state)
    }
  }
  return statesFiltered
}

export default async function autocomplete(searchBar, stateArray){
  let userInput = userInputFunc(searchBar);
  let statesFiltered = filterStateLetters(userInput, stateArray);

  renderStates(statesFiltered);
  // await topParks(statesFiltered); 
  // if(statesFiltered[0]){
  //   await renderParks(statesFiltered[0].topParks)
  // } else {
  //  await renderParks();
  // }

  
}