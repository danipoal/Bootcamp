let letras = ["a", "b", "c", "d", "e"];
letras.forEach(letra =>{
    //console.log(letra)
})
//ARRAYS
let comida = ["hamburguesa", "kebab", "sushi", "pizza", "sopa", "arroz", "arroz", "arroz", "puchaina"];

comida.fill( "cervezas", comida.findIndex(item => item === "pizza"));
//console.log(comida);

console.log(comida.some(item => item === "kebab"));

//Ej.3
console.log(comida.filter(item => item !== "kebab"));

//Ej.4
let frutas = ["fresa", "limon", "fresa", "limon"];
const frutas2 = frutas.map(item => 
    item === "limon" ?  "maduixa": item
)
//console.log(frutas2);

//Ej.5 
const frutas3 = frutas.map((item, indice) => {
    if(item === "limon"){
        return ["limon", "triste"];   //Metemos nuevo array en el propio array, sino el mismo item
        
    }else{
        return item;
    }
}).flat() //Flat se usa porque hemos metido un array dentro de otro array, para ponerlos al mismo nivel

console.log(frutas3);


//Ej. 6
let cartas = ["🎴","🎴","🃏","🎴","🎴","🃏","🎴","🎴"];
let c = [];
cartas.forEach((item, index) => {
    if(item === "🎴"){
        c.push("🎴", "🃏");
    }
        
    
})
console.log(c);