const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeMaxLimit = 151;
const pokeAPILimit = 40;
let pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");
let catchedPokemon = [];
let currentPokemonIndex = 0;

async function fetchPokemon() {
    const pokeCurrentLimit = getCurrentLimit();
    const response = await fetch(`${pokeAPIURL}?limit=${pokeCurrentLimit}&offset=${pokeAPIOffset}`);
    const data = await response.json();
    const pokemonPromises = [];
    
    for (let index = 0; index < data.results.length; index++) {
        pokemonPromises.push(fetchPokemonDetail(data.results[index].url));
    }

    const loadedPokemon = await Promise.all(pokemonPromises);
    addToCatchedPokemon(loadedPokemon);
    pokeAPIOffset += pokeCurrentLimit;
}

function addToCatchedPokemon(newPokemon) {
   for (let index = 0; index < newPokemon.length; index++) {
        catchedPokemon.push(newPokemon[index]);
    }
}

function getCurrentLimit() {
    let pokeCurrentLimit = pokeMaxLimit - pokeAPIOffset;
    if (pokeAPILimit <= pokeCurrentLimit) {
        pokeCurrentLimit = pokeAPILimit;
    }
    return pokeCurrentLimit;
}

async function fetchPokemonDetail(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function renderPokemonList() {
    pokemonList.innerHTML = "";
    for (let index = 0; index < catchedPokemon.length; index++) {
        pokemonList.innerHTML += getPokemonCards(index);
    }
}

async function fetchMorePokemon() {
    if (pokeAPIOffset <= pokeMaxLimit) {
        await fetchPokemon();
        renderPokemonList();
        updateCatchedPokemon();
    }
}

function playPokemonCry(index) {
    const pokemonCries = new Audio(catchedPokemon[index].cries.legacy);
    pokemonCries.volume = 0.1;
    pokemonCries.play();
}

function updateCatchedPokemon() {
    document.getElementById("catchedPokemonResult").innerHTML = catchedPokemon.length + " catched";
    if (pokeAPIOffset >= pokeMaxLimit) {
        document.getElementById("loadMore").classList.add("load-more-hidden");
    }
}

function openPokemoncard(index) {
    const pokemonCard = document.getElementById("modal");
    pokemonCard.innerHTML = getPokemonDetailCard(index);
    if (pokemonCard.open === false) {
        pokemonCard.showModal();
    }
    currentPokemonIndex = index;
}

function closePokemoncard() {
    const pokemonCard = document.getElementById("modal");
    pokemonCard.close();
}

function closeOnBackdropClick(event) {
    const pokemonCard = document.getElementById("modal");
    if (event.target === pokemonCard) {
        closePokemoncard();
    }
}

function nextPokemoncard() {
    currentPokemonIndex = (currentPokemonIndex + 1) % catchedPokemon.length;
    openPokemoncard(currentPokemonIndex);
}

function previousPokemoncard() {
    currentPokemonIndex = (currentPokemonIndex - 1 + catchedPokemon.length) % catchedPokemon.length;
    openPokemoncard(currentPokemonIndex);
}

function searchPokemon() {
    const pokemonValue = document.getElementById("pokemonName").value;
    const pokemonResult = pokemonValue.toLowerCase().trim();
    if (pokemonResult.length < 3) {
        document.getElementById("loadMore").classList.remove("load-more-hidden");
        updateCatchedPokemon();
        renderPokemonList();
        return;
    }
    document.getElementById("loadMore").classList.add("load-more-hidden");
    renderFoundPokemon(pokemonResult);
}

function renderFoundPokemon(pokemonResult) {
    let foundPokemon = "";

    for (let index = 0; index < catchedPokemon.length; index++) {
        if (catchedPokemon[index].name.includes(pokemonResult)) {
            foundPokemon += getPokemonCards(index);
        }
    }
    if (foundPokemon === "") {
        pokemonList.innerHTML = `<p class="no-pokemon">No Pokemon found</p>`;
    } else {
        pokemonList.innerHTML = foundPokemon;
    }
}

async function init() {
    await fetchPokemon();
    renderPokemonList();
    updateCatchedPokemon();
}