export default function mobileDisplayDetails(parkDetails){
  let details = document.querySelectorAll('.detail');
  for(let detail of details){
    detail.addEventListener('click', ()=>{
      const detailInfo = document.querySelector(`#${detail.id}-info`)
      detailInfo.classList.toggle('hidden')
    })
  }

}