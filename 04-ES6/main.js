"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500
    };
    const printAvengers = (_a) => {
        var { nick } = _a, rest = __rest(_a, ["nick"]);
        console.log(nick, rest);
    };
    const avengersArr = ['Cap America', true, 100];
    const [capi, ironman, hulk] = avengersArr;
})();
(() => {
    const ironman = {
        name: "Iron Man",
        weapon: "Armorsuit"
    };
    const captainAmetica = {
        name: "Captain American",
        weapon: "Armor"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, captainAmetica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const name = 'Fernando';
    const getName = () => {
        console.log('Hello');
    };
})();
//# sourceMappingURL=main.js.map