"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Velocity", "Travel in the time"],
    };
    console.log(flash);
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Power"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Velocity", "Travel in the time"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Power"],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 2;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Laysson",
        age: 20,
        powers: [],
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map