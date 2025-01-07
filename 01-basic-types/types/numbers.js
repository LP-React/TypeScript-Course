"use strict";
(function () {
    var avengers = 0;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("32A");
    console.log({ avengers: avengers });
})();
