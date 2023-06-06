// ------- GLOBAL VARIABLES -------
key = 'haJKepRaRFghVDhjTDkpnQgsvc03Qs1gvXUL5PL2'

// DOM query selectors 

const featureContainer = document.querySelector('.features-list'); 
const featureExpand = document.querySelector('.features-expand');

const filterMenu = document.querySelector('.search-menu'); 
const filterBtn = document.querySelector('.fa-filter');
const searchBar = document.querySelector('.search-bar');
const emblem = document.querySelector('.fa-tree')

// Objects 

const activity = {
  id: [],
  name:[]
}



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
for ()




// NPS API 

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

