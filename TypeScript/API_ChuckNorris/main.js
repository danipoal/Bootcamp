var jsonResponse = null; // Declaramos el objeto de la interfaz con todo null de momento
var botonFetch = document.querySelector(".boton-fetch");
var textParragraph = document.querySelector("#p-objective");
var requestOptions = {
    method: "GET",
    redirect: "follow"
};
var fetchJoke = function () {
    fetch("https://api.chucknorris.io/jokes/random", requestOptions)
        .then(function (response) { return response.json(); })
        .then(function (result) {
        saveResult(result);
        console.log("click y fetch");
        textParragraph.innerText = result.value;
    })
        .catch(function (error) { return console.error(error); });
};
var saveResult = function (json) {
    jsonResponse = json;
    console.log(jsonResponse);
};
botonFetch.addEventListener("click", fetchJoke);
