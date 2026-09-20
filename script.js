const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeAPILimit = 151;
const pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");

async function fetchPokemons() {
    const respons = await fetch(
        pokeAPIURL + `?limit=${pokeAPILimit}&offset=${pokeAPIOffset}`
    );
    if (!respons.ok) {
        return console.error("All Pokemons are hidden");
    } else {
        console.log("Pokemon found. Now Catch them all");
    }
    const responsJson = await respons.json();
    const PokemonData = responsJson.results;
    console.log(PokemonData);
    return PokemonData;
}

function renderPokemonCards(pokemonData) {
    for (let index = 0; index < pokemonData.length; index++) {
        pokemonList.innerHTML += getPokemonCards(pokemonData[index]);
    }
}

async function init() {
    const pokemonData = await fetchPokemons();
    renderPokemonCards(pokemonData);
}