var tamagotchi = {
    life: 5,
    hungry: 10,
    happiness: 10,
    fight: 10,
    sleep: 10
};
var statusTamagotchiMessages = {
    perfect: "Estoy perfecto chacho",
    life: "Tengo poca vida, aaaafgsf",
    hungry: "Tengo hambre mama",
    happiness: "Estoy troste",
    fight: "Tengo ganas de partir cabezas",
    sleep: "Me duermo zzzzz"
};
var foods = {
    helado: {
        life: -2,
        hungry: 5,
        happiness: 4,
        fight: 0,
        sleep: -3,
    },
    lechuga: {
        life: 0,
        hungry: 3,
        happiness: 2,
        fight: -2,
        sleep: -2,
    },
    carne: {
        life: 2,
        hungry: 1,
        happiness: 0,
        fight: -5,
        sleep: 1,
    },
};
var games = {
    iphone: {
        life: -2,
        hungry: -4,
        happiness: 6,
        fight: -1,
        sleep: -4
    },
    rugby: {
        life: 0,
        hungry: -1,
        happiness: 2,
        fight: 0,
        sleep: -2
    },
    escondite: {
        life: -1,
        hungry: -3,
        happiness: 5,
        fight: -2,
        sleep: -3
    }
};
var enemies = {
    judo: {
        life: -1,
        hungry: -4,
        happiness: -2,
        fight: 3,
        sleep: -1
    },
    boxeo: {
        life: -3,
        hungry: -6,
        happiness: -4,
        fight: 6,
        sleep: -3
    },
    deathMatch: {
        life: -4,
        hungry: -8,
        happiness: -6,
        fight: 10,
        sleep: -5
    }
};
var dream = {
    siesta: {
        life: 2,
        hungry: -2,
        happiness: 2,
        fight: 0,
        sleep: 2
    },
    dormir: {
        life: 4,
        hungry: -2,
        happiness: 4,
        fight: -2,
        sleep: 6
    },
    reborn: {
        life: 5,
        hungry: 10,
        happines: 10,
        fight: 10,
        sleep: 10
    }
};
console.log(tamagotchi);
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
var sueñoBar = document.querySelector("#sueñoBar");
var sueñoIndicator = document.querySelector("#sueñoIndicator");
var corazones = document.querySelectorAll(".corazones");
//Aqui se seleciona el objeto padre para que luego se cojan los botones hijos
var divBotones = document.querySelector("#luchaBotones");
var luchaBotones = divBotones.querySelectorAll("button");
//  FUNCIONES
//Funcion para actualizar las barras segun el objeto tamagochi
function updateBars() {
    hambreBar.value = tamagotchi.hungry;
    juegoBar.value = tamagotchi.happiness;
    luchaBar.value = tamagotchi.fight;
    sueñoBar.value = tamagotchi.sleep;
    console.log("Barras actualizadas " + tamagotchi);
}
/*Funcion para actualizar el objeto tamagochi en función del boton
*
* @param {number} life -     Introducir el valor a modificar en el objeto tamagotchi
* @param {number} hungry -   Introducir el valor a modificar en el objeto tamagotchi
* @param {number} happiness- Introducir el valor a modificar en el objeto tamagotchi
* @param {number} fight -    Introducir el valor a modificar en el objeto tamagotchi
* @param {number} sleep -    Introducir el valor a modificar en el objeto tamagotchi

*/
function updateStats(life, hungry, happiness, fight, sleep) {
    if (life === void 0) { life = 0; }
    tamagotchi.life += life;
    tamagotchi.hungry += hungry;
    tamagotchi.happiness += happiness;
    tamagotchi.fight += fight;
    tamagotchi.sleep += sleep;
    updateBars();
}
// Asigna una función individual a cada botón
luchaBotones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        // Deshabilita todos los botones excepto el que se hizo clic
        var _a;
        // Aquí puedes usar un switch o if-else para ejecutar funciones diferentes basadas en el texto del botón
        switch ((_a = boton.textContent) === null || _a === void 0 ? void 0 : _a.trim()) {
            case 'Death match':
                console.log("Death Match");
                break;
            case 'Judo':
                console.log("Judo");
                break;
            case 'Boxeo':
                updateStats(0, -2, 2, 3, -3);
                console.log("Boxeo");
                break;
            default:
                console.log('Botón no reconocido');
        }
    });
});
