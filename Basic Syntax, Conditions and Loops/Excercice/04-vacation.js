function vacation(groupVolume, typeOfGroup, dayOfWeek) {
    groupVolume = Number(groupVolume)
    let pricePerPerson = 0
    let totalPrice = 0
    switch (typeOfGroup) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 8.45
                    break
                case "Saturday":
                    pricePerPerson = 9.80
                    break
                case "Sunday":
                    pricePerPerson = 10.46
                    break
            }
            if (groupVolume >= 30) {
                totalPrice = pricePerPerson * groupVolume * 0.85
            } else totalPrice = pricePerPerson * groupVolume
            break
        case "Business":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 10.90
                    break
                case "Saturday":
                    pricePerPerson = 15.60
                    break
                case "Sunday":
                    pricePerPerson = 16
                    break
            } if (groupVolume >= 100) {
                totalPrice = (groupVolume - 10) * pricePerPerson
            } else totalPrice = groupVolume * pricePerPerson
            break
        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    pricePerPerson = 15
                    break
                case "Saturday":
                    pricePerPerson = 20
                    break
                case "Sunday":
                    pricePerPerson = 22.50
                    break
            } if (groupVolume >= 10 && groupVolume <= 20) {
                totalPrice = groupVolume * pricePerPerson * 0.95
            } else totalPrice = groupVolume * pricePerPerson
            break
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    
)