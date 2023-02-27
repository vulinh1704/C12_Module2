// 2 2 | N S
// X Y Z = S; 0 <= X , y, Z <= N


function test(N, S) {
    let arr = []
    for (let i = 0; i <= N; i++) {
        let X = i;
        for (let j = 0; j <= N; j++) {
            let Y = j;
            let Z = S - X - Y;
            if (X >= 0 && Y >= 0 && Z >= 0 && X <= N && Y <= N && Z <= N) arr.push([X, Y, Z])
        }
    }
    return arr.length;
}


//5
//1 2 4 3 3

function test2(cake, group) {
    let arr = [];
    let cakeMin = 0;
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
            if(group[i] === 4) {
                cakeMin ++;
                break;
            }
        }
    }
    console.log(cakeMin)
}

test2(5, [2, 2, 4, 3, 3])
