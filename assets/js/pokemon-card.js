const cardPokemon = document.getElementById('cardPokemon');
const urlParams = new URLSearchParams(window.location.search);
const dataNumber = urlParams.get('dataNumber');
const url = "https://pokeapi.co/api/v2/pokemon/";

function convertPokemonCard(pokemon) {
    return`
    <div class= "pokemon-card ${pokemon.type}">
          <span class="name">${pokemon.name}</span>
          <span class="number">#${pokemon.number}</span>

          <div class="detail">
            <ol class = "types"> 
                 ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img
              src="${pokemon.photo}"
              alt="${pokemon.name}">
          </div>
          <div class="about">
            <a class="sobre">Sobre<a>
            <hr></hr>
            <ol class="about-lista">
                    <li>
                        <span> Species </span> 
                        <strong> ${pokemon.name} </strong> 
                    </li>
                    <li>
                        <span> Height </span> 
                        <strong> ${pokemon.height}cm </strong> 
                    </li>
                    <li>
                        <span> Weight </span> 
                        <strong> ${pokemon.weight / 10}kg </strong> </li>
                    <li>
                        <span> Abilities </span> 
                        <strong> ${pokemon.abilities} </strong> 
                    </li>
            </ol>
          </div>
    </div>
    `
}

function loadPokemonDetail(url) {
    pokeApi.getPokemonDetailCard(url).then((pokemonDetail) => {
        //TIRAR DEPOIS
        console.log(pokemonDetail);
        cardPokemon.innerHTML = convertPokemonCard(pokemonDetail);
    });
}

loadPokemonDetail(url + dataNumber)
