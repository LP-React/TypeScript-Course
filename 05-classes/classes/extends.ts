(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor called');
        }

        protected getFullname() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            // console.log('Contructor xmen llamado')
        }

        get fullname() {
            return `${this.name} - ${this.realName}`
        }

        set fullname(name: string) {
            this.name = name
        }

        getFullnameDesdeXmen() {
            // console.log(super.getFullname());
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    // wolverine.getFullnameDesdeXmen()

    wolverine.fullname = 'Fernando'

    // console.log(wolverine.fullname)


})()