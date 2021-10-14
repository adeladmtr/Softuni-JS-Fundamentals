function towns(arr) {

    for (const line of arr) {
        let [town, lattitude, longitude] = line.split(' | ')
        let obj ={
            town, 
            latitude: Number(lattitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(obj);
    }
}

towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)