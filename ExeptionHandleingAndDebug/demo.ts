// function tong(n: number) {
//     if(n == 1) {
//         return 1
//     }
//     return n + tong(n - 1);
// }
//
// function tich(n: number) {
//     if(n == 0) {
//         return 1;
//     }
//     return n + tich(n - 1);
// }
//
// function fib (n: number): any {
//     if(n <= 1) return n;
//     else return (fib(n - 1) + fib(n - 2));
// }
function pow(a: number, b: number): number {
    if (b == 0) return 1;
    let x: number = pow(a, Math.floor(b / 2))
    if (b % 2 == 1) return a * x * x;
    else return x * x;
}

function count(n: number): number {
    if(n < 10) return 1;
    return 1 + count(Math.floor(n / 10))
}

console.log(count(13425))