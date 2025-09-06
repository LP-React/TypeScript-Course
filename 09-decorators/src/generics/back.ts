import { Hero as superHero } from "../classes/Hero";
import * as SuperHero2 from "../classes/Hero"
// import powers2 from "./data/powers"

// const ironman = new Hero('', 2, 2)

// console.log(ironman.power);
// console.log(powers2);


import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villian } from "../interfaces";

// console.log(genericFunction(1.23425).toFixed(2));
// console.log(genericFunctionArrow('Hello').charAt(2));
// console.log(genericFunction(new Date()).getDate());


// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5]);
// printObject('Hello world');


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston',
    dangerLevel: 130
}

// console.log(genericFunctionArrow<Hero>(deadpool).realName);




