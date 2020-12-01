const Base_Url = "https://pokeapi.co/api/v2/";

//lista pokemons
async function getPokemonsList(resource) {
  const response = await fetch(`https://pokeapi.co/api/v2/${resource}/
  `);
  console.log(`https://pokeapi.co/api/v2/${resource}/`);
  const fetchJson = await response.json();
  return fetchJson;
}

async function fetchResource(url) {
  let response = await fetch(`https://pokeapi.co/api/v2/${url}`);
  response = await response.json();
  return response;
}

const PokemonPagination = async (url) => {
  let fetch = await fetchResource(url);

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
    pageResults.map((e) => {
      return fetch(e.url);
    }),
  );
  results = await Promise.all(
    results.map((e) => {
      return e.json();
    }),
  );
  return results;
};

export { fetchResource, getPokemonsList, PokemonPagination, PokemonPerPage };
