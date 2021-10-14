function pirates(days, dailyPlunder, targetPlunder) {
    let totalPlunder = 0
    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            totalPlunder += 1.5 * dailyPlunder
            totalPlunder = totalPlunder - 0.3 * totalPlunder
        } else if (i % 3 === 0) {
            totalPlunder += 1.5 * dailyPlunder
        } else if (i % 5 === 0) {
            totalPlunder += dailyPlunder
            totalPlunder = totalPlunder - 0.3 * totalPlunder
        } else totalPlunder += dailyPlunder


    }
    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / targetPlunder * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

pirates(15, 20, 380)