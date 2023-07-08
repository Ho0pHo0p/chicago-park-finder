import { searchForm } from "./modules/search.js";
import { searchBar } from "./modules/search.js";
import autoComplete from "./modules/autocomplete.js"
import searchState from "./modules/search.js";
import renderMenu from "./modules/renderAutoComplete.js";
import formSubmit from "./modules/searchFormSubmit.js"

renderMenu();
searchBar.addEventListener('input', autoComplete)
searchForm.addEventListener('submit', searchState)
searchForm.addEventListener('submit', formSubmit)
