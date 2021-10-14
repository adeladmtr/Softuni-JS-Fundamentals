function evenOddSubstraction (input){
    let result = 0
    for (let i = 0; i < input.length; i++){
        input[i] = Number(input[i])
        let sumEven = 0
        let sumOdd = 0

        for (let num of input){
            if (num % 2 === 0){
                sumEven += num
            } else if (num % 2 != 0){
                sumOdd += num
            }
            result = sumEven - sumOdd
        }
        
    }
    console.log(result)
}
evenOddSubstraction ([2,4,6,8,10])