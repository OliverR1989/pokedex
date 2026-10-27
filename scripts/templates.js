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
                        <button class="close-pokemoncard-btn" onclick="closePokemoncard()"></button>
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
                        <button class="prev-btn" onclick="previousPokemoncard()"></button>
                        <button  class="next-btn" onclick="nextPokemoncard()"></button>
                    </div>
                </div>
`}

function getPokemonTypes(index) {
    let pokemonTypes = "";

    for (let typeIndex = 0; typeIndex < catchedPokemon[index].types.length; typeIndex++) {
        pokemonTypes += `<p class="type ${catchedPokemon[index].types[typeIndex].type.name}">${catchedPokemon[index].types[typeIndex].type.name}</p>`;
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
        const stat = catchedPokemon[index].stats[statIndex];
        pokemonStats += `<div class="pokemon-stats">
                            <p>${stat.stat.name}:</p>
                            <div class="stats-line">
                                <div class="stats-line-fill" style="width:${getStatPercent(stat.base_stat)}%;"></div>
                            </div>
                            <p>${stat.base_stat}</p>
                        </div>`;
    }
    return pokemonStats;
}