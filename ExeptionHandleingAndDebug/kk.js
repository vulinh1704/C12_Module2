function isNum(number) {
    console.log(number , 2)
    if(number > 1) {
        throw EvalError('Meo meo')
    }
    return true;
}

try {
    console.log(isNum(5))
} catch (err) {
    console.log(err)
} finally {
    console.log('Đóng kết nối tới dữ liệu')
}
