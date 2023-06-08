// ------- GLOBAL VARIABLES -------
key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2'

// DOM query selectors 

const featureContainer = document.querySelector('.features-list'); 
const featureExpand = document.querySelector('.features-expand');

const stateContainer = document.querySelector('#state-list');

const filterMenu = document.querySelector('.search-menu'); 
const filterBtn = document.querySelector('.fa-filter');
const searchBar = document.querySelector('.search-bar');
const emblem = document.querySelector('.fa-tree')

// Objects 

const activity = {
  id: [],
  name:[]
}

const stateCodes = {
  name: [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ],
  code: [
    'AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'
  ],
  li: [
  ]
}

// FUNCTIONS 

//Event Listeners 

featureExpand.addEventListener('click', (e)=>{
  
  loadActivity();
})


// search bar 
searchBar.addEventListener('focusin', ()=>{
  filterMenu.classList.remove('hidden')
})
searchBar.addEventListener('focusout', ()=>{
  filterMenu.classList.add('hidden')
})


// emblem 

stateAutoFill();
// NPS API 

function stateAutoFill() {
  for (state of stateCodes.name){
    const newState = document.createElement("li"); 
    newState.classList.add("state");
    newState.innerText=`${state}`;
    stateContainer.append(newState) 
  }
}

for (i=0; i<=49 ; i++ ){
    stateCodes.li[i] = stateContainer.children[i];
    stateCodes.li[i].addEventListener("click", (e) =>{
      console.log(e.target.innerText)
    })
}








const loadActivity = async ()=> {

  const activityApi = `https://developer.nps.gov/api/v1/activities?&api_key=${key}`

  axios.get(activityApi)
    .then ((res) => {
      console.log('response', res);

      for(let i = 0; i <res.data.data.length; i++){      
        activity.id[i] = res.data.data[i].id; 
        activity.name[i] = res.data.data[i].name; 

          const newActivity = document.createElement('li');
          newActivity.classList.add('act-feature')
          newActivity.innerText = `${activity.name[i]}` 
        
          featureContainer.append(newActivity)
          }

    })
    .catch ((e)=> {
      console.log("error", e);
    });

};