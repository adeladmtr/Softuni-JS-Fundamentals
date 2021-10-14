function dungeonDark(text) {
    let arrayOfText = [text]
    let rooms = arrayOfText[0].split("|")
    let health = 100
    let coins = 0
    let isDead = false

    for (let i = 0; i < rooms.length; i++) {
        //work with current room and turn into array of 2 elements
        let stringOfCurrent = rooms[i]
        let arrayOfCurrent = [stringOfCurrent]
        let current = arrayOfCurrent[0].split(" ")
        //for the new array switch first element: potion/chest/monster
        while (health > 0) {
            let damage = 0
            let heal = 0
            let roomCount = 0
            switch (current[0]) {
                case "potion":
                    heal += Number(current[1])
                    if (heal + health > 100) {
                        console.log(`You healed for ${health - heal} hp.`)
                        console.log(`Current health: ${health}`)
                    } else {
                        console.log(`You healed for ${heal} hp.`)
                        console.log(`Current health: ${heal + health}`)
                    }
                    roomCount++
                    break
                case "chest":
                    coins = Number(current[1])
                    console.log(`You found ${coins} coins.`)
                    coins += coins
                    roomCount++
                    break

                default:
                    damage = Number(current[1])
                    if (damage < health) {
                        console.log(`You slayed ${current[0]}.`)
                        health -= damage
                    } else {
                        health -= damage
                        isDead = true
                        console.log(`You died! Killed by ${current[0]}`)
                        console.log(`Best room: ${i + 1}`)
                    }
            }
            break
        } 
        }

    }
}
dungeonDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')