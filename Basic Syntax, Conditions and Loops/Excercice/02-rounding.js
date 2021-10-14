function rounding(num, roundTo) {
    num = Number(num)
    roundTo = Number(roundTo)
    if (roundTo < 15) {
        console.log(parseFloat(num.toFixed(roundTo)))
    }
    else if (roundTo >= 15){
        console.log(parseFloat(num.toFixed(15)))
    }
}
rounding(10.5, 0)