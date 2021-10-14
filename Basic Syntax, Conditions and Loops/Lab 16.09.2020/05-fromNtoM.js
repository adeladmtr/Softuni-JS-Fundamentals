function fromNtoM(n, m) {
    n = Number(n)
    m = Number(m)
    for (let i = n; i >= m; i--) {
        console.log(i)
    }
}
fromNtoM(4, 1)