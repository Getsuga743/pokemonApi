const pokemonCard = ({ name, types, sprite }) => {
  const $contenedor = document.createElement('div');
  $contenedor.className = 'justify-content-center m-3 width:auto';
  let typeDesc = types.map((el) => el.type.name);

  typeDesc = Object.values(typeDesc).map(
    (el) => `<span class="tag">${el}</span>`,
  );
  const content = ` 
        <div class="card" style="width: 22.25rem;height:13.65; border-radius:20px;">
          <div class="card-body row";>
          <div class="card-body column border"> 
          <h5 class="card-title text-start">${name}</h5>
         <div class="d-flex flex-column"> 
         ${typeDesc.toString().replace(',', ' , ')}</div>
          </div>
          <div class="img-fluid">   
           <img src=${sprite} class="sprite">
          <div>
          </div>
        </div>`;
  $contenedor.innerHTML = content;
  return $contenedor;
};

export default (pokemons) => {
  pokemons.map((pokemon) => {
    const $pokemonCard = pokemonCard(pokemon);
    return document.querySelector('.cards-main').appendChild($pokemonCard);
  });
};
