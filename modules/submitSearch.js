import stateArray from "./statesData.js";

function loadSearchPage(){
  window.location.assign('search.html')
}

export default async function submitSearch(stateArray, userInput){
  for(let state of stateArray){
    if(userInput.toUpperCase() === state.name.toUpperCase()){
      console.log(state)
      localStorage.setItem('stateSearched', `${state.code}`);
      await loadSearchPage()
    }
  }
}
