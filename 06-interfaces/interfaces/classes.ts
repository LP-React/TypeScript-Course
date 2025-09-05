(() => {

    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number = 2;
        public name: string = 'Laysson';
        public realName: string = 'Dev';
        public mutantPower(id: number): string {
            return this.name + ' ' + this.realName
        }
    }

})()