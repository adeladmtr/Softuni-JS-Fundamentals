function loot(arr) {
    let chest = arr.shift().split('|')
    let step = arr.shift()

    function isInChest(item, input) {
        if (input.includes(item)){
            return true
        } else return false;
     }
    function isValidIndex(index, input) {
        if (index >= 0 && index <= input.length) {
            return true
        } else return false
    }

    while (step !== 'Yohoho!') {
        let currentStep = step.split(' ')
        switch (currentStep[0]) {
            case 'Loot':
                for (let i = 1; i < currentStep.length; i++) {
                    let currentItem = currentStep[i]
                    if (isInChest(currentItem, chest) == true) {
                        continue
                    } else chest.unshift(currentItem)
                }
                break
            case 'Drop':
                let newIndex = currentStep[1]
                if (isValidIndex(newIndex, chest)) {
                    let newLoot = chest[newIndex]
                    chest.splice(Number(newIndex), 1)
                    chest.push(newLoot)
                }
                break

            case 'Steal':
                let stolenItems = []
                let stealCount = Number(currentStep[1])
                if (stealCount <= chest.length) {
                    stolenItems = chest.slice(-stealCount)
                    console.log(stolenItems.join(', '));
                } else stealCount = chest.length
                stolenItems = chest.slice(-stealCount)
                break
        }
        step = arr.shift()
    }
    console.log(chest);
    if (chest.length <= 0) {
        console.log('Failed treasure hunt.');
    } else {
        let countChest = chest.map(x => x.length)
        let sum = 0
        for (let i = 0; i < countChest.length; i++) {
            sum += countChest[i]
        }
        let average = (sum / chest.length)
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}


loot(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])


