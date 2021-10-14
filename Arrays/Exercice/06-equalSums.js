function equalSums(arr) {

    let isIndex = false

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rigthSum = 0
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j]
            }
        }

        if (i !== arr.length - 1) {
            for (let k = i + 1; k < arr.length; k++) {
                rigthSum += arr[k]
            }
        }

        if (leftSum === rigthSum) {
            isIndex = true
            console.log(i)
        }
    }

    if (!isIndex) {
        console.log('no')
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])