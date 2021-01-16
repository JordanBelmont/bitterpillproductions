let nav = document.getElementById('navBurger');
let burger = document.getElementById('burgerButton');

   burger.addEventListener('click', () => {
      burger.classList.toggle('opened');
      burger.setAttribute('aria-expanded', nav.classList.contains('nav-ul'))
      nav.classList.toggle('nav-ul');
   });