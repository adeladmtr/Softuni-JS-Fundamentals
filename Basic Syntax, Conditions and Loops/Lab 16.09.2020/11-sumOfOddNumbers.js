function sumOfOdds(n) {
    n = Number(n)
    let sum = 0
    let current = 1
    let i = 0
    while (i < n) {
        console.log(current)
        sum = sum + current
        current += 2
        i++
    }
    console.log (`Sum: ${sum}`)

}
sumOfOdds(3)