"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constantes_mjs_1 = require("./constantes.mjs");
//CONSTANTES
var hambreBar = document.querySelector("#hambreBar");
var hambreIndicator = document.querySelector("#hambreIndicator");
var heladoButton = document.querySelector("#helado");
var lechugaButton = document.querySelector("#lechuga");
var carneButton = document.querySelector("#carne");
var juegoBar = document.querySelector("#juegoBar");
var juegoIndicator = document.querySelector("#juegoIndicator");
var iphoneButton = document.querySelector("#iphone");
var rugbyButton = document.querySelector("#rugby");
var esconditeButton = document.querySelector("#escondite");
var luchaBar = document.querySelector("#luchaBar");
var luchaIndicator = document.querySelector("#luchaIndicator");
var deathMatchButton = document.querySelector("#deathMatch");
var judoButton = document.querySelector("#judo");
var boxeoButton = document.querySelector("#boxeo");
var sueñoBar = document.querySelector("#sueñoBar");
var sueñoIndicator = document.querySelector("#sueñoIndicator");
var dormirButton = document.querySelector("#dormir");
var siestaButton = document.querySelector("#siesta");
var rebornButton = document.querySelector("#reborn");
var corazones = document.querySelectorAll(".corazones");
//Aqui se seleciona el objeto padre para que luego se cojan los botones hijos
var hambreBotones = document.querySelector("#hambreBotones");
//Funciones
function updateBars() {
    hambreBar.value = constantes_mjs_1.tamagotchi.hungry;
    juegoBar.value = constantes_mjs_1.tamagotchi.happiness;
    luchaBar.value = constantes_mjs_1.tamagotchi.fight;
    sueñoBar.value = constantes_mjs_1.tamagotchi.sleep;
    console.log("Barras actualizadas " + constantes_mjs_1.tamagotchi.hungry);
}
console.log(hambreBotones);
console.log(constantes_mjs_1.tamagotchi);
updateBars();
