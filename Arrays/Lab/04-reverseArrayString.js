function reverseArrayString(input) {
    let lastIndex = input.length - 1
    for (let i = 0; i < input.length / 2; i++) {
        let temp = input[i]
        input[i] = input[lastIndex - i]
        input[lastIndex - i] = temp
    }
    console.log(input.join(' '))
}
reverseArrayString (['abc', 'def', 'hig', 'klm', 'nop'])