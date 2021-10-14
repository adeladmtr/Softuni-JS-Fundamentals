function firstAndLastK (arr){
    let k = Number(arr[0])
    
    let sliced1 = arr.slice(1, k+1).join(' ')
    let sliced2 = arr.slice(-k).join(' ')

    console.log(sliced1);
    console.log(sliced2);

    
}
firstAndLastK ([3,
    6, 7, 8, 9])