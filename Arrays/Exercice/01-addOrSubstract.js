function addOrSubstract(arr) {
   let firstSum = 0
   for (const element of arr){
       firstSum += element
   }
   
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]

        if (element % 2 === 0) {
            arr[i] += i
        } else {
            arr[i] -= i
        }
        
        }
        let secondSum = 0
        for (const element of arr){
            secondSum += element
    }
    console.log(arr)
    console.log(firstSum)
    console.log(secondSum)
}
addOrSubstract([-5, 11, 3, 0, 2])