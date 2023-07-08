import {searchBar, searchForm} from './search.js'

export default function submitSearchForm(){
  console.log('poop')
  const userState = searchBar.value;
  localStorage.setItem(userState, userState); 
  loadSearchPage();
}


function loadSearchPage(){
  window.location.assign('searchResult.html')
}