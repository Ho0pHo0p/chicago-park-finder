export default function backButton(prevPage){
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', ()=>{
    window.location.assign(`${prevPage}`)
  })

}