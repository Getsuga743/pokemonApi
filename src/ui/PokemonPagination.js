/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import {
  PokemonPerPage, PokemonPagination,
// eslint-disable-next-line import/extensions
} from '../api/pokedex.js';

// eslint-disable-next-line import/extensions
import Pokemon from './Pokemon.js';
// eslint-disable-next-line import/extensions
import renderCards from './PokemonCard.js';

export const pokemonPagination = async ({ results }) => {
  let pokemons = await PokemonPerPage(results);
  // eslint-disable-next-line no-unused-expressions
  (pokemons = pokemons.map(
    (pokemon) => new Pokemon(
      // eslint-disable-next-line indent
        pokemon.id,
      pokemon.name,
      pokemon.abilities,
      pokemon.stats,
      pokemon.types,
      pokemon.sprites.front_default,
      // eslint-disable-next-line no-sequences
    ),
  )), renderCards(pokemons);
};

export const loadPages = (pagination) => {
  const preview = document.querySelector('#preview');
  const next = document.querySelector('#next');
  let page;
  preview.addEventListener('click', async (e) => {
    document.querySelector('#cards').innerHTML = '';
    PokemonPagination(pagination.preview.slice(26));
    e.preventDefault();
  });
  next.addEventListener('click', async (e) => {
    document.querySelector('#cards').textContent = '';
    page = await PokemonPagination(pagination.next.slice(26));
    await pokemonPagination(page.results);
    e.preventDefault();
  });
};
