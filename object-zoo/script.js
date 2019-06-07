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

class Reptile extends Animal {
  constructor(type, legs, noise, color) {
    super(type, legs, noise, color);
    this.skin = "scales";
  }

  addToZoo() {
    reptiles.push(this);
  }
}

class Bird extends Animal {
  constructor(type, legs, noise, color) {
    super(type, legs, noise, color);
    this.skin = "feathers";
    this.wings = 2;
  }

  addToZoo() {
    birds.push(this);
  }
}

class Fish extends Reptile {
  constructor(type, legs, noise, color) {
    super(type, legs, noise, color);
    this.legs = 0;
    this.noise = "silence";
  }

  addToZoo() {
    fish.push(this);
  }
}

/*
  Once you have created all of the classes of animals, create at least two of
  each type (2 Mammals, 2 Birds, 2 Fish, 2 Reptiles). One example is given for
  you. You can keep it or make a new animal!
*/

let elephant = new Mammal("elephant", 4, "trumpet", "gray");
elephant.addToZoo();

let lion = new Mammal("lion", 4, "roar", "gold");
lion.addToZoo();

let monkey = new Mammal("monkey", 4, "whoop", "brown");
monkey.addToZoo();

let gorilla = new Mammal("gorilla", 4, "gibber", "black");
gorilla.addToZoo();

let alligator = new Reptile("alligator", 4, "roar", "olive");
alligator.addToZoo();

let snake = new Reptile("snake", 0, "hiss", "green");
snake.addToZoo();

let flamingo = new Bird("flamingo", 2, "honk", "pink");
flamingo.addToZoo();

let eagle = new Bird("eagle", 2, "scream", "white");
eagle.addToZoo();

let shark = new Fish("shark", 0, "", "gray");
shark.addToZoo();

let jellyfish = new Fish("jellyfish", 0, "", "pink");
jellyfish.addToZoo();

var mammalCount = document.getElementById("mammal-count");
mammalCount.innerHTML = mammals.length;

var reptileCount = document.getElementById("reptile-count");
reptileCount.innerHTML = reptiles.length;

var birdCount = document.getElementById("bird-count");
birdCount.innerHTML = birds.length;

var fishCount = document.getElementById("fish-count");
fishCount.innerHTML = fish.length;

function listAnimals(array, domElement) {
  var htmlToAdd = "";
  array.forEach(animal => {
    htmlToAdd += `<div class="animal">
        <b>${animal.type}:</b> <br />
        color: ${animal.color} <br />
        skin type: ${animal.skin} <br />
        noise: ${animal.noise} <br />
      </div>`;
  });
  document.getElementById(domElement).innerHTML = htmlToAdd;
}

listAnimals(mammals, "mammals-facts");
listAnimals(fish, "fish-facts");
listAnimals(birds, "birds-facts");
listAnimals(reptiles, "reptiles-facts");
