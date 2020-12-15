function generateCard(name, spans, img) {
  const content = ` 
        <div class="d-flex row pokemon-card">
          <div class="row w-50">
          <div class="col border">
           <h5 class="card-title text-start">${name}</h5>
            <div class="d-flex flex-column"> 
            ${spans}</div>
          </div>
           </div> 
           <div class="col border img-container">
      
           <div class="border img-fluid">
              <div class="d-flex flex-row-reverse mt-2"><span class="">#123</span></div>  
           <img src=${img} class="sprite">
          <div>
          </div>
          </div>
        </div>`;
  return content;
}

const pokemonCard = ({ name, types, sprite }) => {
  const $contenedor = document.createElement('div');
  $contenedor.className = 'justify-content-center m-3 width:auto';
  let typeDesc = types.map((el) => el.type.name);

  typeDesc = Object.values(typeDesc).map(
    (el) => `<span class="tag">${el}</span>`,
  );
  typeDesc = typeDesc.toString().replace(',', ' ');
  $contenedor.innerHTML = generateCard(name, typeDesc, sprite);
  return $contenedor;
};

export default (pokemons) => {
  pokemons.map((pokemon) => {
    const $pokemonCard = pokemonCard(pokemon);
    return document.querySelector('.cards-main').appendChild($pokemonCard);
  });
};
