import loadParkDetailsAPI from "../../modules/loadParkDetailsAPI.js";
import renderParkDetails from "../../modules/renderParkDetails.js";
import mobileDisplayDetails from "../../modules/mobileDisplayDetails.js";

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