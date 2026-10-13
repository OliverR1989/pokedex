function getPokemonCards(index) {
    return `<div class="pokemoncard" onclick=openPokemoncard(${index})>
                <div class="pokemoncard-headline">
                    <p class="pokemon-number">#${catchedPokemon[index].id}</p>
                    <p class="pokemon-name">${catchedPokemon[index].name}</p>
                </div>
                <div class="pokemoncard-img img" onclick="playPokemonCry(${index})">
                    <img src="${catchedPokemon[index].sprites.versions["generation-i"]["red-blue"]["front_default"]}" alt="${catchedPokemon[index].name}">
                </div>
                <div class="pokemoncard-types" id="pokemoncard-types"> ${getPokemonTypes(index)}
                </div>
            </div>
`}

function getPokemonDetailCard(index) {
    return `<div class="pokemondetailcard-wrapper">
                    <div class="pokemondetailcard-header">
                        <button onclick="closePokemoncard()">close</button>
                    </div>
                    <div class="pokemondetailcard-main" onclick="playPokemonCry(${index})">
                        <img src="${catchedPokemon[index].sprites["other"]["official-artwork"].front_default}" alt="${catchedPokemon[index].name}">
                        <div class="pokemondetailcard-headline">
                        <p class="pokemon-number">#${catchedPokemon[index].id}</p>
                        <p class="pokemon-name">${catchedPokemon[index].name}</p>
                        </div>
                        <div class="pokemondetailcard-types" id="pokemoncard-types"> ${getPokemonTypes(index)}</div>
                    </div>
                    <div class="pokemondetailcard-footer">
                        
                        <div class="pokemondetailcard-"
                    </div>
                </div>
`
}