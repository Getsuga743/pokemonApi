/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import * as api from './src/api/pokedex.js';

// eslint-disable-next-line no-unused-vars
import Pokemon from './src/ui/Pokemon.js';

// eslint-disable-next-line import/named
import { loadPages, pokemonPagination } from './src/ui/PokemonPagination.js';

// import renderCards from './src/ui/PokemonCard.js';
export async function cargar(offset){
  const page = await api.PokemonPagination(offset);
  await pokemonPagination(page);
  return page;
}

export const pagination = (offsetParam , param2) => {
  let countSpan = document.querySelector("#count");
  let offset = offsetParam;
  let cardsMain = document.querySelector(".cards-main");
  const paginationPreview = document.querySelector('#preview');
  const paginationNext = document.querySelector('#next');

  paginationPreview.addEventListener('click', (e) => {
    offset = offset - 1;
    cardsMain.innerHTML = "";
    cargar(offset * 20);
    countSpan.innerText = `${offset*20}/${param2}`
    e.preventDefault();
  });
  paginationNext.addEventListener('click', (e) => {
    offset = offset + 1;
    cardsMain.innerHTML = '';
    countSpan.innerText = `${offset * 20}/${param2}`;
    cargar(offset * 20);
    e.preventDefault();
  });
};

export async function  inicializar(InitialOffset){
  let x = await cargar(InitialOffset);
  pagination(InitialOffset, x.count);
}