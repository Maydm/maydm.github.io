var input = document.getElementById("pokemonToGet");
input.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    getPokemon();
  }
});

function getPokemon() {
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

  var typesList = [];
  pokemon.types.forEach(function(type) {
    typesList.push(`<li>${type.type.name}</li>`);
  });

  name.innerHTML = pokemon.name;
  height.innerHTML = pokemon.height;
  weight.innerHTML = pokemon.weight;
  image.src = pokemon.sprites.front_default;
  type.innerHTML = typesList ? typesList.join("") : "";
}
