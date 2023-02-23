// let map = new Map<number, any>();
// map.set(1, 'Ning');
// map.set(2, 'Meo meo');
// // console.log(map.values())
//
// // key: 1 - value: 'Ning'
// // for (const element of map) {
// //     console.log(element)
// //     // console.log(`key: ${element[0]}- value: ${element[1]}`)
// // }
// console.log(map.entries())


class TreeNode<T> {
    data: T;
    leftNode: TreeNode<T> | null;
    rightNode: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }

    search(root: TreeNode<T>, data: T): TreeNode<T> | null {
        let current = root;
        if (data === current.data) {
            return current;
        }
        while (data !== current.data) {  //110 vs 60  | 110 vs 100
            if (current.data < data) { // 60 < 110; | 100 < 110
                current = current.rightNode; // node(100)
            } else {
                current = current.leftNode;
            }
        }
       return current;
    }
}

let root = new TreeNode(60);
root.rightNode = new TreeNode(100);
root.leftNode = new TreeNode(55);
console.log(root.search(root, 55));
