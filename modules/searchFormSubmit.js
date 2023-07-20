import {searchBar, searchForm} from './searchState.js'
import { stateArray } from './searchState.js';

export default async function submitSearchForm(){
  const userState = searchBar.value;
  localStorage.setItem('stateSearched',userState);
  for(let state of stateArray){
    if(userState.toUpperCase() === state.name.toUpperCase()){
      await loadSearchPage()
    }
  }
}



function loadSearchPage(){
  window.location.assign('search.html')
}