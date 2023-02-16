class Address {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class Person {
    private _address : Address; // has - a
    private _name: string;

    constructor(address: Address, name: string) {
        this._address = address;
        this._name = name;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let address: Address = new Address(1, 'Hà Nội')
let person: Person = new Person(address , 'Ning');
console.log(person.address.name, person.name)

let arr: Array<number> = new Array()