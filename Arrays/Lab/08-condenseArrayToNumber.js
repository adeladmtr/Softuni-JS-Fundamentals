function condenseToNumber(arr) {
    let newArray = []
    while (arr.length > 1){
        let newArray = []
        newArray.length = arr.length - 1
        for (let i = 0; i < arr.length; i++){
            arr[i] = Number(arr[i])
            newArray[i] = arr[i] + arr[i+1]
        }
        arr = newArray
    } console.log(arr)
    
}
condenseToNumber([2, 3, 4])