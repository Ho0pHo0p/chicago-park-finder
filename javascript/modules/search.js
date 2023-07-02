import State, { createStates } from "./stateClass.js";
import autoComplete from "./autocomplete.js";

const searchForm = document.getElementById('search-form');
export const searchBar = document.getElementById('search-bar')

/* Array of all state objects */
export const stateArray = createStates();

/* Finds parks for specified state */
export default function searchState(e){
  e.preventDefault();
  let userInput = searchBar.value.toUpperCase();

    for (let state of stateArray){
      if (userInput === state.name.toUpperCase() || userInput === state.code){
        state.findStateParks()
      }
    }
}

searchForm.addEventListener('submit', searchState)
searchBar.addEventListener('input', autoComplete)


