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

const activity = {
  id: [],
  name:[]
}

const stateCodes = {
  name: [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ],
  code: [
    "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"
  ],
}
/*--- EVENT LISTENERS ----*/
searchBar.addEventListener("focus", ()=> {
  searchMenu.classList.remove("hidden"); 
})


/*----- FUNCTIONS----*/

// auto-complete
function autoComplete() {
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
      stateContainer.innerHTML = ''
    }
  }
}

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

/*---RUN FUNCTIONS---*/

autoComplete();