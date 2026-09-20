const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeAPILimit = 151;
const pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");
const pokemonImageFrontGray = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/";
const pokemonCriesLegacy = "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/"

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
        const pokemonIndex = index + pokeAPIOffset + 1;
        pokemonList.innerHTML += getPokemonCards(pokemonData[index], pokemonIndex);
    }
}

function pokemonCries(pokemonNumber) {
    const cries = new Audio(pokemonCriesLegacy + pokemonNumber + ".ogg");
    cries.play();
}

async function init() {
    const pokemonData = await fetchPokemons();
    renderPokemonCards(pokemonData);
}