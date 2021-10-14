function processOdd(arr) {
    let oddPositions = arr.filter(x => x % 2 != 0 && x != 0)
    let doubled = oddPositions.map(x => Number(x)*2)
    console.log(oddPositions);
    console.log(doubled.reverse());
}

processOdd([3, 0, 10, 4, 7, 3])