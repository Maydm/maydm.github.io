/*
  The function below will get the pokemon after the slash. You can run it on the
  browser console to see how it works. It's the same function you will use
  in the getPokemon function. There's some advanced JavaScript here, so it's
  okay if you don't get what's happening. The main thing to know is that
  "res" is what the server returns (the pokemon); "res.json" is what turns the
  response into an object; and it's then named "pokemon" and either sent to
  console.log (as the one below) or to the showPokemon function.

  fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);
    })
    .catch(err => console.error(err));

*/

// This "listens" for an Enter keypress from the input.
var input = document.getElementById("pokemonToGet");

input.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    getPokemon();
  }
});

function getPokemon() {
  // This is the same function that's described above. You don't need
  // to change anything in this function.

  var pokemon = document.getElementById("pokemonToGet").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemon => showPokemon(pokemon))
    .catch(err => console.log(err));
}

function showPokemon(pokemon) {
  var name = document.getElementById("PokemonName");
  var image = document.getElementById("PokemonImage");
  var height = document.getElementById("PokemonHeight");
  var weight = document.getElementById("PokemonWeight");
  var type = document.getElementById("PokemonList");

  /*
    This is where you will write your code to make the pokemon data
    show up on the Pokedex. The HTML IDs you will use to display the data
    are already given to you as variables. The console.log statement
    will allow you to see the pokemon object.
  */

  console.log(pokemon);
}
