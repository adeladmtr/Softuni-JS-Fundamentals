function oddOccurrences(input) {
    let arr = input.split(' ')

    let occurrences = new Map()

    for (let word of arr) {
        word = word.toLowerCase()
        if (!occurrences.has(word)) {
            occurrences.set(word, 0)

        }
        let newVal = occurrences.get(word) + 1
        occurrences.set(word, newVal)
    }

    return Array.from(occurrences.keys())
        .filter(x => occurrences.get(x) % 2 !== 0)
        .join(' ')

}

console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))