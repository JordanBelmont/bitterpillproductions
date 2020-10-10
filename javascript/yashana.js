// PLAY AUDIO ON LOAD

window.onload = function() {
   audio.volume = 0.2;
   document.getElementById("my_audio")
   audio.volume = 0.2;
   audio.play();
}

// PLAY AUDIO ON CLICK

document.getElementById("coinSlot").addEventListener("onClick", function play() {
   audio.play();
});