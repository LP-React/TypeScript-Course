(() => {

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: "Iron Man",
        weapon: "Armorsuit"
    }

    const captainAmetica: Avenger = {
        name: "Captain American",
        weapon: "Armor"
    }

    const thor: Avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers: Avenger[] = [ironman, captainAmetica, thor]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }

})()