let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
// creates a div called 'lightbox' in the body

let images = document.querySelectorAll('.gallery-image-1, .gallery-image-2, .gallery-image-3')
// select all elements with certain classes
images.forEach(image => {
   image.addEventListener('click', e => {
      lightbox.classList.add('active')
      let img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
   })
})

lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget) return
   lightbox.classList.remove('active')
})