import { searchForm } from "./modules/search.js";
import { searchBar } from "./modules/search.js";
import autoComplete from "./modules/autocomplete.js"
import searchState from "./modules/search.js";
import renderMenu from "./modules/renderAutoComplete.js";

renderMenu();
searchForm.addEventListener('submit', searchState)
searchBar.addEventListener('input', autoComplete)