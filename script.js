const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeMaxLimit = 151;
const pokeAPILimit = 40;
let pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");
let catchedPokemon = [];

async function fetchPokemon() {
    let pokeCurrentLimit = pokeMaxLimit - pokeAPIOffset;
    if (pokeCurrentLimit <= pokeAPILimit) {
        pokeAPILimit = pokeCurrentLimit;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokeAPILimit}&offset=${pokeAPIOffset}`);
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
        const detailRespsonse = await fetch(data.results[index].url);
        const detailData = await detailRespsonse.json();
        catchedPokemon.push(detailData);
    }
    pokeAPIOffset += pokeAPILimit;
    console.log(pokeAPIOffset)
    console.log(catchedPokemon)
}

function renderPokemonList() {
    pokemonList.innerHTML = "";
    for (let index = 0; index < catchedPokemon.length; index++) {
        pokemonList.innerHTML += getPokemonCards(index);
    }
}

async function fetchMorePokemon() {
    if (pokeAPIOffset <= 151) {
        await fetchPokemon();
        renderPokemonList();
        updateCatchedPokemon();
    }
    console.log(catchedPokemon);
    console.log(pokeCurrentLimit);
}

function updateCatchedPokemon() {
    document.getElementById("catchedPokemonResult").innerHTML = catchedPokemon.length + " catched";
    if (pokeAPIOffset >= 151) {
        document.getElementById("loadMore").classList.add("load-more-hidden");
    }
}

async function init() {
    await fetchPokemon();
    renderPokemonList();
    updateCatchedPokemon();
}