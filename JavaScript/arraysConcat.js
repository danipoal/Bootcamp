const ticket01 = ['🍺', '🍺', '🥜']; 
const ticket02 = ['🍺', '🥪', '🥙']; 

//Manera 1 -> Juntar con .concat
let cuentaConjunta = ticket01.concat(ticket02);
console.log(cuentaConjunta);

//Manera 2 -> Spread operator

console.log([...ticket01, ...ticket02]);


//Manera 3 -> Utilizando el metodo push
ticket02.forEach(item => {
    ticket01.push(item);
})
console.log(ticket01);
//Lo desacemos para seguir con el ejercicio
ticket01.splice(3, 5);

//Manera 4 -> Con bucles y sin metodos array

for (let i = 0; i < ticket02.length; i++) {
    const element = ticket02[i];
    ticket01[3+i] = element;
}
console.log(ticket01)
ticket01.splice(3, 5);  //Desacemos

//Manera 5 -> for each sin array
ticket02.forEach((element, pos) => {
    ticket01[3+pos] = element;
})
console.log(ticket01);