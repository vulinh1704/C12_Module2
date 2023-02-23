interface IArrayList<T> {
    add(t: T): void;
    getAll(): T[];
    get(index: number): T;
    clear(): void;
}

class ArrayList<T> implements IArrayList<T> {
    list: T[];

    constructor() {
        this.list = []
    }

    add(t: T): void {
        this.list.push(t)
    }

    clear(): void {
        this.list = [];
    }

    get(index: number): T {
        return this.list[index];
    }

    getAll(): T[] {
        return this.list;
    }

}

let arrayList = new ArrayList<number>();
arrayList.add(1);
arrayList.add(2);
arrayList.add(3);
console.log(arrayList.getAll());
console.log(arrayList.get(0));
