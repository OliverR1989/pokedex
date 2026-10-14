const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon";
const pokeMaxLimit = 151;
const pokeAPILimit = 40;
let pokeAPIOffset = 0;
const pokemonList = document.getElementById("pokemoncards");
let catchedPokemon = [];
let currentPokemonIndex = 0;

async function fetchPokemon() {
    let pokeCurrentLimit = pokeMaxLimit - pokeAPIOffset;
    if (pokeAPILimit <= pokeCurrentLimit) {
        pokeCurrentLimit = pokeAPILimit;
    }
    const response = await fetch(`${pokeAPIURL}?limit=${pokeCurrentLimit}&offset=${pokeAPIOffset}`);
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
        const detailResponse = await fetch(data.results[index].url);
        const detailData = await detailResponse.json();
        catchedPokemon.push(detailData);
    }
    pokeAPIOffset += pokeAPILimit;

    console.log(catchedPokemon)
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

function getPokemonTypes(index) {
    let pokemonTypes = "";

    for (let typeIndex = 0; typeIndex < catchedPokemon[index].types.length; typeIndex++) {
        pokemonTypes += `<p>${catchedPokemon[index].types[typeIndex].type.name}</p>`;
    }
    return pokemonTypes;
}

function getPokemonAbilities(index) {
    let pokemonAbilities = "";

    for (let abilityIndex = 0; abilityIndex < catchedPokemon[index].abilities.length; abilityIndex++) {
        pokemonAbilities += `<p>${catchedPokemon[index].abilities[abilityIndex].ability.name}</p>`;
    }
    return pokemonAbilities;
}

function getPokemonStats(index) {
    let pokemonStats = "";

    for (let statIndex = 0; statIndex < catchedPokemon[index].stats.length; statIndex++) {
        pokemonStats += `<div class="pokemon-stats"><p>${catchedPokemon[index].stats[statIndex].stat.name}</p>
                            <p>${catchedPokemon[index].stats[statIndex].base_stat}</p></div>`;
    }
    return pokemonStats;
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
    pokemonCard.classList.remove("pokemondetailcard-modal-hidden");
    pokemonCard.classList.add("pokemondetailcard-modal")
    pokemonCard.showModal();
    currentPokemonIndex = index;
}

function closePokemoncard() {
    const pokemonCard = document.getElementById("modal");
    pokemonCard.classList.add("pokemondetailcard-modal-hidden");
    pokemonCard.classList.remove("pokemondetailcard-modal")
    pokemonCard.close();
}

function nextPokemoncard() {
    currentPokemonIndex = (currentPokemonIndex + 1) % catchedPokemon.length;
    openPokemoncard(currentPokemonIndex);
}

function previousPokemoncard() {
    currentPokemonIndex = (currentPokemonIndex - 1 + catchedPokemon.length) % catchedPokemon.length;
    openPokemoncard(currentPokemonIndex);
}

async function init() {
    await fetchPokemon();
    renderPokemonList();
    updateCatchedPokemon();
}