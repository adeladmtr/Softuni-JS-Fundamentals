function maxSequence(arr) {

    let sequence = []

    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [arr[i]]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[j])
            } else {
                break
            }
        }

        if (sequence.length < currentSequence.length) {
            sequence = currentSequence
        }
    }
    console.log(sequence.join(' '))
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])