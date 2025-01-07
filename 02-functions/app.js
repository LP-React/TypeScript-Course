"use strict";
//Funciones Básicas
function sum(a, b) {
    return a + b;
}
const count = (heros) => {
    return heros.length;
};
const superHeros = ["Flash", "Arrow", "Superman", "Linterna verde"];
count(superHeros);
//Parametros por defecto
const callBatman = (call = false) => {
    if (call) {
        console.log("batsignal actived");
    }
};
callBatman(true);
//Rest?
const joinHeros = (...people) => {
    return people.join(", ");
};
console.log(joinHeros("Jose", "Eduar"));
//Tipo funcion
const doNothing = (number, text, boolean, array) => { };
let doNothing2;
doNothing2 = doNothing;
