function smallestOfThree(x1, x2, x3) {
    x1 = Number(x1)
    x2 = Number(x2)
    x3 = Number(x3)

    let smallest = Number.MAX_SAFE_INTEGER
    smallest = smaller(x1, smallest)
    smallest = smaller(x2, smallest)
    smallest = smaller(x3, smallest)

    function smaller(n, small) {
        if (n < small) {
            small = n
        }
        return small
    }
    return smallest

}

console.log(smallestOfThree(25, 21, 4))