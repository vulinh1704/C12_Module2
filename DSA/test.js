let name = ['ball', 'box', 'ball', 'ball', 'box']
let price = [2, 2, 2, 2, 2]
let weight = [1, 2, 1, 1, 3];
let arr = []
for (let i = 0; i < name.length; i++) {
    let str = name[i] + price[i] + weight[i];
    arr.push(str);
}

let count = 0;
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            count++
        }
    }
}
console.log(count - 1)