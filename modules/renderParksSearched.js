import { stateArray } from "./searchState.js";
import stateClass, { key } from "./stateClass.js"

const userState= localStorage.getItem('stateSearched').toUpperCase();
let userStateCode;
let stateObjectArray;
let stateObject;

export async function displayParks(){
  for (let state of stateArray){
    if (userState === state.name.toUpperCase()){
     stateObjectArray = stateArray.slice( stateArray.indexOf(state), stateArray.indexOf(state) + 1  )
     stateObject = stateObjectArray[0]
     await stateObject.findStateParks();
     await console.log(stateObject)
     renderParks();
    }
  }
}

function renderParks(){
  for(let park of stateObject.parks){
    console.log(park)
    const parkList = document.getElementById('park-list_searchpage')

    const parkContainer = document.createElement('div'); 
    parkContainer.classList.add('search-result');

    const parkImage = document.createElement('img');
    parkImage.classList.add('park-photo');
    if(park.images[0]){
    parkImage.src = park.images[0].url;
    parkImage.alt = park.images[0].altText;
    } else{
      parkImage.src = '/images/noImage.png';
    }

    const parkType = document.createElement('p');
    parkType.classList.add('park-type');
    parkType.innerText = `${park.designation}`;

    const parkName = document.createElement('p');
    parkName.classList.add('park-name');
    parkName.innerText = `${park.fullName}`

    const featureContainer = document.createElement('ul');
    featureContainer.classList.add('features-container');

    if(park.activities[2]){
    for(let i=0; i < 2; i++){
      const feature = document.createElement('li');
      feature.classList.add('feature');
      feature.innerText = `${park.activities[i].name}`
      featureContainer.append(feature)
      }
    }else if (park.activities[0]){
      const feature = document.createElement('li');
      feature.classList.add('feature');
      feature.innerText = `${park.activities[0].name}`
      featureContainer.append(feature)
    }
    parkContainer.append(parkImage, parkType, parkName, featureContainer)
    parkList.append(parkContainer)
  }
}
