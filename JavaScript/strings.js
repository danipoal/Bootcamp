
//Ej. 1
const cambioLetras = (palabra) => {
    let charArray = palabra.split("");

    let newString ="";

    //Si se hiciera con .map se podria poner directamente const x = funcion al principio, y que se modifique la original aunq se modificaria la copia
    charArray.forEach(char => {
        if (char === 'a'){
            newString += 'o'
        } else {newString += char};
    })
    console.log(newString);
}

cambioLetras("corredora");

//Ej.2 
const comprobarInicio = (string) => {
    return string.startsWith("aca");
    
}
console.log(comprobarInicio("academia"));

//Ej.3
