import { statesFiltered} from "./autocomplete.js";
import { searchForm, searchBar, stateArray } from "./search.js";

const searchMenu = document.querySelector('.search-menu');
const stateContainer = document.getElementById('state-list');
const stateElement = document.querySelectorAll('.listed-state')

export default function renderMenu(){

for(let state of stateArray){
    const stateElement = document.createElement('li');
    stateElement.classList.add('listed-state')
    stateElement.innerText = `${state.name}`
    stateContainer.append(stateElement)
  }


  searchBar.addEventListener('focus', ()=>{
      searchMenu.classList.remove('hidden')
  })
  searchBar.addEventListener('input', ()=>{
    searchMenu.classList.remove('hidden')
  })
  searchBar.addEventListener('focusout', ()=>{
    searchMenu.classList.add('hidden')
  })
}

export function renderStates(){
  stateContainer.innerHTML = ''
  for(let i = 0; i < stateElement.length; i++){
    let li = stateElement[i];
    li.remove();
  }

  for(let state of statesFiltered){
    const stateElement = document.createElement('li');
    stateElement.classList.add('listed-state')
    stateElement.innerText = `${state.name}`
    stateContainer.append(stateElement)
  }
}





