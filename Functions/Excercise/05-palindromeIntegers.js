function palindromeIntegers(arr) {
    let result = ''
    for (let num of arr) {
        let isPolindrome = 'true'
        num = String(num)
        let mid = parseInt(num.length / 2)
        for (let i = 0; i <= mid; i++) {
            let lastIndex = num.length - 1
            if (num[i] !== num[lastIndex - i]) {
                isPolindrome = 'false'
                break
            }
        }
        result += isPolindrome + '\n'
    }
    return result
}

console.log(palindromeIntegers([32,2,232,1010]))