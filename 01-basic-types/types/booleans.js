"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log(isSuperman);
    console.log({ isBatman: isBatman });
    isSuperman = true && false;
    console.log(isSuperman);
    isSuperman = !isBatman ? true : false;
    console.log(isSuperman);
})();
