export default function header(){
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const mobileMenu = document.getElementById('page-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}