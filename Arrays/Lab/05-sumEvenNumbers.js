function sumEvenNumbers(input) {
    let result = 0
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i])
        let sum = 0
        for (let num of input) {
            if (num % 2 === 0) {
                sum += num
            }
        }
        result = sum
    } console.log(result)
}
sumEvenNumbers(['2','4','6','8','10'])
