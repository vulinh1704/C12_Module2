// class Nodee<T> {
//     data: T;
//     next: Nodee<T> | null = null;
//
//     constructor(data: T) {
//         this.data = data;
//     }
//
// }
//
// class LinkedList<T> {
//     head: Nodee<T> | null;
//     tail: Nodee<T> | null;
//     size: number;
//
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
//
//     insertFirstNode(data: T) {
//         let node = new Nodee(data);
//         node.next = this.head;
//         this.head = node;
//         if (!this.tail) {
//             this.tail = node;
//         }
//         this.size++
//     }
//
//     display() {
//         let currentNode = this.head;
//         while (currentNode != null) {
//             console.log(currentNode.data + '\t');
//             currentNode = currentNode.next;
//         }
//     }
//
//     insetLastNode(data: T) {
//         if (!this.head) {
//             this.insertFirstNode(data)
//         } else {
//             if (this.tail) {
//                 let node = new Nodee(data);
//                 this.tail.next = node;
//                 this.tail = node;
//                 this.size++;
//             }
//         }
//     }
//
//
//     search(data: T) {
//         if (this.size) {
//             let currentNode = this.head;
//             while (currentNode != null) {
//                 if(currentNode.data == data) {
//                     return data;
//                 }
//                 currentNode = currentNode.next;
//             }
//         }
//         return null;
//     }
//
//
// }
//
//
// let linkedList: LinkedList<number> = new LinkedList();
// linkedList.insertFirstNode(3);
// linkedList.insertFirstNode(5);
// linkedList.insetLastNode(8);
// linkedList.display()
// console.log(linkedList.search(5))