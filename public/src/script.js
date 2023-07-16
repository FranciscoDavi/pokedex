


async function getPokemons(offset = 0, limit = 20){
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const {results} = await req.json();
    renderListPokemons(results);

}

function renderListPokemons(pokemons){
    const elem = document.getElementById("pokedex");
    pokemons.forEach(pokemon => {
        let list = document.createElement("li");
        list.addEventListener('click', () => getPokemon(pokemon.url));
        list.innerHTML = `${pokemon.name}`;
        elem.appendChild(list);
    });
}

async function getPokemon(url){
    const req = await fetch(url);
    const pokemon = await req.json();
    renderInfoPokemon(pokemon);
}



function renderInfoPokemon(pokemon){
    const {id, name, sprites, types, weight, height} = pokemon;
    const info = document.getElementById('info');
    info.innerHTML= '';
    info.innerHTML = `
        <h1>${id}. ${name}</h1>
        <span>${types.length == 1 ? types[0].type.name : types[0].type.name + ' ' + types[1].type.name}</span>
        <img src="${sprites.front_default}">
        <p>Height: ${height}'</p>
        <p>Weight: ${weight} LBS</p>
    `;

}