//LOGICA DE PIEDRA PAPEL TIJERA
var tipos = ["piedra", "papel", "tijeras"];
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.eleccion = '';
        this.puntuacion = 0;
        this.ia = true;
    }
    Jugador.prototype.jugada = function () {
        if (this.ia) {
            return tipos[Math.floor(Math.random() * 3)];
        }
        else {
            //do{ //Hacemos que mientras no se tenga la elección se compruebe todo el rato si en el buffer hay eleccion y luego se elija
            updtConsoleOutput("Elige tu elección [piedra, papel, tijeras]");
            console.log(buffer);
            if (buffer == "piedra" || buffer == "papel" || buffer == "tijeras") {
                this.eleccion = buffer;
            }
            //}while(!this.eleccion)
            return this.eleccion;
        }
    };
    return Jugador;
}());
var comparacionGame = function (jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "Empate";
    }
    else if ((jugada1 === "piedra" && jugada2 === "tijeras") ||
        (jugada1 === "papel" && jugada2 === "piedra") ||
        (jugada1 === "tijeras" && jugada2 === "papel")) {
        return "Gana jugador 1";
    }
    else {
        return "Gana jugador 2";
    }
};
//Canvas
var canvas = document.getElementById('canvas');
canvas.innerHTML = "que";
//CONSOLA
var consoleOutput = document.getElementById('output');
var consoleInput = document.getElementById('input');
var buffer = "";
function updtConsoleOutput(message) {
    if (consoleOutput) {
        consoleOutput.innerText = message;
    }
}
function controllerInput() {
    if (consoleInput.value) {
        var userInput = consoleInput.value; //Guardamos el valor en una constante
        consoleInput.value = ""; //Reiniciamos el input para que cuando se pulse enter se borre el valor
        return userInput;
    }
    else {
        console.log("Error al introducir input");
        throw new Error("Error: No hay valor en consoleInput");
        //TODO Añadir algo rojo para indicar el error
    }
}
consoleInput.addEventListener('keydown', function (evento) {
    if (evento.key === "Enter") {
        buffer = controllerInput();
        if (consoleOutput.textContent == "Quieres jugar vs IA [Si, No]") {
            validarInput(buffer);
            console.log(buffer);
        }
        else {
            buffer = controllerInput();
        }
    }
});
//Logica Partida
function startGame(jugador1, jugador2) {
    console.log(buffer);
    canvas.innerHTML = "<p>Que empieze el juego! 🎰🕹</p>";
    updtConsoleOutput("Quieres jugar vs IA [Si, No]");
    console.log("Empezamos");
}
function jugar() {
    for (var index = 0; index < 6; index++) {
        var jugada1 = jugador1.jugada();
        var jugada2 = jugador2.jugada();
        canvas.innerHTML += "<p> El jugador 1 eligio " + jugada1 + "</p>";
        canvas.innerHTML += "<p> El jugador 2 eligio " + jugada2 + "</p>";
        //Comparar el game
        var result = comparacionGame(jugada1, jugada2);
        canvas.innerHTML += "<p>" + result + "</p>";
    }
}
function validarInput(buffer) {
    if (buffer === "si") {
        jugador2.ia = false;
        jugar();
        console.log("Juego iniciado sin ia");
    }
    else if (consoleInput.value === "no") {
        jugador2.ia = true;
        jugar();
        console.log("Juego iniciado con ia");
    }
}
function valorBuffer(buffer) {
    if (buffer == "pider")
        ;
}
var jugador1 = new Jugador();
var jugador2 = new Jugador();
startGame(jugador1, jugador2);
//Estadisticas
