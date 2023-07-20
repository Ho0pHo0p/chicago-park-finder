import searchMenu from "./searchMenu.js";
import stateArray from "./statesData.js";
import submitSearch from "./submitSearch.js";
import userInputFunc from "./userInput.js";

export default function search(){
  const searchBar = document.getElementById('search-bar');
  const searchForm = document.getElementById('search-form');

  searchMenu(searchBar, stateArray);

  searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let userInput = userInputFunc(searchBar);
    submitSearch(stateArray, userInput)
  })
}