function wrongResult(n1, n2, n3) {
    // n1 = Number(n1)
    // n2 = Number(n2)
    // n3 = Number(n3)
    // let result = ''

    // if (n1 >= 0 && n2 >= 0 && n3 >= 0) {
    //     result = 'Positive'
    // } else if (n1 < 0 && n2 < 0 && n3 < 0) {
    //     result = 'Negative'
    // } else if (n1 >= 0) {
    //     if 

    // } else if (n1 < 0) {

    // }

    let arrOfNum = [n1, n2, n3]
    let isPositive = true
    let result = ''

    for (let i = 0; i < arrOfNum.length; i++){
        let current = Number(arrOfNum[i])
        let next = Number(arrOfNum[i+1])
        if (current >= 0 && next >= 0){
            isPositive
            break
        } else if (current < 0 && next <0){
            isPositive
            break
        } else {
            isPositive = false
        }
    }
    if (isPositive){
        result = 'Positive'
    } else result = 'Negative'
    console.log(result);
}
wrongResult(5, 12, -15)