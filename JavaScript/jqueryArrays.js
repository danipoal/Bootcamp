const emojis = [
    // Animales
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🐙', '🦑', '🦐', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊️', '🐇', '🐁', '🐀', '🐿️', '🦔']

const nRandom =  () => Math.floor(Math.random() * emojis.length);
let array = [];
let htmlArray = document.querySelector('.array');

//Los botones de el primer formulario seran en JavaScript

const push = document.getElementById('push');
const unshift = document.querySelector('#unshift');
const insert = document.querySelector('#insert');

push.addEventListener('click', function() {
    array.push(emojis[nRandom()]);
    htmlArray.innerHTML = array;
})
unshift.addEventListener('click', function() {
    array.unshift(emojis[nRandom()]);
    htmlArray.innerHTML = array;
})
insert.addEventListener('click', function() {
    const ubi = document.getElementById('ubi1').value;      //Para obtener el valor de un input se usa su .value
    array.splice(ubi, 0, emojis[nRandom()]);
    
    htmlArray.innerHTML = array;
})



//Los botones con jQuery
const pop = $('#pop');
const shift = $('#shift');
const remove = $('#remove');

let htmlArrayQuery = $('.array');

pop.on('click', function() {
    array.pop();
        //Antes de actualuzar, hay que pasar el array a texto string para que deje
        let textoArray = array.join(', ');

    htmlArrayQuery.text(textoArray);    //Tambien tiene que ser todo jQuery para que funcione
})

shift.on('click', function () { 
    array.shift();
    let textoArray = array.join(', ');
    htmlArrayQuery.text(textoArray); 
 })

 remove.on('click', function () { 
    const ubi = $('#ubi2').val();
    console.log(ubi);
    array.splice(ubi, 1);
    let textoArray = array.join(', ');
    htmlArrayQuery.text(textoArray); 
 })

 //Hay que poner en el input que si se pasa de la distancia de el array que de error. 

 //Cambiador de colores mediante toggle
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');

const main = document.querySelector('main');

//En js no hay toggle como tal pero se puede inplementar a mano
red.addEventListener('click', function(){
    main.classList.contains('red') ? main.classList.remove('red') : main.classList.add('red');
})
blue.addEventListener('click', function(){
    main.classList.toggle('blue');
})

//Yellow en jQuery


