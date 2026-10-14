function getPokemonCards(index) {
    return `<div class="pokemoncard" onclick="openPokemoncard(${index})">
                <div class="pokemoncard-headline">
                    <p class="pokemon-number">#${catchedPokemon[index].id}</p>
                    <p class="pokemon-name">${catchedPokemon[index].name}</p>
                </div>
                <div class="pokemoncard-img img">
                    <img src="${catchedPokemon[index].sprites.versions["generation-i"]["red-blue"]["front_default"]}" alt="${catchedPokemon[index].name}">
                </div>
                <div class="pokemoncard-types"> ${getPokemonTypes(index)}
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
                        <div class="pokemondetailcard-types"> ${getPokemonTypes(index)}</div>
                    </div>
                    <div class="pokemondetailcard-footer">
                        <div class="pokemondetailcard-stats">
                            <div class="pokemondetailcard-abilities">
                                ${getPokemonAbilities(index)}
                            </div>
                            <div class="pokemondetailcard-stat">
                                ${getPokemonStats(index)}
                            </div>
                            <div class="pokemondetailcard-height-weight">
                                <p class="pokemon-height">height: ${catchedPokemon[index].height/10} m</p>
                                <p class="pokemon-weight">weight: ${catchedPokemon[index].weight/10} kg</p>
                            </div>
                        </div>
                    </div>
                    <div class="pokemondetailcard-navbar">
                        <button class="last-btn" onclick="previousPokemoncard()">Prev</button>
                        <button  class="next-btn" onclick="nextPokemoncard()">Next</button>
                    </div>
                </div>
`
}