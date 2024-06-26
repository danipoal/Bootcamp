//LOGICA DE PIEDRA PAPEL TIJERA
const tipos = ["piedra", "papel", "tijeras"];

class Jugador {
    puntuacion : number;
    eleccion : string;
    ia: boolean;

    constructor(){
        this.eleccion = '';
        this.puntuacion = 0;
        this.ia = true;
    }
    jugada() : string  {
        if(this.ia){
            
            return tipos[Math.floor(Math.random() * 3)];
        }else{
            //do{ //Hacemos que mientras no se tenga la elección se compruebe todo el rato si en el buffer hay eleccion y luego se elija
            updtConsoleOutput("Elige tu elección [piedra, papel, tijeras]");
            
            console.log(buffer);
            
            if(buffer == "piedra" || buffer == "papel" || buffer == "tijeras"){
                this.eleccion = buffer;
            }
            //}while(!this.eleccion)

            
            return this.eleccion;
        }
    }
}
const comparacionGame = (jugada1:string, jugada2:string) => {
    if(jugada1 === jugada2){
        return "Empate";
    }else if(
        (jugada1 === "piedra" && jugada2 === "tijeras") ||
        (jugada1 === "papel" && jugada2 === "piedra") ||
        (jugada1 === "tijeras" && jugada2 === "papel")
    ) {
        return "Gana jugador 1";
    } else {
        return "Gana jugador 2";
    }
}

//Canvas

const canvas = document.getElementById('canvas') as HTMLDivElement;

canvas.innerHTML = "que";



//CONSOLA
let consoleOutput = document.getElementById('output') as HTMLParagraphElement;
let consoleInput = document.getElementById('input') as HTMLInputElement;
let buffer: string = "";

function updtConsoleOutput(message: string) {
    if (consoleOutput) {
        consoleOutput.innerText = message;
    }
}
function controllerInput() : string {        //Logica ejecutable al pulsar ENTER, la función ira en el eventListener
    if (consoleInput.value) {
        const userInput : string = consoleInput.value;       //Guardamos el valor en una constante
        consoleInput.value = "";                    //Reiniciamos el input para que cuando se pulse enter se borre el valor
        return userInput;
    }else{ 
        console.log("Error al introducir input")
        throw new Error("Error: No hay valor en consoleInput");    
        //TODO Añadir algo rojo para indicar el error
    }
}
consoleInput.addEventListener('keydown', (evento) => {
    if(evento.key === "Enter"){
        buffer = controllerInput();
        if(consoleOutput.textContent == "Quieres jugar vs IA [Si, No]"){
            validarInput(buffer);
            console.log(buffer);
        }else{
            buffer = controllerInput();
        }
    }
})

//Logica Partida
function startGame(jugador1 : Jugador, jugador2 : Jugador)  {
    console.log(buffer);
    canvas.innerHTML = "<p>Que empieze el juego! 🎰🕹</p>";

    updtConsoleOutput("Quieres jugar vs IA [Si, No]");
    console.log("Empezamos");

}

function jugar(){
    for (let index = 0; index < 6; index++) {
        const jugada1 = jugador1.jugada();
        const jugada2 = jugador2.jugada();
        canvas.innerHTML += "<p> El jugador 1 eligio " + jugada1 + "</p>";
        canvas.innerHTML += "<p> El jugador 2 eligio " + jugada2 + "</p>";
        //Comparar el game
        const result = comparacionGame(jugada1, jugada2);
        canvas.innerHTML += "<p>" + result + "</p>";
        
    }
}
function validarInput(buffer:string){
    if(buffer === "si"){
        jugador2.ia = false;
        jugar();
        console.log("Juego iniciado sin ia")
    }else if(consoleInput.value === "no"){
        jugador2.ia = true;
        jugar();
        console.log("Juego iniciado con ia")

    }
}

let jugador1 = new Jugador();
let jugador2 = new Jugador();

startGame(jugador1, jugador2);

//Estadisticas
