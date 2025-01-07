"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorl = () => `The world was saved`;
    let myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction("Laysson"));
    myFunction = saveTheWorl;
    console.log(myFunction());
})();
