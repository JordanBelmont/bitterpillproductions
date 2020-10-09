let store = {}
let answers = [
   "Indubitably",
   "Yes, at a price",
   "I would bet your life on it",
   "Oh why not, I'm feeling generous",
   "By the Plateaus of Leng, it shall be so",
   "I'll allow it",
   "Ask nicely",
   "Pointless questions beget pointless answers",
   "You not knowing is half my fun",
   "Don't waste our time",
   "Some things are best left a mystery",
   "Your mind couldn't possibly comprehend",
   "Not today, mortal",
   "It will never come to pass",
   "I think not",
   "Only in your dreams",
   "I wouldn't hold my breath",
   "That's going to be a 'no'"
];

document.getElementById("sothothForm").addEventListener("submit", function (event) {
   let question = document.getElementById("input").value
   if (input.value.length < 1) {
      alert("Enter a question");
      return;
   } if (question.indexOf("?") != -1) {
      let number = store[question] || Math.floor(Math.random() * 15)
      store[question] = number
      event.preventDefault();
      document.getElementById("sothothAnswer").textContent = answers[number]
   } else {
      alert("Use a question mark at the end of the question")
      event.preventDefault();
   }
});

// PREVENT NUMBER INPUT

document.getElementById("sothothForm").addEventListener("keydown", e => {
   if (e.key.match(/\d/)) {
      e.preventDefault();
   }
});

// AUDIO ON SUBMIT

let audioSources = [
   "audio/ask-sothoth/voice1.mp3",
   "audio/ask-sothoth/voice2.mp3",
   "audio/ask-sothoth/voice3.mp3",
   "audio/ask-sothoth/voice4.mp3",
   "audio/ask-sothoth/voice5.mp3",
   "audio/ask-sothoth/voice6.mp3",
   "audio/ask-sothoth/voice7.mp3",
];


document.getElementById("sothothForm").addEventListener("submit", function play() {
   let audio = document.getElementById("audio")
   let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
   audio.src = audioSource;
   audio.play();
});