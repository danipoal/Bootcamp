//Ej.1 Reviertelo de 4 maneras distintas

const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍷', '🍷']; 
//Manera 1
console.log(dinner.reverse());
let inversedArr = [];
let contador = 0;
for(let indice = dinner.length -1; indice >= 0; indice--){
    //inversedArr.push(dinner[indice]);
    inversedArr[contador] = dinner[indice];
    contador++;
}
console.log(inversedArr + dinner.length);