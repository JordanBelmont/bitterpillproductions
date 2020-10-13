const nav = document.getElementById('navBurger');
const burger = document.getElementById('burger');

   burger.addEventListener('click', () => {
      nav.classList.toggle('phone-nav');
   });