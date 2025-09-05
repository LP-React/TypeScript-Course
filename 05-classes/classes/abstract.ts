(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realname: string
        ) { }
    }

    class Xmen extends Mutant {

        salvarMundo() {
            return 'Mundo a salvo'
        }

    }
    class Villian extends Mutant {

        conquistarMundo() {
            return 'Mundo conquistado'
        }

    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    const magneto: Villian = new Villian('Magneto', 'Magnus')
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutant) => {
        // console.log(character.realname);
    }

    printName(magneto)

})()