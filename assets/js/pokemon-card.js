import { url } from './main.js';
const cardPokemon = document.getElementById('cardPokemon')
let urlCard = url

function convertPokemonCard(pokemon) {
    return`
          <span class="name">${pokemon.name}</span>
          <span class="number">#${pokemon.number}</span>

          <div class="detail">
            <ol class="types">
              <span class="type ${pokemon.type}">${pokemon.type}</span>
              <span class="type ${pokemon.type}">poison</span>
            </ol>

            <img
              src="${pokemon.photo}"
              alt="${pokemon.name}"
          </div>
          <ol class="about">
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
    `
}

function loadPokemonDetail(url) {
    console.log(url)
    pokeApi.getPokemonDetailCard(url).then((pokemonDetail) => {
        console.log(pokemonDetail) 
        cardPokemon.innerHTML = convertPokemonCard(pokemonDetail)
    });
}

loadPokemonDetail(urlCard)
