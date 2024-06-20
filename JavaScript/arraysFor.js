//Ej.1 Reviertelo de 4 maneras distintas

const dinner = ['🍔', '🌭', '🍟', '🍟', '🍕', '🍷', '🍷']; 
//Manera 1
console.log(dinner.reverse());

//Manera 2 -> Con for y con array auxiliar
let inversedArr = [];
let contador = 0;
for(let indice = dinner.length -1; indice >= 0; indice--){
    //inversedArr.push(dinner[indice]);
    inversedArr[contador] = dinner[indice];
    contador++;
}
// console.log(inversedArr + dinner.length);

//Manera 3 -> Con for y sin array auxiliar

for(let indice = 0; indice < (dinner.length / 2); indice++){
    let temp = dinner[indice];
    dinner[indice] = dinner[dinner.length - indice - 1];

    dinner[dinner.length - indice -1 ] = temp;
}


//Manera 4 -> Con forEach y sin array auxiliar
console.log(dinner);
dinner.forEach((item, pos) => {
    // console.log(pos + " " + item);

    if(pos <= dinner.length /2 ){   //Hay que hacer solo hasta la mitad, sino vuelve a su origen
        let i = dinner.length - pos -1; //posicion final -1 -1 -1
        let itemFinal = dinner[i]; // elemento posicion final

        dinner[i] = item;
        dinner[pos] = itemFinal;
    
    }
    console.log(dinner);
    
})
// console.log(dinner);