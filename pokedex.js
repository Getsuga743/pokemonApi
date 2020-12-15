/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import * as api from './src/api/pokedex.js';

// eslint-disable-next-line no-unused-vars
import Pokemon from './src/ui/Pokemon.js';

// eslint-disable-next-line import/named
import { loadPages, pokemonPagination } from './src/ui/PokemonPagination.js';

// import renderCards from './src/ui/PokemonCard.js';
export async function cargar(pagina){
  const page = await api.PokemonPagination(pagina)
  await pokemonPagination(page);
  return page
}
