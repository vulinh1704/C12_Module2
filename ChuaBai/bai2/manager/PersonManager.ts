import {Person} from "../model/Person";
import {IManager} from "./IManager";

export class PersonManager implements IManager<Person> {
    private people: Map<number, Person>

    constructor() {
        this.people = new Map<number, Person>();
    }

    add(t: Person): void {
        this.people.set(t.id, t);
    }

    findAll(): Person[] {
        return Array.from(this.people.values())
    }

    findById(id: number): Person | null {
        return this.people.get(id);
    }

    remove(id: number): void {
        this.people.delete(id);
    }

}