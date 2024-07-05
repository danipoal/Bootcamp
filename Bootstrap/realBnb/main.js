//Login
document.addEventListener('DOMContentLoaded', function() {
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
const cards = document.querySelectorAll('.card');

const requestOptions = {
    method: "GET",
    redirect: "follow"
}
const fetchPokemon = () => {
    console.log(cards.length)

    cards.forEach( (valor,index) => {
        const indexPokemon = index + 1;
        const url = "https://pokeapi.co/api/v2/pokemon/" + indexPokemon;

    })

    fetch("https://pokeapi.co/api/v2/pokemon/1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        writeCard(result);
        //console.log("click y fetch")
        //textParragraph.innerText = result.value;
      })
      .catch((error) => console.error(error));
  };

const writeCard = (pokemon) => {
    cards.forEach( card => {
        //Para poner la imagen
        const imagen = card.querySelector('.img-fluid');
        imagen.src = pokemon.sprites.front_default;
        console.log(pokemon.sprites.front_default);
        console.log(imagen);
    })
    
}
  fetchPokemon();
  