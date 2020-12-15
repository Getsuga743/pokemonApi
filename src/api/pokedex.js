// const Base_Url = 'https://pokeapi.co/api/v2/';

// lista pokemons
async function fetchResource(url) {
  let response = await fetch(`https://pokeapi.co/api/v2/${url}`);
  response = await response.json();
  return response;
}
const fetchPokemons = async (offset = 0, limit = 20) => {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
  );
  response = await response.json();
  return response;
};

const PokemonPagination = async (offset = 0 , limit = 0) => {
  const fetch = await fetchPokemons(offset , limit);
  const {
    count,
    pagination = { next: fetch.next, previous: fetch.previous },
    results,
  } = fetch;
  const page = { count, pagination, results };
  return page;
};

const PokemonPerPage = async (pageResults) => {
  let results = await Promise.all(
    pageResults.map((e) => fetch(e.url)),
  );
  results = await Promise.all(
    results.map((e) => e.json()),
  );
  return results;
};

export {
  fetchResource, PokemonPagination, PokemonPerPage,
};
