const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2'
const userStateCode = localStorage.getItem("userState"); 
const userParkChoice = localStorage.getItem("userParkChoice");
const parkId = localStorage.getItem("parkId"); 


const park = {
  activites: [],
  addresses: [],
  contacts: [],
  description: '',
  directionsInfo: '',
  directionsURL: '',
  entranceFees: [],
  id: '',
  images: [],
  name: '',
  parkCode: '', 
  states: '',
  topics: [],
  url: '',
  weatherInfo: ''
}

const loadUserPark = async function () {
  const parksApi = `https://developer.nps.gov/api/v1/parks?q=${parkId}&api_key=${key}`;

  axios.get(parksApi)
    .then ((res)=>{
      console.log(res);
      let data = res.data.data;
      
      park.id = data[0].id; 
      park.name = data[0].fullName;
      park.description = data[0].description;
      park.images = data[0].images;
      park.addresses = data[0].addresses;
      park.directionsURL = data[0].directionsURL;
      park.contacts = data[0].contacts;
      park.url = data[0].url;

      console.log(park)

      renderData();
    })
}

const renderData = function () {
  /* Title*/
  const title = document.getElementById('title'); 
  title.innerText = `${park.name}`;

  /* Address*/
  const address = document.getElementById('address');
  let parkAds = park.addresses

  for (let i=0; i < parkAds.length; i++){
    if (parkAds[i].type.toLowerCase() == 'physical'){
    address.innerText = `${parkAds[i].line1}, ${parkAds[i].line2} ${parkAds[i].line3}, ${parkAds[i].city}, ${parkAds[i].stateCode} ${parkAds[i].postalCode}`
    }
  }
  if (park.directionsURL){
    address.setAttribute('href', `${park.directionsURL}`)
    }
  
  /* Contact */
  const contact = document.querySelector('.contact-container'); 

  const phoneNumber = document.createElement('a');
  phoneNumber.innerText = `${park.contacts.phoneNumbers[0].phoneNumber}`;

  const website = document.createElement('p')
  website.innerText = `${park.url}`;

  const email = document.createElement('p'); 
  email.innerText = `${park.contacts.emailAddresses[0].emailAddress}`

  contact.append(phoneNumber, website, email)

  /* History */ 
  

}


//RUN FUNCTIONS

loadUserPark()