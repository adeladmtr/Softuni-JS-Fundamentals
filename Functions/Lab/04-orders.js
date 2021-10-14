function orders(item, quantity) {
    quantity = Number(quantity)
    let price = 0
    switch (item) {
        case 'coffee':
            price = quantity * 1.50
            break
        case 'water':
            price = quantity * 1.00
            break
        case 'coke':
            price = quantity * 1.40
            break
        case 'snacks':
            price = quantity * 2.00
            break
    }
    return price.toFixed(2)
}

orders('water', 5)
orders('coffee', 2)