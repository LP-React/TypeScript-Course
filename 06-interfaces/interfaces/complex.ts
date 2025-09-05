(() => {

    interface Client {
        name: string,
        age?: number,
        address?: Address,
        getFullAddress(id: string): string
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'Ky2',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return id
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 123,
            zip: 'Hy2',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.name
        }
    }


})()