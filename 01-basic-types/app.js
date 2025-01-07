"use strict";
(function () {
    // Tipos
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    // Arreglos
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    var heroPower;
    (function (heroPower) {
        heroPower[heroPower["acuaman"] = 0] = "acuaman";
        heroPower[heroPower["batman"] = 1] = "batman";
        heroPower[heroPower["flash"] = 5] = "flash";
        heroPower[heroPower["superman"] = 100] = "superman";
    })(heroPower || (heroPower = {}));
    var fuerzaAcuaman = heroPower.acuaman;
    var fuerzaBatman = heroPower.batman;
    var fuerzaFlash = heroPower.flash;
    var fuerzaSuperman = heroPower.superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
