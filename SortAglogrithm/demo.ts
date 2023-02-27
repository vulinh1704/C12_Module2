let arr = [3, 6, 7, 1, 0, 5, 2];

function selectionSort(arr: any) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort(arr));