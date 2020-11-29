const Base_Url = "https://pokeapi.co/api/v2/";

//lista pokemons
async function getPokemonsList(resource) {
  const response = await fetch(`https://pokeapi.co/api/v2/${resource}/
  `);
  console.log(`https://pokeapi.co/api/v2/${resource}/`);
  const fetchJson = await response.json();
  return fetchJson;
}

async function fetchResource(resources) {
  const [re1, ...args] = resources;
  console.log(re1);
  console.log(args || "");
  let response = undefined;
  if (re1 && args.length != 0) {
    const resourcesForFetching = args.map((el, index) => {
      if (index === args.length - 1) {
        return el.toString();
      }
      return el.toString() + "/";
    });
    console.log(resourcesForFetching);
    response = await fetch(
      `https://pokeapi.co/api/v2/${re1}/${resourcesForFetching}`,
    );
    response = await response.json();
    console.log(response);
  } else {
    response = await fetch(`https://pokeapi.co/api/v2/${re1}`);
    response = await response.json();
  }
  return response;
}




const PokemonPagination = async () => {
  let fetch = await f etchResource(["pokemon"]);
  const {
    count,
    pagination = { next: fetch.next, previous: fetch.previous },
    result,
  } = fetch;
  const page = { count, pagination, result };
  return page;
};
const PokemonPerPage = async (page) => {
  await Promise.all(page);
};
export { fetchResource, getPokemonsList, PokemonPagination, PokemonPerPage };
