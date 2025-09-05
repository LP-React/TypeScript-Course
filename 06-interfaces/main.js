"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = 'Laysson';
        this.edad = 22;
        this.sexo = 'Masculino';
        this.estadoCivil = 'Soltero';
    }
    imprimirBio() {
    }
}
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
    class Mutant {
        constructor() {
            this.age = 2;
            this.name = 'Laysson';
            this.realName = 'Dev';
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'Ky2',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return id;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 123,
            zip: 'Hy2',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.name;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map