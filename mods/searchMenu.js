import topParks from "./topParksAPI.js";
import autocomplete from "./autocomplete.js";

export function renderStates(states){
  const stateContainer = document.getElementById('state-list');
  const stateElements = document.querySelectorAll('.listed-state');

  if(states.length === 0){
    stateContainer.innerHTML = ''
  }
  
  stateContainer.innerHTML = ''
  for(let i = 0; i < stateElements.length; i++){
    let li = stateElements[i];
    li.remove();
  }
  
  if (states.length > 5){
    for(let i = 0; i < 5; i++){
      const stateElement = document.createElement('li');
      stateElement.classList.add('listed-state')
      stateElement.innerText = `${states[i].name}`
      stateContainer.append(stateElement)
    }
  }else if (states.length <= 5){
   for(let i = 0; i < states.length; i++){
      const stateElement = document.createElement('li');
      stateElement.classList.add('listed-state')
      stateElement.innerText = `${states[i].name}`
      stateContainer.append(stateElement)
    }
  }
}
export function renderParks(parks){
  const parkContainer = document.getElementById('park-list');
  const parkElements = document.querySelectorAll('.listed-park');

  if(!parks){
    parkContainer.innerHTML = ''
  } else if (parks){
    parkContainer.innerHTML = ''
    for(let i = 0; i < parkElements.length; i++){
        let li = parkElements[i];
        li.remove();
    }

    if (parks.length > 5){
      for(let i = 0; i <= 5; i++){
        const parkElement = document.createElement('li');
        parkElement.classList.add('listed-park')
        parkElement.innerText = `${parks[i].fullName}`
        parkContainer.append(parkElement)
        }
    }else if (parks.length <= 5){
        for(let i = 0; i < parks.length; i++){
          const parkElement = document.createElement('li');
          parkElement.classList.add('listed-park')
          parkElement.innerText = `${parks[i].name}`
          parkContainer.append(parkElement)
        }
    }
  }
}

export default async function searchMenu(searchBar, stateArray) {
  const searchMenu = document.querySelector('.search-menu');

  await renderStates(stateArray); 
  await topParks(stateArray)
  await renderParks(stateArray[0].topParks)

  searchBar.addEventListener('focus', ()=>{
    searchMenu.classList.remove('hidden')
  })
  searchBar.addEventListener('input', ()=>{
    searchMenu.classList.remove('hidden')
    autocomplete(searchBar, stateArray);
  })
  searchBar.addEventListener('focusout', ()=>{
    searchMenu.classList.add('hidden')
  })
}

