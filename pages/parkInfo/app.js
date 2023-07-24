import loadParkDetailsAPI from "../../mods/loadParkDetailsAPI.js";
import renderParkDetails from "../../mods/renderParkDetails.js";
import mobileDisplayDetails from "../../mods/mobileDisplayDetails.js";

async function APP(){
  const parkCode = localStorage.getItem('parkSelected');
  let parkDetails = {
    code: parkCode,
    name: '', 
    photo: [],
    description: '',
    contact: {}, 
    directions: '',
    address: [],
    hours: '',
    weather: '',
    fees: '',
  }
  await loadParkDetailsAPI(parkCode, parkDetails)
  await renderParkDetails(parkDetails)
  await mobileDisplayDetails(parkDetails)
}

APP()