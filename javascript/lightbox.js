// CREATE LIGHTBOX

let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

// CLICK ON LIGHTBOX

let images = document.querySelectorAll('.gallery-image')
images.forEach(image => {
   image.addEventListener('click', () => {
      lightbox.classList.add('active')
      let img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
   })
});

// CLICK OFF LIGHTBOX

lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget) 
   return
   lightbox.classList.remove('active')
});

document.addEventListener('keyup', e => { 
   if (e.key == 27)
   return
   lightbox.classList.remove('active');
});