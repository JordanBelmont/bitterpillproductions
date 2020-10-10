// PLAY AUDIO ON CLICK

document.getElementById("coinSlot").addEventListener("click", function play() {
   let coin = document.getElementById("coin");
   let whisper = document.getElementById("whisper");
   coin.volume = 0.3;
   coin.play();
   setTimeout(function () { 
      whisper.volume = 0.2;
      whisper.play(); 
   }, 2700)
});

