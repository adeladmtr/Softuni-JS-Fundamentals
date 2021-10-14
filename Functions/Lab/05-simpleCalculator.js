function simpleCalculator(n1, n2, operator) {
    n1 = Number(n1)
    n2 = Number(n2)
    let result = 0
    switch (operator) {
        case "multiply":
            result = n1 * n2

            break
        case 'divide':
            result = n1 / n2
            break
        case 'add':
            result = n1 + n2
            break
        case 'subtract':
            result = n1 - n2
            break

    }
    return result
}
simpleCalculator(5, 5, 'multiply')