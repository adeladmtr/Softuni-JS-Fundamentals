function sumFirstLast(arr) {
    let result = 0
    let first = Number(arr[0])
    let last = Number(arr[arr.length - 1])
    result = first + last
    return result
}
console.log(sumFirstLast(['5', '10']))