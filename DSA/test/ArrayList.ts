import {IArrayList} from "./IArrayList";

export class ArrayList<T> implements IArrayList<T> {
    private elements: T[] = [];
    add(t: T): void {
        this.elements.push(t)
    }

    get(index: number) {
        return this.elements[index];
    }

    remove(): void {
        this.elements = [];
    }

    getSize() {

    }

}