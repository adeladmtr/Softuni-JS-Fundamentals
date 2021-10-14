function commonElements(arr1, arr2) {

    for (let i1 = 0; i1 < arr1.length; i1++) {
        let element1 = arr1[i1]
        for (let i2 = 0; i2 < arr2.length; i2++) {
            let element2 = arr2[i2]
            if (element2 === element1){
                console.log(element2)
            }
        }
    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']
)