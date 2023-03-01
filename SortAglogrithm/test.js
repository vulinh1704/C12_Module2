// function selectionSort(arr: number[]) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         // Dùng một biến để lưu trữ chỉ số của phần tử nhỏ nhất
//         let min_pos = i;
//         //Duyệt tất cả phần sau phần tử sau phần tử hiện tại và cập nhật phần tử nhỏ nhất
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min_pos]) {
//                 min_pos = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min_pos];
//         arr[min_pos] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort([1,3,8,4,9,5,3]))
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        // lấy ra phần tử ở vị trí i
        var x = arr[i];
        var pos = i - 1;
        while (pos >= 0 && x < arr[pos]) {
            arr[pos + 1] = arr[pos];
            pos--;
        }
        arr[pos + 1] = x;
    }
    return arr;
}
// console.log(bubbleSort([5,7,2,9,1,3]))
console.log(insertSort([5, 7, 2, 9, 1, 3]));
