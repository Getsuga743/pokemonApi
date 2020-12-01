const pokemonCard = ({ id, name, abilities, stats, types, sprite }) => {
  let $contenedor = document.createElement("div");
  $contenedor.className = "justify-content-center m-3 width:auto";
  let typeDesc = types.map((el) => {
    return el.type.name;
  });

  let content = ` 
        <div class="card" style="width: 22rem;height:20rem; border-radius:20px;">
          <div class="card-body row";>
          <div class="card-body column border"> 
          <h5 class="card-title text-start">${name}</h5>
          <span class="card-title text-start">${[...typeDesc]}</span>
          </div>
          <div class="sprite">   
           <img src=${sprite} class="img-fluid">
          <div>
          </div>
          
        </div>`;
  $contenedor.innerHTML = content;
  return $contenedor;
};
export const renderCards = (pokemons) => {
  pokemons.map((pokemon) => {
    let $pokemonCard = pokemonCard(pokemon);
    return document.querySelector(".cards-main").appendChild($pokemonCard);
  });
};
