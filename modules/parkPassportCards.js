import displayParksApi from "./passportStampApi.js";

export default async function parkCards(){
  const cardCont = document.querySelector('.card-container');
  let displayParks = [];
  await displayParksApi(displayParks);
  createParkCard(cardCont, displayParks);
}

function createParkCard(cardCont, displayParks){
  console.log(displayParks)
  for(let park of displayParks){
    const card = document.createElement('div');
    card.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('park-img');
    image.setAttribute('src', `${park.images[0].url}`);
    image.setAttribute('alt', `${park.images[0].alt}`)
    const infoCont = document.createElement('div');
    infoCont.classList.add('info-cont')
    const parkName = document.createElement('p');
    parkName.innerText = `${park.fullName}`
    parkName.classList.add('parkName')
    const parkStates = document.createElement('p');
    parkStates.innerText = `${park.states}`
    parkStates.classList.add('parkStates')
    infoCont.append(parkName, parkStates)
    card.append(image, infoCont)
    cardCont.append(card)
  }
}