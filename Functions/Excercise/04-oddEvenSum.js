function oddEvenSum(num) {
    let arr = String(num).split('')
    let sumEven = 0
    let sumOdd = 0
    for (let i = 0; i < arr.length; i++) {
        const currentNum = Number(arr[i])
        if (currentNum % 2 == 0) {
            sumEven += currentNum
        } else sumOdd += currentNum
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`

}

console.log(oddEvenSum(1000435))