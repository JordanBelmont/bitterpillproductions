// ANSWERS INPUT

const store = {}
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

document.getElementById('sathoth-form').addEventListener('submit', function () {
   let question = document.getElementById("sathoth-input").value
   if (input.value.length < 1) {
      alert("Enter a question");
      return;
   } if (question.indexOf("?") != -1) {
      const number = store[question] || Math.floor(Math.random() * 15)
      store[question] = number
      event.preventDefault();
      document.getElementById("sathoth-answer").textContent = answers[number]
   } else {
      alert("Use a question mark at the end of the question")
      event.preventDefault();
   }
});

// PREVENT NUMBER INPUT

document.getElementById('form').onkeypress = function (e) {
   e = e || window.event;
   var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
   var charStr = String.fromCharCode(charCode);
   if (/\d/.test(charStr)) {
      return false;
   }
};


