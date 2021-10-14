function arrayRotation(arr, n) {

    for (let i = 0; i < n; i++) {
            const element = arr.shift()
            arr.push(element)
        }
    console.log(arr.join(' '))
}
arrayRotation([2, 4, 15, 31], 5)