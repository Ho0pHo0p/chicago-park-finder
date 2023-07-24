
export default function(parkDetails){
  const parkDetailsCont = document.querySelector('.park-details'); 

  console.log(parkDetails)

  //Park Name
  const parkNameElement = document.createElement('h3');
  parkNameElement.setAttribute('id', 'park-name')
  parkNameElement.innerText = `${parkDetails.name}`
  parkDetailsCont.append(parkNameElement)

  //Park Image
  const parkImgElement = document.createElement('img');
  parkImgElement.classList.add('park-image');
  parkImgElement.setAttribute('src', `${parkDetails.photo[0].url}`);
  parkImgElement.setAttribute('alt', `${parkDetails.photo[0].altText}`);
  parkDetailsCont.append(parkImgElement); 
  renderDetailInfo(parkDetailsCont, parkDetails)
}


function renderDetailInfo(parkDetailsCont, parkDetails){
  let detailArray;
  let iconArray;
  let message;

  createDetailName('description','description', parkDetailsCont);
  createDetailParagrah('description', parkDetails.description, parkDetailsCont)

  createDetailName('contact', 'contact', parkDetailsCont);
    detailArray = [parkDetails.contact.phoneNum, parkDetails.contact.emailAddress];
    iconArray = ['<i class="fa-solid fa-mobile-screen-button phone"></i>', '<i class="fa-solid fa-envelope email"></i>']
    createDetailList('contact', detailArray, parkDetailsCont, iconArray); 

    createDetailName('address & directions','addressDirections', parkDetailsCont);
    detailArray = [`${parkDetails.address.line1}, ${parkDetails.address.city}, ${parkDetails.address.stateCode} ${parkDetails.address.postalCode}`, parkDetails.directions];
    iconArray = ['<i class="fa-solid fa-location-dot location"></i>', '']
    createDetailList('addressDirections', detailArray, parkDetailsCont, iconArray)

    createDetailName('operating hours', 'operatingHours', parkDetailsCont);
    createDetailParagrah('operatingHours', parkDetails.hours, parkDetailsCont)

    createDetailName('weather', 'weather', parkDetailsCont);
    if(parkDetails.weather){
    createDetailParagrah('weather', parkDetails.weather, parkDetailsCont); 
    } else {
      message = 'We are sorry! There is no information about the weather for this park'
      createDefault(message)
    }

    createDetailName('fees', 'fees', parkDetailsCont);
    if(!parkDetails.fees[0]){
      noInfo(`There are no fees at this park`, 'fees')
    } else {
      createDetailParagrah('fees', parkDetails.fees, 'fees');
    }

}

function createDetailName(title, id, parkDetailsCont){
  const detailsCont = document.createElement('section');
  detailsCont.classList.add('detail');
  detailsCont.setAttribute('id', `${id}`);
  const detailNameCont = document.createElement('div');
  detailNameCont.classList.add('detail-name'); 
  const detailName = document.createElement('p');
  detailName.innerText = `${title}`;
  const chevron =  document.createElement('span');
  const chevronHtml = `<span class="chevron"><i class="fa-solid fa-chevron-down"></i></span>`;
  chevron.innerHTML = `${chevronHtml}`;
  detailNameCont.append(detailName, chevron);
  detailsCont.append(detailNameCont);
  parkDetailsCont.append(detailsCont)
}

function createDetailParagrah(id, key, parkDetailsCont){
  const detailCont = document.getElementById(`${id}`);
  const paragraphElement = document.createElement('p');
  paragraphElement.setAttribute('id', `${id}-info`)
  paragraphElement.classList.add('detail-info')
  paragraphElement.innerText = `${key}`;
  if(paragraphElement.innerText === ''){
    noInfo(`We are sorry there is no information available about the ${id} at this park`, id)
  }
  detailCont.append(paragraphElement)
}

function createDetailList(id, liArray, parkDetailsCont, iconArray) {
  const detailCont = document.getElementById(`${id}`);
  const ulElement = document.createElement('ul');
  ulElement.classList.add(`${id}-ul`, 'detail-info');
  detailCont.append(ulElement);

  for(let li of liArray){
    const liElement = document.createElement('li');
    if(iconArray){
      const liHTML = `<li class="${id}-li">${iconArray[liArray.indexOf(li)]} ${li}</li>`
      liElement.innerHTML = liHTML
    } else {
      liElement.classList.add(`${id}-li`);
      liElement.innerText = `${li}`
    }
    ulElement.append(liElement)
  } 
}

function noInfo(message, id){
  const detailCont = document.getElementById(`${id}`);
  const messageElement = document.createElement('p');
  messageElement.classList.add(`detail-info`);
  messageElement.innerText = `${message}`
  detailCont.append(messageElement); 
}