const offset = 0,
  limit = 3,
  url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
            <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>       
        </li>
    `;
}

const pokemonOl = document.getElementsByClassName('pokemons')[0];

  pokeapi.getPokemons().then((pokemons = []) => {

    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonOl.innerHTML = newHtml
})
