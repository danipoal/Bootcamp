import {  tamagotchi, statusTamagotchiMessages, foods, games, enemies, dream} from "./constantes.mjs";

//CONSTANTES
const hambreBar = document.querySelector("#hambreBar") as HTMLProgressElement;
const hambreIndicator = document.querySelector("#hambreIndicator") as HTMLSpanElement;
const heladoButton = document.querySelector("#helado") as HTMLButtonElement;
const lechugaButton = document.querySelector("#lechuga") as HTMLButtonElement;
const carneButton = document.querySelector("#carne") as HTMLButtonElement;

const juegoBar = document.querySelector("#juegoBar") as HTMLProgressElement;
const juegoIndicator = document.querySelector("#juegoIndicator") as HTMLSpanElement;
const iphoneButton = document.querySelector("#iphone") as HTMLButtonElement;
const rugbyButton = document.querySelector("#rugby") as HTMLButtonElement;
const esconditeButton = document.querySelector("#escondite") as HTMLButtonElement;

const luchaBar = document.querySelector("#luchaBar") as HTMLProgressElement;
const luchaIndicator = document.querySelector("#luchaIndicator") as HTMLSpanElement;
const deathMatchButton = document.querySelector("#deathMatch") as HTMLButtonElement;
const judoButton = document.querySelector("#judo") as HTMLButtonElement;
const boxeoButton = document.querySelector("#boxeo") as HTMLButtonElement;

const sueñoBar = document.querySelector("#sueñoBar") as HTMLProgressElement;
const sueñoIndicator = document.querySelector("#sueñoIndicator") as HTMLSpanElement;
const dormirButton = document.querySelector("#dormir") as HTMLButtonElement;
const siestaButton = document.querySelector("#siesta") as HTMLButtonElement;
const rebornButton = document.querySelector("#reborn") as HTMLButtonElement;

const corazones = document.querySelectorAll(".corazones");
//Aqui se seleciona el objeto padre para que luego se cojan los botones hijos
const hambreBotones = document.querySelector("#hambreBotones");


//Funciones
function updateBars(){
    hambreBar.value = tamagotchi.hungry;
    juegoBar.value = tamagotchi.happiness;
    luchaBar.value = tamagotchi.fight;
    sueñoBar.value = tamagotchi.sleep;
    console.log("Barras actualizadas " + tamagotchi.hungry)
}
console.log(hambreBotones);
console.log(tamagotchi);
updateBars();