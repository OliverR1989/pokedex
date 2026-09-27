const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeMaxLimit = 151;
const pokeAPILimit = 40;
let pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");
let catchedPokemon = [];

async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeAPILimit}&offset=${pokeAPIOffset}`);
    const data = await response.json();

    for (let index = pokeAPIOffset; index < data.results.length; index++) {
        const detailRespsonse = await fetch(data.results[index].url);
        const detailData = await detailRespsonse.json();
        catchedPokemon.push(detailData);
    }
    pokeAPIOffset += pokeAPILimit;
    console.log(pokeAPIOffset)
    console.log(catchedPokemon)
}

function renderPokemonList() {
    for (let index = 0; index < catchedPokemon.length; index++) {
        pokemonList.innerHTML += getPokemonCards(index);
    }
}

async function fetchMorePokemon() {
    if (pokeAPIOffset <= 151) {
        
    } else {
        document.getElementById("loadMore").classList.add("load-more-hidden");
    }
   }

function updateCatchedPokemon() {
    document.getElementById("catchedPokemonResult").innerHTML = catchedPokemon.length + " catched";
}

async function init() {
    await fetchPokemon();
    renderPokemonList();
    updateCatchedPokemon();
}