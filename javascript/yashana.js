// PLAY AUDIO ON LOAD

window.onload = function() {
   document.getElementById("my_audio").play();
}

// PLAY AUDIO ON CLICK

document.getElementById("coinSlot").addEventListener("onClick", function play() {
   audio.play();
});