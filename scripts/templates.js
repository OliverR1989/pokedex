function getPokemonCards(index) {
    return `<div class="pokemoncard">
                <div class="pokemoncard-headline">
                    <p class="pokemon-number">#${catchedPokemon[index].id}</p>
                    <p class="pokemon-name">${catchedPokemon[index].name}</p>
                </div>
                <div class="pokemoncard-img" onclick="">
                    <img src="" alt="${catchedPokemon[index].name}">
                </div>
                <div class="pokemoncard-types">
                    <p>height:</p>
                    <p>weight: </p>
                </div>
            </div>
`}