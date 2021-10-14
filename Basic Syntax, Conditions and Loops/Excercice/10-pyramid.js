function pyramid(base, increment) {
    base = Number(base)
    increment = Number(increment)
    let heigth = 0
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let bulkSurface = 0
    let stoneSurface = 0
    let counter = 0

    for (let i = base; i >= 1 || i >= 2; i -= 2) {
        counter++
        heigth = counter * increment

        if (i !== 1 && i != 2) {
            bulkSurface = (i - 2)
            stoneSurface = bulkSurface * bulkSurface * increment
            stone += stoneSurface

            if (counter % 5 !== 0) {

                let marbleSurface = ((i * 4) - 4) * increment
                marble += marbleSurface
            } else {

                let lapisSurface = ((i * 4) - 4) * increment
                lapis += lapisSurface
            }
        } else {

            gold = i * i
            break
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(heigth)}`)
}
pyramid(23, 0.5)