//Funciones Básicas
function sum(a: number, b: number): number {
  return a + b;
}

const count = (heros: string[]): number => {
  return heros.length;
};
const superHeros: string[] = ["Flash", "Arrow", "Superman", "Linterna verde"];
count(superHeros);

//Parametros por defecto
const callBatman = (call: boolean = false): void => {
  if (call) {
    console.log("batsignal actived");
  }
};

callBatman(true);

//Rest?

const joinHeros = (...people: string[]): string => {
  return people.join(", ");
};

console.log(joinHeros("Jose", "Eduar"));

//Tipo funcion

const doNothing = (
  number: number,
  text: string,
  boolean: boolean,
  array: string[]
) => {};

let doNothing2: (n: number, t: string, b: boolean, a: string[]) => void;

doNothing2 = doNothing
