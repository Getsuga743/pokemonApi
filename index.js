import * as api from "./src/api/pokedex.js";
window.addEventListener("load", () => {
  api.PokemonPagination().then((x) => {
    console.log(x);
    return (document.querySelector("#count").textContent = x.count);
  });
  document.querySelector("#count").textContent = pagination.count;
  e.preventDefault();
});

// const iniciar = () => {
//   api
//     .fetchResource(["pokemon"])
//     .then((x) => console.log(x, "index"))
//     .catch((err) => console.log(err));
//   api.getPokemonsList("pokemon").then((x) => console.log(x, "index"));
// };
// iniciar();
