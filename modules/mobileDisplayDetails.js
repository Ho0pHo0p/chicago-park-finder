export default function mobileDisplayDetails(parkDetails){
  console.log('1')
  let details = document.querySelectorAll('.detail');
  console.log(details)

  for(let detail of details){
    detail.addEventListener('click', ()=>{
      const detailInfo = document.querySelector(`#${detail.id}-info`)
      detailInfo.classList.toggle('hidden')
    })
  }

}