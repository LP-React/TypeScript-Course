"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatsignal = () => {
        return "Batsignal actived!";
    };
    console.log(activateBatsignal());
    const heroName = returnName();
})();
