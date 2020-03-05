const navSlide = () => {
    const burger = document.querySelector('.burger');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.mynav')
    // const navLinks = document.querySelectorAll('.mynav li');

    burger.addEventListener('click',() => {
        menu.classList.toggle('nav-active');
    });

    close.addEventListener('click',() => {
        menu.classList.toggle('nav-active');
    });

}
navSlide() 