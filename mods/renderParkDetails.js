
export default function(parkDetails){
  const parkDetailsCont = document.querySelector('.park-details'); 
  let detailArray;
  let iconArray;

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

  switch(parkDetails.description){
    case parkDetails.description: 
    createDetailName('Description', parkDetailsCont);
    if(parkDetails.description){
    createDetailParagrah('Description', parkDetails.description, parkDetailsCont)
    }
    case '':
    console.log('huh')
    break
  }

    createDetailName('Contact', parkDetailsCont);
    if(parkDetails.contact){
    detailArray = [parkDetails.contact.phoneNum, parkDetails.contact.emailAddress];
    iconArray = ['<i class="fa-solid fa-mobile-screen-button phone"></i>', '<i class="fa-solid fa-envelope email"></i>' ]
    createDetailList('contact', detailArray, parkDetailsCont, iconArray); 
    }
    createDetailName('Address & Directions', parkDetailsCont);
    if(parkDetails.address){
    detailArray = [`${parkDetails.address.line1}, ${parkDetails.address.city} ${parkDetails.address.stateCode} ${parkDetails.address.postalCode}`, parkDetails.directions];
    createDetailList('addressDirections', detailArray, parkDetailsCont)
    }
    createDetailName('Operating Hours', parkDetailsCont);
    if(parkDetails.hours){
    createDetailParagrah('operatingHours', parkDetails.hours, parkDetailsCont)
    }
    createDetailName('Weather', parkDetailsCont);
    if(parkDetails.weather){
    createDetailParagrah('weather', parkDetails.weather, parkDetailsCont)
    }
  switch(parkDetails.fees){
    case [parkDetails.fees]:
    createDetailName('Fees', parkDetailsCont);
    createDetailParagrah('fees', parkDetails.fees, parkDetailsCont );
  }
}

function createDetailName(title, parkDetailsCont){
  const detailsCont = document.createElement('section');
  detailsCont.classList.add('detail');
  detailsCont.setAttribute('id', `${title}`);
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

function createDetailParagrah(title, key, parkDetailsCont){
  const paragraphElement = document.createElement('p');
  paragraphElement.setAttribute('id', `${title}-info`)
  paragraphElement.innerText = `${key}`;
  parkDetailsCont.append(paragraphElement)
}

function createDetailList(title, liArray, parkDetailsCont, iconArray) {
  const ulElement = document.createElement('ul');
  ulElement.classList.add(`${title}-ul`); 
  parkDetailsCont.append(ulElement)

  for(let li of liArray){
    const liElement = document.createElement('li');
    if(iconArray){
      const liHTML = `<li class="${title}-li">${iconArray[liArray.indexOf(li)]} ${li}</li>`
      liElement.innerHTML = liHTML
    } else {
      liElement.classList.add(`${title}-li`);
      liElement.innerText = `${li}`
    }
    ulElement.append(liElement)
  } 
}
