
interface IQueue<T> {
    enqueue(t: T): void;

    dequeue(): T | undefined;

    size(): number;
}

class Queue<T> implements IQueue<T> {
    private elements: T[] = [];

    dequeue(): T | undefined {
        return this.elements.shift();
    }

    enqueue(t: T): void {
        this.elements.push(t);
    }

    size(): number {
        return this.elements.length;
    }
}

let queue: Queue<number> = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());//1
console.log(queue.size()); //2
