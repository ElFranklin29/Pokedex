const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}


const main_types = Object.keys(colors)






function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
        .then((data) => {
            createPokemonCard(data);
        });
}



  
    
   

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++){
        fetchPokemon(i);
    }

}

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p')
    name.classList.add('name');
    name.textContent = pokemon.name

    const type = document.createElement('p');
    type.textContent = `${pokemon.type}`;
    // const poke_types = pokemon.types.map(type => type.type.name)
    // const type = main_types.find(type => poke_types.indexOf(type) > -1)
    
    


    
    

    
    

    


    
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(number);
    card.appendChild(type);

    
    


    
    

    
    
    
  
    

    poke_container.appendChild(card);



}

fetchPokemons(150)





// const poke_types = pokemon.types.map(type => type.type.name)







