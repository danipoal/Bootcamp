import foods from "./food.mjs";
//2- Recorre food.mjs para sacar categorias unicas

const recorrerFood = new Set(foods.map((food) => {  //Set es para sacar todos los elementos ÚNICOS
    
    return food.category;
}))
const arrayFood = [...recorrerFood];        //Se usan los puntos para quitar el Set(5) del principio
console.log(recorrerFood);
console.log(arrayFood)

//3- Comprobar si existe una categoria especifica

console.log(recorrerFood.has("Italian"));   //En un set se usa has()
console.log(arrayFood.includes("Italian")); //En array se usa includes()

//4- Ver los platos de una categoria si esta existe

function verPlatos(categoria) {
    return foods.filter(food => {       //Habria que usar dos returns para que funcionara asi
        return food.category === categoria
    })
}

const findCategory = (category) => foods.filter((food) => (food.category === category));    //La cosa es que me da todos los elementos con todos sus atributos que cumplan esto
// console.log(findCategory('Fast Food'));
// console.log(verPlatos('Fast Food'));

//5- Calcular el precio consumido con map, filter, reduce
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
// Expected output: Total of the ticket: ["🥜","🌮","🥗","🍕","🍣","🧀"] is $52.48 

    //Hay que recorrer los datos buscando estos emojis en la categoria icon
    //Despues, Sacar su precio e irlo sumando a un total
    //Finalmente dar el output

    const cuenta = (emoji) => foods.filter(food => (food.icon === emoji));
    const totalPrice = ticket.map(cuenta);

    console.log(totalPrice(cuenta(ticket)));


