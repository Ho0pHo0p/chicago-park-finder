// ------- GLOBAL VARIABLES -------
key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2'

// DOM query selectors 

const featureContainer = document.querySelector('.features-list'); 
const featureExpand = document.querySelector('.features-expand');
const searchMenu = document.querySelector('.search-menu'); 
const filterBtn = document.querySelector('.fa-filter');
const searchBar = document.querySelector('#search-bar');
const emblem = document.querySelector('.fa-tree');

// Objects 

const parks = {
  name: [],
  id: [],
  description: [],
  images: [],
}

const activity = {
  id: [],
  name:[]
}

const stateCodes = {
  name: [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ],
  code: [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS","MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY","NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ],
}
/*--- EVENT LISTENERS ----*/

function searchFormFunc() {
  const searchForm = document.getElementById("search-form");
  searchBar.addEventListener("focus", ()=> {
    searchMenu.classList.remove("hidden"); 
  });
  searchForm.addEventListener("submit", searchSubmit);

  function searchSubmit(e) {
    e.preventDefault();
    let userStateChoice = searchBar.value;
    for(let i=0; i < stateCodes.name.length; i++){
      if (userStateChoice === stateCodes.name[i]){
        let userStateCode =  stateCodes.code[i].toLocaleLowerCase()
        loadParks(userStateCode);
        userStateCode = ''; 
      }
    }
  }
}


searchFormFunc();


/*----- FUNCTIONS----*/

// auto-complete-state
function autoCompleteState() {
  let userInput = document.getElementById("search-bar");
  const stateContainer = document.getElementById("state-list");
  userInput.addEventListener('input', autoCompleteMe);
  stateContainer.addEventListener('click', selectItem);


  function autoCompleteMe({target}){
    let data = target.value;
    stateContainer.innerHTML = ''
    if (data.length){
      let autoCompleteValues = autoCompleteCheck(data); 
      autoCompleteValues.forEach(value => {addItem(value); });
    }
  }
  
  function autoCompleteCheck(inputValue){
    let stateNames = stateCodes.name; 
    let states = [...stateNames]
    return states.filter (
      value => value.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  function addItem(value){
    let newState = document.createElement('li');
    newState.innerText = `${value}`
    stateContainer.append(newState)
  }

  function selectItem({ target }) {
    if (target.tagName === 'LI') {
      userInput.value = target.innerText; 
      stateContainer.innerHTML = '';
    }
  }
}


//auto-complete-park
// function autoCompletePark() {
//   let userInput = document.getElementById("search-bar");
//   const parkContainer = document.getElementById("park-list");
//   userInput.addEventListener('input', autoCompleteMe);
//   parkContainer.addEventListener('click', selectItem);


//   function autoCompleteMe({target}){
//     let data = target.value;
//     parkContainer.innerHTML = ''
//     if (data.length){
//       let autoCompleteValues = autoCompleteCheck(data); 
//       autoCompleteValues.forEach(value => {addItem(value); });
//     }
//   }
  
//   function autoCompleteCheck(inputValue){
//     let parkNames = parks.name; 
//     let park = [...parkNames]
//     return park.filter (
//       value => value.toLowerCase().includes(inputValue.toLowerCase())
//     );
//   }

//   function addItem(value){
//     let newPark = document.createElement('li');
//     newPark.innerText = `${value}`
//     parkContainer.append(newPark)
//   }

//   function selectItem({ target }) {
//     if (target.tagName === 'LI') {
//       userInput.value = target.innerText; 
//       parkContainer.innerHTML = ''
//     }
//   }
// }

//Features
featureExpand.addEventListener('click', (e)=>{
  loadActivity();
})


// NPS API
async function loadActivity() {

  const activityApi = `https://developer.nps.gov/api/v1/activities?&api_key=${key}`;

  axios.get(activityApi)
    .then((res) => {
      console.log('response', res);

      for (let i = 0; i < res.data.data.length; i++) {
        activity.id[i] = res.data.data[i].id;
        activity.name[i] = res.data.data[i].name;

        const newActivity = document.createElement('li');
        newActivity.classList.add('act-feature');
        newActivity.innerText = `${activity.name[i]}`;

        featureContainer.append(newActivity);
      }

    })
    .catch((e) => {
      console.log("error", e);
    });

}

async function loadParks(userStateCode) {
  const parksApi = `https://developer.nps.gov/api/v1/parks?stateCode=${userStateCode}&api_key=${key}`;

  axios.get(parksApi)
    .then((res)=> {
      console.log(res)

      for (let i = 0; i < res.data.data.length; i++) {
        parks.id[i] = res.data.data[i].id;
        parks.name[i] = res.data.data[i].fullName;
        parks.description[i] = res.data.data[i].description;
        parks.images[i] = res.data.data[i].images
      }
    })

    .catch((e) => {
      console.log("error", e);
    });
  
}


/*---RUN FUNCTIONS---*/

autoCompleteState();
// autoCompletePark();
