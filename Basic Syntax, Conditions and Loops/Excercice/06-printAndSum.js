function printAndSum(a, b) {
    a = Number(a)
    b = Number(b)
    let toString = ''
    let sum = 0
    for (let i = a; i <= b; i++) { 
        sum += i
        toString += i + ' '
        
    }
    console.log(toString)
    console.log(`Sum: ${sum}`)
}
printAndSum (50, 60)