const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li data-link="pokemon-details.html" data-number="${pokemon.number}" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    if(pokemonList && loadMoreButton){
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToLi).join('');
            pokemonList.innerHTML += newHtml;

            // Após carregar os novos elementos <li>, adicione o event listener a cada um.
            const listItemElements = document.querySelectorAll('.pokemon');
            listItemElements.forEach((element) => {
                
                element.addEventListener('click', () => {
                    const link = element.getAttribute('data-link');
                    const dataNumber = element.getAttribute('data-number');
                    if (link) {               
                        window.location.href = link + '?dataNumber=' + dataNumber;
                    }
                });
            });
        })
    }
}

loadPokemonItens(offset, limit);

function setupLoadMoreButton() {
    const loadMoreButton = document.getElementById('loadMoreButton');

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            offset += limit;
            const qtdRecordsWithNextPage = offset + limit;

            if (qtdRecordsWithNextPage >= maxRecords) {
                const newLimit = maxRecords - offset;
                loadPokemonItens(offset, newLimit);
                loadMoreButton.parentElement.removeChild(loadMoreButton);
            } else {
                loadPokemonItens(offset, limit);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupLoadMoreButton);