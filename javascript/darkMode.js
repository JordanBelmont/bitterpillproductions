let swtch = document.querySelector('.check');
let ball = document.querySelector('.ball');

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
   } else {
      localStorage.setItem('theme', 'dark-theme');
      document.body.classList.add('dark-theme');
   }
});