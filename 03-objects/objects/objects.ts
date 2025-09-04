(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: "Barry Allen",
        age: 24,
        powers: ["Velocity", "Travel in the time"],
    };

    console.log(flash)

    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Power"],
        getName() {
            return this.name;
        },
    };
})();
