function getPokemonCards(index) {
    return `<div class="pokemoncard">
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