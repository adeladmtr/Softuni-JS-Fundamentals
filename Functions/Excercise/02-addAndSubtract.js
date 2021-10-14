function addAndSubtract(x, y, z) {
    x = Number(x)
    y = Number(y)
    z = Number(z)

    let sumResult = sum(x, y)


    function sum(a, b) {
        return a + b
    }
    function sub(c, d){
        return c - d
    }

    let result = sub(sumResult, z)
    return result
}
console.log(addAndSubtract(42, 58, 100))