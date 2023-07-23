
export default function(parkDetails){
  const parkDetailsCont = document.querySelector('.park-details'); 

  console.log(parkDetails)

  const parkNameElement = document.createElement('h3');
  parkNameElement.setAttribute('id', 'park-name')
  parkNameElement.innerText = `${parkDetails.name}`
  parkDetailsCont.append(parkNameElement)

  const parkImgElement = document.createElement('img');
  parkImgElement.classList.add('park-image');
  parkImgElement.setAttribute('src', `${parkDetails.photo[0].url}`);
  parkImgElement.setAttribute('alt', `${parkDetails.photo[0].altText}`);
  parkDetailsCont.append(parkImgElement); 

  createDetailName('Description', parkDetailsCont);
  createDetailName('Contact', parkDetailsCont);
  createDetailName('Address & Directions', parkDetailsCont);
  createDetailName('Operating Hours', parkDetailsCont);
  createDetailName('Weather', parkDetailsCont);
  createDetailName('Fees & Passes', parkDetailsCont);
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

function createDetailInfo(key, parkDetailsCont){
  
}