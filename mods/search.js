import searchMenu from "./searchMenu.js";
import stateArray from "./statesData.js";
import submitSearch from "./submitSearch.js";
import autocomplete from "./autocomplete.js";

export default function search(){
  const searchBar = document.getElementById('search-bar');
  const searchForm = document.getElementById('search-form');

  searchMenu(searchBar, stateArray);
  submitSearch(searchForm);
}