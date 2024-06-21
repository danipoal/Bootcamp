import foods from "./food.mjs";
//2- Recorre food.mjs para sacar categorias unicas

const categoriaUnica = [...new Set(foods.map( food => {
    return food.category;
}))]
console.log(categoriaUnica);
//3- Comprobar si existe una categoria especifica

const existeCategoria = (cat) => categoriaUnica.includes(cat);
console.log(existeCategoria("Italian"))
//4- Ver los platos de una categoria si esta existe

const verPlatos = (cat) =>  foods.filter(food => 
        existeCategoria(cat))
console.log(verPlatos("Italian"));

// const findCategory = (category) => foods.filter((food) => (food.category === category));
// console.log(findCategory('Fast Food'));



//5- Calcular el precio consumido con map, filter, reduce
const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
// Expected output: Total of the ticket: ["🥜","🌮","🥗","🍕","🍣","🧀"] is $52.48 

    //Hay que recorrer los datos buscando estos emojis en la categoria icon
    //Despues, Sacar su precio e irlo sumando a un total
    //Finalmente dar el output
function calcularCuenta() {
    let cuenta = 0;
    ticket.forEach(tick =>{
        cuenta += foods.map(elem => foods.find(food => food.icon === elem)
        )
    })
    
}
//


