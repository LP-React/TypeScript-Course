(() => {

    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let flash: Hero = {
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

    console.log(flash)

})();
