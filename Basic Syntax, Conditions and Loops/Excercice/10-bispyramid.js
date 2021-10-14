function solve(baseWidth, incr) {
    let height = 0
    let stone = 0
    let marble = 0
    let lapisLazuli = 0
    let gold = 0
    let stoneWidth = 0
    let stoneArea = 0
    let counter = 0
 
    for (let i = baseWidth; i >= 1 || i >= 2; i -= 2) {
        counter++
        height = counter * incr
 
        if (i !== 1 && i !== 2) {
            stoneWidth = (i - 2)
            stoneArea = (stoneWidth * stoneWidth) * incr
            stone += stoneArea
 
            if (counter % 5 !== 0) {
                let marbleCurr = ((i * 4) - 4) * incr
                marble += marbleCurr
            } else {
                let lapisLazuliCurr = ((i * 4) - 4) * incr
                lapisLazuli += lapisLazuliCurr
            }
        } else {
            gold = i * i
            break
        }
    }
 
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

solve(11,1)