var quotes = [
  "Ask not what your country can do for you but what you can do for your country. — John F. Kennedy",
  "Success is liking yourself, liking what you do, and liking how you do it. — Maya Angelou",
  "Remember no one can make you feel inferior without your consent. — Eleanor Roosevelt",
  "Imagination is more important than knowledge. — Albert Einstein",
  "Sometimes you can't see yourself clearly until you see yourself through the eyes of others. — Ellen DeGeneres"
];

function pickRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var element = document.getElementById("quotebox");

  element.innerHTML = randomQuote;
}
