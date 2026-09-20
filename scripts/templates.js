function getPokemonCards(pokemon, pokemonNumber) {
    return `<div class="pokemoncard">
                <div class="pokemoncard-headline">
                    <p class="pokemon-number">${pokemonNumber}</p>
                    <p class="pokemon-name">${pokemon.name}</p>
                </div>
                <div class="pokemon-img" onclick="pokemonCries(${pokemonNumber})">
                    <img src="${pokemonImageFrontGray + pokemonNumber}.png" alt="${pokemon.name}">
                </div>
                <div class="pokemon-stats">
                    <p>height: </p>
                    <p>weight: </p>
                </div>
            </div>
`}