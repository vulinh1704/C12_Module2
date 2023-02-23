// let map = new Map<string, number>();
// map.set('Linh' , 1223)
// map.set('Linh1', 233)
//
// // for (const aElement of map) {
// //     console.log(aElement)
// // }
//
// // console.log(map.get('Linh2'))
// // console.log(map.keys())
// console.log(map.delete('Linh1'))
//
// console.log(map.values())

import {Stats} from "fs";

class TreeNode<T> {
    data: T;
    static root: any = null;
    leftNode ?: TreeNode<T>;
    rightNode ?: TreeNode<T>;

    constructor(data: T) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }

    search(data: T): any {
        if (!TreeNode.root) return null;
        let currentNode = TreeNode.root;
        while (currentNode.data !== data) {
            if (currentNode.data > data) {
                if (!currentNode.rightNode) return null;
                currentNode = currentNode.rightNode;
            } else {
                if (!currentNode.leftNode) return null;
                currentNode = currentNode.leftNode;
            }
        }
        return currentNode;
    }
}

const tree = new TreeNode<number>(60);
TreeNode.root = tree;
tree.leftNode = new TreeNode<number>(55);
tree.rightNode = new TreeNode<number>(100);
console.log(tree.search(30))




