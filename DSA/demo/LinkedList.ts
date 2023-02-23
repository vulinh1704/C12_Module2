class Nodee<T> {
    data: T;
    next: Nodee<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Nodee<T> | null;
    tail: Nodee<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data: T) {
        let node = new Nodee<T>(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++
    }

    showAll() {
        if (this.head) {
            let currentNode: Nodee<T> | null = this.head;
            while (currentNode !== null) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }

    insertLast(data: T) {
        if (this.tail) {
            let node = new Nodee(data)
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

}

let linkedList = new LinkedList<number>();
linkedList.insertFirst(4);
linkedList.insertFirst(5);
linkedList.insertFirst(6);
linkedList.insertLast(10);
linkedList.showAll()