// This is the array that will hold the quotations.
var quotes = [];

function pickRandomQuote() {
  /*
    We haven't talked about the Math keyword but it can do some really cool things.

    (Math.random() * quotes.length) picks a random number from 0 to the number
    given. However, the number it picks will be a decimal point number, not an
    integer (whole number).

    Math.floor() returns the integer that is less than or equal
    to the number that Math.random() generates.

    Try using Math.random * a number on your console to see it work, then try it
    with Math.floor.
  */
  var i = Math.floor(Math.random() * quotes.length);

  // Create a variable that will use the random number to get a quote from the
  // quotes array.

  // Add the random quote to the HTML using a DOM method.
}
