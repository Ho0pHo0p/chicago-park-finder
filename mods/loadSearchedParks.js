
export default async function loadParks(userState, userPark){
  await userState.findStateParks();
  await renderParks(userState)
  await clickPark(userState, userPark);
}

function renderParks(userState){
    for(let park of userState.parks){
      const parkList = document.getElementById('park-list_searchpage')
  
      const parkContainer = document.createElement('div'); 
      parkContainer.classList.add('park');
      parkContainer.setAttribute('id', `${park.id}`)
  
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

function clickPark(userState, userPark){
  const parks = userState.parks; 
  const parkElements = document.querySelectorAll('.park');

  for(let parkElement of parkElements ){
    parkElement.addEventListener('click', ()=>{
      const id = parkElement.getAttribute('id')
      for(let park of parks){
        if(id === park.id){
          userPark = park;
           loadParkInfoPage(userPark)
        }
      }
    })
  }
} 

async function loadParkInfoPage(userPark){
  localStorage.setItem('parkSelected', `${userPark.id}`)
  await window.location.assign('parkInfo.html')
}