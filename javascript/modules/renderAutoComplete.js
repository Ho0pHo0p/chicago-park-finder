import { parksFiltered, statesFiltered} from "./autocomplete.js";
import { searchForm, searchBar, stateArray } from "./search.js";

const searchMenu = document.querySelector('.search-menu');
const stateContainer = document.getElementById('state-list');
const stateElements = document.querySelectorAll('.listed-state');
const parkContainer = document.getElementById('park-list');
const parkElements = document.querySelectorAll('.listed-park');

export default function renderMenu(){
  renderDefaultStates();
  renderDefaultParks();

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
  for(let i = 0; i < stateElements.length; i++){
    let li = stateElements[i];
    li.remove();
  }
  
  if (statesFiltered.length > 5){
    for(let i = 0; i < 5; i++){
      const stateElement = document.createElement('li');
      stateElement.classList.add('listed-state')
      stateElement.innerText = `${statesFiltered[i].name}`
      stateContainer.append(stateElement)
    }
  } else if (statesFiltered.length <= 5){
    for(let i = 0; i < statesFiltered.length; i++){
      const stateElement = document.createElement('li');
      stateElement.classList.add('listed-state')
      stateElement.innerText = `${statesFiltered[i].name}`
      stateContainer.append(stateElement)
    }
  }
}

export function renderParks(){
  parkContainer.innerHTML = ''
  for(let i = 0; i < parkElements.length; i++){
    let li = parkElements[i];
    li.remove();
  }
  if(parksFiltered.length >= 5){
    for(let i = 0; i <= 5; i++){
    const parkElement = document.createElement('li');
    parkElement.classList.add('listed-park')
    parkElement.innerText = `${parksFiltered[i].name}, ${parksFiltered[i].states}`
    console.log(parkElement)
    parkContainer.append(parkElement)
    }
  }else if (parksFiltered.length < 5){
    for(let i = 0; i < parksFiltered.length; i++){
      const parkElement = document.createElement('li');
      parkElement.classList.add('listed-park')
      parkElement.innerText = `${parksFiltered[i].name}, ${parksFiltered[i].states}`
      console.log(parkElement)
      parkContainer.append(parkElement)
    }
  }
}

async function renderDefaultParks(){
  console.log('start')
  const alabamaParks = await stateArray[0].findStateParks();
  for(let i = 0; i < 5; i++){
    const parkElement = document.createElement('li');
    parkElement.classList.add('listed-state')
    console.log(stateArray[0].parks)
    parkElement.innerText = `${stateArray[0].parks[i].name} - ${stateArray[0].parks[i].states}`
    parkContainer.append(parkElement)
  }
  
}

function renderDefaultStates(){
  for(let i = 0; i < 5; i++){
    const stateElement = document.createElement('li');
    stateElement.classList.add('listed-state')
    stateElement.innerText = `${stateArray[i].name}`
    stateContainer.append(stateElement)
  }
}
