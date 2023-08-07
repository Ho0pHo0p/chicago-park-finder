function loadSearchPage(){
  window.location.assign('./pages/search.html')
}

export default async function submitSearch(stateArray, userInput){
  for(let state of stateArray){
    if(userInput.toUpperCase() === state.name.toUpperCase()){
      localStorage.setItem('stateSearched', `${state.code}`);
      loadSearchPage()
    }
  } 
}