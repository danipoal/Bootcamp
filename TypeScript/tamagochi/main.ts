
const tamagotchi = {
    life : 5,
    hungry: 10,
    happiness: 10,
    fight: 10,
    sleep: 10
}
const statusTamagotchiMessages = {
    perfect : "Estoy perfecto chacho",
    life : "Tengo poca vida, aaaafgsf",
    hungry: "Tengo hambre mama",
    happiness: "Estoy troste",
    fight: "Tengo ganas de partir cabezas",
    sleep: "Me duermo zzzzz"
}
const foods = {
    helado : {
        life: -2,
        hungry : 5,
        happiness: 4,
        fight: 0,
        sleep: -3,
    },
    lechuga : {
        life: 0,
        hungry : 3,
        happiness: 2,
        fight: -2,
        sleep: -2,
    },
    carne : {
        life: 2,
        hungry: 1,
        happiness: 0,
        fight: -5,
        sleep: 1,
    },
}
const games = {
    iphone : {
        life : -2,
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
}
const enemies = {
    judo: { // EASY
        life: -1,
        hungry: -4,
        happiness: -2,
        fight: 3,
        sleep: -1
    },
    boxeo: { // MEDIUM
        life: -3,
        hungry: -6,
        happiness: -4,
        fight: 6,
        sleep: -3
    },
    deathMatch: { // HARD
        life: -4,
        hungry: -8,
        happiness: -6,
        fight: 10,
        sleep: -5
    }
}
const dream = {
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
    reborn: {       //Full
        life: 5,
        hungry: 10,
        happines: 10,
        fight: 10,
        sleep: 10
    }

}
console.log(tamagotchi);




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


const sueñoBar = document.querySelector("#sueñoBar") as HTMLProgressElement;
const sueñoIndicator = document.querySelector("#sueñoIndicator") as HTMLSpanElement;


const corazones = document.querySelectorAll(".corazones");
//Aqui se seleciona el objeto padre para que luego se cojan los botones hijos
const divBotones = document.querySelector("#luchaBotones") as HTMLDivElement;
const luchaBotones = divBotones.querySelectorAll("button");

//  FUNCIONES
//Funcion para actualizar las barras segun el objeto tamagochi
function updateBars(){
    hambreBar.value = tamagotchi.hungry;
    juegoBar.value = tamagotchi.happiness;
    luchaBar.value = tamagotchi.fight;
    sueñoBar.value = tamagotchi.sleep;
    console.log("Barras actualizadas " + tamagotchi)
}

/*Funcion para actualizar el objeto tamagochi en función del boton
* 
* @param {number} life -     Introducir el valor a modificar en el objeto tamagotchi
* @param {number} hungry -   Introducir el valor a modificar en el objeto tamagotchi
* @param {number} happiness- Introducir el valor a modificar en el objeto tamagotchi
* @param {number} fight -    Introducir el valor a modificar en el objeto tamagotchi
* @param {number} sleep -    Introducir el valor a modificar en el objeto tamagotchi

*/
function updateStats(life = 0, hungry : number, happiness : number, fight : number, sleep : number){
    tamagotchi.life += life;    
    tamagotchi.hungry += hungry;
    tamagotchi.happiness += happiness;
    tamagotchi.fight += fight;
    tamagotchi.sleep += sleep;

    updateBars();

}
 // Asigna una función individual a cada botón
 luchaBotones.forEach((boton) => {
    boton.addEventListener('click', () => {
        // Deshabilita todos los botones excepto el que se hizo clic

        // Aquí puedes usar un switch o if-else para ejecutar funciones diferentes basadas en el texto del botón
        switch (boton.textContent?.trim()) {
            case 'Death match':
                console.log("Death Match")

                break;
            case 'Judo':
                console.log("Judo")

                break;
            case 'Boxeo':
                updateStats(0,-2,2,3,-3);
                console.log("Boxeo")
                break;
            default:
                console.log('Botón no reconocido');
        }
    });
});



