function inRange(a, b) {
    //transforming symbols in ASCII codes 
    //print on one line all symbols between the two arguments

    let codeA = a.charCodeAt(0)
    let codeB = b.charCodeAt(0)
    let start = codeA < codeB ? codeA : codeB
    let end = codeA > codeB ? codeA : codeB
    let line = ''

    for (let i = start + 1; i < end; i++) {
       line += String.fromCharCode(i) + ' '
    }

    return line
}

console.log(inRange('C', '#'))