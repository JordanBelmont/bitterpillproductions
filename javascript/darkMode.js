// Dark Mode Toggle

let swtch = document.querySelector('.check');
let logo = document.querySelector('.pill');
let logoLight = "icons/logo/bitterpill-light.png";
let logoDark = "icons/logo/bitterpill-dark.png";


let currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark-theme") {
   document.body.classList.add("dark-theme");
   swtch.checked = true;
}

swtch.addEventListener("click", () => {
   if (document.body.classList.contains("dark-theme")){
      localStorage.setItem('theme', '');
      document.body.classList.remove('dark-theme');
      swtch.classList.remove('checked');
      logo.src = logoLight;
      logo.classList.remove('pill-dark');

   } else {
      localStorage.setItem('theme', 'dark-theme');
      document.body.classList.add('dark-theme');
      logo.src = logoDark;
      logo.classList.add('pill-dark');
   }
});