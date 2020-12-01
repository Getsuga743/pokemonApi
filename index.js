import * as api from "./src/api/pokedex.js";
import { Pokemon } from "./src/ui/Pokemon.js";
import { renderCards } from "./src/ui/PokemonCard.js";
const $pageLink = document.querySelector(".page-link");
let next;
api.PokemonPagination("pokemon/").then((x) => {
  console.log(x)
  api
    .PokemonPerPage(x.results)
    .then((pokemons) =>
      pokemons.map((pokemon) => {
        return new Pokemon(
          pokemon.id,
          pokemon.name,
          pokemon.abilities,
          pokemon.stats,
          pokemon.types,
          pokemon.sprites.front_default,
        );
      }),
    )
    .then((pokemons) => {
      return renderCards(pokemons);
    });
});
