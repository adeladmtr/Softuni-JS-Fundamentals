function computerStore(arr) {

    let totalPrice = 0
    let customer = ''
    for (const current of arr) {
        if (current === 'special' || current === 'regular') {
            customer = current
            break
        }
        let currentPrice = Number(current)
        if (currentPrice <= 0) {
            console.log('Invalid price!')
            continue
        }
        totalPrice += currentPrice
    }
    if (totalPrice == 0) {
        console.log('Invalid order!')
    } else {
        let tax = 0.20 * totalPrice
        let taxPrice = tax + totalPrice
        if (customer == 'special') {
            let discountPrice = 0.9 * taxPrice
            console.log("Congratulations you've just bought a new computer!")
            console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
            console.log(`Taxes: ${tax.toFixed(2)}$`)
            console.log('-----------')
            console.log(`Total price: ${(discountPrice).toFixed(2)}$`)
        } else {
            console.log("Congratulations you've just bought a new computer!")
            console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
            console.log(`Taxes: ${tax.toFixed(2)}$`)
            console.log('-----------')
            console.log(`Total price: ${(taxPrice).toFixed(2)}$`)

        }


    }


}

computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]
    
    
    
)