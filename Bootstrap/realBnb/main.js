import { columna } from "./constantes.js";

//VARIABLES
const addCardBtn = document.querySelector('#addCard');
const searchBar = document.querySelector('#searchBar');
const requestOptions = {
    method: "GET",
    redirect: "follow"
}

//FUNCIONES
document.addEventListener('DOMContentLoaded', function() { //Login
    // Selecciona el formulario por su id
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Recupera los valores de los elementos del formulario
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        // Imprime los valores en la consola (puedes realizar otras acciones aquí)
        console.log('Usuario:', username);
        console.log('Contraseña:', password);

        // Aquí podrías realizar alguna acción como enviar los datos a un servidor
    });
});
addCardBtn.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.innerHTML += columna; 

    fetchPokemon();
})
searchBar.addEventListener('input', () => { //El input hace que se actualice sin tener que pulsar enter ni nada
    console.log(searchBar.value);
    const cards = document.querySelectorAll('.card');
    cards.forEach( (card) => {
        const titulo = card.querySelector('h3');
        //Comprobamos si el contenido coincide con lo que se coloca en la barra
        if(titulo.textContent.includes(searchBar.value.toUpperCase())){ //Se hace un upper para que se encuentre
            //console.log(titulo.textContent + " De momento esta IN");
            card.style.display = "block";
        }else if(searchBar.value == ""){
            card.style.display = "block";
        }else{
            //console.log(titulo.textContent + " OUT")
            card.style.display = "none";
        }
    })
})

/*
* Se hace el fetch para cada elemento de carta html que exista. 
*/
const fetchPokemon = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach( (card,index) => {
        //Cada Carta hace fetch a su propia url en orden de pokemons
        const indexPokemon = index + 1;
        const url = "https://pokeapi.co/api/v2/pokemon/" + indexPokemon;

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((pokemon) => {
            //textParragraph.innerText = result.value;
            getImage(card, pokemon);
            writeText(card, pokemon);

        }).catch((error) => console.error(error));
    })
  };
/*
* Se coloca la imagen de el json en el src de la carta
* @param cardObject - Es el elemento de el array de cards que identifica cada carta
* @param pokemonJson - La información fetcheada de la api
*/
const getImage = (cardObject, pokemonJson) => {
    const imagen = cardObject.querySelector('.img-fluid');
    imagen.src = pokemonJson.sprites.front_default;
}
const writeText = (cardObject, pokemonJson) => {
    //Para el nombre
    const titulo = cardObject.querySelector('h3');
    titulo.innerText = pokemonJson.name.toUpperCase();
    //Para el tipo
    const tipo = cardObject.querySelector('h6');
    tipo.innerText = firstCamel(pokemonJson.types[0].type.name);
    //Habilidades
    const habilidadesText = cardObject.querySelector('#description');
    habilidadesText.innerText = ""; //Se formatea para que no haya nada
    pokemonJson.abilities.forEach(valor => { //Se añaden una a una con salto de linea
        habilidadesText.innerText += firstCamel(valor.ability.name) + "\n";
    })
    //Peso
    const peso = cardObject.querySelector(".n-habitaciones");
    peso.innerText =pokemonJson.weight + " Kg";
}
function firstCamel(input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

//LOGICA 
  fetchPokemon();
  
