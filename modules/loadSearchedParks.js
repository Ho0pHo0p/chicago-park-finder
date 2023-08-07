export default async function loadParks(userState, userPark){
  await userState.findStateParks();
  renderParks(userState)
  clickPark(userState, userPark);
}

function renderParks(userState){
    for(let park of userState.parks){
      const parkList = document.getElementById('park-list_searchpage')
  
      const parkContainer = document.createElement('div'); 
      parkContainer.classList.add('park');
      parkContainer.setAttribute('id', `${park.parkCode}`)
  
      const parkImageCont = document.createElement('div');
      parkImageCont.classList.add('park-photo-container');
      const parkImage = document.createElement('img');
      parkImage.classList.add('park-photo');
      if(park.images[0]){
      parkImage.src = park.images[0].url;
      parkImage.alt = park.images[0].altText;
      } else{
        parkImage.src = '/images/noImage.png';
      }
      parkImageCont.append(parkImage);
  
      const parkType = document.createElement('p');
      parkType.classList.add('park-type');
      parkType.innerText = `${park.designation}`;
  
      const parkName = document.createElement('p');
      parkName.classList.add('park-name');
      parkName.innerText = `${park.fullName}`
  
      parkContainer.append(parkImageCont, parkType, parkName)
      parkList.append(parkContainer)
    }
}

function clickPark(userState, userPark){
  const parks = userState.parks; 
  const parkElements = document.querySelectorAll('.park');

  for(let parkElement of parkElements ){
    parkElement.addEventListener('click', ()=>{
      const code = parkElement.getAttribute('id')
      for(let park of parks){
        if(code === park.parkCode){
          userPark = park;
           loadParkInfoPage(userPark)
        }
      }
    })
  }
} 

async function loadParkInfoPage(userPark){
  console.log(userPark.parkCode)
  localStorage.setItem('parkSelected', `${userPark.parkCode}`)
  window.location.assign('parkInfo.html')
}