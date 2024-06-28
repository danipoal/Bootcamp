"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("nes.css/css/nes.min.css");
var jsonResponse = null; //Declaramos el objeto de la interfaz con todo null de momento
var requestOptions = {
    method: "GET",
    redirect: "follow"
};
fetch("https://api.chucknorris.io/jokes/random", requestOptions)
    .then(function (response) { return response.json(); })
    .then(function (result) { return saveResult(result); })
    .catch(function (error) { return console.error(error); });
var saveResult = function (json) {
    jsonResponse = json;
    console.log(jsonResponse);
};
