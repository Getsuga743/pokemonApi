import * as api from './src/api/pokedex';
import Pokemon from './src/ui/Pokemon';
import renderCards from './src/ui/PokemonCard';

async function inicializar() {
  api.PokemonPagination('pokemon/').then((x) => api
    .PokemonPerPage(x.results)
    .then((pokemons) => pokemons.map((pokemon) => new Pokemon(
      pokemon.id,
      pokemon.name,
      pokemon.abilities,
      pokemon.stats,
      pokemon.types,
      pokemon.sprites.front_default,
    ).then((Pokemons) => renderCards(Pokemons)))));
}
inicializar();
