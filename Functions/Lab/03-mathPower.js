function power(n1, n2) {
    let result = 1
    for (let i = 0; i < n2; i++) {
        result = result * n1
    }
    console.log(result)
}
power(2, 8)
power(3, 4)
power(3, 3)