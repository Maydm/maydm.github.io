var mammals = [];
var reptiles = [];
var birds = [];
var fish = [];

class Animal {
  constructor(type, legs, noise, color) {
    this.type = type;
    this.legs = legs;
    this.noise = noise;
    this.color = color;
  }

  makeNoise() {
    return this.noise;
  }
}

/*
  You've been given the Mammal class. Create classes for Fish, Reptiles, and
  Birds. Give each class the proper skin type. Think about where you should
  override the original constructor. (Hint: how many legs to fish have? How
  about birds?)

  Give each class a method that allows you to add it to add it to the proper
  array, then once you create an instance of the class (i.e., an animal), use
  that method to add it to the array.
*/

class Mammal extends Animal {
  constructor(type, legs, noise, color) {
    super(type, legs, noise, color);
    this.skin = "fur";
  }

  addToZoo() {
    mammals.push(this);
  }
}

/*
  Once you have created all of the classes of animals, create at least two of
  each type (2 Mammals, 2 Birds, 2 Fish, 2 Reptiles). One example is given for
  you. You can keep it or make a new animal!
*/

var elephant = new Mammal("elephant", 4, "trumpet", "gray");
elephant.addToZoo();

/*
  HTML elements for counting the number of animals. Make the element update
  to reflect the number of animals in each category. Hint: You'll need to use
  a DOM method to do this.
*/

var mammalCount = document.getElementById("mammal-count");
var reptileCount = document.getElementById("reptile-count");
var birdCount = document.getElementById("bird-count");
var fishCount = document.getElementById("fish-count");

/*
  This function will add each animal in an array to the page. The CSS class
  "animal" has been given to you. List the color, skin type, and noise of each
  animal. Hint: Since the "animals" are objects, you will need to use dot or
  bracket notation to access the properties.
*/

function listAnimals(array, domElement) {
  var htmlToAdd = "";
  array.forEach(animal => {
    htmlToAdd += `<div class="animal">
        <b>${animal.type}:</b>  <br />
        color:                  <br />
        skin type:              <br />
        noise:                  <br />
      </div>`;
  });
  document.getElementById(domElement).innerHTML = htmlToAdd;
}

/*
  Call the function for each array with the array name and the DOM element
  where the array should be added. This will add the info to the page.
*/
