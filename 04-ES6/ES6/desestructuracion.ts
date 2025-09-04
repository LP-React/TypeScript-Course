(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        active: boolean,
        power: number
    }

    const avengers: Avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500
    }

    // const { power, vision } = avengers
    // console.log(power.toFixed(2), vision.toUpperCase())

    const printAvengers = ({ nick, ...rest }: Avengers) => {
        console.log(nick, rest);
    }

    // printAvengers(avengers)

    const avengersArr: [string, boolean, number] = ['Cap America', true, 100]

    const [capi, ironman, hulk] = avengersArr;

    // console.log(ironman);


})()