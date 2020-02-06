const navSlide = () => {
  const toggle= document.querySelector('#toggle-js');
  const close = document.querySelector('.close');
  const nav = document.querySelector('#main-nav-js');


toggle.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
  });

  close.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    });
}



navSlide();

