// ------- GLOBAL VARIABLES -------
const key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2'

// DOM query selectors 

const featureContainer = document.querySelector('.features-list'); 
const featureExpand = document.querySelector('.features-expand');
const searchMenu = document.querySelector('.search-menu'); 
const filterBtn = document.querySelector('.fa-filter');
const searchBar = document.querySelector('#search-bar');
const submitBtn = document.getElementById('submit-btn');
const emblem = document.querySelector('.fa-tree');
const parkContainer = document.getElementById("park-list");
const stateContainer = document.getElementById('state-list')
const searchLabel = document.getElementById('search-label');
const searchForm = document.getElementById("search-form");

// Local Storage 

let userStateCode = '';
let userParkChoice = '';
let parkId = '';

// Objects 

const parks = {
  name: [],
  id: []
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

/*---  Functions ----*/

function searchSubmit(e) {
  e.preventDefault();
  let userStateChoice = searchBar.value;
  for(let i=0; i < stateCodes.name.length; i++){
  if (userStateChoice.toLowerCase() === stateCodes.name[i].toLocaleLowerCase()){
      let userStateCode = stateCodes.code[i].toLowerCase();
      loadParksByState(userStateCode);
      userStateCode = ``

    }
  }
}


function autoCompleteState() {
  let userInput = document.getElementById("search-bar");
  const stateContainer = document.getElementById("state-list");
  let parkContainer = document.getElementById("park-list");

  userInput.addEventListener('input', autoCompleteMe);
  stateContainer.addEventListener('click', selectItem);

  function autoCompleteMe({target}){

    parkContainer.innerHTML = ''
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

  function selectItem(e) {
    if (e.target.tagName === 'LI') {
      userInput.value = e.target.innerText; 
      stateContainer.innerHTML = '';
      searchSubmit(e);
    }
  }
}


function loadStates () {
  let states = stateCodes.name; 
  for (let state of states){
    let initialStates = document.createElement('li');
    initialStates.innerText=`${state}`
    stateContainer.append(initialStates)
  }
}

async function loadParksByState(userStateCode) {
  const parksApi = `https://developer.nps.gov/api/v1/parks?stateCode=${userStateCode}&api_key=${key}`;
  const stateContainer = document.getElementById("state-list");

  axios.get(parksApi)
    .then((res)=> {
      console.log(res)

      for (let i = 0; i < res.data.data.length; i++) {
        parks.id[i] = res.data.data[i].id;
        parks.name[i] = res.data.data[i].fullName;
      }
      stateContainer.innerHTML = `<li>${userStateCode.toUpperCase()}</li>`
      parkContainer.innerHTML= ''

      for (let i=0; i < parks.name.length; i++) {
        let stateParkItem = document.createElement('li');
        stateParkItem.innerText = `${parks.name[i]}`
        parkContainer.append(stateParkItem);

        localStorage.setItem("userState", `${userStateCode}`)

        stateParkItem.addEventListener("click", ()=>{
          
        })
      }
    })
    .catch((e) => {
      console.log("error", e);
    });
  
}

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


/*---RUN FUNCTIONS---*/

searchForm.addEventListener("submit", searchSubmit);

featureExpand.addEventListener('click', (e)=>{
  loadActivity();
})

parkContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI'){
    const userParkChoice = e.target.innerText; 
    console.log(userParkChoice);
    localStorage.setItem("userParkChoice", `${userParkChoice}`);
    for (let i= 0; i < parks.name.length; i++){
      if (parks.name[i] === userParkChoice) {
        localStorage.setItem("parkId", `${parks.id[i]}`); 
      }
    }
  }
})

searchForm.addEventListener("focus", ()=> {
    searchMenu.classList.remove("hidden");
})

searchBar.addEventListener("input", ()=> {
  searchMenu.classList.remove("hidden");
})

loadStates();
autoCompleteState();





